# ========================================
# COMANDOS PARA CONECTAR CON GITHUB
# ========================================

# 1. Crea el repositorio en GitHub (ya se abrió la página):
#    - Nombre: torneo-pokemon-kotokodos
#    - NO marques "Initialize with README"
#    - Click "Create repository"

# 2. Copia tu usuario de GitHub que aparecerá en la URL
#    Ejemplo: https://github.com/TU_USUARIO/torneo-pokemon-kotokodos

# 3. REEMPLAZA "TU_USUARIO" en los comandos de abajo y ejecuta:

$env:Path += ";C:\Program Files\Git\cmd"
git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git
git push -u origin main

# Si te pide credenciales:
# - Usuario: Tu nombre de usuario de GitHub
# - Contraseña: Personal Access Token (NO tu contraseña normal)
#
# Para crear Personal Access Token:
# 1. Ve a: https://github.com/settings/tokens
# 2. "Generate new token (classic)"
# 3. Marca "repo"
# 4. Copia el token y úsalo como contraseña

# ========================================
# DESPUES DE SUBIR A GITHUB
# ========================================

# Para desplegar en Vercel:
# 1. Ve a: https://vercel.com
# 2. Login con GitHub
# 3. "Add New Project"
# 4. Selecciona tu repositorio
# 5. Click "Deploy"

# ========================================
# COMANDOS DIARIOS (después de configurar)
# ========================================

# Cada vez que hagas cambios:
$env:Path += ";C:\Program Files\Git\cmd"
git add .
git commit -m "descripción de cambios"
git push

# Vercel actualizará automáticamente en 1-2 minutos!
