# 🔥 ACTUALIZAR REGLAS DE FIREBASE

## Pasos para actualizar las reglas manualmente:

1. Ve a la consola de Firebase: https://console.firebase.google.com/
2. Selecciona tu proyecto
3. En el menú lateral, haz clic en **Realtime Database**
4. Ve a la pestaña **Reglas** (Rules)
5. Reemplaza el contenido con esto:

```json
{
  "rules": {
    "tournament": {
      ".read": true,
      ".write": true
    },
    "users": {
      ".read": true,
      ".write": true
    },
    "romSelections": {
      ".read": true,
      ".write": true
    }
  }
}
```

6. Haz clic en **Publicar** (Publish)

¡Listo! Ahora la sección de selección de ROMs funcionará correctamente.
