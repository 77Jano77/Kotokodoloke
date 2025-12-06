import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('tournament-users');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tournament-users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const savedUser = localStorage.getItem('tournament-current-user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const register = (username, password, email) => {
    // Validar que el usuario no exista
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
      return { success: false, error: 'Este nombre de usuario ya está registrado' };
    }

    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'Este correo electrónico ya está registrado' };
    }

    const newUser = {
      id: Date.now(),
      username,
      password, // En producción real, esto debería estar hasheado
      email,
      createdAt: new Date().toISOString(),
      hasPlayer: false,
      playerId: null,
      isAdmin: username.toLowerCase() === 'pescador_jano'
    };

    setUsers([...users, newUser]);
    return { success: true, user: newUser };
  };

  const login = (username, password) => {
    const user = users.find(
      u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      localStorage.setItem('tournament-current-user', JSON.stringify(user));
      return { success: true, user };
    }

    return { success: false, error: 'Usuario o contraseña incorrectos' };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('tournament-current-user');
  };

  const recoverPassword = (email) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (user) {
      // Simulación de envío de email
      console.log(`Contraseña enviada a ${email}: ${user.password}`);
      return { success: true, password: user.password, username: user.username };
    }

    return { success: false, error: 'No existe ninguna cuenta con este correo electrónico' };
  };

  const updateUserPlayer = (playerId) => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, hasPlayer: true, playerId };
    const updatedUsers = users.map(u => 
      u.id === currentUser.id ? updatedUser : u
    );

    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('tournament-current-user', JSON.stringify(updatedUser));
  };

  const deleteUserPlayer = () => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, hasPlayer: false, playerId: null };
    const updatedUsers = users.map(u => 
      u.id === currentUser.id ? updatedUser : u
    );

    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('tournament-current-user', JSON.stringify(updatedUser));
  };

  return {
    currentUser,
    users,
    register,
    login,
    logout,
    recoverPassword,
    updateUserPlayer,
    deleteUserPlayer
  };
};
