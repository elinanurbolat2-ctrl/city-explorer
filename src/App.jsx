import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in Leaflet with bundlers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const youthShops = [
  { name: 'Mega Alma-Ata', position: [43.2023, 76.8988], description: 'Large mall with youth fashion brands and entertainment' },
  { name: 'Dostyk Plaza', position: [43.2380, 76.9456], description: 'Premium shopping center with trendy youth stores' },
  { name: 'Esentai Mall', position: [43.2185, 76.9575], description: 'Luxury mall with international youth brands' },
  { name: 'ADK Mall', position: [43.2567, 76.9284], description: 'Popular spot for youth clothing and accessories' },
  { name: 'Forum Almaty', position: [43.2345, 76.9123], description: 'Shopping center with sports and streetwear shops' },
  { name: 'MEGA Park', position: [43.2112, 76.8654], description: 'Entertainment and shopping hub for young people' },
  { name: 'Almaly Mall', position: [43.2456, 76.9345], description: 'Youth-oriented shops and cafes' },
]

function App() {
  return (
    <div className="app">
      <h1>Almaty Youth Shops</h1>
      <MapContainer center={[43.2220, 76.9120]} zoom={12} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {youthShops.map((shop) => (
          <Marker key={shop.name} position={shop.position}>
            <Popup>
              <strong>{shop.name}</strong>
              <br />
              {shop.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App
