# 🚀 Guía Rápida de Despliegue en Vercel

## Paso 1: Preparación (✅ Ya completado)

- ✅ `vercel.json` configurado
- ✅ `package.json` actualizado
- ✅ `.gitignore` actualizado
- ✅ Build test exitoso

## Paso 2: Subir a GitHub

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
git init
git add .
git commit -m "feat: aplicación torneo pokémon completa"
git branch -M main
```

Crea un nuevo repositorio en GitHub y luego:

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

## Paso 3: Desplegar en Vercel

### Opción A - Desde Web (Más Fácil)

1. Ve a https://vercel.com
2. Haz clic en "Sign Up" o "Login"
3. Conecta tu cuenta de GitHub
4. Haz clic en "Add New..." → "Project"
5. Selecciona tu repositorio
6. Vercel detectará automáticamente Vite
7. **NO cambies nada**, solo haz clic en "Deploy"
8. Espera 1-2 minutos
9. ¡Listo! Tu app estará en línea

### Opción B - Desde Terminal

```powershell
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Desplegar
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
vercel

# Seguir las instrucciones:
# - Link to existing project? No
# - Project name? (Enter para usar el actual)
# - Directory? ./ (Enter)
# - Override settings? No

# Para desplegar a producción
vercel --prod
```

## Paso 4: Configuración Post-Despliegue

Una vez desplegado:

1. Tu URL será algo como: `https://torneo-pokemon-react.vercel.app`
2. Vercel te permite configurar un dominio personalizado
3. Cada push a `main` actualizará automáticamente la app

## ⚠️ Importante: Datos y LocalStorage

**NOTA CRÍTICA:** Los datos se almacenan en LocalStorage del navegador, lo que significa:

- ❌ **No se comparten entre dispositivos**
- ❌ **Se borran si limpias el navegador**
- ❌ **Cada usuario tiene su propia copia local**

### Soluciones Futuras (Opcional):

Si quieres persistencia real, necesitarás implementar:

1. **Backend con Base de Datos:**
   - Firebase Firestore (gratis hasta cierto límite)
   - Supabase (PostgreSQL, gratis)
   - MongoDB Atlas (NoSQL, gratis)

2. **Alternativa Rápida (Sin Backend):**
   - LocalStorage + Export/Import manual de datos
   - Usar Firebase solo para storage (ya configurado en el código)

## 🔍 Verificación Post-Despliegue

Después del despliegue, verifica:

- ✅ La página carga correctamente
- ✅ Los videos se reproducen
- ✅ La música funciona
- ✅ Las imágenes (sprites, medallas, avatares) cargan
- ✅ Puedes crear usuarios y jugadores
- ✅ El sistema de combates funciona
- ✅ La ruleta gira correctamente

## 🐛 Troubleshooting

### Problema: Imágenes no cargan

**Solución:** Asegúrate de que todas las imágenes están en `/public` y las rutas empiezan con `/`

### Problema: Música no suena

**Solución:** Los navegadores bloquean autoplay de audio. Los usuarios deben interactuar primero con la página.

### Problema: Datos se pierden

**Solución:** Es comportamiento normal de LocalStorage. Advierte a los usuarios.

## 📱 Compartir la App

Una vez desplegada, comparte la URL con los participantes:

```
🎮 KOTOKODOS CUP 🎮
Accede al torneo: https://tu-app.vercel.app

👤 Usuario Admin: pescador_jano
🔑 Contraseña: admin123

Cada jugador debe crear su propia cuenta y personaje.
```

## 🔄 Actualizaciones

Para actualizar la app después del primer despliegue:

```powershell
git add .
git commit -m "descripción de cambios"
git push
```

Vercel actualizará automáticamente en 1-2 minutos.

---

**¿Necesitas ayuda?** Revisa los logs de build en Vercel Dashboard.
