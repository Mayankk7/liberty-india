/* Server-only — rendered to a PDF buffer by /api/itinerary-pdf.
   Do NOT import this from a client component. */
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import type { Itinerary } from '../itineraries';

const C = {
  ink: '#141313',
  body: '#3f3f3f',
  muted: '#6b6b6b',
  orange: '#E07B39',
  green: '#15803D',
  cream: '#FFFDEC',
  line: '#E9E4BF',
};

const s = StyleSheet.create({
  page: { paddingBottom: 48, fontSize: 10, color: C.body, fontFamily: 'Helvetica' },

  // Cover banner
  heroWrap: { position: 'relative', height: 256, width: '100%' },
  hero: { width: '100%', height: 256, objectFit: 'cover' },
  heroShade: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#000', opacity: 0.34 },
  heroTextWrap: { position: 'absolute', left: 38, right: 38, bottom: 28 },
  eyebrow: { color: '#ffffff', fontSize: 9, letterSpacing: 2, opacity: 0.92, marginBottom: 8 },
  heroTitle: { color: '#ffffff', fontSize: 25, fontFamily: 'Helvetica-Bold', lineHeight: 1.1 },
  heroMeta: { color: '#ffffff', fontSize: 9.5, marginTop: 9, opacity: 0.95 },

  // Meta strip under hero
  strip: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: C.cream, borderBottomWidth: 1, borderBottomColor: C.line, paddingHorizontal: 38, paddingVertical: 9 },
  stripItem: { flexDirection: 'column' },
  stripLabel: { fontSize: 7, letterSpacing: 1, color: C.muted, marginBottom: 2 },
  stripValue: { fontSize: 10, color: C.ink, fontFamily: 'Helvetica-Bold' },

  body: { paddingHorizontal: 38, paddingTop: 18 },
  subtitle: { fontSize: 10, lineHeight: 1.5, color: C.muted, marginBottom: 14 },
  sectionTitle: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: C.ink, marginBottom: 8, marginTop: 4 },
  rule: { borderBottomWidth: 2, borderBottomColor: C.orange, width: 34, marginBottom: 10, marginTop: 2 },
  para: { fontSize: 10, lineHeight: 1.55, color: C.body, marginBottom: 6 },

  overviewImg: { width: '100%', height: 168, objectFit: 'cover', borderRadius: 4, marginBottom: 12 },

  mapCard: { borderWidth: 1, borderColor: C.line, borderRadius: 6, padding: 12, marginTop: 6, marginBottom: 16, backgroundColor: '#fff', alignItems: 'center' },
  mapImg: { width: 340, objectFit: 'contain' },
  mapCaption: { fontSize: 8, color: C.muted, marginTop: 8 },

  bullet: { flexDirection: 'row', marginBottom: 5, width: '50%', paddingRight: 12 },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.orange, marginTop: 4.5, marginRight: 7 },
  bulletText: { fontSize: 9.5, lineHeight: 1.45, color: C.body, flex: 1 },

  dayCard: { borderWidth: 1, borderColor: C.line, borderRadius: 6, padding: 11, marginBottom: 8, backgroundColor: '#fffdf8' },
  dayHead: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  // Badge is a View (not a bordered Text) so it stays vertically centred against
  // the title instead of dropping its baseline.
  dayBadge: { backgroundColor: C.cream, borderColor: C.line, borderWidth: 1, borderRadius: 4, paddingHorizontal: 6, paddingVertical: 3, marginRight: 9 },
  dayBadgeText: { fontSize: 8.5, color: C.ink, fontFamily: 'Helvetica-Bold', letterSpacing: 0.5, lineHeight: 1 },
  dayTitle: { fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: C.ink, flex: 1, paddingRight: 8 },
  dayOvernight: { fontSize: 8.5, color: C.muted, flexShrink: 0, textAlign: 'right' },
  dayDesc: { fontSize: 9.5, lineHeight: 1.5, color: C.body },

  detailRow: { flexDirection: 'row', marginBottom: 4 },
  detailDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: C.green, marginTop: 4.5, marginRight: 7 },
  detailText: { fontSize: 9.5, lineHeight: 1.45, color: C.body, flex: 1 },

  footer: { position: 'absolute', bottom: 18, left: 38, right: 38, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: C.line, paddingTop: 6 },
  footerText: { fontSize: 7.5, color: C.muted },
});

// Full route, every stop — no summarisation (client request); long routes wrap.
function shortRoute(route: string): string {
  return route.split('→').map((p) => p.trim()).filter(Boolean).join('  •  ');
}

export interface PdfProps {
  itinerary: Itinerary;
  heroSrc?: string;
  overviewSrc?: string;
  mapSrc?: string;
}

