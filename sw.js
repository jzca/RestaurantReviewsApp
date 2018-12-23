// API KEY
const my_Key = 'access_token=pk.eyJ1Ijoic2VudHZpcmdvIiwiYSI6ImNqcHhnYzFndDBxMXM0M3FsNm96Z2t6MGgifQ.YSeDwNBRUg8Crf2xzGRZDA';



const staticCache = 'my-cache-app-1';

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.filter(cacheName => {
					return cacheName.startsWith('my-') && (cacheName !== staticCache)
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
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24639.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24639.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24646.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24647.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19302/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24646.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24647.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19303/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24630.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24630.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24642.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24643.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24642.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24643.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24649.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19293/24650.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24649.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19294/24650.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19299/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19296/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19306/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24634.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19305/24634.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24639.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24639.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24646.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24647.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24646.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24647.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19304/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24630.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24633.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24636.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24649.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24643.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24642.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24643.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24650.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24648.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24649.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19295/24650.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19298/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24635.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24637.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24638.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24632.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24631.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19300/24630.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19308/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19309/24640.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19310/24641.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19307/24642.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19292/24649.jpg70?${my_Key}`,
					`https://api.tiles.mapbox.com/v4/mapbox.streets/16/19301/24636.jpg70?${my_Key}`,
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