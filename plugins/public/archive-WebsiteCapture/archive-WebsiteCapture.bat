@echo off
setlocal EnableExtensions DisableDelayedExpansion
if not exist "%~dp0script\menu.ps1" (
    echo [ERROR] Missing companion script: "%~dp0script\menu.ps1" 1>&2
    exit /b 1
)
where.exe pwsh.exe >nul 2>&1
if errorlevel 1 goto windows_powershell
pwsh.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0script\menu.ps1" %*
exit /b %ERRORLEVEL%

:windows_powershell
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0script\menu.ps1" %*
exit /b %ERRORLEVEL%
