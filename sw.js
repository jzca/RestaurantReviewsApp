// API KEY
const my_Key = 'access_token=pk.eyJ1Ijoic2VudHZpcmdvIiwiYSI6ImNqcHhnYzFndDBxMXM0M3FsNm96Z2t6MGgifQ.YSeDwNBRUg8Crf2xzGRZDA';



const staticCache = 'my-cache-app-1';

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.filter(cacheName => {
					return (cacheName.startsWith('my-') && (cacheName !== staticCache))
				}).map(cacheName => {
					return caches.delete(cacheName);
				})
			).catch(err => console.log('Activate: '+err))
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
					'restaurant.html?id=1',
					'restaurant.html?id=2',
					'restaurant.html?id=3',
					'restaurant.html?id=4',
					'restaurant.html?id=5',
					'restaurant.html?id=6',
					'restaurant.html?id=7',
					'restaurant.html?id=8',
					'restaurant.html?id=9',
					'restaurant.html?id=10',
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
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1540.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1207/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1205/1540.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1540.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1206/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1204/1540.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1203/1540.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1539.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/12/1208/1540.jpg70?${my_Key}`,
					'index.html'
				]
			);
		}).catch(err => console.log('Install: '+err))
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || (fetch(event.request))
		}).catch(err => console.log('Fetch: '+err))
	);
});