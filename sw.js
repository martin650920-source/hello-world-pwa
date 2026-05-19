const CACHE_NAME = 'hello-world-v1';
const ASSETS = [
  '/hello-world-pwa/',
  '/hello-world-pwa/index.html',
  '/hello-world-pwa/manifest.json'
];

// 安裝時快取所有資源
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 啟動時清除舊快取
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

// 攔截請求，優先用快取（離線可用）
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
