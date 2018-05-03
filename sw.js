var filesToCache = [
	'index.html',
	'dist/bundle.js',
	'https://fonts.googleapis.com/css?family=Open+Sans:400,700',
	'https://buttons.github.io/buttons.js',
];

// only work when deployed
if (self.registration.scope.indexOf("localhost") < 0) {
	filesToCache.push('dist/styles.css');
	filesToCache.push('dist/vendor.bundle.js');
}

const version = '1.0';
const staticCacheName = 'showcase-cache-' + version;

self.addEventListener('install', function (event) {
	console.log('Attempting to install service worker and cache static assets');
	event.waitUntil(
		caches.open(staticCacheName)
			.then(function (cache) {
				return cache.addAll(filesToCache);
			})
	);
});

function addURLToCache(event) {
	fetch(event.request).then(function (response) {
		caches.open(staticCacheName).then(function (cache) {
			console.log('[lazy] had to put ' + event.request.url + ' in cache');
			cache.put(event.request.url, response.clone());
		});
	}).catch((err) => {
		console.log('lazy update failed for ' + event.request.url + '\n' + err);
	})
}

self.addEventListener('fetch', function (event) {
	console.log('Fetch event for ', event.request.url);
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				console.log('Found ', event.request.url, ' in cache');
				// lazy update cache
				setTimeout(() => {
					addURLToCache(event)
				}, 200);
				return response;
			}
			console.log('Network request for ', event.request.url);
			return fetch(event.request).then(function (response) {
				// TODO 5 - Respond with custom 404 page
				return caches.open(staticCacheName).then(function (cache) {
					console.log('had to put ' + event.request.url + ' in cache');
					cache.put(event.request.url, response.clone());
					return response;
				});
			});
		}).catch(function (error) {
			// TODO 6 - Respond with custom offline page
		})
	);
});

self.addEventListener('activate', function (event) {
	console.log('Activating new service worker...');

	let cacheWhitelist = [staticCacheName];

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
