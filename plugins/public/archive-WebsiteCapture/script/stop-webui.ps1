param([ValidateRange(0, 65535)][int]$Port = 0)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'PluginPortJob.ps1')
. (Join-Path $PSScriptRoot 'ProjectActions.ps1')
Initialize-PluginPortJobType
$jobName = Get-PluginPortJobName
$listener = Get-PluginJobListener -JobName $jobName -Port $Port
if ($Port -and -not $listener) {
    Write-Host "[停止] 本插件独立实例未监听端口 $Port。"
    exit 1
}
if ($listener) {
    Request-ProjectShutdown -Port $listener.LocalPort -ProcessId $listener.OwningProcess
    if (-not (Get-Process -Id $listener.OwningProcess -ErrorAction SilentlyContinue)) {
        Write-Host '[停止] 本插件的独立 WebUI 已正常退出。'
        exit 0
    }
}
if ([ToolOrbitPluginPortJob]::Stop($jobName)) {
    Write-Host '[停止] 本插件的独立 WebUI 进程已结束。'
} else {
    Write-Host '[停止] 本插件没有运行中的独立 WebUI 实例。'
}
exit 0
