const CACHE_NAME = 'habitflow-v6';

// Install immediately and take control
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Network-first strategy for index.html so updates are never skipped
self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('index.html') || e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request)
                .then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() => caches.match(e.request))
        );
    } else {
        e.respondWith(
            caches.match(e.request).then((response) => {
                return response || fetch(e.request);
            })
        );
    }
});
