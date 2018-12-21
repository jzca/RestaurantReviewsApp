const staticCache = 'my-cache-1';

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.filter(cacheName => {
					return cacheName.startsWith('my-') && (cacheName !== staticCache)
				}).map(cacheName => {
					return caches.delete(cacheName);
				})
			)
		})
	)
})

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(staticCache).then(function (cache) {
			return cache.addAll(
				[
					'img/1.jpg',
					'img/2.jpg',
					'img/3.jpg',
					'img/4.jpg',
					'img/5.jpg',
					'img/6.jpg',
					'img/7.jpg',
					'img/8.jpg',
					'img/9.jpg',
					'img/10.jpg',
					'img/icons-192.png',
					'img/icons-512.png',
					'css/styles.css',
					'data/manifest.json',
					'data/restaurants.json',
					'js/dbhelper.js',
					'js/main.js',
					'js/restaurant_info.js',
					'./',
					'restaurant.html',
					'https://unpkg.com/leaflet@1.3.1/dist/images/layers-2x.png',
					'https://unpkg.com/leaflet@1.3.1/dist/images/layers.png',
					'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon-2x.png',
					'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
					'https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png',
					'https://unpkg.com/leaflet@1.3.1/dist/leaflet-src.js',
					'https://unpkg.com/leaflet@1.3.1/dist/leaflet-src.js.map',
					'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
					'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
					'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js.map',
					'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js',
					'https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css',
					'index.html'
				]
			);
		})
	);
});


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
// 		caches.match(event.request).then(function (response) {
//         return response || fetch(event.request).then(function(response) {
//           caches.put(event.request, response.clone());
//           return response;
//         });
//     })
//   );
// });

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || (fetch(event.request))
		})
	);
});