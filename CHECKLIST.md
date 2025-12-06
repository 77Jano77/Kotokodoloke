# ✅ Checklist de Preparación para Despliegue

## 📋 Antes de Desplegar

### Archivos de Configuración
- [x] `vercel.json` - Configuración de Vercel
- [x] `package.json` - Scripts de build actualizados
- [x] `.gitignore` - Archivos a ignorar configurados
- [x] Build test exitoso (`npm run build`)

### Documentación
- [x] `DEPLOY.md` - Información general del proyecto
- [x] `VERCEL_DEPLOY.md` - Guía paso a paso de despliegue
- [x] `init-git.ps1` - Script de inicialización Git

### Contenido Estático (verificar que existe)
- [ ] `/public/sprites/` - 12 avatares de jugadores (Aleja, Gonzalez, Jano, etc.)
- [ ] `/public/lideres/` - 8 imágenes de líderes de gimnasio
- [ ] `/public/recursos/` - Medallas, videos, delibird.gif
- [ ] `/public/music/` - Archivos de música (.mp3)

## 🔍 Verificación Pre-Despliegue

### Build Local
```powershell
cd "C:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
npm run build
npm run preview
```

- [ ] Build completa sin errores
- [ ] Preview carga correctamente en http://localhost:4173
- [ ] Todas las secciones funcionan
- [ ] Imágenes cargan correctamente
- [ ] Videos se reproducen
- [ ] Música funciona (después de interacción)

### Funcionalidades Críticas
- [ ] Sistema de autenticación (login/registro)
- [ ] Creación de jugadores
- [ ] Gestión de equipos Pokémon
- [ ] Sistema de combates
- [ ] Ruleta de recompensas
- [ ] Galería de imágenes
- [ ] Recursos (Pokédex, habilidades, guía)
- [ ] Ranking en tiempo real

## 🚀 Proceso de Despliegue

### Opción 1: GitHub + Vercel (Recomendado)

1. [ ] Inicializar Git
```powershell
.\init-git.ps1
```

2. [ ] Crear repositorio en GitHub
   - Ir a https://github.com/new
   - Nombre: `torneo-pokemon-kotokodos`
   - Descripción: `Aplicación de gestión para torneo Pokémon Nuzlocke`
   - Público o Privado (tu elección)
   - NO inicializar con README

3. [ ] Conectar y subir código
```powershell
git remote add origin https://github.com/TU_USUARIO/torneo-pokemon-kotokodos.git
git push -u origin main
```

4. [ ] Desplegar en Vercel
   - Ir a https://vercel.com
   - Login con GitHub
   - "Add New Project"
   - Importar tu repositorio
   - Deploy (usar configuración por defecto)

5. [ ] Verificar despliegue
   - [ ] URL funcional
   - [ ] Todas las imágenes cargan
   - [ ] Sin errores en consola del navegador
   - [ ] LocalStorage funciona

### Opción 2: Vercel CLI

```powershell
npm install -g vercel
vercel login
vercel
vercel --prod
```

## 📱 Post-Despliegue

### Compartir con Usuarios
- [ ] Copiar URL de producción
- [ ] Crear mensaje de invitación con:
  - URL de la app
  - Credenciales admin (pescador_jano / admin123)
  - Instrucciones para crear cuenta
  - Info del servidor Radmin VPN

### Monitoreo
- [ ] Probar desde diferentes dispositivos
- [ ] Verificar en diferentes navegadores
- [ ] Comprobar que los usuarios pueden registrarse
- [ ] Validar que los datos persisten (LocalStorage)

## ⚠️ Advertencias Importantes

### Limitaciones Actuales
- ⚠️ **Datos en LocalStorage**: No se sincronizan entre dispositivos
- ⚠️ **Limpieza de navegador**: Borra todos los datos
- ⚠️ **Sin backup automático**: Los usuarios deben guardar manualmente

### Recomendaciones para Usuarios
1. Usar siempre el mismo navegador y dispositivo
2. No limpiar historial/caché del navegador
3. Hacer screenshots de equipos importantes
4. El admin debe mantener backups manuales

## 🔄 Actualizaciones Futuras

Para actualizar la app después del despliegue:

```powershell
# Hacer cambios en el código
git add .
git commit -m "descripción de los cambios"
git push
```

Vercel detectará el push y actualizará automáticamente (1-2 minutos).

## 🆘 Troubleshooting

### Build falla en Vercel
- Revisar logs en Vercel Dashboard
- Verificar que `npm run build` funciona localmente
- Comprobar versiones de Node.js (debe ser 18+)

### Imágenes no cargan
- Verificar que las rutas empiezan con `/` (ej: `/public/sprites/...`)
- Confirmar que los archivos existen en `/public`
- Revisar nombres de archivo (case-sensitive en Vercel)

### Música no suena
- Los navegadores requieren interacción del usuario primero
- Comprobar que los archivos .mp3 son válidos
- Revisar consola del navegador por errores

### Datos se pierden
- Comportamiento normal de LocalStorage
- Avisar a usuarios de no limpiar navegador
- Considerar implementar backend en el futuro

## 📞 Soporte

Si encuentras problemas:
1. Revisar logs de Vercel
2. Consultar documentación de Vite
3. Verificar configuración de `vercel.json`
4. Comprobar que build local funciona

---

## ✨ ¡Listo para Desplegar!

Una vez completado este checklist, tu aplicación estará lista para producción en Vercel.

**Buena suerte con el Kotokodos Cup! 🎮🏆**
