$ErrorActionPreference = 'Stop'
$utf8 = New-Object System.Text.UTF8Encoding($false)
[Console]::InputEncoding = $utf8
[Console]::OutputEncoding = $utf8
$OutputEncoding = $utf8
. (Join-Path $PSScriptRoot 'OperationLog.ps1')
$scriptDirectory = $PSScriptRoot
$projectRoot = Split-Path -Parent $scriptDirectory
$projectName = Split-Path -Leaf $projectRoot
$start = Join-Path $scriptDirectory 'start.ps1'
if (-not (Test-Path -LiteralPath $start)) {
    $start = Join-Path $scriptDirectory 'start-webui.ps1'
}
$actions = @{
    '1' = $start
    '2' = Join-Path $scriptDirectory 'check-env.ps1'
    '3' = Join-Path $scriptDirectory 'install-env.ps1'
}
$actionNames = @{ '1' = '启动'; '2' = '环境检查'; '3' = '环境安装'; '4' = '打包EXE' }
$build = Join-Path $scriptDirectory 'build-exe.ps1'
if (Test-Path -LiteralPath $build -PathType Leaf) { $actions['4'] = $build }

$actions['9'] = Join-Path $PSScriptRoot 'stop-webui.ps1'
$actionNames['9'] = '停止服务'

. (Join-Path $PSScriptRoot 'PluginWebPort.ps1')

while ($true) {
    Write-Host "`n$projectName 综合菜单" -ForegroundColor Cyan
    Write-Host '[1] 启动' -ForegroundColor Green
    Write-Host '[2] 环境检查' -ForegroundColor Cyan
    Write-Host '[3] 环境安装' -ForegroundColor Yellow
    if ($actions.ContainsKey('4')) { Write-Host '[4] 打包 EXE' -ForegroundColor Magenta }
    Write-Host '[9] 停止独立 WebUI' -ForegroundColor DarkYellow
    Write-Host '[0] 退出'
    $menuPort = Show-PluginWebPort -PreferredPort 28717
    $choice = Read-Host '请选择'
    if ($null -eq $choice -or $choice.Trim() -eq '0') { exit 0 }
    $choice = $choice.Trim()
    if (-not $actions.ContainsKey($choice)) {
        Write-Host '无效选项，请重新选择。' -ForegroundColor Yellow
        continue
    }
    try {
        $previousPlannedPort = $env:TOOLORBIT_PLANNED_PLUGIN_PORT
        try {
            if ($choice -eq '1') { $env:TOOLORBIT_PLANNED_PLUGIN_PORT = $menuPort }
            [void](Invoke-LoggedPluginOperation -Name $actionNames[$choice] -Entry $actions[$choice] -ProjectRoot $projectRoot)
        } finally {
            $env:TOOLORBIT_PLANNED_PLUGIN_PORT = $previousPlannedPort
        }
    } catch {
        Write-Host $_.Exception.Message -ForegroundColor Red
    }
}
