import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, update, push, remove, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Configuración de Firebase para Kotokodos Cup
const firebaseConfig = {
  apiKey: "AIzaSyBrGcWd_3oLMS_mvdduRfZgFJiSzgrGQ50",
  authDomain: "kotokodos-cup.firebaseapp.com",
  databaseURL: "https://kotokodos-cup-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kotokodos-cup",
  storageBucket: "kotokodos-cup.firebasestorage.app",
  messagingSenderId: "14238728414",
  appId: "1:14238728414:web:cf8a7057f35eea4e7b824f7b824f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth, ref, onValue, set, update, push, remove, get };
