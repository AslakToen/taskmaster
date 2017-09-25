var Cache_version = 2;
var USED_CACHES = {
  app: "taskmaster-v" + Cache_version
}
/*this code should not be nessesary as the fetch event handels and caches all responses from the server. Keeping it to be safe
var filesToCache = [
  '/',
  '/javascripts/fetchData.js',
  '/javascripts/register_service-worker.js',
  '/stylesheets/style.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(USED_CACHES.app).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});*/



self.addEventListener('activate', function(e) {
  // Delete all caches that aren't named in USED_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  var expectedCacheNames = Object.keys(USED_CACHES).map(function(key) {
    return USED_CACHES[key];
  });

  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            // If this cache name isn't present in the array of "expected" cache names, then delete it.
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.open(USED_CACHES.font).then(function(cache) {
     return cache.match(e.request).then(function(response) {
       if (response) {
         console.log(' Found response in cache:', response);

         return response;
       }

       console.log(' No response for %s found in cache. About to fetch ' +
         'from network...', e.request.url);

       return fetch(e.request.clone()).then(function(response) {
         console.log('  Response for %s from network is: %O',
           e.request.url, response);
           console.log("RESPONSE STATUS IS: " + response.status)
         if (response.status < 400 ) {
           console.log('  Caching the response to', e.request.url);
           cache.put(e.request, response.clone());
         } else {
            console.log('  Not caching the response to', event.request.url);
         }

         return response;
       });
     }).catch(function(error) {
       console.error('  Error in fetch handler:', error);

       throw error;
     });
   })
 );
});
