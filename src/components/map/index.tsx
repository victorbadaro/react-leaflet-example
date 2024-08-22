import { MapContainer, Marker, Popup } from 'react-leaflet';
import { CustomTileLayer } from './custom-tile-layer';

export function Map() {
	return (
		<MapContainer
			center={[0, 0]}
			zoom={3}
			style={{
				height: '1000px'
			}}
		>
			<CustomTileLayer />
			<Marker position={[0, 0]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}
