import React from 'react';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { renderToBuffer } from '@react-pdf/renderer';
import { getItineraryBySlug } from '../../itineraries/itineraries';
import { ItineraryPdfDocument } from '../../itineraries/pdf/ItineraryPdfDocument';
import { renderRouteMap } from '../../lib/staticMap';
import { verifyToken } from '../../lib/otp';

export const runtime = 'nodejs';

interface DownloadPayload {
  e: string;
  s: string;
  x: number;
  dl: number;
}

/**
 * Load an image and normalise it to a BASELINE JPEG data URI. @react-pdf only
 * decodes baseline JPEGs (not progressive — the cause of blank images), and
 * can't embed SVGs at all, so SVG sources are skipped (graceful fallback).
 */
async function toDataUri(src: string | undefined): Promise<string | undefined> {
  if (!src || src.toLowerCase().endsWith('.svg')) return undefined;
  try {
    let buf: Buffer;
    if (/^https?:\/\//i.test(src)) {
      const r = await fetch(src, { signal: AbortSignal.timeout(20000) });
      if (!r.ok) return undefined;
      if ((r.headers.get('content-type') || '').includes('svg')) return undefined;
      buf = Buffer.from(await r.arrayBuffer());
    } else {
      buf = await fs.readFile(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
    }
    const normalized = await sharp(buf)
      .resize({ width: 1200, withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 82, progressive: false })
      .toBuffer();
    return `data:image/jpeg;base64,${normalized.toString('base64')}`;
  } catch {
    return undefined;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug') ?? '';
  const token = url.searchParams.get('t') ?? '';

  const payload = verifyToken<DownloadPayload>(token);
  if (!payload || payload.dl !== 1 || payload.s !== slug || typeof payload.x !== 'number' || payload.x < Date.now()) {
    return new Response('This download link is invalid or has expired.', { status: 401 });
  }

  const itinerary = getItineraryBySlug(slug);
  if (!itinerary) return new Response('Itinerary not found.', { status: 404 });

  const [heroSrc, overviewSrc, mapBuf] = await Promise.all([
    toDataUri(itinerary.heroImage),
    toDataUri(itinerary.overviewImage),
    itinerary.coordinates && itinerary.coordinates.length > 1
      ? renderRouteMap(itinerary.coordinates).catch(() => null)
      : Promise.resolve(null),
  ]);
  const mapSrc = mapBuf ? `data:image/png;base64,${mapBuf.toString('base64')}` : undefined;

  const element = React.createElement(ItineraryPdfDocument, { itinerary, heroSrc, overviewSrc, mapSrc });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buffer = await renderToBuffer(element as any);

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${slug}-liberty-india.pdf"`,
      'Cache-Control': 'no-store',
    },
  });
}
