// registers SW
export default function registerSW() {
	if ('serviceWorker' in navigator) {
		const prefix = (window.location.host.indexOf('localhost') < 0) ? '/work' : '';
		navigator.serviceWorker.register(prefix + '/sw.js', { scope: prefix + '/' })
			.then(function (registration) {
				console.log('Service Worker Registered');
			});
		navigator.serviceWorker.ready.then(function (registration) {
			console.log('Service Worker Ready');
		});
	}
};
