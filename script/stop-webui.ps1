param([ValidateRange(0, 65535)][int]$Port = 0)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'PluginPortJob.ps1')
Initialize-PluginPortJobType
$jobName = Get-PluginPortJobName
if ($Port -and -not (Get-PluginJobListener -JobName $jobName -Port $Port)) {
    Write-Host "[停止] 本插件独立实例未监听端口 $Port。"
    exit 1
}
if ([ToolOrbitPluginPortJob]::Stop($jobName)) {
    Write-Host '[停止] 本插件的独立 WebUI 进程已结束。'
} else {
    Write-Host '[停止] 本插件没有运行中的独立 WebUI 实例。'
}
exit 0
