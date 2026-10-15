/* Service Worker für „Becoming Swiss" — Offline-Fähigkeit (Cache-First).
   Bei jeder Inhaltsänderung CACHE_VERSION erhöhen, damit Nutzer das Update erhalten. */
const CACHE_VERSION = 'becoming-swiss-v2';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
  'fonts.css',
  'fonts/fraunces-latin-500-normal.woff2',
  'fonts/fraunces-latin-600-normal.woff2',
  'fonts/fraunces-latin-700-normal.woff2',
  'fonts/outfit-latin-300-normal.woff2',
  'fonts/outfit-latin-400-normal.woff2',
  'fonts/outfit-latin-500-normal.woff2',
  'fonts/outfit-latin-600-normal.woff2',
  'fonts/outfit-latin-700-normal.woff2'
];

// Installieren: App-Shell in den Cache legen
self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache){
      // addAll schlägt fehl, wenn EINE Datei fehlt → einzeln & fehlertolerant cachen
      return Promise.all(ASSETS.map(function(url){
        return cache.add(url).catch(function(){ /* Icon evtl. nicht vorhanden — ignorieren */ });
      }));
    })
  );
  self.skipWaiting();
});

// Aktivieren: alte Caches aufräumen
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE_VERSION; })
                             .map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// Abrufen: zuerst Cache, dann Netz; bei Netz-Erfolg Cache aktualisieren
self.addEventListener('fetch', function(event){
  if(event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function(cached){
      const fetchPromise = fetch(event.request).then(function(networkResp){
        // Erfolgreiche Antworten in den Cache spiegeln
        if(networkResp && networkResp.status===200 && networkResp.type==='basic'){
          const copy = networkResp.clone();
          caches.open(CACHE_VERSION).then(function(cache){ cache.put(event.request, copy); });
        }
        return networkResp;
      }).catch(function(){
        // Offline und nicht im Cache → für Navigationen index.html liefern
        if(event.request.mode==='navigate') return caches.match('index.html');
      });
      return cached || fetchPromise;
    })
  );
});
