import { MapContainer, TileLayer, Marker, Polyline, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Fragment, useEffect } from 'react';

type StopState = 'active' | 'visited' | 'upcoming';
type TransportMode = 'road' | 'air' | 'rail' | 'water';

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

// ── Transport-mode vehicle glyphs ───────────────────────────────────────────
// A single vehicle icon rides the leg in view, switching to match the mode:
// car for a drive, flight for air, train for rail, boat for a water crossing.
const MODE_PATHS: Record<TransportMode, string> = {
  road:
    '<path d="M3 13l1.6-4.5A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.5L21 13v4a1 1 0 0 1-1 1h-1"/><path d="M5 18H4a1 1 0 0 1-1-1v-4"/><path d="M3 13h18"/><circle cx="7.3" cy="18" r="1.7"/><circle cx="16.7" cy="18" r="1.7"/>',
  air:
    '<path d="M21 14.6v-1.7l-7.5-4.3V4.2a1.5 1.5 0 0 0-3 0v4.4L3 12.9v1.7l7.5-2.1v3.9l-2 1.4v1.5l3.5-1 3.5 1v-1.5l-2-1.4v-3.9z"/>',
  rail:
    '<rect x="6" y="3.5" width="12" height="12.5" rx="2.5"/><path d="M6 11h12"/><circle cx="9.4" cy="13.4" r="0.9"/><circle cx="14.6" cy="13.4" r="0.9"/><path d="M8.4 20l2.1-4M15.6 20l-2.1-4"/>',
  water:
    '<path d="M4 14h16l-2.3 5H6.3z"/><path d="M12 3.5v8.5"/><path d="M12 6l5 1.9-5 1.9"/>',
};
// Air reads best as a filled silhouette; the rest as clean stroked icons.
const MODE_FILLED: Record<TransportMode, boolean> = { road: false, air: true, rail: false, water: false };

function modeGlyphSvg(mode: TransportMode, color: string, px: number): string {
  const paint = MODE_FILLED[mode] ? `fill="${color}" stroke="none"` : `fill="none" stroke="${color}"`;
  return (
    `<svg width="${px}" height="${px}" viewBox="0 0 24 24" ${paint} ` +
    `stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:block">` +
    `${MODE_PATHS[mode]}</svg>`
  );
}

/** A single round chip carrying the vehicle glyph, floated just above the
 *  destination city pin. */
function vehicleIcon(mode: TransportMode) {
  const size = 30;
  return L.divIcon({
    className: 'li-mode-badge',
    html:
      `<span class="li-mode-badge-box" style="width:${size}px;height:${size}px">` +
      `${modeGlyphSvg(mode, '#15803D', 16)}</span>`,
    iconSize: [size, size],
    // Anchor below the chip so it sits above the active (tall) teardrop pin.
    iconAnchor: [size / 2, size + 34],
  });
}

interface Coordinate {
  name: string;
  lat: number;
  lng: number;
  modeToNext: TransportMode | null;
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

  // Build the leg list between consecutive stops.
  const lines: {
    positions: [number, number][];
    mode: TransportMode | null;
    sameSpot: boolean;
  }[] = [];
  for (let i = 0; i < safeCoordinates.length - 1; i++) {
    const curr = safeCoordinates[i];
    const next = safeCoordinates[i + 1];
    lines.push({
      positions: [
        [curr.lat, curr.lng],
        [next.lat, next.lng],
      ],
      mode: curr.modeToNext,
      sameSpot: curr.lat === next.lat && curr.lng === next.lng,
    });
  }

  // The vehicle icon sits at the destination city — the stop currently being
  // arrived at — and shows the mode used to reach it. Nothing to show while
  // sitting at the very first stop (no arriving leg yet).
  const arrivingLeg = active >= 1 ? lines[active - 1] : null;
  const destCoord = active >= 0 ? safeCoordinates[active] : null;

  return (
    // `data-lenis-prevent` releases scroll inside the map so wheel events
    // pan/zoom Leaflet natively instead of being captured by the global
    // smooth-scroll loop.
    <div data-lenis-prevent style={{ width: '100%', height: '100%', position: 'relative' }}>
      <MapContainer center={center} zoom={zoom} style={mapStyle} scrollWheelZoom={false}>
        <FollowActive coordinates={safeCoordinates} activeIndex={activeIndex} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />

        {/* Route — the LINE ITSELF shows the transport mode:
              • road  → a solid road line
              • air   → a dotted line
              • rail  → a railway track (solid bed + white cross-ties on top)
              • water → a dash-dot line
            Colour & weight still convey progress: the leg arriving at the active
            stop is the strongest green, earlier legs lighter green, upcoming
            legs a faint muted line. */}
        {lines.map((line, idx) => {
          if (line.sameSpot) return null; // stay-day: no movement, no line
          const traveled = idx < active; // segment already completed
          const currentLeg = idx === active - 1; // leg arriving at the active stop
          const color = '#d2b48c'; // tan route line
          const opacity = currentLeg ? 1 : traveled ? 0.9 : 0.55;
          const weight = currentLeg ? 5 : traveled ? 4 : 2.5;
          const pos = line.positions;

          // Railway track = a solid tan bed with short darker-brown dashes laid
          // over it, giving the classic "sleeper/tie" hatching.
          if (line.mode === 'rail') {
            return (
              <Fragment key={idx}>
                <Polyline
                  positions={pos}
                  pathOptions={{ color, weight: weight + 1, opacity, lineCap: 'butt' }}
                />
                <Polyline
                  positions={pos}
                  pathOptions={{
                    color: '#7a5b34',
                    weight: weight + 1,
                    opacity: Math.min(1, opacity + 0.05),
                    dashArray: '2,6',
                    lineCap: 'butt',
                  }}
                />
              </Fragment>
            );
          }

          // air → dotted, water → dash-dot, road → solid.
          const dashArray =
            line.mode === 'air' ? '1,9' : line.mode === 'water' ? '1,8,11,8' : undefined;
          return (
            <Polyline
              key={idx}
              positions={pos}
              pathOptions={{ color, weight, opacity, dashArray, lineCap: 'round' }}
            />
          );
        })}

        {/* Vehicle icon at the destination city — switches between car / flight
            / train / boat to match the mode used to reach that city. */}
        {arrivingLeg && arrivingLeg.mode && !arrivingLeg.sameSpot && destCoord && (
          <Marker
            position={[destCoord.lat, destCoord.lng]}
            icon={vehicleIcon(arrivingLeg.mode)}
            zIndexOffset={700}
          />
        )}

        {/* Stop pins — active red & pulsing, visited dark, upcoming muted */}
        {safeCoordinates.map((coord, idx) => {
          const state: StopState = idx === active ? 'active' : idx < active ? 'visited' : 'upcoming';
          return (
            <Marker key={idx} position={[coord.lat, coord.lng]} icon={pinIcon(state)} zIndexOffset={600}>
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
      </MapContainer>
    </div>
  );
}
