import { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = ({ audioControls, auth, tournamentData }) => {
  const audioRef = useRef(null);
  const images = tournamentData?.gallery || [];
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Limpiar localStorage antiguo
  useEffect(() => {
    localStorage.removeItem('gallery-images');
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioControls.volume / 100;
      audioRef.current.muted = audioControls.isMuted;
      audioRef.current.play().catch(err => console.log('Audio play prevented:', err));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audioControls.volume / 100;
      audioRef.current.muted = audioControls.isMuted;
    }
  }, [audioControls.volume, audioControls.isMuted]);

  const [newImage, setNewImage] = useState({
    url: '',
    title: '',
    comment: '',
    author: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(prev => ({
        ...prev,
        url: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    
    if (!newImage.url || !newImage.title) {
      alert('⚠️ DEBES SUBIR UNA IMAGEN Y DARLE UN TÍTULO');
      return;
    }

    const imageToAdd = {
      id: Date.now(),
      ...newImage,
      userId: auth.currentUser.id,
      username: auth.currentUser.username,
      date: new Date().toLocaleDateString()
    };

    tournamentData.addGalleryImage(imageToAdd);
    
    // Reset form
    setNewImage({
      url: '',
      title: '',
      comment: '',
      author: auth.currentUser.username
    });
    setShowUploadModal(false);
  };

  const handleDeleteImage = (imageId) => {
    const image = images.find(img => img.id === imageId);
    const canDelete = auth.currentUser?.isAdmin || image.userId === auth.currentUser?.id;
    
    if (!canDelete) {
      alert('⚠️ NO TIENES PERMISO PARA ELIMINAR ESTA IMAGEN');
      return;
    }

    if (confirm('¿Eliminar esta imagen?')) {
      tournamentData.deleteGalleryImage(imageId);
      setSelectedImage(null);
    }
  };

  return (
    <div className="gallery-container">
      <audio ref={audioRef} loop>
        <source src="/music/Galeria.mp3" type="audio/mpeg" />
      </audio>
      <div className="gallery-header">
        <h1 className="pixel-text">📸 GALERÍA</h1>
        {auth.currentUser && (
          <button 
            className="pixel-button upload-btn"
            onClick={() => setShowUploadModal(true)}
          >
            ➕ SUBIR IMAGEN
          </button>
        )}
      </div>

      {/* Gallery Grid */}
      {images.length > 0 ? (
        <div className="gallery-grid">
          {images.map(image => (
            <div 
              key={image.id} 
              className="gallery-item pixel-card"
              onClick={() => setSelectedImage(image)}
            >
              <div className="gallery-image-container">
                <img src={image.url} alt={image.title} />
              </div>
              <div className="gallery-item-info">
                <h3>{image.title}</h3>
                {image.author && (
                  <p className="gallery-author">por {image.author}</p>
                )}
                <p className="gallery-date">{image.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="gallery-empty pixel-card">
          <p className="empty-icon">📷</p>
          <h2>GALERÍA VACÍA</h2>
          <p>Sube capturas de tus mejores momentos del torneo</p>
          {auth.currentUser && (
            <button 
              className="pixel-button"
              onClick={() => setShowUploadModal(true)}
            >
              ➕ SUBIR PRIMERA IMAGEN
            </button>
          )}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay" onClick={() => setShowUploadModal(false)}>
          <div className="modal-content pixel-card" onClick={(e) => e.stopPropagation()}>
            <h2>📸 SUBIR IMAGEN</h2>
            
            <form className="upload-form" onSubmit={handleSubmitImage}>
              <div className="form-group">
                <label>SELECCIONA IMAGEN *</label>
                <div className="image-upload-area">
                  {newImage.url ? (
                    <div className="preview-container">
                      <img src={newImage.url} alt="Preview" />
                      <button 
                        type="button"
                        className="change-image-btn"
                        onClick={() => document.getElementById('image-upload').click()}
                      >
                        CAMBIAR IMAGEN
                      </button>
                    </div>
                  ) : (
                    <label htmlFor="image-upload" className="upload-placeholder">
                      <span className="upload-icon">📷</span>
                      <span>CLICK PARA SUBIR</span>
                    </label>
                  )}
                  <input 
                    type="file" 
                    id="image-upload"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>TÍTULO *</label>
                <input 
                  type="text" 
                  className="pixel-input"
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                  placeholder="Ej: Mi equipo final"
                  required
                />
              </div>

              <div className="form-group">
                <label>AUTOR</label>
                <input 
                  type="text" 
                  className="pixel-input"
                  value={newImage.author || auth.currentUser?.username || ''}
                  onChange={(e) => setNewImage({...newImage, author: e.target.value})}
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-group">
                <label>COMENTARIO</label>
                <textarea 
                  className="pixel-input"
                  rows="4"
                  value={newImage.comment}
                  onChange={(e) => setNewImage({...newImage, comment: e.target.value})}
                  placeholder="Describe tu imagen..."
                />
              </div>

              <div className="modal-actions">
                <button type="submit" className="pixel-button confirm-btn">
                  ✓ SUBIR
                </button>
                <button 
                  type="button"
                  className="pixel-button cancel-btn"
                  onClick={() => setShowUploadModal(false)}
                >
                  ✕ CANCELAR
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Image Detail Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content modal-image-detail pixel-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <div className="detail-image-container">
              <img src={selectedImage.url} alt={selectedImage.title} />
            </div>

            <div className="detail-info">
              <h2>{selectedImage.title}</h2>
              
              <div className="detail-meta">
                {selectedImage.author && (
                  <p className="detail-author">👤 {selectedImage.author}</p>
                )}
                {selectedImage.username && (
                  <p className="detail-username">
                    🎮 Subido por: {selectedImage.username}
                    {auth.currentUser?.isAdmin && selectedImage.userId === auth.currentUser?.id && 
                      <span className="admin-badge"> 👑 ADMIN</span>
                    }
                  </p>
                )}
                <p className="detail-date">📅 {selectedImage.date}</p>
              </div>

              {selectedImage.comment && (
                <div className="detail-comment">
                  <p>{selectedImage.comment}</p>
                </div>
              )}

              {(() => {
                const canDelete = auth.currentUser?.isAdmin || selectedImage.userId === auth.currentUser?.id;
                return canDelete ? (
                  <button 
                    className="pixel-button delete-image-btn"
                    onClick={() => handleDeleteImage(selectedImage.id)}
                  >
                    🗑️ ELIMINAR
                  </button>
                ) : (
                  <div className="no-permission-notice">
                    🔒 Solo el autor o un admin pueden eliminar esta imagen
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Info */}
      <div className="gallery-info pixel-card">
        <h2>ℹ️ SOBRE LA GALERÍA</h2>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-icon">📷</span>
            <p>Comparte capturas de pantalla de tus mejores momentos</p>
          </div>
          <div className="info-item">
            <span className="info-icon">🏆</span>
            <p>Muestra tus equipos ganadores y batallas épicas</p>
          </div>
          <div className="info-item">
            <span className="info-icon">💬</span>
            <p>Agrega comentarios para contar tu historia</p>
          </div>
          <div className="info-item">
            <span className="info-icon">🗑️</span>
            <p>Haz click en una imagen para ver detalles o eliminarla</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
