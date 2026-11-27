$ErrorActionPreference = 'Stop'
try {
    . (Join-Path $PSScriptRoot 'OperationLog.ps1')
    Set-PluginOutputEncoding
    . (Join-Path $PSScriptRoot 'ProjectActions.ps1')
    Write-Host '[检查] 正在检查项目运行环境。'
    $code = Test-ProjectEnvironment
    switch ($code) {
        0 { Write-Host '[检查] 环境已就绪。' }
        10 { Write-Host '[检查] 发现可自动补齐的缺项。' }
        default { Write-Host "[检查] 环境检查失败或需要人工处理，退出码 $code。" }
    }
    exit $code
} catch {
    Write-Error $_ -ErrorAction Continue
    exit 1
}
