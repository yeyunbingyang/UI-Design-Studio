$ErrorActionPreference = 'Stop'
$lock = $null
$code = 1
try {
    . (Join-Path $PSScriptRoot 'OperationLog.ps1')
    Set-PluginOutputEncoding
    . (Join-Path $PSScriptRoot 'ProjectActions.ps1')
    $runtime = Join-Path $projectRoot '.runtime'
    [void][IO.Directory]::CreateDirectory($runtime)
    $lockPath = Join-Path $runtime 'install.lock'
    $deadline = [DateTime]::UtcNow.AddMinutes(15)
    $reportedWait = $false
    while ($null -eq $lock) {
        try {
            $lock = [IO.File]::Open($lockPath, 'OpenOrCreate', 'ReadWrite', 'None')
        } catch [IO.IOException] {
            if (($_.Exception.GetBaseException().HResult -band 0xffff) -in @(32, 33)) {
                if ([DateTime]::UtcNow -ge $deadline) { throw '等待其他环境安装操作超时。' }
                if (-not $reportedWait) {
                    Write-Host '[安装] 正在等待其他环境安装操作结束。'
                    $reportedWait = $true
                }
                Start-Sleep -Milliseconds 500
            } else { throw }
        }
    }
    $code = Test-ProjectEnvironment
    if ($code -eq 10) {
        Write-Host '[安装] 环境有可补齐的缺项，开始准备。'
        Install-ProjectEnvironment
        Write-Host '[检查] 安装命令已结束，正在复检。'
        $code = Test-ProjectEnvironment
        if ($code -eq 0) { Write-Host '[检查] 环境复检通过。' }
        else { Write-Host "[检查] 环境复检未通过，退出码 $code。" }
    } elseif ($code -eq 0) {
        Write-Host '[安装] 环境已就绪，跳过安装。'
    } else {
        Write-Host "[安装] 环境检查未通过，退出码 $code。"
    }
} catch {
    Write-Error $_ -ErrorAction Continue
    $code = Get-PluginFailureCode -Failure $_
} finally {
    if ($null -ne $lock) { $lock.Dispose() }
}
exit $code
