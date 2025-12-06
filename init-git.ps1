Write-Host "============================================" -ForegroundColor Cyan
Write-Host " KOTOKODOS CUP - Configuracion de Git" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Git
Write-Host "Verificando Git..." -ForegroundColor Yellow
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue

if (-not $gitInstalled) {
    Write-Host ""
    Write-Host "ERROR: Git NO esta instalado" -ForegroundColor Red
    Write-Host ""
    Write-Host "Opciones:" -ForegroundColor Yellow
    Write-Host "1. Descarga Git: https://git-scm.com/download/win" -ForegroundColor White
    Write-Host "2. Instala Git" -ForegroundColor White
    Write-Host "3. CIERRA y vuelve a abrir PowerShell" -ForegroundColor White
    Write-Host "4. Ejecuta este script de nuevo" -ForegroundColor White
    Write-Host ""
    $abrir = Read-Host "Abrir pagina de descarga? (S/N)"
    if ($abrir -eq "S" -or $abrir -eq "s") {
        Start-Process "https://git-scm.com/download/win"
    }
    exit 1
}

Write-Host "OK: Git instalado" -ForegroundColor Green
Write-Host ""

# Verificar configuracion
Write-Host "Verificando configuracion..." -ForegroundColor Yellow
$nombre = git config --global user.name
$email = git config --global user.email

if (-not $nombre -or -not $email) {
    Write-Host "Git no esta configurado" -ForegroundColor Yellow
    Write-Host ""
    $nombre = Read-Host "Tu nombre"
    $email = Read-Host "Tu email (el de GitHub)"
    git config --global user.name "$nombre"
    git config --global user.email "$email"
    Write-Host ""
    Write-Host "OK: Git configurado" -ForegroundColor Green
} else {
    Write-Host "OK: Git ya configurado" -ForegroundColor Green
    Write-Host "  Nombre: $nombre" -ForegroundColor White
    Write-Host "  Email: $email" -ForegroundColor White
}
Write-Host ""

# Inicializar repo
if (-not (Test-Path .git)) {
    Write-Host "Inicializando repositorio..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host "OK: Repositorio creado" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "OK: Repositorio ya existe" -ForegroundColor Green
    Write-Host ""
}

# Commit
$cambios = git status --porcelain
if ($cambios) {
    Write-Host "Creando commit..." -ForegroundColor Yellow
    git add .
    git commit -m "feat: proyecto torneo pokemon completo"
    Write-Host "OK: Commit creado" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "Sin cambios pendientes" -ForegroundColor Blue
    Write-Host ""
}

# Verificar conexion GitHub
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "OK: Conectado a GitHub" -ForegroundColor Green
    Write-Host "  $remote" -ForegroundColor White
    Write-Host ""
    Write-Host "Para subir cambios:" -ForegroundColor Cyan
    Write-Host "  git push" -ForegroundColor Yellow
} else {
    Write-Host "SIGUIENTE PASO: Conectar con GitHub" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Crea un repo en: https://github.com/new" -ForegroundColor White
    Write-Host "   Nombre: torneo-pokemon-kotokodos" -ForegroundColor White
    Write-Host ""
    Write-Host "2. Ejecuta (reemplaza TU_USUARIO):" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git" -ForegroundColor Yellow
    Write-Host "   git push -u origin main" -ForegroundColor Yellow
    Write-Host ""
    $abrir = Read-Host "Abrir GitHub para crear repo? (S/N)"
    if ($abrir -eq "S" -or $abrir -eq "s") {
        Start-Process "https://github.com/new"
    }
}

Write-Host ""
Write-Host "Lee GIT_SETUP.md para mas ayuda" -ForegroundColor Cyan
Write-Host ""
