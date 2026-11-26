$projectRoot = Split-Path -Parent $PSScriptRoot

function Test-ProjectEnvironment {
    if (-not (Get-Command python.exe -ErrorAction SilentlyContinue)) {
        Write-Host '[检查] 需要可在 PATH 中调用的 Python 3。'
        return 1
    }
    & python.exe -c 'import http.server, sys; print(sys.version.split()[0]); sys.exit(sys.version_info < (3, 8))' | Out-Host
    if ($LASTEXITCODE -ne 0) { return 1 }
    foreach ($file in @('preview.html', 'localized', 'research/getdesign-home/index.json', 'script/server.py')) {
        if (-not (Test-Path -LiteralPath (Join-Path $projectRoot $file))) {
            Write-Host "[检查] 缺少 $file"
            return 1
        }
    }
    Write-Host '[检查] Python 与预览资料齐全。'
    return 0
}

function Install-ProjectEnvironment {
    if ((Test-ProjectEnvironment) -ne 0) { throw '请补齐检查提示的 Python 或项目文件。' }
    Write-Host '[安装] WebUI 使用 Python 标准库，环境已就绪。'
}

function Start-ProjectApplication {
    param([string]$HostAddress, [int]$Port)
    & python.exe -X utf8 -u (Join-Path $PSScriptRoot 'server.py') $HostAddress $Port | Out-Host
    return $LASTEXITCODE
}
