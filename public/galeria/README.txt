CARPETA GALERIA
================

Esta carpeta está destinada para almacenar las imágenes subidas a la galería.

NOTA TÉCNICA:
Actualmente, las imágenes se almacenan como base64 en localStorage debido a que
no hay un backend configurado. Para almacenar archivos reales en esta carpeta,
sería necesario implementar un servidor backend con endpoints para:
- Subir archivos (POST /api/upload)
- Obtener archivos (GET /api/images)
- Eliminar archivos (DELETE /api/images/:id)

El sistema actual funciona correctamente para desarrollo y pruebas locales.
