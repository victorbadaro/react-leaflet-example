import { TileLayer } from 'react-leaflet';

const { VITE_MAPBOX_USERNAME, VITE_MAPBOX_STYLEID, VITE_MAPBOX_API_KEY } = import.meta.env;

export function CustomTileLayer() {
	return VITE_MAPBOX_API_KEY ? (
		<TileLayer
			attribution={'&copy; <a href="https://apps.mapbox.com/feedback/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
			url={`https://api.mapbox.com/styles/v1/${VITE_MAPBOX_USERNAME}/${VITE_MAPBOX_STYLEID}/tiles/{z}/{x}/{y}@2x?access_token=${VITE_MAPBOX_API_KEY}`}
		/>
	) : (
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	);
}
