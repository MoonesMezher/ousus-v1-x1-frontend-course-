const SITE_STATIC_CACHE_NAME = "pwa-cache-v2";
const SITE_DYNAMIC_CACHE_NAME = "pwa-cache-dynamic-v2";

const assets = [
    "/",
    "/index.html",
    "/assets/index.css",
    "/assets/index.js",
    "/assets/lecture.css",
    "/logo.jpg",
    "/assets/images/logos/CSS.webp",
    "/assets/images/logos/github.webp",
    "/assets/images/logos/hosting.webp",
    "/assets/images/logos/html.webp",
    "/assets/images/logos/JS.webp",
    "/assets/images/logos/languages.jpg",
    "/assets/images/logos/React.webp",
    "/assets/images/logos/tailwind-css.webp",
    "/assets/images/logos/zus.png",
    "manifest.json"
]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(SITE_STATIC_CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );

    // console.log("service worker has been installed");
});

self.addEventListener("activate", event => {
    // console.log("service worker has been activated");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== SITE_STATIC_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(async res => {
                return caches.open(SITE_DYNAMIC_CACHE_NAME).then(cache => {
                    cache.put(event.request.url, res.clone());

                    return res;
                })
            });
        })
    );
    /* console.log("service worker has been fetched", event); */
});
