function Get-PluginDynamicTcpRange {
    $netsh = Join-Path $env:SystemRoot 'System32/netsh.exe'
    $result = @(& $netsh interface ipv4 show dynamicport tcp 2>$null)
    if ($LASTEXITCODE -ne 0) { return $null }
    $values = @($result | ForEach-Object { if ($_ -match ':\s*(\d+)\s*$') { [int]$Matches[1] } })
    if ($values.Count -ge 2 -and $values[1] -gt 0) {
        return @{ First = $values[0]; Last = $values[0] + $values[1] - 1 }
    }
}

function Get-PluginPortConflict {
    param([int]$Port, [int]$AuxiliaryPorts = 0, [hashtable]$DynamicRange)
    foreach ($member in ($Port - $AuxiliaryPorts)..$Port) {
        if ($member -lt 1 -or $member -gt 65535) { return "端口 $member 超出有效范围" }
        if ($DynamicRange -and $member -ge $DynamicRange.First -and $member -le $DynamicRange.Last) {
            return "端口 $member 位于 Windows TCP 动态分配范围"
        }
        $listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Loopback, $member)
        try {
            $listener.ExclusiveAddressUse = $true
            $listener.Start()
        } catch {
            $socketError = $_.Exception.GetBaseException()
            return "端口 $member 无法绑定：$($socketError.Message)"
        } finally {
            $listener.Stop()
        }
    }
}

function Resolve-PluginWebPort {
    param([int]$PreferredPort, [int]$AuxiliaryPorts = 0, [switch]$Fixed, [int]$SkipPort, [int]$PlannedPort)
    $dynamic = if (-not $Fixed) { Get-PluginDynamicTcpRange }
    $candidates = if ($Fixed) {
        @($PreferredPort)
    } else {
        @($PlannedPort, $PreferredPort) + @((28780 + $AuxiliaryPorts)..28799) |
            Where-Object { ($_ - $AuxiliaryPorts) -ge 28700 -and $_ -le 28799 -and ($_ -lt 28780 -or ($_ - $AuxiliaryPorts) -ge 28780) } |
            Select-Object -Unique
    }
    foreach ($candidate in $candidates) {
        if ($candidate -eq $SkipPort) { continue }
        $conflict = Get-PluginPortConflict -Port $candidate -AuxiliaryPorts $AuxiliaryPorts -DynamicRange $dynamic
        if (-not $conflict) { return $candidate }
        if ($candidate -eq $PreferredPort) { Write-Host "[端口] $conflict" -ForegroundColor Yellow }
    }
}

function Show-PluginWebPort {
    param([int]$PreferredPort, [int]$AuxiliaryPorts = 0, [switch]$Fixed)
    $fromMenu = $env:TOOLORBIT_PLANNED_PLUGIN_PORT -as [int]
    if ($fromMenu -ne $PreferredPort -and ($fromMenu -lt (28780 + $AuxiliaryPorts) -or $fromMenu -gt 28799)) {
        $fromMenu = 0
    }
    $chosen = Resolve-PluginWebPort -PreferredPort $PreferredPort -PlannedPort $fromMenu -AuxiliaryPorts $AuxiliaryPorts -Fixed:$Fixed
    if ($null -ne $chosen) { Write-Host "[端口] 预选 127.0.0.1:$chosen，启动前会复检。" }
    elseif ($Fixed) { Write-Host '[端口] 指定端口当前不可用。' -ForegroundColor Yellow }
    else { Write-Host '[端口] 首选及备用端口 28780–28799 当前均不可用。' -ForegroundColor Yellow }
    return $chosen
}

function Invoke-PluginWebStart {
    param([int]$PreferredPort, [int]$PlannedPort, [int]$AuxiliaryPorts = 0, [switch]$Fixed, [scriptblock]$Start)
    if ($env:TOOLORBIT_MANAGED_PLUGIN -eq '1' -or $env:TOOLORBIT_WEB_LAUNCH_OWNER -eq [string]$PID) {
        return Invoke-PluginPortAttempt @PSBoundParameters
    }

    . (Join-Path $PSScriptRoot 'PluginPortJob.ps1')
    Initialize-PluginPortJobType
    $jobName = Get-PluginPortJobName
    $mutex = [Threading.Mutex]::new($false, "$jobName-start")
    $acquired = $false
    $previousOwner = $env:TOOLORBIT_WEB_LAUNCH_OWNER
    try {
        try { $acquired = $mutex.WaitOne(0) }
        catch [Threading.AbandonedMutexException] { $acquired = $true }
        if (-not $acquired) {
            $listener = Get-PluginJobListener -JobName $jobName -Port $(if ($Fixed) { $PreferredPort } else { 0 })
            if ($listener) {
                Write-Host "[启动] 本插件实例已监听 http://127.0.0.1:$($listener.LocalPort)/"
                return 0
            }
            Write-Host '[启动] 本插件已有启动或运行中的实例，请查看原窗口。' -ForegroundColor Yellow
            return 1
        }
        [ToolOrbitPluginPortJob]::Attach($jobName)
        $env:TOOLORBIT_WEB_LAUNCH_OWNER = [string]$PID
        return Invoke-PluginPortAttempt @PSBoundParameters
    } finally {
        $env:TOOLORBIT_WEB_LAUNCH_OWNER = $previousOwner
        if ($acquired) { $mutex.ReleaseMutex() }
        $mutex.Dispose()
    }
}

function Invoke-PluginPortAttempt {
    param([int]$PreferredPort, [int]$PlannedPort, [int]$AuxiliaryPorts = 0, [switch]$Fixed, [scriptblock]$Start)
    $port = Resolve-PluginWebPort -PreferredPort $PreferredPort -PlannedPort $PlannedPort -AuxiliaryPorts $AuxiliaryPorts -Fixed:$Fixed
    if ($null -eq $port) {
        Write-Host '[端口] 启动前复检失败，找不到可用端口。' -ForegroundColor Red
        return 98
    }
    if ($port -ne $PlannedPort) { Write-Host "[端口] 预选端口 $PlannedPort 不可用，切换至 $port。" }
    Write-Host "[启动] 监听 127.0.0.1:$port，实际就绪以应用输出为准。"
    $code = & $Start $port
    if (-not $Fixed -and $code -ne 0 -and ($code -eq 98 -or (Get-PluginPortConflict -Port $port -AuxiliaryPorts $AuxiliaryPorts))) {
        $next = Resolve-PluginWebPort -PreferredPort $PreferredPort -AuxiliaryPorts $AuxiliaryPorts -SkipPort $port
        if ($null -ne $next) {
            Write-Host "[端口] 绑定冲突，切换至 127.0.0.1:$next 后重试。"
            return (& $Start $next)
        }
    }
    return $code
}
