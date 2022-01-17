import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
//import "leaflet/dist/leaflet.css";
import './Map.css';

function App() {
  return (
    <MapContainer center={[59.9274,10.707]} zoom={12}scrollWheelZoom={false}>
      <VectorTileLayer
      styleUrl="/styles/basic-preview/style.json"
      //url="/data/v3/{z}/{x}/{y}.pbf"
        
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default App;
