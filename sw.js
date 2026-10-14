const CACHE_NAME = 'habitflow-v2';
const ASSETS_TO_CACHE = [
    './index.html',
    './manifest.json',
    './icon.png'
];

// Install Event: Cache new files
self.addEventListener('install', (e) => {
    self.skipWaiting(); // Forces the waiting service worker to become active
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event: Wipe out old v1 cache instantly
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Deleting old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Serve cached content or fetch fresh
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
