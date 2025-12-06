# 🚀 Guía Rápida de Inicio

## 1️⃣ Instalar Node.js (Si no lo tienes)

Descarga desde: https://nodejs.org/
- Elige la versión **LTS** (recomendada)
- Instala con las opciones por defecto
- Reinicia PowerShell después de instalar

## 2️⃣ Verificar Instalación

```powershell
node --version
npm --version
```

Deberías ver números de versión (ej: v20.11.0 y 10.2.4)

## 3️⃣ Abrir PowerShell en la Carpeta del Proyecto

Opción A - Desde el Explorador de Windows:
1. Abre la carpeta: `c:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react`
2. Haz clic derecho en un espacio vacío
3. Selecciona "Abrir en Terminal" o "Abrir PowerShell aquí"

Opción B - Desde PowerShell:
```powershell
cd "c:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
```

## 4️⃣ Instalar Dependencias (Solo la Primera Vez)

```powershell
npm install
```

⏳ Esto tardará 1-2 minutos. Descargará todas las librerías necesarias.

## 5️⃣ Iniciar el Servidor de Desarrollo

```powershell
npm run dev
```

✅ Verás algo como:
```
  VITE v5.3.1  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## 6️⃣ Abrir en el Navegador

Abre tu navegador y ve a: **http://localhost:5173/**

🎉 ¡Deberías ver la página del torneo funcionando!

## 🛑 Detener el Servidor

Presiona `Ctrl + C` en PowerShell y luego `S` (Sí)

## ⚡ Comandos Adicionales

```powershell
# Ver la estructura de archivos
Get-ChildItem -Recurse -Directory

# Limpiar y reinstalar dependencias (si hay problemas)
Remove-Item -Recurse -Force node_modules
npm install

# Construir versión de producción
npm run build
```

## 🔧 Solución de Problemas Comunes

### "npm no se reconoce como comando"
➜ Node.js no está instalado o no está en el PATH
➜ Solución: Reinstala Node.js y reinicia PowerShell

### "Puerto 5173 ya está en uso"
➜ Otro proceso está usando el puerto
➜ Solución: Cierra otras instancias o cambia el puerto en vite.config.js

### "Cannot find module 'react'"
➜ Las dependencias no están instaladas
➜ Solución: Ejecuta `npm install` de nuevo

### Página en blanco o errores en consola
➜ Abre las herramientas de desarrollo del navegador (F12)
➜ Ve a la pestaña "Console" para ver errores específicos

## 📱 Uso en Dispositivos Móviles (Red Local)

1. Inicia el servidor con:
   ```powershell
   npm run dev -- --host
   ```

2. Busca tu IP local:
   ```powershell
   ipconfig
   ```
   
3. En tu móvil, navega a: `http://TU-IP:5173/`
   Ejemplo: `http://192.168.1.100:5173/`

## 💡 Consejos

- El servidor de desarrollo recarga automáticamente al guardar cambios
- Los datos se guardan en LocalStorage del navegador
- Usa Chrome/Edge para mejor compatibilidad
- F12 abre las herramientas de desarrollo
- Ctrl+Shift+R hace un hard refresh (borra caché)

---

**¿Necesitas ayuda? Lee el README.md completo para más detalles**
