import { MapContainer, TileLayer, Marker, Polyline, Tooltip, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

interface Coordinate {
  name: string;
  lat: number;
  lng: number;
  modeToNext: 'road' | 'air' | 'water' | null;
}

interface IndiaMapProps {
  coordinates: Coordinate[];
}

const center: [number, number] = [22.9734, 78.6569]; // Center of India
const zoom = 5;

const mapStyle = {
  height: 700,
  width: 500,
  margin: '0 auto', // Center horizontally
  display: 'block',
  background: '#fff',
};

function FitBounds({ coordinates }: { coordinates: Coordinate[] }) {
  const map = useMap();
  useEffect(() => {
    if (coordinates.length === 0) return;
    const latLngs = coordinates.map(c => [c.lat, c.lng] as [number, number]);
    const bounds = L.latLngBounds(latLngs);
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [coordinates, map]);
  return null;
}

export default function IndiaMap({ coordinates }: IndiaMapProps) {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const safeCoordinates = Array.isArray(coordinates) ? coordinates : [];

  // Build lines array
  const lines = [];
  for (let i = 0; i < safeCoordinates.length - 1; i++) {
    const curr = safeCoordinates[i];
    const next = safeCoordinates[i + 1];
    lines.push({
      positions: [ [curr.lat, curr.lng], [next.lat, next.lng] ],
      mode: curr.modeToNext,
    });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <MapContainer center={center} zoom={zoom} style={mapStyle} scrollWheelZoom={false}>
        <FitBounds coordinates={safeCoordinates} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        {/* Route circles (black) */}
        {safeCoordinates.slice(0, -1).map((coord, idx) => (
          <Circle key={idx} center={[coord.lat, coord.lng]} radius={12000} color="black" fillColor="black" fillOpacity={1} />
        ))}
        {/* Destination circle (red) */}
        {safeCoordinates.length > 0 && (
          <Circle center={[safeCoordinates[safeCoordinates.length - 1].lat, safeCoordinates[safeCoordinates.length - 1].lng]} radius={12000} color="red" fillColor="red" fillOpacity={1} />
        )}
        {/* Place names and selectable marks */}
        {safeCoordinates.map((coord, idx) => (
          <Marker
            key={idx}
            position={[coord.lat, coord.lng]}
            icon={L.divIcon({ className: '', iconSize: [0, 0] })}
            eventHandlers={{
              click: () => {
                alert(`You selected: ${coord.name}`);
              },
            }}
          >
            <Tooltip direction="bottom" offset={[0, 20]} permanent>
              <span style={{ fontWeight: 'bold', color: '#232323', fontSize: '0.8rem', background: 'rgba(255,255,255,1)', padding: '2px 6px', borderRadius: '6px', border: '1px solid #B89B5E' }}>{coord.name}</span>
            </Tooltip>
          </Marker>
        ))}
        {lines.map((line, idx) => (
          <Polyline
            key={idx}
            positions={line.positions as [number, number][]}
            pathOptions={{
              color: selectedLine === idx ? '#FF0000' : '#EF9120',
              dashArray: line.mode === 'road' ? undefined : '10,10',
              weight: selectedLine === idx ? 8 : 4,
              opacity: selectedLine === idx ? 1 : 0.7,
            }}
            eventHandlers={{
              click: () => setSelectedLine(idx),
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}