// Service worker for Speed Typer — caches the app shell so it works fully offline.
const CACHE = 'speed-typer-v6';
const CORE = [
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        // runtime-cache same-origin assets and the Google Fonts files (so fonts work offline next time)
        try {
          var url = new URL(req.url);
          if (url.origin === self.location.origin || /gstatic|googleapis/.test(url.host)) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(req, copy); });
          }
        } catch (err) {}
        return res;
      }).catch(function () {
        // offline fallback: serve the app shell for navigations
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
