if ('serviceWorker' in navigator) {
  console.log("adding service-worker");
   navigator.serviceWorker
            .register('../service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
 }
