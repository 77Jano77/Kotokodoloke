# ⚡ COMANDOS RÁPIDOS - COPIAR Y PEGAR

## 🚀 OPCIÓN 1: DESPLIEGUE COMPLETO (GitHub + Vercel)

### Paso 1: Inicializar Git
```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
git init
git add .
git commit -m "feat: aplicación torneo pokémon completa - Kotokodos Cup"
git branch -M main
```

### Paso 2: Crear repositorio en GitHub
1. Ve a: https://github.com/new
2. Nombre: `torneo-pokemon-kotokodos`
3. NO marcar "Initialize with README"
4. Click en "Create repository"

### Paso 3: Subir código (REEMPLAZA CON TU URL)
```powershell
git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git
git push -u origin main
```

### Paso 4: Desplegar en Vercel
1. Ve a: https://vercel.com
2. Login con GitHub
3. Click "Add New Project"
4. Selecciona tu repositorio
5. Click "Deploy" (NO cambies nada)

---

## ⚡ OPCIÓN 2: DESPLIEGUE RÁPIDO (Vercel CLI)

```powershell
# Instalar Vercel CLI (solo una vez)
npm install -g vercel

# Login
vercel login

# Navegar al proyecto
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"

# Desplegar
vercel --prod
```

---

## 🔄 ACTUALIZAR DESPUÉS DE CAMBIOS

```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
git add .
git commit -m "descripción del cambio"
git push
```

---

## 🧪 PROBAR BUILD LOCAL

```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
npm run build
npm run preview
```
Abre: http://localhost:4173

---

## 📋 VERIFICAR CONTENIDO

```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"

# Ver archivos
Get-ChildItem -Path .\public\sprites | Measure-Object
Get-ChildItem -Path .\public\lideres | Measure-Object
Get-ChildItem -Path .\public\recursos | Measure-Object
Get-ChildItem -Path .\public\music | Measure-Object
```

---

## 🗑️ LIMPIAR (SI NECESITAS RESETEAR)

```powershell
# Eliminar node_modules y reinstalar
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
Remove-Item -Recurse -Force node_modules
npm install

# Eliminar build anterior
Remove-Item -Recurse -Force dist
npm run build
```

---

## 🔍 VER LOGS DE VERCEL

```powershell
vercel logs
```

---

## 🌐 ABRIR PROYECTO EN VERCEL

```powershell
vercel open
```

---

## 📊 VER INFORMACIÓN DEL PROYECTO

```powershell
vercel whoami      # Tu usuario
vercel ls          # Tus proyectos
vercel inspect     # Info del proyecto actual
```

---

## ⚙️ CONFIGURACIÓN ADICIONAL

### Agregar dominio personalizado (después del despliegue)
```powershell
vercel domains add tudominio.com
```

### Ver variables de entorno
```powershell
vercel env ls
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Build falla localmente
```powershell
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
npm run build
```

### Git da error
```powershell
# Si necesitas reiniciar git
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "feat: reset inicial"
git branch -M main
```

### Vercel no reconoce el proyecto
```powershell
# Forzar detección
vercel --force
```

---

## 📱 MENSAJE PARA COMPARTIR (Copiar después de desplegar)

```
🎮 KOTOKODOS CUP - TORNEO POKÉMON NUZLOCKE 🎮

🌐 Accede aquí: [TU_URL_DE_VERCEL]

👤 Usuario Admin: pescador_jano
🔑 Contraseña: admin123

📝 Instrucciones:
1. Crea tu cuenta
2. Crea tu entrenador
3. Gestiona tu equipo
4. ¡A competir!

🎮 Red Radmin: Kotokodos Cup
🔐 Password: Somalia

⚠️ IMPORTANTE: Usa siempre el mismo navegador
```

---

## ✅ CHECKLIST RÁPIDO

Antes de desplegar, verifica:
- [ ] `npm run build` funciona sin errores
- [ ] Las carpetas public/ tienen contenido
- [ ] `.gitignore` incluye node_modules y dist
- [ ] Has leído VERCEL_DEPLOY.md

Después de desplegar, verifica:
- [ ] La URL carga correctamente
- [ ] Las imágenes se ven
- [ ] Los videos se reproducen
- [ ] Puedes crear usuarios
- [ ] El sistema funciona completo

---

## 🎯 COMANDO TODO-EN-UNO

```powershell
# Ejecutar todo de una vez (solo si Git ya está configurado)
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react" ; git add . ; git commit -m "update" ; git push ; Write-Host "✅ Actualización subida! Vercel desplegará en 1-2 minutos" -ForegroundColor Green
```

---

**¿Dudas?** Lee `VERCEL_DEPLOY.md` para guía completa.
