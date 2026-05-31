import sharp from 'sharp';

/**
 * Renders a static route map (real geographic tiles + the highlighted route) as
 * a PNG buffer, for embedding in the itinerary PDF. Uses the same Carto "light"
 * basemap as the website map for visual consistency. Server-only.
 */
const TILE = 256;

function lon2px(lon: number, z: number): number {
  return ((lon + 180) / 360) * Math.pow(2, z) * TILE;
}
function lat2px(lat: number, z: number): number {
  const r = (lat * Math.PI) / 180;
  return ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * Math.pow(2, z) * TILE;
}
function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export interface MapStop {
  name: string;
  lat: number;
  lng: number;
}

export async function renderRouteMap(
  coords: MapStop[],
  opts?: { maxW?: number; maxH?: number },
): Promise<Buffer | null> {
  if (!coords || coords.length === 0) return null;
  const maxW = opts?.maxW ?? 640;
  const maxH = opts?.maxH ?? 470;
  const pad = 54;

  // Choose the largest zoom at which the padded route fits in the target box.
  let zoom = 3;
  for (let z = 10; z >= 2; z--) {
    const xs = coords.map((c) => lon2px(c.lng, z));
    const ys = coords.map((c) => lat2px(c.lat, z));
    const w = Math.max(...xs) - Math.min(...xs);
    const h = Math.max(...ys) - Math.min(...ys);
    if (w + pad * 2 <= maxW && h + pad * 2 <= maxH) {
      zoom = z;
      break;
    }
  }

  const xs = coords.map((c) => lon2px(c.lng, zoom));
  const ys = coords.map((c) => lat2px(c.lat, zoom));
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const W = Math.max(Math.round(Math.max(...xs) + pad - minX), 200);
  const H = Math.max(Math.round(Math.max(...ys) + pad - minY), 160);

  const tMinX = Math.floor(minX / TILE);
  const tMaxX = Math.floor((minX + W) / TILE);
  const tMinY = Math.floor(minY / TILE);
  const tMaxY = Math.floor((minY + H) / TILE);
  const n = Math.pow(2, zoom);

  // Compose onto a whole-tile canvas (avoids negative composite offsets), then crop.
  const canvasOriginX = tMinX * TILE;
  const canvasOriginY = tMinY * TILE;
  const canvasW = (tMaxX - tMinX + 1) * TILE;
  const canvasH = (tMaxY - tMinY + 1) * TILE;

  const composites: sharp.OverlayOptions[] = [];
  const jobs: Promise<void>[] = [];
  for (let tx = tMinX; tx <= tMaxX; tx++) {
    for (let ty = tMinY; ty <= tMaxY; ty++) {
      if (ty < 0 || ty >= n) continue;
      const xx = ((tx % n) + n) % n;
      const left = (tx - tMinX) * TILE;
      const top = (ty - tMinY) * TILE;
      const url = `https://a.basemaps.cartocdn.com/light_all/${zoom}/${xx}/${ty}.png`;
      jobs.push(
        (async () => {
          try {
            const r = await fetch(url, {
              headers: { 'User-Agent': 'LibertyIndia-PDF/1.0' },
              signal: AbortSignal.timeout(20000),
            });
            if (!r.ok) return;
            composites.push({ input: Buffer.from(await r.arrayBuffer()), left, top });
          } catch {
            /* ignore a failed tile */
          }
        })(),
      );
    }
  }
  await Promise.all(jobs);
  if (composites.length === 0) return null;

  const canvas = await sharp({
    create: { width: canvasW, height: canvasH, channels: 4, background: { r: 245, g: 243, b: 236, alpha: 1 } },
  })
    .composite(composites)
    .png()
    .toBuffer();

  const cropped = await sharp(canvas)
    .extract({
      left: Math.max(0, Math.round(minX - canvasOriginX)),
      top: Math.max(0, Math.round(minY - canvasOriginY)),
      width: Math.min(W, canvasW),
      height: Math.min(H, canvasH),
    })
    .toBuffer();

  // Route + markers overlay.
  const pts = coords.map((c) => ({ name: c.name, x: lon2px(c.lng, zoom) - minX, y: lat2px(c.lat, zoom) - minY }));
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const dots = pts
    .map((p, i) => {
      const last = i === pts.length - 1;
      const r = i === 0 || last ? 6 : 4.5;
      const fill = last ? '#E07B39' : '#15803D';
      return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${r}" fill="${fill}" stroke="#ffffff" stroke-width="2"/>`;
    })
    .join('');
  const labels = pts
    .map(
      (p) =>
        `<text x="${(p.x + 9).toFixed(1)}" y="${(p.y - 6).toFixed(1)}" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="bold" fill="#141313" stroke="#ffffff" stroke-width="3" paint-order="stroke">${escapeXml(
          p.name,
        )}</text>`,
    )
    .join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><path d="${path}" fill="none" stroke="#15803D" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round" opacity="0.92"/>${dots}${labels}</svg>`;

  return sharp(cropped).composite([{ input: Buffer.from(svg), top: 0, left: 0 }]).png().toBuffer();
}
