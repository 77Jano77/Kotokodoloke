# 🔧 Configuración de Git y GitHub - Guía Completa

## Paso 1: Instalar Git (si aún no lo has hecho)

### Descargar Git para Windows:
1. Ve a: https://git-scm.com/download/win
2. Descarga "64-bit Git for Windows Setup"
3. Ejecuta el instalador

### Configuración Durante la Instalación:
- ✅ **Editor:** Usa el editor por defecto o Visual Studio Code
- ✅ **PATH:** Selecciona "Git from the command line and also from 3rd-party software"
- ✅ **HTTPS:** Use the OpenSSL library
- ✅ **Line endings:** Checkout Windows-style, commit Unix-style
- ✅ **Terminal:** Use MinTTY
- ✅ **Extra options:** Enable file system caching

### Después de Instalar:
**IMPORTANTE: Cierra y vuelve a abrir PowerShell** para que Git esté disponible.

---

## Paso 2: Configurar Git (Primera vez)

Abre **PowerShell** y ejecuta:

```powershell
# Configura tu nombre (aparecerá en los commits)
git config --global user.name "Tu Nombre"

# Configura tu email (usa el mismo de GitHub)
git config --global user.email "tu-email@ejemplo.com"

# Verificar configuración
git config --list
```

---

## Paso 3: Crear Cuenta en GitHub (si no tienes)

1. Ve a: https://github.com/signup
2. Crea tu cuenta
3. Verifica tu email

---

## Paso 4: Inicializar Git en el Proyecto

```powershell
# Ve a la carpeta del proyecto
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"

# Inicializar Git
git init

# Renombrar rama a 'main'
git branch -M main

# Ver estado
git status
```

---

## Paso 5: Hacer el Primer Commit

```powershell
# Agregar todos los archivos
git add .

# Crear el commit inicial
git commit -m "feat: proyecto torneo pokémon completo - Kotokodos Cup"

# Verificar
git log --oneline
```

---

## Paso 6: Crear Repositorio en GitHub

### Opción A - Desde la Web:

1. Ve a: https://github.com/new
2. **Repository name:** `torneo-pokemon-kotokodos`
3. **Description:** `Aplicación de gestión para torneo Pokémon Nuzlocke`
4. **Visibility:** Público o Privado (tu elección)
5. ⚠️ **NO marques** "Add a README file"
6. ⚠️ **NO agregues** .gitignore ni license
7. Click en **"Create repository"**

### Opción B - Desde GitHub CLI (si tienes):

```powershell
gh repo create torneo-pokemon-kotokodos --public --source=. --remote=origin --push
```

---

## Paso 7: Conectar con GitHub

Después de crear el repo en GitHub, te mostrará comandos. Copia la URL y ejecuta:

```powershell
# Agregar el repositorio remoto (REEMPLAZA con tu URL)
git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git

# Verificar
git remote -v

# Subir el código
git push -u origin main
```

### Si te pide autenticación:

**Windows te pedirá credenciales:**
- Usuario: Tu nombre de usuario de GitHub
- Contraseña: **Personal Access Token** (NO tu contraseña normal)

### Crear Personal Access Token:

1. Ve a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. **Note:** "Vercel Deploy Token"
4. **Expiration:** 90 days (o lo que prefieras)
5. **Scopes:** Marca `repo` (todos los permisos de repo)
6. Click en "Generate token"
7. **COPIA EL TOKEN** (no podrás verlo de nuevo)
8. Úsalo como contraseña cuando Git te lo pida

---

## Paso 8: Verificar que Está Conectado

```powershell
# Ver repositorio remoto
git remote -v

# Debería mostrar:
# origin  https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git (fetch)
# origin  https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git (push)
```

Ve a tu repositorio en GitHub y deberías ver todos tus archivos.

---

## 🔄 Workflow Diario (Después de Configurar)

### Guardar cambios:

```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"

# Ver qué cambió
git status

# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "descripción de lo que hiciste"

# Subir a GitHub
git push
```

### Ejemplo completo:

```powershell
# Hiciste cambios en Players.jsx
git add .
git commit -m "fix: corregir búsqueda de pokémon"
git push

# O todo en una línea:
git add . ; git commit -m "update: mejoras varias" ; git push
```

---

## 🚀 Conectar con Vercel (Después de GitHub)

Una vez que tu código está en GitHub:

### Opción 1 - Automático (Recomendado):

1. Ve a: https://vercel.com
2. Click en "Sign Up" o "Login"
3. **Selecciona "Continue with GitHub"**
4. Autoriza a Vercel
5. Click en "Add New..." → "Project"
6. Selecciona `torneo-pokemon-kotokodos`
7. Click en "Import"
8. **NO cambies nada**, click en "Deploy"
9. ¡Listo! Tu app se desplegará automáticamente

### Opción 2 - Con CLI:

```powershell
npm install -g vercel
vercel login
vercel --prod
```

---

## ⚡ Beneficios de GitHub + Vercel

✅ **Auto-Deploy:** Cada `git push` actualiza tu sitio automáticamente
✅ **Historial:** Puedes volver a versiones anteriores
✅ **Backup:** Tu código está respaldado en la nube
✅ **Colaboración:** Otros pueden contribuir
✅ **CI/CD:** Build y deploy automáticos

---

## 🆘 Problemas Comunes

### "git: command not found"
**Solución:** Cierra y vuelve a abrir PowerShell después de instalar Git.

### "Permission denied"
**Solución:** Usa Personal Access Token en lugar de contraseña.

### "Updates were rejected"
**Solución:**
```powershell
git pull origin main --rebase
git push
```

### "Fatal: not a git repository"
**Solución:** Estás en la carpeta incorrecta, ejecuta:
```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
git init
```

---

## 📋 Checklist de Configuración

- [ ] Git instalado (`git --version` funciona)
- [ ] Git configurado (nombre y email)
- [ ] Cuenta de GitHub creada
- [ ] Repositorio creado en GitHub
- [ ] Personal Access Token creado
- [ ] `git init` ejecutado en el proyecto
- [ ] Primer commit realizado
- [ ] Conectado con GitHub (`git remote -v` muestra origin)
- [ ] Código subido (`git push` exitoso)
- [ ] Vercel conectado con GitHub
- [ ] Primer deploy exitoso

---

## 🎯 Comandos de Resumen

```powershell
# Configuración inicial (solo una vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# Inicializar proyecto (solo una vez)
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
git init
git branch -M main
git add .
git commit -m "feat: proyecto inicial"

# Conectar con GitHub (solo una vez)
git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git
git push -u origin main

# Uso diario (cada vez que hagas cambios)
git add .
git commit -m "descripción de cambios"
git push
```

---

## 📞 Siguiente Paso

1. **Instala Git** si aún no lo hiciste
2. **Cierra y vuelve a abrir PowerShell**
3. **Ejecuta los comandos** de "Configuración inicial"
4. **Sigue los pasos** de este documento en orden

Una vez configurado, solo necesitarás `git add . ; git commit -m "mensaje" ; git push` para guardar y actualizar todo.

---

**¡Git + GitHub + Vercel = Workflow Profesional!** 🚀
