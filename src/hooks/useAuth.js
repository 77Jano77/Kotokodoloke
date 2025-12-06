import { useState, useEffect } from 'react';
import { database, ref, onValue, set, get, update } from '../config/firebase';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Escuchar cambios en usuarios de Firebase
  useEffect(() => {
    const usersRef = ref(database, 'users');
    
    // Limpiar datos antiguos de LocalStorage
    localStorage.removeItem('tournament-users');
    localStorage.removeItem('tournament-current-user');
    
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const firebaseUsers = snapshot.val();
      if (firebaseUsers) {
        // Convertir objeto a array
        const usersArray = Object.keys(firebaseUsers).map(key => ({
          ...firebaseUsers[key],
          firebaseKey: key
        }));
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error al leer usuarios de Firebase:', error);
      setLoading(false);
    });

    // Recuperar usuario actual de sessionStorage (solo para la sesión actual)
    const savedUser = sessionStorage.getItem('tournament-current-user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    return () => unsubscribe();
  }, []);

  const register = async (username, password, email) => {
    try {
      // Verificar si el usuario ya existe
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
      const existingUsers = snapshot.val() || {};

      // Buscar duplicados
      const userExists = Object.values(existingUsers).find(
        u => u.username.toLowerCase() === username.toLowerCase()
      );
      if (userExists) {
        return { success: false, error: 'Este nombre de usuario ya está registrado' };
      }

      const emailExists = Object.values(existingUsers).find(
        u => u.email.toLowerCase() === email.toLowerCase()
      );
      if (emailExists) {
        return { success: false, error: 'Este correo electrónico ya está registrado' };
      }

      // Crear nuevo usuario
      const userId = `user_${Date.now()}`;
      const newUser = {
        id: userId,
        username,
        password, // En producción real, esto debería estar hasheado
        email,
        createdAt: new Date().toISOString(),
        hasPlayer: false,
        playerId: null,
        isAdmin: username.toLowerCase() === 'pescador_jano'
      };

      // Guardar en Firebase
      const userRef = ref(database, `users/${userId}`);
      await set(userRef, newUser);

      return { success: true, user: { ...newUser, firebaseKey: userId } };
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return { success: false, error: 'Error al registrar usuario' };
    }
  };

  const login = async (username, password) => {
    try {
      const user = users.find(
        u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );

      if (user) {
        setCurrentUser(user);
        sessionStorage.setItem('tournament-current-user', JSON.stringify(user));
        return { success: true, user };
      }

      return { success: false, error: 'Usuario o contraseña incorrectos' };
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return { success: false, error: 'Error al iniciar sesión' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('tournament-current-user');
  };

  const recoverPassword = async (email) => {
    try {
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (user) {
        // Simulación de envío de email
        console.log(`Contraseña enviada a ${email}: ${user.password}`);
        return { success: true, password: user.password, username: user.username };
      }

      return { success: false, error: 'No existe ninguna cuenta con este correo electrónico' };
    } catch (error) {
      console.error('Error al recuperar contraseña:', error);
      return { success: false, error: 'Error al recuperar contraseña' };
    }
  };

  const updateUserPlayer = async (playerId) => {
    if (!currentUser) return;

    try {
      const userRef = ref(database, `users/${currentUser.firebaseKey}`);
      await update(userRef, {
        hasPlayer: true,
        playerId: playerId
      });

      const updatedUser = { ...currentUser, hasPlayer: true, playerId };
      setCurrentUser(updatedUser);
      sessionStorage.setItem('tournament-current-user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  const deleteUserPlayer = async () => {
    if (!currentUser) return;

    try {
      const userRef = ref(database, `users/${currentUser.firebaseKey}`);
      await update(userRef, {
        hasPlayer: false,
        playerId: null
      });

      const updatedUser = { ...currentUser, hasPlayer: false, playerId: null };
      setCurrentUser(updatedUser);
      sessionStorage.setItem('tournament-current-user', JSON.stringify(updatedUser));
    } catch (error) {
      console.error('Error al eliminar jugador del usuario:', error);
    }
  };

  return {
    currentUser,
    users,
    loading,
    register,
    login,
    logout,
    recoverPassword,
    updateUserPlayer,
    deleteUserPlayer
  };
};
