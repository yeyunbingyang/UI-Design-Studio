$projectRoot = Split-Path -Parent $PSScriptRoot
$playwrightCli = Join-Path $projectRoot 'node_modules/playwright/cli.js'
$serviceEntry = Join-Path $projectRoot 'backend/server.ts'
$env:PLAYWRIGHT_BROWSERS_PATH = Join-Path $projectRoot '.runtime/browsers'

function Test-ProjectEnvironment {
    if ((Get-Command node.exe,npm.cmd -ErrorAction SilentlyContinue | Measure-Object).Count -ne 2) {
        Write-Host '[检查] 请安装 Node.js 24 和 npm。'
        return 1
    }
    $version = & node.exe --version
    Write-Host "[检查] Node.js $version"
    if ($version -notmatch '^v24\.') { Write-Host '[检查] 请安装 Node.js 24。'; return 1 }
    if (-not (Test-Path -LiteralPath $playwrightCli)) { Write-Host '[检查] 缺少项目依赖。'; return 10 }
    $shell = Get-ChildItem -LiteralPath $env:PLAYWRIGHT_BROWSERS_PATH -Filter chrome-headless-shell.exe -File -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $shell) { Write-Host '[检查] 缺少 Playwright Chromium。'; return 10 }
    if (-not (Test-Path -LiteralPath (Join-Path $projectRoot '.runtime/dist/index.html'))) { Write-Host '[检查] 缺少前端构建。'; return 10 }
    return 0
}

function Install-ProjectEnvironment {
    Push-Location -LiteralPath $projectRoot
    try {
        & npm.cmd ci --no-audit --no-fund
        if ($LASTEXITCODE) { throw "依赖安装失败，退出码 $LASTEXITCODE。" }
        & node.exe $playwrightCli install chromium --only-shell
        if ($LASTEXITCODE) { throw "Chromium 安装失败，退出码 $LASTEXITCODE。" }
        & npm.cmd run build
        if ($LASTEXITCODE) { throw "前端构建失败，退出码 $LASTEXITCODE。" }
    } finally { Pop-Location }
}

function Start-ProjectApplication {
    param([string]$HostAddress, [int]$Port)
    & node.exe $serviceEntry $Port | Out-Host
    return $LASTEXITCODE
}

function Request-ProjectShutdown {
    param([int]$Port, [int]$ProcessId)
    $url = "http://127.0.0.1:$Port"
    try {
        $info = Invoke-RestMethod -Uri "$url/api/health" -UseBasicParsing -TimeoutSec 2
        if ($info.id -ne 'archive-website-capture' -or $info.pid -ne $ProcessId) { return }
        [void](Invoke-RestMethod -Uri "$url/api/shutdown" -Method Post -Headers @{ 'X-Website-Capture' = '1' } -UseBasicParsing -TimeoutSec 2)
        Wait-Process -Id $ProcessId -Timeout 4 -ErrorAction SilentlyContinue
    } catch { Write-Host "[停止] 优雅退出未完成，将检查实例状态。" }
}

function Remove-ProjectOrphan {
    if ($env:TOOLORBIT_MANAGED_PLUGIN -eq '1') { return }
    . (Join-Path $PSScriptRoot 'PluginPortJob.ps1')
    Initialize-PluginPortJobType
    $jobName = Get-PluginPortJobName
    $listeners = Get-NetTCPConnection -State Listen -LocalAddress 127.0.0.1 -ErrorAction SilentlyContinue
    foreach ($listener in $listeners) {
        $processId = [int]$listener.OwningProcess
        if ([ToolOrbitPluginPortJob]::Owns($jobName, $processId)) { continue }
        $process = Get-CimInstance Win32_Process -Filter "ProcessId=$processId AND Name='node.exe'"
        if (-not $process -or $process.CommandLine -notmatch ([regex]::Escape($serviceEntry) + '"?\s+' + $listener.LocalPort + '\s*$')) { continue }
        if (Get-Process -Id $process.ParentProcessId -ErrorAction SilentlyContinue) { continue }
        Write-Host "[启动] 正在停止残留网页采集实例，端口 $($listener.LocalPort)。"
        Request-ProjectShutdown -Port $listener.LocalPort -ProcessId $processId
    }
}
