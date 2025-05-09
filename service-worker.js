self.addEventListener('install', e => {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', e => {
    // Puedes añadir caché aquí si deseas offline
  });
  