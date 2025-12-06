# 🎮 Torneo Pokémon Nuzlocke - Kotokodoloke

Aplicación web para gestionar un torneo de Pokémon con reglas Nuzlocke. Diseñada con una estética pixel art retro inspirada en los juegos clásicos de Pokémon Game Boy.

## 🌟 Características

- **Gestión de Jugadores**: Añade, edita y elimina jugadores con avatares personalizados
- **Sistema de Equipos**: Gestiona equipos de hasta 6 Pokémon por jugador
- **Sistema de Medallas**: Trackea las 8 medallas de gimnasio de Kanto
- **Ruleta de Recompensas**: Sistema de dados para asignar recompensas aleatorias
- **Clasificación**: Tabla de posiciones con filtros por fase
- **Galería**: Sube y comparte capturas del torneo
- **Descargas**: Recursos útiles para el torneo
- **Persistencia Local**: Todos los datos se guardan en el navegador

## 🎨 Tecnologías

- **React 18.3.1** - Framework UI
- **Vite 5.3.1** - Build tool y servidor de desarrollo
- **CSS Pixel Art** - Estética retro con efectos CRT
- **LocalStorage API** - Persistencia de datos en el cliente
- **Press Start 2P Font** - Fuente pixel art de Google Fonts

## 📋 Requisitos Previos

Necesitas tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

### Instalar Node.js

Si no tienes Node.js instalado:

1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión **LTS** (recomendada)
3. Ejecuta el instalador
4. Verifica la instalación abriendo PowerShell y ejecutando:
   ```powershell
   node --version
   npm --version
   ```

## 🚀 Instalación y Ejecución

### 1. Navega a la carpeta del proyecto

```powershell
cd "c:\Users\USUARIO\Web Kotokodoloke\torneo-pokemon-react"
```

### 2. Instala las dependencias

```powershell
npm install
```

Este comando instalará todas las librerías necesarias (React, Vite, etc.)

### 3. Inicia el servidor de desarrollo

```powershell
npm run dev
```

### 4. Abre la aplicación

El servidor mostrará una URL en la consola, normalmente:
```
➜  Local:   http://localhost:5173/
```

Abre esa URL en tu navegador (Chrome, Firefox, Edge, etc.)

## 📁 Estructura del Proyecto

```
torneo-pokemon-react/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Players.jsx
│   │   ├── Roulette.jsx
│   │   ├── Standings.jsx
│   │   ├── Downloads.jsx
│   │   ├── Gallery.jsx
│   │   └── *.css        # Estilos de cada componente
│   ├── hooks/
│   │   └── useTournamentData.js  # Hook de gestión de estado
│   ├── styles/
│   │   ├── index.css    # Estilos globales pixel art
│   │   └── App.css      # Estilos del componente principal
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Punto de entrada
├── index.html           # HTML principal
├── package.json         # Configuración y dependencias
├── vite.config.js       # Configuración de Vite
└── README.md           # Este archivo
```

## 🎯 Reglas del Torneo Nuzlocke

### Regla Básica
- Solo puedes capturar el **primer Pokémon** que encuentres en cada ruta
- Todos los Pokémon deben tener un **apodo en MAYÚSCULAS**

### Modos de Juego
- **HARDCORE**: Si un Pokémon llega a 0 PV, está permanentemente muerto
- **SOFTCORE**: Los Pokémon solo mueren en batallas importantes (gimnasios, rivales)

### Sistema de Combate
- Cortes cada **2 gimnasios** (4 fases en total)
- Combates **todos contra todos**
- Victoria: **6 puntos**
- Top 2: Combate extra por **puntos adicionales**

### Último Aliento
Si todo tu equipo es derrotado:
- Puedes conservar **1 Pokémon** muerto
- Lanza **1d5** para capturas extra
- Solo en **rutas ya exploradas**

### Recompensas de Ruleta
12 recompensas disponibles:
- 4x 🛒 Artículo de Tienda
- 4x ➕ Captura Extra
- 2x 🔙 Captura Ruta Anterior
- 1x 💚 Revivir Pokémon
- 1x 🛡️ 2 Seguros de Muerte

## 🎮 Uso de la Aplicación

### Añadir un Jugador
1. Ve a la sección **👥 GESTIÓN DE JUGADORES**
2. Haz clic en **+ NUEVO JUGADOR**
3. Rellena el formulario (nombre, apodo, modo)
4. Haz clic en **✓ CREAR JUGADOR**

### Gestionar Equipo Pokémon
1. En la ficha del jugador, busca **EQUIPO POKÉMON**
2. Selecciona Pokémon de la lista desplegable
3. Para eliminar, haz clic en la **✕** del Pokémon

### Asignar Medallas
1. En la ficha del jugador, ve a **MEDALLAS**
2. Haz clic en cada medalla para marcarla como obtenida

### Girar la Ruleta
1. Ve a **🎲 RULETA DE RECOMPENSAS**
2. Selecciona un jugador
3. Haz clic en **🎲 LANZAR DADOS**
4. La recompensa se asigna automáticamente

### Ver Clasificación
1. Ve a **🏆 CLASIFICACIÓN**
2. Usa los filtros para ver jugadores por fase
3. Haz clic en **➕ AÑADIR PUNTOS** para actualizar puntuaciones

### Subir Imágenes a la Galería
1. Ve a **📸 GALERÍA**
2. Haz clic en **➕ SUBIR IMAGEN**
3. Selecciona una imagen de tu PC
4. Añade título, autor y comentario
5. Haz clic en **✓ SUBIR**

## 🛠️ Comandos Disponibles

```powershell
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## 💾 Persistencia de Datos

Todos los datos se guardan automáticamente en el **LocalStorage** del navegador:
- Jugadores y equipos
- Medallas obtenidas
- Recompensas asignadas
- Imágenes de la galería

**IMPORTANTE**: Los datos se almacenan localmente en tu navegador. Si borras el caché o usas otro navegador/dispositivo, los datos no estarán disponibles.

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `src/styles/index.css`:

```css
:root {
  --poke-red: #FF0000;
  --poke-yellow: #FFDE00;
  --poke-blue: #3B4CCA;
  /* etc. */
}
```

### Añadir Más Pokémon
Edita la lista `POKEMON_LIST` en `src/components/Players.jsx`

## 📞 Soporte

Si encuentras problemas:

1. **Verifica que Node.js esté instalado**: `node --version`
2. **Reinstala las dependencias**: 
   ```powershell
   Remove-Item -Recurse -Force node_modules
   npm install
   ```
3. **Limpia la caché de Vite**:
   ```powershell
   Remove-Item -Recurse -Force .vite
   npm run dev
   ```

## 📝 Licencia

Proyecto educativo para uso personal. Pokémon es propiedad de Nintendo, Game Freak y The Pokémon Company.

---

**¡Buena suerte en el torneo, entrenadores! 🎉**
