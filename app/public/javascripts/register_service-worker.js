if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('../service-worker.js');
 }

 navigator.serviceWorker.ready.then(function(swRegistration) {
   console.log("serviceWorker ready")
   return swRegistration.sync.register('SyncEvent');
 });
