import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import "leaflet/dist/leaflet.css";
import './Map.css';

function App() {
  return (
    <MapContainer center={[59.9274,10.707]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
    url="/styles/basic-preview/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default App;
