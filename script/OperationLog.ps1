function Set-PluginOutputEncoding {
    [Console]::OutputEncoding = [Text.UTF8Encoding]::new($false)
}

function Assert-PluginCommandSucceeded {
    param([int]$ExitCode, [string]$Stage)

    if ($ExitCode -ne 0) {
        $failure = [InvalidOperationException]::new("$Stage 失败，退出码 $ExitCode。")
        $failure.Data['PluginExitCode'] = $ExitCode
        throw $failure
    }
}

function Get-PluginFailureCode {
    param([System.Management.Automation.ErrorRecord]$Failure)

    if ($Failure.Exception.Data.Contains('PluginExitCode')) {
        return [int]$Failure.Exception.Data['PluginExitCode']
    }
    return 1
}

function Write-PluginLogLine {
    param([ref]$Writer, [string]$Line)

    if ($null -eq $Writer.Value) { return }
    try { $Writer.Value.WriteLine($Line) }
    catch {
        Write-Warning "日志写入失败，后续输出继续显示在终端。$($_.Exception.Message)"
        $Writer.Value.Dispose()
        $Writer.Value = $null
    }
}

function Invoke-LoggedPluginOperation {
    param([string]$Name, [string]$Entry, [string]$ProjectRoot)

    $timer = [Diagnostics.Stopwatch]::StartNew()
    $logDirectory = Join-Path $ProjectRoot '.runtime/logs'
    $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
    $logPath = Join-Path $logDirectory "$stamp-${Name}-$([Guid]::NewGuid().ToString('N')).log"
    $writer = $null
    try {
        [void][IO.Directory]::CreateDirectory($logDirectory)
        $writer = [IO.StreamWriter]::new($logPath, $false, [Text.UTF8Encoding]::new($false))
        $writer.AutoFlush = $true
        Write-Host "[日志] $logPath" -ForegroundColor Cyan
    } catch {
        Write-Warning "无法创建日志文件 $logPath：$($_.Exception.Message)"
    }

    $process = $null
    $exitCode = $null
    $result = '已中断'
    try {
        $header = "[开始] $(Get-Date -Format o) $Name · 工作目录 $ProjectRoot"
        Write-PluginLogLine -Writer ([ref]$writer) -Line $header
        Write-Host $header -ForegroundColor Cyan

        $start = [Diagnostics.ProcessStartInfo]::new()
        $engine = if ($PSVersionTable.PSEdition -eq 'Core') { 'pwsh.exe' } else { 'powershell.exe' }
        $start.FileName = Join-Path $PSHOME $engine
        $start.Arguments = '-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "' + $Entry + '"'
        $start.WorkingDirectory = $ProjectRoot
        $start.UseShellExecute = $false
        $start.CreateNoWindow = $true
        $start.RedirectStandardOutput = $true
        $start.RedirectStandardError = $true
        $start.StandardOutputEncoding = [Text.Encoding]::UTF8
        $start.StandardErrorEncoding = [Text.Encoding]::UTF8
        # 日志外壳先加入作业对象，关闭菜单时其前台操作也会结束。
        . (Join-Path $PSScriptRoot 'PluginPortJob.ps1')
        Initialize-PluginPortJobType
        [ToolOrbitPluginPortJob]::Attach($null)
        $process = [Diagnostics.Process]::Start($start)

        # 每个流单独读取，避免错误流被 PowerShell 转成终止错误。
        $streams = @($process.StandardOutput, $process.StandardError)
        $pending = @($streams[0].ReadLineAsync(), $streams[1].ReadLineAsync())
        while ($null -ne $pending[0] -or $null -ne $pending[1]) {
            for ($index = 0; $index -lt $streams.Count; $index++) {
                if ($null -eq $pending[$index] -or -not $pending[$index].IsCompleted) { continue }
                $line = $pending[$index].GetAwaiter().GetResult()
                $pending[$index] = $null
                if ($null -eq $line) { continue }

                Write-PluginLogLine -Writer ([ref]$writer) -Line $line
                if ($index -eq 1) { Write-Host $line -ForegroundColor DarkYellow }
                else { Write-Host $line }
                $pending[$index] = $streams[$index].ReadLineAsync()
            }
            if (($null -eq $pending[0] -or -not $pending[0].IsCompleted) -and
                ($null -eq $pending[1] -or -not $pending[1].IsCompleted)) {
                Start-Sleep -Milliseconds 25
            }
        }
        while (-not $process.WaitForExit(100)) { Start-Sleep -Milliseconds 25 }

        $exitCode = $process.ExitCode
        $result = switch ($exitCode) {
            0 { '成功' }
            10 { if ($Name -eq '环境检查') { '环境有缺项' } else { '失败' } }
            -1073741510 { '已中断' }
            default { '失败' }
        }
        return $exitCode
    } catch [System.Management.Automation.PipelineStoppedException] {
        throw
    } catch {
        $result = '执行异常'
        $exitCode = 1
        Write-PluginLogLine -Writer ([ref]$writer) -Line (($_ | Out-String).TrimEnd())
        Write-Error $_ -ErrorAction Continue
        return $exitCode
    } finally {
        try {
            if ($null -ne $process) {
                try {
                    if (-not $process.HasExited) {
                        & (Join-Path $env:SystemRoot 'System32/taskkill.exe') /PID $process.Id /T /F *> $null
                    }
                } finally { $process.Dispose() }
            }
        } finally {
            $codeText = if ($null -eq $exitCode) { '未取得' } else { $exitCode }
            $summary = '[结束] {0:o} {1} · {2} · 退出码 {3} · 耗时 {4:0.###} 秒' -f
                (Get-Date), $Name, $result, $codeText, $timer.Elapsed.TotalSeconds
            try { Write-PluginLogLine -Writer ([ref]$writer) -Line $summary }
            finally { if ($null -ne $writer) { $writer.Dispose() } }
            Write-Host $summary
        }
    }
}
