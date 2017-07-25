import GeoPattern from 'geopattern'

export default function pattern (key) {
	return GeoPattern.generate(key, {
		baseColor: '#d2f9a8' // #f0fab8
	});
}
