# 🔥 CONFIGURACIÓN DE FIREBASE - GUÍA COMPLETA

## ¿Por qué Firebase?

✅ Base de datos en tiempo real (cambios instantáneos)
✅ Gratis hasta 10GB de datos
✅ Sincronización automática entre usuarios
✅ Sin necesidad de servidor backend
✅ Perfecto para torneos con múltiples participantes

---

## PASO 1: Crear Proyecto en Firebase

1. **Ve a:** https://console.firebase.google.com

2. **Click en "Add project" / "Agregar proyecto"**

3. **Nombre del proyecto:** `Kotokodos-Cup`

4. **Google Analytics:** Puedes desactivarlo (no es necesario)

5. **Click "Create project"** y espera 1 minuto

---

## PASO 2: Configurar Realtime Database

1. En el menú lateral, click en **"Realtime Database"**

2. Click en **"Create Database"**

3. **Ubicación:** Elige la más cercana (ej: us-central1)

4. **Security rules:** Selecciona **"Start in test mode"**
   - ⚠️ Esto permite lectura/escritura por 30 días
   - Luego configuraremos reglas de seguridad

5. Click en **"Enable"**

---

## PASO 3: Obtener Configuración

1. Click en el **ícono de engranaje** ⚙️ (arriba izquierda) → **"Project settings"**

2. Baja hasta **"Your apps"** / "Tus aplicaciones"

3. Click en el botón **`</>`** (Web)

4. **App nickname:** `Kotokodos-Web`

5. **NO marques** "Firebase Hosting"

6. Click en **"Register app"**

7. **COPIA** todo el objeto `firebaseConfig` que aparece

---

## PASO 4: Configurar en tu Proyecto

1. Abre el archivo: `src/config/firebase.js`

2. Reemplaza estas líneas:

```javascript
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  databaseURL: "TU_DATABASE_URL",  // ← IMPORTANTE!
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};
```

Con los valores reales que copiaste de Firebase.

**Ejemplo real (NO uses estos, son de ejemplo):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyA1B2C3D4E5F6G7H8I9J0K",
  authDomain: "kotokodos-cup.firebaseapp.com",
  databaseURL: "https://kotokodos-cup-default-rtdb.firebaseio.com",
  projectId: "kotokodos-cup",
  storageBucket: "kotokodos-cup.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

---

## PASO 5: Reglas de Seguridad (Después de configurar)

Cuando esté funcionando, configura reglas más seguras:

1. En Firebase Console → **Realtime Database** → **Rules**

2. Reemplaza con estas reglas:

```json
{
  "rules": {
    "players": {
      ".read": true,
      ".write": "auth != null"
    },
    "users": {
      ".read": true,
      "$uid": {
        ".write": "$uid === auth.uid"
      }
    },
    "gallery": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

3. Click en **"Publish"**

---

## PASO 6: Migrar Datos Existentes (Opcional)

Si ya tienes datos en LocalStorage:

1. Abre la consola del navegador (F12)

2. Ejecuta:
```javascript
JSON.parse(localStorage.getItem('pokemon-tournament-data'))
```

3. Copia los datos

4. En Firebase Console → Realtime Database → Data

5. Click en **"+"** → Pega los datos manualmente

---

## VERIFICAR QUE FUNCIONA

1. Guarda los cambios en `firebase.js`

2. Ejecuta:
```powershell
npm run dev
```

3. Abre la app en 2 navegadores diferentes

4. Haz un cambio en uno (ej: crea un jugador)

5. **Debería aparecer instantáneamente en el otro navegador** 🎉

---

## PROBLEMAS COMUNES

### Error: "Firebase: Error (auth/configuration-not-found)"
**Solución:** Falta `databaseURL` en la configuración.

### Error: "Permission denied"
**Solución:** Las reglas de seguridad están muy restrictivas. Usa "test mode" temporalmente.

### Los cambios no se sincronizan
**Solución:** Verifica que `databaseURL` sea correcto y apunte a tu Realtime Database.

### Error: "Firebase App named '[DEFAULT]' already exists"
**Solución:** Ya está inicializado, refresca la página.

---

## COMANDOS ÚTILES

### Ver estado de Firebase:
```powershell
# En la consola del navegador (F12):
firebase.database().ref().once('value', (snapshot) => console.log(snapshot.val()))
```

### Limpiar base de datos:
```javascript
// En Firebase Console → Database → Data
// Click en el nodo raíz → Delete
```

---

## COSTOS Y LÍMITES

**Plan Spark (Gratis):**
- ✅ 1 GB de almacenamiento
- ✅ 10 GB/mes de descarga
- ✅ 100 conexiones simultáneas
- ✅ Suficiente para ~50 jugadores activos

**Para más usuarios:** Actualiza a plan Blaze (pago por uso, ~$1-5/mes)

---

## PRÓXIMO PASO

Una vez configurado Firebase, ejecuta:

```powershell
$env:Path += ";C:\Program Files\Git\cmd"
git add .
git commit -m "feat: integración con Firebase para sincronización en tiempo real"
git push
```

Vercel se actualizará automáticamente y todos los usuarios verán los cambios en tiempo real!

---

**¿Necesitas ayuda?** Avísame cuando tengas la configuración de Firebase copiada.
