import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

type StopState = 'active' | 'visited' | 'upcoming';

/**
 * Small teardrop pin marker — fixed pixel size (so it stays neat when zoomed
 * in) with a white centre. The active stop is red, larger and pulses; visited
 * stops are dark; upcoming stops are muted.
 */
function pinIcon(state: StopState) {
  const isActive = state === 'active';
  const color = isActive ? '#E11D2A' : state === 'visited' ? '#2B2B2B' : '#A39C88';
  const w = isActive ? 24 : 18;
  const h = Math.round(w * 1.32);
  const pulse = isActive
    ? `<span class="li-map-pin-pulse" style="background:${color}"></span>`
    : '';
  const svg =
    `<svg width="${w}" height="${h}" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.35))">` +
    `<path d="M12 0C5.373 0 0 5.373 0 12c0 8.4 10.2 18.6 11.4 19.76a.86.86 0 0 0 1.2 0C13.8 30.6 24 20.4 24 12 24 5.373 18.627 0 12 0z" fill="${color}"/>` +
    `<circle cx="12" cy="12" r="5.5" fill="#ffffff"/>` +
    `<circle cx="12" cy="12" r="2.6" fill="${color}"/>` +
    `</svg>`;
  return L.divIcon({
    className: 'li-map-pin',
    html: `<span class="li-map-pin-box" style="width:${w}px;height:${h}px">${pulse}${svg}</span>`,
    iconSize: [w, h],
    iconAnchor: [w / 2, h],
    tooltipAnchor: [0, 0],
  });
}

interface Coordinate {
  name: string;
  lat: number;
  lng: number;
  modeToNext: 'road' | 'air' | 'water' | null;
}

interface IndiaMapProps {
  coordinates: Coordinate[];
  /** Index of the stop the traveller is at on the day currently in view. */
  activeIndex?: number;
}

const center: [number, number] = [22.9734, 78.6569]; // Center of India
const zoom = 5;

const mapStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  display: 'block',
  background: '#fff',
};

/**
 * Pans / zooms the map to follow the active day. On the first stop (or a stay
 * day where the traveller doesn't move) it centres on that city; on a travel
 * day it frames the leg just completed (previous stop → current stop) so the
 * highlighted route segment is visible. With no active index it fits the whole
 * journey.
 */
function FollowActive({
  coordinates,
  activeIndex,
}: {
  coordinates: Coordinate[];
  activeIndex?: number;
}) {
  const map = useMap();

  // Leaflet can render with a stale size inside the sticky column (grey tiles /
  // wrong centring). Recalculate once it has laid out, and on resize.
  useEffect(() => {
    const fix = () => map.invalidateSize({ animate: false });
    const t = setTimeout(fix, 250);
    window.addEventListener('resize', fix);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', fix);
    };
  }, [map]);

  useEffect(() => {
    if (coordinates.length === 0) return;

    if (activeIndex == null) {
      map.fitBounds(
        L.latLngBounds(coordinates.map((c) => [c.lat, c.lng] as [number, number])),
        { padding: [40, 40] }
      );
      return;
    }

    // Debounce: while the user scrolls quickly past several days, collapse the
    // changes into a single smooth move to where they come to rest, instead of
    // a stack of interrupted fly animations (the cause of the jitter).
    const timer = setTimeout(() => {
      const i = Math.max(0, Math.min(activeIndex, coordinates.length - 1));
      const to = coordinates[i];
      const from = coordinates[Math.max(0, i - 1)];
      const sameSpot = from.lat === to.lat && from.lng === to.lng;
      const ease = { duration: 1.4, easeLinearity: 0.22 } as const;

      if (i === 0 || sameSpot) {
        map.flyTo([to.lat, to.lng], 6.5, ease);
      } else {
        map.flyToBounds(
          L.latLngBounds([
            [from.lat, from.lng],
            [to.lat, to.lng],
          ]),
          { padding: [80, 80], maxZoom: 7.5, ...ease }
        );
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [activeIndex, coordinates, map]);
  return null;
}

export default function IndiaMap({ coordinates, activeIndex }: IndiaMapProps) {
  const safeCoordinates = Array.isArray(coordinates) ? coordinates : [];

  // Resolve the highlighted stop (defaults to the final stop when no day is
  // active, i.e. the whole route reads as completed).
  const active =
    safeCoordinates.length === 0
      ? -1
      : activeIndex == null
        ? safeCoordinates.length - 1
        : Math.max(0, Math.min(activeIndex, safeCoordinates.length - 1));

  // Build lines array
  const lines = [];
  for (let i = 0; i < safeCoordinates.length - 1; i++) {
    const curr = safeCoordinates[i];
    const next = safeCoordinates[i + 1];
    lines.push({
      positions: [[curr.lat, curr.lng], [next.lat, next.lng]],
      mode: curr.modeToNext,
    });
  }

  return (
    // `data-lenis-prevent` releases scroll inside the map so wheel events
    // pan/zoom Leaflet natively instead of being captured by the global
    // smooth-scroll loop.
    <div data-lenis-prevent style={{ width: '100%', height: '100%' }}>
      <MapContainer center={center} zoom={zoom} style={mapStyle} scrollWheelZoom={false}>
        <FollowActive coordinates={safeCoordinates} activeIndex={activeIndex} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

        {/* Stop pins — active red & pulsing, visited dark, upcoming muted */}
        {safeCoordinates.map((coord, idx) => {
          const state: StopState = idx === active ? 'active' : idx < active ? 'visited' : 'upcoming';
          return (
            <Marker key={idx} position={[coord.lat, coord.lng]} icon={pinIcon(state)}>
              <Tooltip direction="bottom" offset={[0, 3]} permanent className="li-map-label">
                <span
                  style={{
                    fontWeight: 'bold',
                    color: idx === active ? '#E11D2A' : '#232323',
                    fontSize: '0.8rem',
                    textShadow:
                      '0 1px 2px rgba(255,255,255,0.95), 0 0 2px rgba(255,255,255,0.95)',
                  }}
                >
                  {coord.name}
                </span>
              </Tooltip>
            </Marker>
          );
        })}

        {/* Route — a soft green path. The leg arriving at the active stop is the
            strongest green; earlier legs (the journey so far) are a lighter
            green; upcoming legs are a faint, thin dashed line. */}
        {lines.map((line, idx) => {
          const traveled = idx < active; // segment already completed
          const currentLeg = idx === active - 1; // leg arriving at the active stop
          const onPath = traveled || currentLeg;
          return (
            <Polyline
              key={idx}
              positions={line.positions as [number, number][]}
              pathOptions={{
                color: currentLeg ? '#15803D' : traveled ? '#34C759' : '#AFCBB8',
                dashArray: onPath ? (line.mode === 'road' ? undefined : '8,9') : '3,8',
                weight: currentLeg ? 4.5 : traveled ? 3.5 : 2,
                opacity: currentLeg ? 0.95 : traveled ? 0.75 : 0.45,
                lineCap: 'round',
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
