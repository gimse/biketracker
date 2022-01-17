import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import VectorTileLayer from 'react-leaflet-vector-tile-layer';
//import "leaflet/dist/leaflet.css";
import './Map.css';


const outerBounds = [
  [59.81877,10.470149],
  [60.02576,10.945497],
]

function App() {


  return (
    <MapContainer center={[59.9274,10.707]} maxBounds={outerBounds} zoom={11} minZoom={11} maxZoom={14} scrollWheelZoom={true}>
      <VectorTileLayer
      styleUrl="/styles/basic-preview/style.json"
        
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default App;
