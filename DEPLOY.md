# Torneo Pokémon Nuzlocke - Kotokodoloke Cup

Aplicación web para gestión de torneos Pokémon Nuzlocke con sistema de jugadores, equipos, medallas, ruleta de recompensas y más.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <tu-repositorio-github>
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Add New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración de Vite
   - Haz clic en "Deploy"

### Opción 2: Despliegue con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega el proyecto:**
   ```bash
   vercel
   ```
   
4. **Para producción:**
   ```bash
   vercel --prod
   ```

## 📦 Construcción Local

Para probar la construcción antes de desplegar:

```bash
npm run build
npm run preview
```

## 🔧 Tecnologías Utilizadas

- **React 18.3.1** - Interfaz de usuario
- **Vite 5.3.1** - Build tool y dev server
- **LocalStorage** - Persistencia de datos
- **CSS custom** - Estilos pixel art y retro gaming

## 📁 Estructura del Proyecto

```
torneo-pokemon-react/
├── public/
│   ├── lideres/          # Imágenes de líderes de gimnasio
│   ├── music/            # Archivos de música
│   ├── recursos/         # Medallas, videos, sprites
│   └── sprites/          # Avatares de jugadores
├── src/
│   ├── components/       # Componentes React
│   ├── data/            # Pokédex y habilidades
│   ├── hooks/           # Custom hooks
│   └── App.jsx          # Componente principal
├── vercel.json          # Configuración de Vercel
└── package.json         # Dependencias del proyecto
```

## ⚙️ Características

- **Gestión de Jugadores:** Crear y editar entrenadores con avatares personalizados
- **Equipos Pokémon:** Gestión completa con Gen 1-3, sprites, apodos y habilidades
- **Sistema de Medallas:** Tracking de 8 medallas de Kanto
- **Combates:** Registro de batallas entre jugadores
- **Ruleta de Recompensas:** "Los Regalos de Delibird"
- **Galería:** Sistema de imágenes con carga manual
- **Recursos:** Pokédex Gen 1-3, guía de habilidades y conexión
- **Ranking en vivo:** Podio con Top 3 y estadísticas
- **Autenticación:** Sistema de usuarios con roles (admin/jugador)

## 🎮 Usuarios

- **Admin:** pescador_jano / contraseña: admin123
- **Jugadores:** Cada usuario puede crear su propio entrenador

## 📝 Notas Importantes

- Los datos se almacenan en LocalStorage del navegador
- Para resetear datos: Consola del navegador → `localStorage.clear()`
- Los sprites de Pokémon se cargan desde PokeAPI
- La música y recursos visuales están en `/public`

## 🔄 Actualizaciones Continuas

El proyecto incluye sistema de backup automático en carpeta `Backup1/` para desarrollo seguro.

## 📞 Soporte

Para issues o mejoras, contacta al administrador del torneo.

---

**Kotokodos Cup - Somalia** 🎮
Red Radmin VPN para partidas multijugador
