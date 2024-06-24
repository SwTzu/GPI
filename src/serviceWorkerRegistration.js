// Este archivo tiene una configuración predeterminada para registrar el service worker.
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] es la dirección IPv6 localhost.
      window.location.hostname === '[::1]' ||
      // 127.0.0.0/8 se considera IPv4 localhost.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}$/
      )
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // El constructor de URL está disponible en todos los navegadores que soportan SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Nuestro service worker no funcionará si PUBLIC_URL está en un origen diferente.
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto se está ejecutando en localhost. Vamos a verificar si todavía existe un service worker anterior.
          checkValidServiceWorker(swUrl, config);
  
          // Añade más registros de consola para desarrolladores locales.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Esta aplicación está siendo servida en cache-first por un service worker. ' +
                'Para más detalles, visita https://bit.ly/CRA-PWA'
            );
          });
        } else {
          // No es localhost. Sólo registra el service worker.
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // En este punto, el contenido precacheado ha sido actualizado.
                console.log(
                  'Nuevo contenido está disponible y se servirá cuando todas ' +
                    'las pestañas del cliente estén cerradas.'
                );
  
                // Ejecuta el callback de configuración si se proporciona.
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // En este punto, todo ha sido precacheado.
                console.log('El contenido está cacheado para uso sin conexión.');
  
                // Ejecuta el callback de configuración si se proporciona.
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error durante el registro del service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Comprueba si el service worker se puede encontrar.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' }
    })
      .then(response => {
        // Asegúrate de que el service worker existe y el archivo JS es válido.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No se encontró el service worker. Probablemente un app antigua.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // El service worker fue encontrado. Procede con el registro.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No se encontró conexión a Internet. La aplicación está ejecutándose en modo sin conexión.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }
  