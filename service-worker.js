var cacheName = 'weatherPWA-step-5-2';
var filesToCache = [
    '/',
    '/index.html',
    'app/app.js',
    'styles/style.css',
    '/components/add/add.html',
    '/components/add/add.js',
    '/components/edit/edit.html',
    '/components/edit/edit.js',
    '/components/home/home.html',
    '/components/home/home.js',
    '/components/login/login.html',
    '/components/login/login.js',
    '/components/view/view.html',
    '/components/view/view.js',
    '/images/facebook.svg',
    '/images/facebook_alt.svg',
    '/images/github_alt.svg',
    '/images/ic_delete_24px.svg',
    '/images/ic_email_48.svg',
    '/images/ic_location_on_48px.svg',
    '/images/ic_mode_edit_24px.svg',
    '/images/ic_person_24px.svg',
    '/images/ic_person_black_24px.svg',
    '/images/ic_phone_48px.svg',
    '/images/linkedin.svg',
    '/images/linkedin_alt.svg',
    '/images/login.svg',
    '/images/me.svg',
    '/images/twitter_alt.svg'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});