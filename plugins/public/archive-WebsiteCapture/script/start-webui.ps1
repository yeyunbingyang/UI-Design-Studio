param([ValidateSet('127.0.0.1')][string]$HostAddress = '127.0.0.1', [int]$Port = 28700)

$ErrorActionPreference = 'Stop'
try {
    . (Join-Path $PSScriptRoot 'OperationLog.ps1')
    Set-PluginOutputEncoding
    . (Join-Path $PSScriptRoot 'ProjectActions.ps1')
    . (Join-Path $PSScriptRoot 'PluginWebPort.ps1')
    if (-not $PSBoundParameters.ContainsKey('Port')) { $Port = 28717 }
    Remove-ProjectOrphan
    $fixedPort = $PSBoundParameters.ContainsKey('Port')
    $plannedPort = Show-PluginWebPort -PreferredPort $Port -Fixed:$fixedPort
    if ($null -eq $plannedPort) { exit 98 }
    $id = Split-Path -Leaf $projectRoot
    if ($MyInvocation.MyCommand.Name -eq 'start-webui.ps1') {
        Write-Host "[启动] $id · WebUI · 工作目录 $projectRoot · 预选 ${HostAddress}:$plannedPort"
    } else {
        Write-Host "[启动] $id · 本机应用 · 工作目录 $projectRoot"
    }
    $check = Join-Path $PSScriptRoot 'check-env.ps1'
    $install = Join-Path $PSScriptRoot 'install-env.ps1'
    $installed = $false
    & $check
    $checkCode = $LASTEXITCODE
    while ($true) {
        if ($checkCode -eq 10 -and -not $installed) {
            Write-Host '[启动] 环境有缺项，先执行自动补装和复检。'
            & $install
            $checkCode = $LASTEXITCODE
            if ($checkCode -ne 0) { exit $checkCode }
            $installed = $true
            & $check
            $checkCode = $LASTEXITCODE
        }
        if ($checkCode -ne 0) {
            Write-Host "[启动] 环境检查未通过，退出码 $checkCode。"
            exit $checkCode
        }
        try {
            Write-Host '[启动] 正在运行应用。'
            $appCode = Invoke-PluginWebStart -PreferredPort $Port -PlannedPort $plannedPort -Fixed:$fixedPort -Start {
                param($selectedPort)
                Start-ProjectApplication -HostAddress $HostAddress -Port $selectedPort
            }
        } catch {
            Write-Error $_ -ErrorAction Continue
            $appCode = Get-PluginFailureCode -Failure $_
        }
        if ($appCode -eq 98) { exit $appCode }
        if ($appCode -eq 0) {
            Write-Host '[退出] 应用正常退出，退出码 0。'
            exit 0
        }
        if ($appCode -eq -1073741510) {
            Write-Host '[退出] 应用已中断。'
            exit $appCode
        }
        Write-Host "[退出] 应用执行失败，退出码 $appCode。"
        if ($installed) { exit $appCode }
        Write-Host '[检查] 应用异常退出，正在复查环境。'
        & $check
        $checkCode = $LASTEXITCODE
        if ($checkCode -ne 10) { exit $appCode }
    }
} catch {
    Write-Error $_ -ErrorAction Continue
    exit (Get-PluginFailureCode -Failure $_)
}