export function ItineraryPdfDocument({ itinerary, heroSrc, overviewSrc, mapSrc }: PdfProps) {
  const highlights = [...(itinerary.summary ?? []), ...(itinerary.summaryRight ?? [])];

  return (
    <Document title={itinerary.title} author="Liberty India">
      <Page size="A4" style={s.page} wrap>
        {/* Cover banner */}
        <View style={s.heroWrap}>
          {heroSrc ? <Image src={heroSrc} style={s.hero} /> : <View style={[s.hero, { backgroundColor: '#2b2b2b' }]} />}
          <View style={s.heroShade} />
          <View style={s.heroTextWrap}>
            <Text style={s.eyebrow}>LIBERTY INDIA  ·  CRAFTED JOURNEYS</Text>
            <Text style={s.heroTitle}>{itinerary.title}</Text>
            <Text style={s.heroMeta}>{shortRoute(itinerary.route)}</Text>
          </View>
        </View>

        {/* Meta strip */}
        <View style={s.strip}>
          <View style={s.stripItem}>
            <Text style={s.stripLabel}>DURATION</Text>
            <Text style={s.stripValue}>{itinerary.duration}</Text>
          </View>
          <View style={s.stripItem}>
            <Text style={s.stripLabel}>BEST TIME</Text>
            <Text style={s.stripValue}>{itinerary.bestTime || '—'}</Text>
          </View>
          <View style={s.stripItem}>
            <Text style={s.stripLabel}>STARTING FROM</Text>
            <Text style={s.stripValue}>
              {itinerary.startingPrice}
              {itinerary.startingPriceNote ? ` ${itinerary.startingPriceNote}` : ''}
            </Text>
          </View>
        </View>

        <View style={s.body}>
          {itinerary.subtitle ? <Text style={s.subtitle}>{itinerary.subtitle}</Text> : null}

          {/* Overview */}
          <Text style={s.sectionTitle}>Overview</Text>
          <View style={s.rule} />
          {overviewSrc ? <Image src={overviewSrc} style={s.overviewImg} /> : null}
          {(itinerary.overview ?? []).map((p, i) => (
            <Text key={i} style={s.para}>{p}</Text>
          ))}

          {/* Route map */}
          {mapSrc ? (
            <View wrap={false}>
              <Text style={s.sectionTitle}>Route Map</Text>
              <View style={s.rule} />
              <View style={s.mapCard}>
                <Image src={mapSrc} style={s.mapImg} />
                <Text style={s.mapCaption}>{itinerary.route}</Text>
              </View>
            </View>
          ) : null}

          {/* Highlights */}
          {highlights.length > 0 ? (
            <View wrap={false}>
              <Text style={s.sectionTitle}>Journey Highlights</Text>
              <View style={s.rule} />
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 8 }}>
                {highlights.map((h, i) => (
                  <View key={i} style={s.bullet}>
                    <View style={s.dot} />
                    <Text style={s.bulletText}>{h}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          {/* Day-by-day — text only, no images */}
          <Text style={s.sectionTitle}>Day-by-Day Itinerary</Text>
          <View style={s.rule} />
          {itinerary.days.map((d) => (
            <View key={d.day} style={s.dayCard} wrap={false}>
              <View style={s.dayHead}>
                <View style={s.dayBadge}>
                  <Text style={s.dayBadgeText}>DAY {String(d.day).padStart(2, '0')}</Text>
                </View>
                <Text style={s.dayTitle}>{d.title}</Text>
                {d.overnight && d.overnight !== '—' ? <Text style={s.dayOvernight}>Overnight: {d.overnight}</Text> : null}
              </View>
              <Text style={s.dayDesc}>{d.description}</Text>
            </View>
          ))}

          {/* Journey details */}
          <DetailList title="Inclusions" items={itinerary.inclusions} />
          <DetailList title="Exclusions" items={itinerary.exclusions} />
          <DetailList title="Dates & Prices" items={itinerary.datesPrices} />
          <DetailList title="Important Notes" items={itinerary.notes} />
        </View>

        <View style={s.footer} fixed>
          <Text style={s.footerText}>Liberty India  ·  India@liberty-int.com</Text>
          <Text style={s.footerText} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
}

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <View wrap={false} style={{ marginTop: 8 }}>
      <Text style={s.sectionTitle}>{title}</Text>
      <View style={s.rule} />
      {items.map((it, i) => (
        <View key={i} style={s.detailRow}>
          <View style={s.detailDot} />
          <Text style={s.detailText}>{it}</Text>
        </View>
      ))}
    </View>
  );
}
