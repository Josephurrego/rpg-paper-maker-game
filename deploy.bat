@echo off
REM Script para facilitar el deploy en Vercel en Windows

echo RPG Paper Maker Game - Deploy Script
echo =====================================
echo.

REM Verificar si npm está instalado
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] npm no está instalado. Por favor instala Node.js primero.
    pause
    exit /b 1
)

REM Instalar dependencias si no existen
if not exist "node_modules" (
    echo [*] Instalando dependencias...
    call npm install
)

REM Verificar si Vercel CLI está instalado
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [*] Vercel CLI no detectado. Instalando globalmente...
    call npm install -g vercel
)

echo.
echo [*] Iniciando deploy en Vercel...
echo.

REM Ejecutar vercel deploy
call vercel

echo.
echo [+] Proceso completado. Tu aplicación está en línea!
pause
