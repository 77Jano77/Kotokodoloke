# Script para descargar sprites de PMD Collab
# Los sprites se descargan desde el repositorio de GitHub

$baseUrl = "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait"
$outputDir = "public\sprites\pmd"

# Crear directorio si no existe
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
    Write-Host "Creado directorio: $outputDir"
}

# Función para formatear el número con ceros a la izquierda (4 dígitos)
function Format-PokemonNumber {
    param([int]$number)
    return $number.ToString("0000")
}

Write-Host "Iniciando descarga de sprites PMD Collab..." -ForegroundColor Green
Write-Host "Esto puede tardar varios minutos..." -ForegroundColor Yellow

$downloaded = 0
$failed = 0

# Descargar sprites del 1 al 386 (Gen 1-3)
for ($i = 1; $i -le 386; $i++) {
    $paddedNumber = Format-PokemonNumber -number $i
    $url = "$baseUrl/$paddedNumber/Normal.png"
    $outputFile = "$outputDir\$paddedNumber.png"
    
    try {
        # Intentar descargar el sprite
        Invoke-WebRequest -Uri $url -OutFile $outputFile -ErrorAction Stop
        $downloaded++
        
        if ($downloaded % 50 -eq 0) {
            Write-Host "Descargados $downloaded sprites..." -ForegroundColor Cyan
        }
    }
    catch {
        $failed++
        Write-Host "❌ No se pudo descargar sprite #$paddedNumber" -ForegroundColor Red
    }
}

Write-Host "`n✅ Descarga completada!" -ForegroundColor Green
Write-Host "Sprites descargados: $downloaded" -ForegroundColor Green
Write-Host "Sprites fallidos: $failed" -ForegroundColor Yellow
Write-Host "`nLos sprites se encuentran en: $outputDir" -ForegroundColor Cyan
