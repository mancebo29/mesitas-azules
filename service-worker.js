console.log('initializing service worker');
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async function() {
    try {
      const registration = await navigator.serviceWorker.register(
        './sw.js',
        {
          scope: './domino',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  });
}
