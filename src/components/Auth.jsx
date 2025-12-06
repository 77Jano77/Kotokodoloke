import { useState } from 'react';
import './Auth.css';

const Auth = ({ onLogin, onRegister, onRecover }) => {
  const [mode, setMode] = useState('login'); // 'login', 'register', 'recover'
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [recoveredPassword, setRecoveredPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'login') {
      if (!formData.username || !formData.password) {
        setError('⚠️ Completa todos los campos');
        return;
      }
      const result = await onLogin(formData.username, formData.password);
      if (!result.success) {
        setError(result.error);
      }
    } else if (mode === 'register') {
      if (!formData.username || !formData.password || !formData.email || !formData.confirmPassword) {
        setError('⚠️ Completa todos los campos');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('⚠️ Las contraseñas no coinciden');
        return;
      }
      if (formData.password.length < 4) {
        setError('⚠️ La contraseña debe tener al menos 4 caracteres');
        return;
      }
      if (!formData.email.includes('@')) {
        setError('⚠️ Introduce un correo electrónico válido');
        return;
      }
      const result = await onRegister(formData.username, formData.password, formData.email);
      if (!result.success) {
        setError(result.error);
      } else {
        setMode('login');
        setFormData({ username: formData.username, password: '', email: '', confirmPassword: '' });
        alert('✅ ¡Cuenta creada! Ahora puedes iniciar sesión');
      }
    } else if (mode === 'recover') {
      if (!formData.email) {
        setError('⚠️ Introduce tu correo electrónico');
        return;
      }
      const result = await onRecover(formData.email);
      if (!result.success) {
        setError(result.error);
        setRecoveredPassword(null);
      } else {
        setRecoveredPassword(result);
        setError('');
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setError('');
    setRecoveredPassword(null);
    setFormData({ username: '', password: '', email: '', confirmPassword: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-pokeball"></div>
      </div>

      <div className="auth-card pixel-card">
        <div className="auth-header">
          <h1 className="pixel-text">🎮 TORNEO POKÉMON</h1>
          <h2 className="auth-subtitle">NUZLOCKE 2025</h2>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
            INICIAR SESIÓN
          </button>
          <button
            className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => switchMode('register')}
          >
            REGISTRARSE
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'recover' ? (
            <>
              <h3 className="recover-title">🔑 RECUPERAR CONTRASEÑA</h3>
              <div className="form-group">
                <label>CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  name="email"
                  className="pixel-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>NOMBRE DE USUARIO</label>
                <input
                  type="text"
                  name="username"
                  className="pixel-input"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Ash Ketchum"
                  autoComplete="username"
                />
              </div>

              {mode === 'register' && (
                <div className="form-group">
                  <label>CORREO ELECTRÓNICO</label>
                  <input
                    type="email"
                    name="email"
                    className="pixel-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    autoComplete="email"
                  />
                </div>
              )}

              <div className="form-group">
                <label>CONTRASEÑA</label>
                <input
                  type="password"
                  name="password"
                  className="pixel-input"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                />
                {mode === 'register' && (
                  <div className="password-warning">
                    ⚠️ No uses una contraseña importante. El administrador podrá conocerla.
                  </div>
                )}
              </div>

              {mode === 'register' && (
                <div className="form-group">
                  <label>CONFIRMAR CONTRASEÑA</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="pixel-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />
                </div>
              )}
            </>
          )}

          {error && <div className="auth-error">{error}</div>}

          {recoveredPassword && (
            <div className="auth-success">
              <p className="success-title">✅ ¡CONTRASEÑA ENCONTRADA!</p>
              <p className="success-info">Usuario: <strong>{recoveredPassword.username}</strong></p>
              <p className="success-info">Contraseña: <strong>{recoveredPassword.password}</strong></p>
              <p className="success-note">Copia esta información antes de volver</p>
            </div>
          )}

          {!recoveredPassword && (
            <button type="submit" className="pixel-button auth-submit-btn">
              {mode === 'login' && '🎮 ENTRAR'}
              {mode === 'register' && '✨ CREAR CUENTA'}
              {mode === 'recover' && '📧 RECUPERAR CONTRASEÑA'}
            </button>
          )}

          {mode === 'login' && (
            <button
              type="button"
              className="auth-link-btn"
              onClick={() => switchMode('recover')}
            >
              ¿Olvidaste tu contraseña?
            </button>
          )}

          {mode === 'recover' && (
            <button
              type="button"
              className="auth-link-btn"
              onClick={() => switchMode('login')}
            >
              ← Volver a iniciar sesión
            </button>
          )}
        </form>

        <div className="auth-footer">
          <p className="pixel-text">¡CONVIÉRTETE EN MAESTRO POKÉMON!</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
