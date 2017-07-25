export default function pathResolver (uri) {
	return uri.replace(/^\/+/g, '');
}
