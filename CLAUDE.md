# CLAUDE.md — Liberty India Project Context

> **Read this file first at the start of every session.** Running memory of the
> project. At the **end of every working session**, update the
> [Session Log](#session-log) with what was done and what's next. Keep the log
> short — archive old entries to `SESSION_LOG_ARCHIVE.md` when this file grows
> past ~30k chars.

---

## 1. What this project is

**Liberty India** — marketing website for an Indian Destination Management
Company (DMC) specializing in MICE, luxury leisure travel, events, and curated
itineraries. Tagline: *"Where Ancient Wisdom Meets Modern Luxury."*

Content/marketing site (no backend, no database). Focus is **frontend: UI/UX
across the whole site**.

## 2. Tech stack

- **Next.js 16.1.6** (App Router) + **React 19.2**
- **TypeScript** (strict)
- **Tailwind CSS v4** (config-in-CSS via `@theme` in `app/globals.css`)
- **react-leaflet 5** — interactive India map on itineraries
- **react-google-recaptcha** — contact form
- Deployed on **Vercel**

Commands: `npm run dev` (local), `npm run build` (verify before commit),
`npm run lint`.

## 3. Project structure

```
app/
  layout.tsx              Root layout, fonts, SEO metadata, JSON-LD
  page.tsx                Homepage
  globals.css             Tailwind theme, custom utilities, base styles
  components/             Shared components (Navbar, Footer, HeroCarousel,
                          ItineraryCard, ItineraryCards, Journeys, Services,
                          PageLoader, …)
  components/services/    Shared service-page components: ServiceHero,
                          TaglineStrip, SectionOverview, CustomizedPrograms,
                          exploreItems.ts
  itineraries/            IndiaMap, ItineraryTemplate, itineraries.ts data,
                          [slug] dynamic itinerary pages
  our-services/<slug>/    7 service sub-pages (meetings-conferences,
                          incentives, premium-leisure, cruise-handling,
                          special-interest, sports-tourism, education-tours)
  <topic>/page.tsx        About-India sections: heritage, culture, architecture,
                          wildlife, wellness, spiritual, nature
  event-prod/             Still on old flat-route layout (not yet folded into
                          /our-services pattern)
  about-us, contact-us    Static pages
public/images/            All site imagery (organized by section)
public/fonts/             Self-hosted Big Caslon CC (.otf, 400/700/900 + italics)
```

## 4. Design system (keep consistent)

- **Fonts:**
  - Headings / `.font-serif` / `var(--font-playfair)` → **Big Caslon CC**
    (self-hosted in `public/fonts/`, Playfair Display fallback).
  - Body / `.font-merriweather` / `var(--font-merriweather)` → **Segoe UI**
    (Merriweather fallback).
  - Poppins (`--font-poppins`) for UI accents.
  - Global 1% letter-spacing on h1–h6 + `.font-serif`.
- **Colors:** white background `#ffffff`; primary text `#424242` (NOT
  `text-gray-900` — use `text-[#424242]` for consistency with the heritage
  benchmark). Cream bands: `#FDF8E8` (solid) and `rgba(253,243,159,0.2-0.5)`.
  Brand orange: `#E07B39` (also `#e58021` for the Promise pillar headings).
- **Custom utilities** in `globals.css`: `text-shadow-lg`, `text-shadow-sm`,
  `animate-hero-fade-in`, `scrollbar-hide`, global smooth-scroll.
- Tailwind v4 — extend the theme in `globals.css` `@theme`, NOT a JS config.
- **Heritage benchmark pattern** for `/about-india/*` sections: top-overlap
  intro card (serif Playfair, 22px, `#424242`, `leading-loose`), bold-serif
  connector line, `ImageTextOverlay variant="heritage"` with `h-[414px]`,
  ItineraryCards on `bgColor="#FDF39F4D"`.
- **Service-page pattern** for `/our-services/*`: `<ServiceHero>` →
  `<TaglineStrip>` → `<SectionOverview>` → either `<ItineraryCards>` with
  `getExploreItems('<folderSlug>')` (5 sections) or `<CustomizedPrograms>`
  form (Meetings, Incentives) → Footer.
- **Unified itinerary card** (`app/components/ItineraryCard.tsx`): bordered
  `rounded-lg`, fixed `h-64 md:h-80` image w/ hover scale, orange meta line,
  `line-clamp-3` desc, price footer. Used everywhere — do NOT recreate inline.

## 5. Working agreement

- Scope is **frontend / UI / UX only** unless told otherwise.
- Match existing component patterns, fonts, and spacing — keep it cohesive.
- Use shared components (`ItineraryCard`, `ServiceHero`, `TaglineStrip`,
  `SectionOverview`, `CustomizedPrograms`, `ItineraryCards`) — do not
  duplicate their markup inline on pages.
- Run `npm run build` before declaring frontend work done (catches type errors).
- **🚫 NEVER `git push`.** Hard rule. Local commits for progress tracking are
  fine — push is forbidden until final sign-off.
- **Footer contact form is P0-frozen** — wired to `/api/contact` via Resend.
  Only style/layout changes allowed; logic/fields/state untouched.
- **Always update the Session Log below before ending a session.** Keep entries
  short: one-line summary + Done + Files + Next. Archive when file > 30k chars.

---

## Current State (snapshot as of 2026-05-20)

**Home page:** Fully synced to Figma (sessions 5–7). Hero, AboutUs, AboutIndia,
Services grid, Journeys, Footer/CTA all updated. Self-hosted Big Caslon CC live.
Contact form working via `/api/contact` + Resend (needs `RESEND_API_KEY` in
Vercel env to actually send mail in prod).

**`/about-india/*` sections:** All 6 synced to Figma + heritage benchmark
(sessions 8–11): culture, architecture, nature, spiritual, wildlife, wellness.

**`/our-services/*` sections:** All 7 sub-pages live with the shared pattern
(sessions 12–14): meetings-conferences, incentives, premium-leisure,
cruise-handling, special-interest, sports-tourism, education-tours. Old flat
routes (`/meetings`, `/incentives`, etc.) deleted; homepage Services grid
repointed.

**`/about-us`:** Synced to Figma (session 6).

**Build status:** `npm run build` clean 30/30, all routes static.

## Known open items / tech debt

- ⚠️ **ItineraryCards content debt:** All 6 `/about-india/*` sections and 5
  `/our-services/*` sections pass placeholder/shared itinerary items. Needs a
  coordinated content pass in `app/itineraries/itineraries.ts` to wire real
  per-section itineraries. 4 of the 6 Explore-Programs card titles
  (Taj & Tigers, Gems of North India, Gems of South India, Colourful Rajasthan)
  currently route to `/under-development`.
- ⚠️ **`CustomizedPrograms` form is dead** — no `onSubmit`. Wire to
  `/api/contact` when ready (single component, propagates to Meetings +
  Incentives automatically).
- ⚠️ **`/event-prod`** still on old flat-route layout — not yet folded into
  `/our-services/*` pattern.
- ⚠️ **Wellness Ayurveda overlay** (session 11) — verify on dev that
  `experiences.png` doesn't have cards baked in (would duplicate the overlay).
- **Pre-existing lint debt:** unescaped entities, PageLoader `require`,
  HeroCarousel setState-in-effect, stray unused imports. Not introduced by
  recent work — separate cleanup pass if desired.
- See `TECH_DEBT.md` for the full list.

## Deployment notes

- For contact form email delivery: set `RESEND_API_KEY` (required),
  `CONTACT_TO` (default `India@liberty-int.com`), and `CONTACT_FROM` (a
  Resend-verified sender) in Vercel env. Without `RESEND_API_KEY` the form
  succeeds but only logs server-side.

---

## Session Log

> Newest on top. Keep entries short: `### YYYY-MM-DD (session N) — summary`
> then **Done**, **Files**, **Next**. Older sessions archived in
> `SESSION_LOG_ARCHIVE.md`.

### 2026-06-10 (session 38d) — "N Nights N+1 Days" durations sitewide + full hero route (no dots)
**Done:** Two global itinerary changes. Build clean 45/45.
1. **Durations now show nights + days** ("13 Days" → "12 Nights 13 Days") across **all 17**
   day-based itineraries in `itineraries.ts` + the 6 `exploreItems.ts` cards (regex script,
   nights = days − 1). Kairali (follow-up ask): "7 / 14 / 21 Nights" → "7 Nights 8 Days" in both
   files (overview prose still mentions the 7/14/21-night package options; the €1,230 price line
   stays "(7 Nights, Deluxe Villa…)"; `durationDays: 7` untouched — only display changed).
   Safe everywhere: all filtering/sorting uses numeric `durationDays`; the `duration` string is
   display-only (cards, hero, Summary stat chip, navbar search, PDF strip).
2. **Hero route never abbreviates** (`HeroSection.tsx`): `shortRoute` truncated >5-stop routes to
   "first · second · … · last" (East India's 6-stop route showed dots) → renamed `fullRoute`,
   always joins every stop with "·"; long routes wrap. Same fix in the **PDF**
   (`ItineraryPdfDocument.tsx` `shortRoute` silently dropped middle stops → now all stops).
   SummarySection route chip already wraps fully (session 35).
**Files:** `app/itineraries/itineraries.ts`, `app/components/services/exploreItems.ts`,
`app/itineraries/template/HeroSection.tsx`, `app/itineraries/pdf/ItineraryPdfDocument.tsx`,
`CLAUDE.md`.
**Next:** User reviews on dev — any itinerary hero shows "12 Nights 13 Days | full route"; journey/
category/service cards show the new duration; East India hero shows all 6 stops, no "…".

### 2026-06-10 (session 38c) — Itinerary renamed: "Northeast India & The City of Joy" → "East India"
**Done:** Display-name rename in both data sources: `itineraries.ts` (`title` + `datesPrices[0]` +
block comment) and `exploreItems.ts` (service-card title). Propagates everywhere titles render
(detail page, journey cards, category cards, search, download modal). **Deliberately kept:** slug
`northeast-india-city-of-joy` (URL + ImageKit `north-east/` day images), `fileMap.ts` PDF filename
(points at the real download asset), overview prose ("famously known as The City of Joy" — describes
Kolkata, still accurate), and the separate "Northeast India Sojourn" itinerary. Build clean 45/45.
**Files:** `app/itineraries/itineraries.ts`, `app/components/services/exploreItems.ts`, `CLAUDE.md`.
**Next:** User checks `/itineraries/northeast-india-city-of-joy` + journeys/category cards show
"East India". Note: the downloadable PDF is still the old client doc titled "Northeast India & The
City of Joy" — client should supply a renamed PDF if they want the download to match.

### 2026-06-10 (session 38b) — January hero image wired (P1-7 closed)
**Done:** Client uploaded `hero-section/jan.png` to ImageKit (verified 200, ~2.6MB JPEG; visually
checked — decorated buffalo-cart race, dust, festival regalia). Jan slide in `HeroCarousel.tsx`
now uses it instead of sharing `feb.png` → **P1-7 closed** (removed from Known open items).
Build clean 45/45. **Flag for client:** the photo's decorated buffalo *cart* race reads more like
Bali's Makepung (or Karnataka's Kambala) than Tamil Nadu Jallikattu (bull-taming, no carts) — if
exactness matters, swap the asset on ImageKit (same path, no code change needed).
**Files:** `app/components/HeroCarousel.tsx`, `CLAUDE.md`.
**Next:** User reviews Jan slide on dev (home hero ‹ back twice from March).

### 2026-06-10 (session 38) — Hero year + Pan India, travellers copy, heritage line break, social icons back, silkier card hover
**Done:** Six client changes. Build clean 45/45.
1. **Hero month strip shows "2026"** (`HeroCarousel.tsx`): static year label at the left edge of
   the tablist pill (white/70, merriweather, `border-r` divider) — reads `2026 │ ‹ Apr May Jun … ›`.
   Hardcoded per request (not `getFullYear()`).
2. **AboutUs intro is B2C too** (`AboutUs.tsx`): audience list now "tour operators, travel
   advisors, corporate buyers and travellers" — in both the visible paragraph and the JSON-LD
   Organization description.
3. **March hero label** (`HeroCarousel.tsx`): "Auli, Uttarakhand" → "Pan India" (user confirmed
   literal text, not "Holi, Pan India").
4. **Heritage cream-band line break** (`heritage/page.tsx`): `<br className="hidden md:inline">`
   before "subcontinent" so ≥768px renders "…soul of the / subcontinent — its temples, forts, and
   living traditions."; mobile keeps natural wrap.
5. **Social icons restored** (`Footer.tsx`): Instagram/Facebook/LinkedIn row back in Col 1 (original
   first-commit SVGs, restyled white/60→white), `href="#"` placeholders + TODO comment — user will
   supply live profile URLs later (these were removed in session 31 as dead links; explicit ask).
6. **Silkier card hover** (`globals.css`): `.card-lift` 400→550ms, `.card-zoom` 600→900ms, easing
   → `cubic-bezier(0.16,1,0.3,1)` (gentler tail). Same transform-only/::after-shadow architecture;
   reduced-motion block untouched. Covers Services + AboutIndia + Journeys (ItineraryCard) — every
   home card.
**Files:** `app/components/{HeroCarousel,AboutUs,Footer}.tsx`, `app/heritage/page.tsx`,
`app/globals.css`, `CLAUDE.md`.
**Next:** User reviews on dev — (a) "2026" in the hero pill desktop + mobile; (b) March slide says
"Pan India"; (c) AboutUs paragraph includes "and travellers"; (d) /heritage band breaks before
"subcontinent" on desktop; (e) footer social icons render (links dead by design until URLs arrive);
(f) home card hovers feel slower/softer. **Open:** swap the `#` social hrefs for live profile URLs
when the client supplies them.

### 2026-06-10 (session 37) — Suggested Hotels: full hotel names visible
**Done:** Hotel-name span in the Suggested Hotels cards (`DaysSection.tsx`) had `truncate`, so long
names ("Fateh Prakash Palace", "The Elgin Mount Pandim", …) were cut with an ellipsis. Removed
`truncate` → name now wraps to multiple lines (`leading-snug`); card footer row switched
`items-center` → `items-baseline` so the city label aligns with the first line of a wrapped name.
Only renderer of `suggestedHotels` — applies to all 17 itineraries that show the section. Build
clean 45/45.
**Files:** `app/itineraries/template/DaysSection.tsx`, `CLAUDE.md`.
**Next:** User spot-checks a long-named hotel on dev (e.g. colourful-rajasthan, northeast-india-sojourn).

### 2026-06-10 (session 36) — Expert-form redesign + modal scroll fix, Suggested Hotels everywhere, premium hovers, hero/card/overview image pass
**Done:** Four client tasks, all verified end-to-end (build 45/45; Playwright temp-install since
removed: 32 runtime assertions + screenshots, **0 console errors**; package.json/lock untouched).
1. **Both "Speak to an Expert" modals redesigned + scroll bug fixed.** Root cause of background
   scroll: Lenis owns wheel events globally — body `overflow:hidden` alone doesn't stop it. Added the
   repo's own `data-lenis-prevent` (per IndiaMap/Navbar) to backdrop + pane of `ExpertInquiryModal`
   (floating button) **and** `InquiryModal` (DetailsSection CTA), plus `overscroll-contain` +
   `max-h-[92vh] overflow-y-auto`. Playwright: wheel over the open modal at 1280/390 → `window.scrollY`
   unchanged on both modals. Editorial redesign applied to BOTH (they're both titled "Speak to an
   Expert" — one old-style would look broken): underline fields (transparent bg, `border-b #E9E4BF`,
   focus `#E07B39`), 11px tracking-[0.18em] uppercase labels, chip → quiet "Enquiring about — title"
   line, `space-y-7`/`gap-x-8` rhythm, black h-[52px] letter-spaced uppercase CTA w/ arrow nudge,
   retypeset success state. Logic/payload/validation untouched on both.
2. **Suggested Hotels in every itinerary.** Git history proves hotels were NEVER removed (12
   itineraries unchanged since first commit) — the gap was 6 itineraries that never had data. Authored
   `suggestedHotels` from the client docx "Suggested Hotels" city tables (Deluxe column):
   classical-golden-triangle (3, GT-R set), taj-and-tigers (4, GT-R set), colourful-rajasthan
   (Narendra Bhawan / Fort Rajwada / Fateh Prakash Palace / Samode Haveli), northeast-india-sojourn
   (Raaj Kutir / Elgin Darjeeling / **Elgin Mt. Pandim Pelling** / Elgin Nor-khill),
   unveiling-TN (Radisson Temple Bay / Villa Shanti / Chidambara Vilas / Heritage Madurai),
   gems-of-south-india (Metropole / Hoysala Village Hassan / Heritage Hampi / Taj Holiday Village).
   Same-property images copied from sibling folders; 7 new ones sourced (Commons exact-property first,
   Pexels representative stand-ins flagged in SOURCES.md). **Flags:** kairali = N/A by design (the
   retreat IS the hotel; Wellness-primary hides DaysSection); city-of-joy keeps its original 3.
   Verified: "Suggested Hotels" renders on 17/18 slugs, absent on kairali; all images on disk.
3. **Premium hover language** (`globals.css` + `ItineraryCard` + `Services` + `AboutIndia`): new
   `.card-lift` (transform-only −6px lift, 400ms `cubic-bezier(0.22,1,0.36,1)`, pre-rendered `::after`
   shadow faded via opacity — never animates box-shadow) and `.card-zoom` (image scale 1.04, 600ms,
   `will-change` only during hover; reduced-motion handled). Replaced every `transition-all` +
   `hover:shadow-*` on the three card components. Because `.card-lift`'s ::after shadow dies under
   `overflow-hidden`, lift lives on the wrapper and image clipping moved to an inner
   `absolute inset-0 rounded-lg overflow-hidden` layer (Services/AboutIndia); AboutIndia's
   gradient-stop hover (untransitionable) → two stacked gradients crossfaded via opacity. Verified:
   computed `transform: matrix(1,0,0,1,0,-6)` on hover.
4. **Hero/card/overview premium pass — 22 images replaced** across the 11 non-ImageKit itineraries
   (guj, gems, safari, incredible-NE, GT-R, ECI, ESI-TN&K, INHT, encounter, southern-splendour,
   buddha). **Hero = card** enforced structurally: `JourneyFinder.tsx` card image `overviewImage ||
   heroImage` → `heroImage || overviewImage` (every other card surface already used heroImage).
   Pipeline: Pexels (3 rounds) + Commons (Statue of Unity, Madurai Meenakshi), sharp → 1920w heroes /
   1280w overviews, **every candidate visually reviewed** (~67 viewed): caught 4 exact-ID dups vs
   existing day images (gtr-hero=safari d11, gtr-ov-c2=GT-R d7, gtr-ov-c1=INHT d12, enc-hero=ENC d3,
   esi-ov=ESI d8 — confirmed by grepping Pexels IDs across all SOURCES.md), wrong monuments (Pexels
   "Statue of Unity"→Dandi March statues; "Taj-ul-Masjid"→Colombo mosques), off-route temples
   (Rameswaram/Srirangam for ESI), scaffolding, B&W, zoo shots. Overview container is `aspect-[16/11]`
   → portrait candidates rejected. Overwrote `main-bg.jpg`/`overview.jpg` in place (paths uniform, zero
   data churn); 11 SOURCES.md got a session-36 section w/ full attribution. Highlights: GT-R = blue-sky
   symmetric Taj, guj = camel cart on the white Rann + landscape Statue of Unity, safari = stalking
   tiger, ESI = aerial palm-canopy backwaters + signposted Meenakshi South Gopuram.
**Files:** `app/itineraries/template/{ExpertInquiryModal,InquiryModal}.tsx`, `app/globals.css`,
`app/components/{ItineraryCard,Services,AboutIndia}.tsx`, `app/itineraries/itineraries.ts`,
`app/journeys/JourneyFinder.tsx`, 22 hero/overview jpg overwrites + 23 new hotel images + 17
SOURCES.md across `public/images/itineraries/`, `CLAUDE.md`. Also committed the until-now-uncommitted
session-32–34 fixes (IndiaMap NaN guards, architecture `w-[102vw]`, heritage Dravidian card,
exploreItems dead constant) as a separate commit.
**Next:** User reviews on dev — (a) both expert modals (desktop + mobile): premium underline look,
background no longer scrolls; (b) every itinerary except Kairali shows Suggested Hotels (hotel photos
are representative stand-ins where flagged — swap when client supplies real photography); (c) hover
the home Services/About-India cards + journey cards: smooth lift+zoom, no shadow jank; (d) the 11
replaced heroes/cards/overviews (journeys grid + detail pages). Magnific MCP was available but not
needed — Pexels/Commons covered all 22 slots at target resolution.

### 2026-06-10 (session 35) — Itinerary pages: route un-truncation, full-column map, meal chips, ≤100-word days, 23-image premium pass
**Done:** Five global itinerary-page improvements (all 18 itineraries / 217 days). Build clean 45/45;
Playwright check (dev-only, since uninstalled): 3 itineraries × 1280px+390px → **0 console/page errors**.
1. **Route truncation** (`SummarySection.tsx`): Route stat-chip value had `truncate` + `md:max-w-[30rem]`
   → now wraps (`whitespace-normal break-words`); stats grid Route track → `minmax(0,1fr)`. Verified with
   the 20-day Gujarat route (13 stops, wraps to 2 lines desktop, full route visible mobile). Hero
   `shortRoute()` summarisation untouched (deliberate Figma design).
2. **Map fills left column** (`DaysSection.tsx`): collapsed the bordered wrapper (removed `border-2`
   frame, white bg, `max-h-[600px]`) → single sticky container `top-24 h-[calc(100vh-7rem)]
   min-h-[420px] rounded-lg overflow-hidden` with `IndiaMap` direct child. Sticky-follow preserved; no
   grey tiles/NaN (session-34 guards hold).
3. **Meal chips (data-driven):** `ItineraryDay.meals?: ("breakfast"|"lunch"|"dinner")[]` + `MealChips`
   in DaysSection — pill chips (`bg-[#F8F6E1]` border `#E9E4BF`), inline lucide-style SVG icons
   (coffee/utensils/moon) in brand orange, rendered under the description; nothing renders when no
   meals. Populated **all 217 days** from each itinerary's inclusions board basis (+ explicit day-text
   meals like the dunes dinner/houseboat lunch; arrival day 1 = none unless board covers dinner;
   16 days correctly have no chips). "(on own)" meals excluded (e.g. buddha d4 Awadhi lunch).
4. **Description cap:** rewrote the **45 days >100 words** (7 itineraries — incredible-NE 11, ECI 9,
   ESI-TN-Kerala 7, southern 7, GT-Ranthambore 4, encounter 4, buddha 3) to ~70–92 words, UK English,
   landmarks preserved; audit now max 92w / 0 over 100. UI safeguard: `md:line-clamp-[10]` on the
   day-card description.
5. **Image audit + premium pass:** visually audited **all 142 local day images**; replaced **22**
   (+kept guj d17 — no better source): 5 exact cross-itinerary dups (INHT d1/d3, encounter d1/d2,
   buddha d1/d2 shared files with NE/safari/GT-R), wrong-region/country subjects (safari d4 Himalayan
   prayer flags → Bandhavgarh fort hill; NE d9 Bhutan Buddha → real Ravangla Buddha Park), scaffolded/
   hazy Tajs (GT-R d4 → Taj-through-crimson-arch; INHT d14 → great gate), zoo-ish safari d5 → wild
   tiger in autumn sal forest, weak Commons-era picks (gujarat d9/11/12/15/18, southern d2/4/6/8/12/13
   → Roopmati terrace, night Mahakaleshwar, Bhojtal sunset, night Rumi Darwaza, Sangam pilgrim boat,
   Somnathpur through-mandapa, clean Gommateshwara, monsoon Chitradurga, clean Bom Jesus, tusker,
   Palolem). Pipeline: Pexels (`PEXELS_API_KEY` in `.env`) + Commons for niche monuments → sharp
   1280px → every candidate visually verified (several re-source rounds) → overwrote same `day-N.jpg`
   paths (zero data churn) → appended "Session 35 replacements" to each folder's `SOURCES.md`.
   Strong Commons-era keepers documented in `.claude-tmp/image-audit-log.md`.
**Files:** `app/itineraries/template/SummarySection.tsx`, `app/itineraries/template/DaysSection.tsx`,
`app/itineraries/itineraries.ts` (meals on 201 days + 45 rewrites + `Meal` type), 23 images + 8
`SOURCES.md` under `public/images/itineraries/`, `CLAUDE.md`.
**Next:** User reviews on dev — (a) Summary route wraps fully on long itineraries; (b) map edge-to-edge
sticky; (c) meal chips per day (none on arrival days); (d) uniform day cards; (e) the 22 new images.
Open: guj d17 Residency would benefit from a client photo; meal data is editorial (derived from
inclusions) — client should sanity-check board basis per itinerary before launch.

### 2026-06-09 (session 34) — Fix itinerary-map runtime crash (NaN LatLng) + Heritage "Dravidian" mobile card
**Done:** Client review flagged a recurring dev error ("3 Issues") + odd blue blocks on Heritage.
- **Runtime error `Invalid LatLng object: (NaN, NaN)`** (`IndiaMap.tsx` `FollowActive`): root cause
  was Leaflet computing centre/zoom from a **0×0 map** — the lazily-mounted/sticky map fires its
  `flyTo`/`flyToBounds` at 200ms, *before* the `invalidateSize` fix at 250ms, so zoom-from-bounds
  maths yields NaN. Added a `map.getSize()` guard (skip until sized), `isFiniteCoord` validation of
  every stop before handing Leaflet a LatLng, and a try/catch net; `safeCoordinates` now filters
  non-finite stops, and `DaysSection` filters them before computing day→stop indices. Coordinate
  *data* was clean — this was the zero-size timing bug. Verified with Playwright: scrolling
  `/itineraries/classical-golden-triangle` through every day at 390px **and** 1280px → **0** console/
  page errors (was throwing before).
- **Heritage "Dravidian Temples of South India" card** (`heritage/page.tsx`): its image
  (`Ancient_Temple_Architecture.png`, wide 16:9) was `w-full h-auto`, so on mobile it collapsed to a
  short strip *shorter than the overlapping white card* — the card floated with only thin blue-sky
  slivers of image showing (the "blue box"). Fixed: `h-[340px] sm:h-[420px] md:h-auto object-cover`
  so mobile/tablet show a proper-height image with the card overlapping it; desktop (`md:h-auto`)
  unchanged. The other Heritage temple images (Northern Nagara/Vesara/Taj/Red Fort) load fine — their
  blue is just sky in the source photos (the Nagara SVG is a saturated-blue-sky asset); not broken,
  no code bug, would need new assets to change.
**Files:** `app/itineraries/IndiaMap.tsx`, `app/itineraries/template/DaysSection.tsx`,
`app/heritage/page.tsx`, `CLAUDE.md`. Build clean 45/45; Playwright (dev-only) uninstalled, temp
scan/shots removed.
**Next:** User reviews on dev — itinerary pages should no longer show the "Invalid LatLng" error
badge; Heritage "Dravidian" card on mobile now shows the temple image properly. If they want the
very-blue Northern Nagara temple image toned down, that's an asset swap on ImageKit.

### 2026-06-09 (session 33) — Mobile horizontal-overflow fix (diagnosed with Playwright)
**Done:** Fixed the mobile horizontal scroll / off-screen content; desktop untouched.
Diagnosed at runtime with a temporary Playwright scan (dev-only dep, since uninstalled;
gitignored `.claude-tmp/overflow-scan.mjs`) that loaded all 19 routes at 360/375/390/768
and flagged elements crossing the viewport edge while their parent stayed within it,
keyed on real page overflow (`documentElement.scrollWidth > innerWidth`, not just bounding
boxes clipped by an ancestor `overflow-hidden`). **Only two routes truly overflowed:**
- **`/architecture`** (all widths incl. 768): hero `<div>` was `w-[102vw]` (2vw wider than
  the screen). → `w-full lg:w-[102vw]` so mobile/tablet fit while desktop (≥1024/1280) keeps
  the exact prior style. `app/architecture/page.tsx:18`.
- **`/journeys`** (360/375): the search `<input>` (intrinsic ~200px) sat in a `flex-1`
  container with default `min-width:auto`, so it couldn't shrink and pushed the
  search-button + mobile "Filters" button past the edge. → added `min-w-0` to the search
  container and the input. `app/journeys/JourneyFinder.tsx:60,67`.
Everything else the scanner flagged (Footer `scale-x-[1.03]` bg image, ServiceHero
`absolute inset-0` parallax layers, culture `scale-[1.25]` zoom, itinerary TabStrip) has a
wide bounding box but `scrollWidth == innerWidth` — clipped by a component-level
`overflow-hidden`, so no real scroll; left untouched (changing them risks altering desktop).
Re-scan after fixes: `/architecture` + `/journeys` clean at 360/375/390/768; `/architecture`
@1280 still `w-[102vw]` (desktop unchanged). Screenshots at 390px (home/architecture/
journeys/cruise) + 1280px (architecture) visually confirmed. Build clean 45/45; Playwright
uninstalled (package.json/lock restored); temp scan/shots removed.
**Files:** `app/architecture/page.tsx`, `app/journeys/JourneyFinder.tsx`, `CLAUDE.md`.
**Next:** `<body>` already has `overflow-x-hidden` (`layout.tsx:137`); `<html>` does not. If
the client still reports scroll on a specific page on real iOS Safari (where body-only
overflow-x-hidden is less reliable), the safe next step is `overflow-x:hidden` on `html` in
`globals.css` — deferred for now since the runtime scan shows no remaining real overflow and
it could interact with Lenis.

### 2026-06-09 (session 32) — Client website-review: full re-verification (already implemented) + housekeeping
**Done:** User re-shared the "Liberty India: Website Review" PDF asking to make any
remaining fixes. Ran a complete line-by-line re-verification of **every** PDF row against
the current tree (3 Explore audits + greps + direct reads of Navbar/Footer/Services/
exploreItems/AboutUs/about-us/CustomizedPrograms/special-interest + the Golden Triangle,
Kairali & Colourful Rajasthan blocks in itineraries.ts). **Result: every actionable item
is already implemented** (session 31 + its follow-up covered them) — currency €, Colourful
Rajasthan reconciled, Kairali "7/14/21 Nights", Northeast canonical slugs (no `/north-east`
route/link exists), Gujarat/Ranthambore spelling, page-specific Explore subheads, distinct
straplines, Special-Interest copy, Event-Production removed, /contact-us rebuilt + both
Contact links → `/#contact`, nav labels unified, dropdown "Incentives", social icons hidden,
"quiet excellence" period, About-Us punctuation/colon, Heritage heading/lead-in, GT
route(Agra)/6 Days/Day-3 dedupe, UK dialect, all 4 B2B copy blocks. Two safe housekeeping
edits only: removed the dead `EXPLORE_SUBHEADING` generic constant (the exact "pasted
subhead" phrase the client flagged — imported by nothing) from `exploreItems.ts`; fixed a
stray section comment typo/old-spelling in `itineraries.ts` ("GOLDEN TRIANGLE WITH
RANTHAMBHOREprice" → "TAJ & TIGERS (Golden Triangle with Ranthambore)"). Build clean 45/45.
**Deliberately NOT changed:** Colourful Rajasthan *image folder* path
`…/colorful-rajasthan/…` (internal ImageKit asset path, not a user-facing cross-link —
renaming would 404 images); orphan `to-be-added.json` (dormant, unimported).
**Files:** `app/components/services/exploreItems.ts`, `app/itineraries/itineraries.ts`,
`CLAUDE.md`.
**Next:** Two genuinely-open items remain, both needing input — (1) **"No proof / credentials"**
strategic item: needs client-supplied certifications (IATA/licensing/insurance/awards) — "Check
with Team India"; can scaffold a placeholder trust block on request. (2) The fixes are committed
locally but **never deployed** (no-push rule) — production still shows the old copy, which is
likely why the client still "sees" the issues. Deploying requires user sign-off.

### 2026-06-04 (session 31) — Website-review pass: consistency, B2B repositioning, broken-link & dead-end fixes
**Done:** Worked the full client website-review punch list. Build clean 45/45.
- **Currency → € sitewide:** `ItineraryCards.tsx` service-card path rendered `$` (theme pages were
  already €). Now `€`; also added a price-less path (`price?` optional) → "Price on request".
  `Journeys.tsx` fallback `$`→`€`.
- **Colourful Rajasthan reconciled:** title + datesPrices "Colorful"→"Colourful" (UK);
  `exploreItems` 16 Days→14, €2,086→Price on request (price omitted), Oct–Mar→Oct–Apr,
  "sixteen days"→"fourteen days" — all now match the detail page.
- **Ranthambhore→Ranthambore** everywhere (replace_all in `itineraries.ts` + `exploreItems`).
- **Gujarat:** card title "Vibrant Gujrat"→"Vibrant Gujarat" (title + datesPrices).
- **Kairali duration aligned:** service card 7 Nights → "7 / 14 / 21 Nights" (matches carousel).
- **Golden Triangle:** duration 7→6 Days (only 6 days authored; synced `exploreItems`); removed the
  duplicated "commissioned by Empress Nur Jahan" clause (Day 3 — fixed in both itineraries that had it);
  route header was dropping Agra — `HeroSection.shortRoute` now shows every stop for routes ≤5
  ("Delhi · Agra · Jaipur · Delhi").
- **Service pages:** Meetings strapline "Business by Day…"→"Business Meets Inspiration" (matches home);
  Sports strapline →"Where Sport Meets Culture" (distinct from Incentives' "…Transformations");
  Special Interest body copy rewritten (journey *of a* lifetime / repaired From…to… list / expert-led);
  Cruise & Sports Explore blocks given page-specific headings + honest subheads (no more pasted
  "centuries of history"); all block-using service + about-india pages now have relevant subheads.
- **CustomizedPrograms form (B2B):** lede→"Share your brief…", "Travel Plans"→"Brief / requirements",
  "Submit"→"Send brief".
- **Contact block (Footer, copy-only — logic/fields untouched):** heading→"We build the ground
  programme behind yours", sub→"Tell us what your clients or delegates need…", form eyebrow→
  "Request a proposal", heading→"Tell us about your programme", button→"Request a proposal",
  dropdown "Incentive Programs"→"Incentives" (value kept), removed dead "Event Production" option.
- **Itinerary CTA (B2B):** DetailsSection + ExpertInquiryModal →"…will tailor this itinerary to your
  client — flexible dates, custom pricing and preferred style."
- **Home hero/intro (B2B):** AboutUs intro rewritten for tour operators/advisors/corporate buyers
  (+ terminal period); hero service line "Special Interest Tour"→"Tours" (plural); JSON-LD + layout
  meta "specializing"→"specialising".
- **Nav/footer labels unified:** footer "Tours"→"Journeys", "Services"→"Our Services",
  "Special Interest"→"Special Interest Tours".
- **Broken /contact-us rebuilt:** was a dead stub (no nav/footer, dead form). Now renders Navbar +
  intro band + Footer (working /api/contact form). Both nav & footer "Contact Us" now point to
  `/#contact`.
- **Social icons hidden** (all linked to "#") — removed with a restore-when-live comment.
- **Event Production dead-end:** removed from home Services grid (row of 4→3) and contact dropdown
  (page still just redirects to /under-development).
- **About Us page:** "three pillars"→"three pillars:"; merged the fragmented philosophy line into one
  sentence; removed the lone trailing period on "Bespoke Curation" (matches the no-period cards);
  "global travelers"→"travellers".
- **Heritage page:** heading "Explore the Heritage\nExperience the Journey" → adds periods to both;
  completed the cut-off lead-in. Applied the period pattern to all 7 about-india headings.
- **Dialect (UK):** premium-leisure "specialize/traveler"→"specialise/traveller"; spiritual
  "centers/self-realization/travelers"→UK; itineraries Maheshwar "recognized"→"recognised".
**Files:** `app/components/{ItineraryCards,Journeys,AboutUs,Services,Footer,HeroCarousel}.tsx`,
`app/components/services/{exploreItems.ts,CustomizedPrograms,TaglineStrip(read-only)}`,
`app/our-services/{meetings-conferences,incentives(read),sports-tourism,cruise-handling,
special-interest,premium-leisure,education-tours}/page.tsx`,
`app/itineraries/itineraries.ts`, `app/itineraries/template/{HeroSection,DetailsSection,
ExpertInquiryModal}.tsx`, `app/{about-us,contact-us,heritage,wildlife,culture,architecture,
wellness,nature,spiritual}/page.tsx`, `app/layout.tsx`, `CLAUDE.md`.
**Next:** User reviews on dev. (a) Currency € everywhere incl. service cards; Rajasthan card now
"14 Days / Price on request". (b) Golden Triangle hero route shows Agra; "6 Days". (c) Service
straplines/subheads page-specific; Meetings matches home. (d) Footer/nav labels consistent;
/contact-us renders a real page; both Contact links land on the form; no social icons; no Event
Production in grid/dropdown. (e) B2B copy on home intro, contact block, itinerary CTA, customized-
programs form. **Still open (not in this review):** no social proof/credentials yet (client to
supply certifications — "Check with Team India"); `CustomizedPrograms` form still has no onSubmit;
`/event-prod` page itself still unbuilt (now unlinked); `to-be-added.json` staging file still has
old "Ranthambhore"/"Colorful" (not imported, non-live).

**Follow-up (same day, 2nd review round):** Caught items the first pass missed —
(1) **Northeast India & The City of Joy had the wrong subtitle** (pasted Golden-Triangle blurb)
*and* a `$1,330` price — this drives the Culture/Nature/Wildlife category cards + journeys index via
`fromCategory`, so one source fix corrects all. New subtitle = the real NE blurb; price → €1,330
(was the only remaining `$`-denominated `startingPrice` in the data). (2) More US spellings → UK:
culture "Festival of Colors/colored"→"Colours/coloured"; wellness "optimizing"→"optimising",
"Customized/Personalized"→"Customised/Personalised"; CustomizedPrograms heading+alt
"Customized"→"Customised"; wildlife "splendor"→"splendour"; architecture "valor"→"valour";
itineraries "local theater"→"theatre". Journeys index + Contact Us pull the same source / Footer
form, so both now render corrected. Build still clean 45/45.

### 2026-05-29 (session 30) — UX fixes: hero spacing, navbar smooth-scroll, About-India category filtering, expert button, day-card images
**Done:** Five frontend fixes. Build clean 43/43.
1. **Hero letter-spacing** (`HeroCarousel.tsx`) — tagline `tracking-[0.28em]→[0.1em]`; service line
   `[0.15em] md:[0.25em] → [0.05em] md:[0.1em]`.
2. **Navbar in-page scroll** (`Navbar.tsx`) — root cause: Lenis owns smooth scroll (native
   `scroll-behavior` removed), so native hash jumps were instant/flaky (the "Our Services
   doesn't scroll" bug). Added `useLenis()` + `usePathname()`, a `handleNavClick` that on the
   homepage `preventDefault`s and drives `lenis.scrollTo(el,{offset:-80})` (Home → `scrollTo(0)`),
   and an effect that smooth-scrolls when arriving on `/` with a hash (cross-page). Wired desktop
   + mobile links. Section ids confirmed: `#about-india` (AboutIndia), `#services` (Services),
   `#contact` (Footer).
3. **About-India itinerary filtering** (`ItineraryCards.tsx` + 7 pages) — added a data-driven
   `category` prop: when set, cards derive from `getItinerariesByCategory(category)` (limit 3),
   using real `startingPrice` (hides label/note for "Price on request"). Each `/about-india/*`
   page now passes `category="Heritage|Culture|Architecture|Nature|Spiritual|Wildlife|Wellness"`
   instead of hardcoded (often wrong-category) items. Services pages keep the `items` path
   (getExploreItems) unchanged. **Note:** `git checkout`-recovered architecture page after a
   transform-script regex over-deleted it; doing so surfaced a pre-existing HEAD bug (Architecture
   page's card heading read "Explore the Culture") — fixed to "Explore the Architecture".
4. **FloatingExpertButton** — removed chat icon, `rounded-full → rounded-[4px]`, text always
   visible (was `hidden sm:inline`).
5. **Day-card images** (`DaysSection.tsx`) — dropped `md:rounded-[8px]` so day thumbnails are
   square.
**Files:** `app/components/HeroCarousel.tsx`, `app/components/Navbar.tsx`,
`app/components/ItineraryCards.tsx`, `app/itineraries/template/FloatingExpertButton.tsx`,
`app/itineraries/template/DaysSection.tsx`, `app/{heritage,culture,wildlife,spiritual,nature,wellness,architecture}/page.tsx`,
`CLAUDE.md`.
**Next:** User reviews on dev — (a) hero spacing; (b) navbar: Home scrolls to top, About
India/Our Services/Contact smooth-scroll from home AND from other pages, no more flaky Our
Services; (c) each About-India section shows only its own itineraries (Wellness shows 2 — only
2 wellness itineraries exist); (d) sticky expert button is a rectangle w/ no icon; (e) day-card
images square. Possible follow-up: bump About-India `limit` if they want more than 3 cards.

### 2026-05-29 (session 29) — Premium imaging: India's Natural & Historical Treasures + Gems of South India (+ Rajasthan hero refresh)
**Done:** The **last two** placeholder itineraries imaged via the established pipeline (Pexels
premium → Wikimedia Commons for niche subjects → `sharp` → visually verify EVERY image,
re-source dup/B&W/foreign/wrong-region/weak → block-scoped wiring → SOURCES.md). Build clean
43/43; on-disk verified 27/27 + 14/14, 0 missing.
*(0) Colourful Rajasthan hero:* user re-uploaded `…/colorful-rajasthan/main-bg.png` (Udaipur
City Palace over Lake Pichola — fetched & verified premium); code already pointed there, so
appended a `?updatedAt=` cache-buster (L832) to force the refresh past Next/CDN image cache.
*(1) India's Natural & Historical Treasures (27 imgs):* 15 days + tiger hero + Taj-reflection
overview + 6 signature + 4 hotels. **Heaviest distinctness job yet** — combines Golden Triangle
+ Ranthambore + Central-India tigers, overlapping 3 done itineraries; cross-checked every
shared subject vs golden-triangle-with-ranthambore / encounter-tiger / safari. Re-sourced 11:
hero (flat lying tiger → dramatic striding tiger), day-2 (gritty fish-stall → Red-Fort
rickshaw), day-6 (murky forest → sunbeam sal-forest road), day-9 (**Delhi/sepia Jantar Mantar
mislabel → Jaipur City Palace Peacock Gate**), day-11 (**exact GT id-dup** → fort gate), yoga
(seaside → temple yoga), boat (**alpine speedboat** → Indian forest lake), balloon
(**Cappadocia** → India), 3 hotels (**exact GT id-dups**). Kept tigers vary deliberately
(jeep+tiger / dappled walk / two tigers / hero stride).
*(2) Gems of South India (Karnataka+Goa, 14 imgs):* 12 days + Mysore-Palace hero + coffee-hills
overview (no signature, no hotels — not authored). Overlaps southern-splendour; used its
SOURCES.md to guarantee distinct shots. Re-sourced 6: day-2 (**Gumbaz mislabel → Lalbagh Glass
House**, and **moved the Gumbaz to day-4** = Srirangapatna, accurate), day-4 (ambiguous
Mysore-interior → Gumbaz), day-7 (**dup of day-6** → Mullayanagiri), day-12 (**Palolem clashed
SS** → Agonda), hero (square palace detail → wide Mysore Palace daytime), overview
(**Munnar/Kerala tea → Western-Ghats coffee**).
**Files:** `app/itineraries/itineraries.ts` (INHT + Gems blocks: day images + hero/overview/
hotel URLs + comments; Rajasthan hero L832 cache-buster); new — 41 images + `SOURCES.md` in
`public/images/itineraries/indias-natural-and-historical-treasures/` and `…/gems-of-south-india/`;
`CLAUDE.md`.
**Next:** User reviews on dev — `/itineraries/colourful-rajasthan` (new Udaipur hero),
`/itineraries/indias-natural-and-historical-treasures` (the distinct tiger/Delhi/monument shots
vs GT/tiger/safari), `/itineraries/gems-of-south-india` (Karnataka shots vs Southern Splendour).
**All premium-pass itineraries now imaged.** Remaining = the original ~9 on client ImageKit /
cross-referenced images (classical-golden-triangle, taj-and-tigers, colourful-rajasthan days,
northeast-india-city-of-joy, kairali-ayurvedic-healing-village,
unveiling-the-enchanting-south-tamil-nadu, northeast-india-sojourn) — same pass on request.
Pexels key in gitignored `.claude-tmp/keys.env`.

### 2026-05-29 (session 28) — Premium imaging: Enchanting Central India + Enchanting South India (TN & Kerala)
**Done:** Two more itineraries fully imaged via the established pipeline (Pexels premium
primary → Wikimedia Commons for niche subjects → `sharp` compress → visually verify EVERY
image, re-source weak/dup/off-subject/B&W/foreign picks → block-scoped Node wiring asserting
exactly 1 match each → per-folder `SOURCES.md`). Hotels = representative luxury/heritage
stand-ins (flagged). Build clean 43/43.
*(1) Enchanting Central India (12 days, 21 imgs):* days = Bandra–Worli Sea Link (night),
Gateway of India, Bibi ka Maqbara, Ellora rock-cut temple, Ajanta chaitya hall, Omkareshwar,
Maheshwari handloom, Mandu pavilion, river aarti (Ujjain/Ram Ghat), Taj-ul-Masjid, Sanchi
torana, CST; hero = **Ellora Kailasa (elevated)**; overview = Maheshwar Narmada ghat; 3 Mumbai
signature (Bollywood / Art Deco / dawn); 4 hotels. Re-sourced 3: hero (Pexels gave **B&W** →
Commons colour Kailasa), day-10 (Pexels "Taj-ul-Masjid" returned a **Sri-Lanka red mosque** →
Commons real Bhopal mosque), day-1 (too-dark Marine Drive → Sea Link). **Distinctness vs
vibrant-gujarat-central-india verified** (Maheshwar/Mandu/Ujjain/Bhopal/Sanchi = different
subjects or compositions; 6 distinct Mumbai shots across days 1/2/12 + 3 signature).
*(2) Enchanting South India — TN & Kerala (16 days, 22 imgs):* days = Kapaleeshwarar (Chennai),
Shore Temple, Pondicherry villa, Auroville Matrimandir, Brihadeeshwara, Chettinad terracotta
horses, Athangudi mansion interior, Meenakshi gopuram detail, Thirumalai Nayak Palace, cardamom
harvest, Periyar lake cruise, Alleppey houseboat, Marari beach, Kerala palm coast, Kathakali,
Chinese fishing nets; hero = **Alleppey backwaters (golden hour)**; overview = Meenakshi
gopuram; 4 hotels. **Signature left empty per user decision** (source doc's block was wrong
NE-India template content). Re-sourced 4: day-1 (drab grey aerial → Kapaleeshwarar), day-6
(**dup** of day-7 Athangudi → terracotta horses), day-8 + overview (**identical** temple-tank
w/ cement billboard → 2 distinct Meenakshi gopurams). Kept verified-Kochi daytime nets over a
prettier sunset shot (likely Vietnam — geographic accuracy).
**Files:** `app/itineraries/itineraries.ts` (both blocks: day images + hero/overview/hotel
URLs + comments); new — ~43 images + `SOURCES.md` in
`public/images/itineraries/enchanting-central-india/` and
`…/enchanting-south-india-tamilnadu-kerala/`; `CLAUDE.md`.
**Next:** User reviews both on dev (`/itineraries/enchanting-central-india`,
`/itineraries/enchanting-south-india-tamilnadu-kerala`) — check the 6 distinct Mumbai shots,
Ellora hero vs day-4, and the 3 distinct South-India temple shots (Kapaleeshwarar/Meenakshi×2).
Remaining placeholder itineraries for the same pass on request: gems-of-south-india,
indias-natural-and-historical-treasures, + the original ~9 (classical-golden-triangle,
taj-and-tigers, colourful-rajasthan, northeast-india-city-of-joy,
kairali-ayurvedic-healing-village, unveiling-the-enchanting-south-tamil-nadu,
northeast-india-sojourn, …). Pexels key in gitignored `.claude-tmp/keys.env`.

### 2026-05-29 (session 27) — Premium imaging: Encounter (Royal Bengal Tiger) + Footsteps of Lord Buddha
**Done:** Two more itineraries fully imaged via the established pipeline (Pexels premium
primary → Wikimedia Commons for niche subjects → `sharp` compress → visually verify every
image, re-source weak/dup/off-subject picks → wire via block-scoped Node script → per-folder
`SOURCES.md`). Hotels = representative luxury/lodge stand-ins (flagged).
*(1) Encounter with the Royal Bengal Tiger (20):* 11 days (India Gate dusk, Humayun's Tomb,
forested-hills lake → Bandhavgarh, **Bengal tiger**, sun-ray forest drive, chital, Pench sal
forest, **leopard in a tree**, Tadoba lake, **tiger in water**, forest trail), hero (tiger
face), overview (tiger in forest), 3 signature (yoga, Old Delhi tandoori-skewers, street
art), 4 hotels (Claridges / Brij bush-lodge / Outpost tents / Waghoba). Re-sourced 9 weak
picks: India Gate + Humayun dups (vs Safari/GT), B&W tiger → color, jeep + leopard dups,
Coorg misty-hills (wrong region) → central-India, golgappa → smoky tandoori skewers,
**beach resort → genuine bush/safari lodge**. Wired via scoped script (safari-day text
repeats per-park; replacements scoped to the block).
*(2) On the Footsteps of Lord Buddha (21):* 15 days — day-1/2 deliberately **Lotus Temple +
Jama Masjid** (distinct from Encounter's India Gate/Humayun), Rumi Darwaza, Bara Imambara,
**Sravasti Jetavana ruins**, Maya Devi Temple, **Lumbini World-Peace-Pagoda lily pond**,
**Kushinagar reclining Buddha** (cropped around the head from a wide banner), **Vaishali
Ashokan lion-pillar**, Rajgir Vishwa Shanti Stupa, Nalanda ruins, Mahabodhi Temple, Ganga
Aarti, dawn ghats, Varanasi boats — hero = **Buddha on Ghora Katora Lake, Rajgir** (on-circuit,
atmospheric), overview = Ganges panorama, 4 hotels. Pexels covered Delhi/Lucknow/Bodhgaya/
Varanasi/hero/hotels; **Commons supplied the 4 pilgrimage sites Pexels lacks** (Sravasti,
Lumbini, Kushinagar, Vaishali — Commons image host 429-throttles, so used cooldown + per-image
backoff). Re-sourced: day-5 Nalanda-dup → Sravasti, day-7 redundant-Buddha → Lumbini pagoda,
day-8 Korean-temple reclining Buddha → real Kushinagar one, day-9 low-res Sarnath pillar →
Vaishali, garden-ornament hero → Ghora Katora, sandstone-aerial hotel → resort. 4 Varanasi
shots kept visibly distinct. `signatureExperiences: []` left empty (per user). Build clean 43/43.
**Files:** `app/itineraries/itineraries.ts` (both entries: days + hero/overview + hotels +
block comments; tiger also signature); new — ~41 images + `SOURCES.md` in
`public/images/itineraries/encounter-with-the-royal-bengal-tiger/` and
`…/footsteps-of-lord-buddha/`; `CLAUDE.md`.
**Next:** User reviews both on dev (`/itineraries/encounter-with-the-royal-bengal-tiger`,
`/itineraries/footsteps-of-lord-buddha`) — check tiger variety (no repeats), the 4 distinct
Varanasi shots, and the cropped Kushinagar Buddha at thumbnail size. Remaining placeholder/
Commons-era itineraries that can get the same premium pass on request: gems-of-south-india,
enchanting-central-india, enchanting-south-india-tamilnadu-kerala,
indias-natural-and-historical-treasures, + the original 9. Pexels key kept in gitignored
`.claude-tmp/keys.env`.

### 2026-05-29 (session 26) — Premium imaging: Incredible NE India + Golden Triangle with Ranthambore
**Done:** Two more itineraries fully imaged via the Pexels premium pipeline (visually
verified every image; re-sourced any B&W / dup / off-subject / weak picks; Commons only
where Pexels was thin). Hotels = representative luxury stand-ins (flagged in each SOURCES.md).
*(1) Incredible North East India (23):* 14 days (Howrah Bridge, Victoria Memorial,
Dakshineswar temple, Darjeeling tea-hills, **Darjeeling toy train — from Commons** as Pexels
only had a model, Darjeeling town, Pelling Buddhist pavilion, hill lake, giant Buddha
[representative], Sikkim monastery, Teesta valley, Lotus Temple, Qutub Minar, India Gate
night), hero (Kanchenjunga sunrise), overview (Yumthang Valley), 3 signature (yoga, Old Delhi
food, street art), 4 hotels. Re-sourced the B&W Kanchenjunga hero → color, a scaffolded
Buddha → clean, a dup tea-hills overview, a B&W toy-train station, and two weak hotels;
day-12/13 (Lotus/Qutub) made distinct from Safari's.
*(2) Golden Triangle with Ranthambore (23):* 8 days (India Gate, Humayun's Tomb, Agra Fort,
**Taj at sunrise**, Hawa Mahal, Ranthambore ruin, **Bengal tiger**, Jal Mahal), hero (Taj
classic), overview (Amber Fort), 9 signature (yoga, Old Delhi food, street art, Agra food,
Mughal heritage, marble inlay, Rajasthani food, decorated elephants, heritage cycling), 4
hotels. Re-sourced 6 that duplicated Safari (India Gate / Humayun / Agra Fort / Ganesha
mural) or were B&W (Old Delhi food, Agra heritage). **Wired via a scoped Node script** —
GT's Delhi/Agra day text collides verbatim with other Golden-Triangle itineraries, so
edits were scoped to the GT block (each phrase unique within it) to avoid mis-targeting.
Build clean 43/43.
**Files:** `app/itineraries/itineraries.ts` (both entries: days + hero/overview + signature
+ hotels + block comments); new — ~46 images + `SOURCES.md` in
`public/images/itineraries/incredible-north-east-india/` and
`…/golden-triangle-with-ranthambore/`; `CLAUDE.md`.
**Next:** User reviews both on dev (`/itineraries/incredible-north-east-india`,
`/itineraries/golden-triangle-with-ranthambore`). Continue the set one-by-one with the
Pexels standard (`.claude-tmp/keys.env` kept, gitignored). Itineraries still on
placeholders / Commons-era picks (e.g. gems-of-south-india, enchanting-central-india,
enchanting-south-india-tamilnadu-kerala, indias-natural-and-historical-treasures,
encounter-with-the-royal-bengal-tiger, footsteps-of-lord-buddha, + the original
9) can get the same premium pass on request.

### 2026-05-29 (session 25) — Premium sourcing switch (Pexels) + Safari & Heritage Trail + day-card image fix
**Done:**
*(1) Day-card image no-stretch fix (global).* `app/itineraries/template/DaysSection.tsx`
— the right-hand day image was `md:aspect-auto md:self-stretch` so it grew taller when a
long description grew the card. Changed to fixed `aspect-[4/3] self-start` (drop
`md:aspect-auto`/`md:self-stretch`/`md:rounded-br`, add `md:rounded-[8px]`). Now the image
is a constant ~4:3 thumbnail; long text grows the card while the image stays put. Shared
component → applies to every itinerary's day list.
*(2) New premium image standard.* Per user feedback (prior Commons picks "ok but can be
better" → want luxury/clean/high-res), switched the sourcing pipeline to **Pexels API**
(professional free-license stock; key stored in gitignored `.claude-tmp/keys.env`, never
committed/echoed), Wikimedia Commons now only a fallback. (User supplied a Pexels key; no
Unsplash key yet → Pexels + Commons.)
*(3) Safari & Heritage Trail — fully imaged (24).* `safari-and-heritage-trail` (12-day
Delhi/Agra + Bandhavgarh/Kanha/Pench tiger safaris): all 12 day cards, hero (Bengal tiger),
overview (Humayun's Tomb), 6 signature experiences (Art Walk → Ganesha street mural,
Moonlit Square → Old Delhi night street food, Yoga at Sivananda → meditation, Cooking →
Indian thali, Village walks → terraced fields, Yoga by Taj → seaside dawn yoga), 4 hotels.
Visually verified all 24; **re-sourced 5**: hero & day-4 (initially duped day-5 tiger /
day-8 forest-road), day-6 (Pexels top was black-and-white → color gypsy safari), art-walk
(first hit had Chinese signage → Indian Ganesha mural), yoga-by-taj (was Cappadocia/Turkey
→ seaside yoga). "Journey Page Content Template" confirmed = the section-spec doc
(`.claude-tmp/docx-extracted/`), used as the coverage checklist (not a separate build).
Hotels = representative premium stand-ins (flagged in SOURCES.md). Stored locally under
`public/images/itineraries/safari-and-heritage-trail/` (+ signature/, hotels/, SOURCES.md).
Build clean 43/43.
**Files:** `app/itineraries/template/DaysSection.tsx` (no-stretch fix);
`app/itineraries/itineraries.ts` (Safari 12 days + hero/overview + 6 signature + 4 hotels +
comments); new — 24 Pexels images + `SOURCES.md` in
`public/images/itineraries/safari-and-heritage-trail/`; `CLAUDE.md`.
**Next:** User reviews Safari (`/itineraries/safari-and-heritage-trail`) + the stretch fix
on any itinerary (e.g. Southern Splendour day-2) on dev. Continue the set one-by-one with
the Pexels standard (kept `.claude-tmp/keys.env` for this — gitignored). If an Unsplash key
is added later, can widen the pool. Earlier-itinerary images (Gujarat/Southern, sourced
from Commons) could be re-sourced to the Pexels premium bar later if the user wants
consistency. Still open from session 22: Gujarat day-5.png low-res (client upload).

### 2026-05-29 (session 24) — Finished Vibrant Gujarat page + fully imaged Southern Splendour
**Done:** Completed every remaining image container on two itineraries (~35
web-sourced, free-licensed images via the same Commons pipeline as session 23 —
Commons-only files, `sharp`-compressed, visually verified, multiple re-source
rounds for misses; stored LOCALLY under
`public/images/itineraries/<slug>/` with `signature/` + `hotels/` subfolders).
*(1) Vibrant Gujarat remainder (12):* hero (Rann of Kutch white desert),
overview (Statue of Unity), 6 signature experiences (Kutchi-embroidery Bhuj,
Kathak, handloom Maheshwari weaving, Chikankari, Awadhi/Tunday-kebab cooking,
Hazratganj bazaar), 4 hotels. The 2 previously-imageless signature items
(Kathak, Threads-of-Lucknow) now have images so the full 6-card grid renders.
*(2) Southern Splendour — full (23):* all 14 day cards (Vidhana Soudha,
Brindavan musical fountain, Mysore Palace dusk, Kabini elephant, Abbey Falls,
Gommateshwara, Halebidu, Chitradurga, Hampi stone chariot, Pattadakal, Panaji
church, Bom Jesus, Palolem, Goa sunset), hero (epic Hampi boulder landscape),
overview (Baga Beach), 3 signature (illuminated Mysore Palace, silk weaving,
Fontainhas), 4 hotels. Notable re-sources: day-6 (row of idols → the
Gommateshwara monolith), day-12 (parking lot → Bom Jesus facade), day-3 (Dasara
night → dusk, to differ from the night-palace signature), hero (Virupaksha w/
power lines → promoted the epic golden-hour Hampi landscape), Lalitha Mahal
(interior hall → palace exterior). **Hotels = representative** per user (actual
where free-licensed: Lalitha Mahal for Royal Orchid Metropole, Vijay Vilas
Palace for Ambika Niwas, Noor-us-Sabah for Jehan Numa, Vivanta-by-Taj for
Renaissance, Dwarka Resort for Taj Holiday Village; Wild-Ass-Sanctuary for Kutch
Safari, Kabini reservoir for Kaav, Matanga-Hill Hampi for Heritage Resort) —
all flagged *(representative)* in each `SOURCES.md`. Wrote/extended both
`SOURCES.md` manifests (per-image subject · license · author · Commons page).
`mapImage` left untouched on both (unused by template). Build clean 43/43.
**Files:** `app/itineraries/itineraries.ts` (Gujarat hero/overview/6-signature/
4-hotels + Southern 14-days/hero/overview/3-signature/4-hotels + both block
comments); new — `public/images/itineraries/vibrant-gujarat-central-india/`
(main-bg, overview, signature/×6, hotels/×4) + appended its SOURCES.md;
`public/images/itineraries/southern-splendour/` (day-1…14, main-bg, overview,
signature/×3, hotels/×4, SOURCES.md); `CLAUDE.md`.
**Next:** User reviews both pages on dev (`/itineraries/vibrant-gujarat-central-india`,
`/itineraries/southern-splendour`) — hero, overview, every day card, full
Signature grid, all 4 hotels. When the client supplies their own / official
photos (esp. hotels) and uploads to ImageKit, swap the local refs for ImageKit
URLs (paths documented in each SOURCES.md) and delete the local files.
Remaining placeholder itineraries (e.g. `gems-of-south-india` and others added
since — file now has 18 itineraries) can get the same pass on request. Still
open from session 22: Gujarat day-5.png low-res (225×225, client upload).

### 2026-05-29 (session 23) — Web-sourced day photos for Vibrant Gujarat days 8–20
**Done:** Filled the 13 imageless central-India day cards (8–20) with
content-relevant, free-licensed photos. User chose: source free-license web
photos (added to repo) + scope = day cards only (hero/overview/signature/hotels
left untouched). Pipeline: pulled each landmark's photo from **Wikimedia
Commons** via the API, accepting **only `/wikipedia/commons/` files** (Commons
policy = free-license guarantee), compressed with `sharp` to ~1280px JPG
(~100–300 KB each, ~2.3 MB total), stored **locally** at
`public/images/itineraries/vibrant-gujarat-central-india/day-N.jpg` (client
hasn't uploaded 8–20 to ImageKit). **Visually verified all 13**; re-sourced 5:
day-10 (API gave the *Delhi* Jahaz Mahal, not Mandu's → swapped to Mandu ship
palace), day-12 (amateur shot w/ camera watermark → Upper Lake/Bada Talab),
day-9 & day-16 (no Commons lead image → Roopmati's Pavilion / Bara Imambara via
file-search), day-18 (photographer's note "contact before commercial use" →
swapped to a clean CC BY 2.0 dawn-Sangam by *ptwo*). Wrote
`SOURCES.md` manifest (per-image subject · license · author · Commons file
page). Subjects: 8 Maheshwar ghats, 9 Roopmati's Pavilion, 10 Jahaz Mahal,
11 Mahakaleshwar, 12 Upper Lake, 13 Sanchi Stupa, 14 Bhimbetka, 15 Rumi
Darwaza, 16 Bara Imambara, 17 The Residency, 18 Triveni Sangam, 19 Ram ki
Paidi, 20 Ram Mandir. **Mixed hosts (documented):** days 1–7 = ImageKit URLs,
days 8–20 = local `/images/…` paths — block-header comment explains; swap to
ImageKit when client uploads. Build clean 43/43.
**Files:** `app/itineraries/itineraries.ts` (image on days 8–20 + header
comment); new — 13 `day-8…20.jpg` + `SOURCES.md` in
`public/images/itineraries/vibrant-gujarat-central-india/`; `CLAUDE.md`.
**Next:** When the client uploads their own day-8…20 (and hero/overview/map) to
ImageKit, swap the local refs for URLs and delete the local files. Optional dev
spot-check: day-11 (night Mahakaleshwar), day-13 (portrait Sanchi center-crops
in card). Still open from session 22: day-5.png low-res (225×225). Repeat the
same web-sourcing pass for *Gems of South India* if wanted. Gujarat
signature-experience + suggested-hotel images remain placeholders (out of scope
this session).

### 2026-05-29 (session 22) — Real day photos for Vibrant Gujarat (days 1–7)
**Done:** Client began uploading real itinerary photography to ImageKit under
`itineraries/vibrant-gujarat-central-india/day-N.png`. Probed the folder:
days 1–7 are live (200), days 8–20 + main-bg/overview/map still 404 (pending).
Wired the 7 available `day-N.png` into the Vibrant Gujarat `days[]` array,
replacing Day 1's old `classical-golden-triangle/day-1.webp` placeholder and
adding `image` to days 2–7 (previously imageless). Stored clean URLs (dropped
the `?updatedAt=` cache-buster) to match the file's convention. Visually
spot-checked all 7: day-1 Delhi/Kartavya Path, day-2 Prag Mahal Bhuj, day-3
Rann of Kutch, day-4 Kutch Bhunga huts, day-5 garden pond, day-6 heritage
palace, day-7 Statue of Unity — `day-N → Day N` mapping confirmed. No
next.config change needed (ik.imagekit.io already an allowed remote host).
Build clean 43/43. **Two flags raised to user (awaiting decision):** (a)
day-5.png is only 225×225px (9 KB) — low-res, will look soft in the card;
recommend re-upload at ~1200px+. (b) RESOLVED — user confirmed the day-5/day-6
swap: Day 5 (Ambika Niwas Palace) now references day-6.png (palace) and Day 6
(wildlife sanctuary) references day-5.png (pond). Cross-wiring documented via
inline comments + the block header note so it isn't "fixed" back later.
**Files:** `app/itineraries/itineraries.ts` (Gujarat days 1–7 `image` fields +
header comment refresh), `CLAUDE.md`.
**Next:** Wire remaining Gujarat images (day-8..day-20, hero/main-bg, overview,
map) as the client uploads them — user will post new URLs here. Then repeat the
same pass for the other recently-added itinerary, *Gems of South India*
(also still on neighbour-itinerary placeholders per session 17). Still open:
day-5.png is low-res (225×225) — re-upload at ~1200px+ when possible.
Signature-experience + suggested-hotel images for Gujarat also still placeholders.

### 2026-05-28 (session 21) — Footer link cleanup + working navbar search overlay
**Done:**
*(1) Footer.* `quickLinks` array trimmed: dropped dead `Blog →
/under-development`, added real `Contact Us → /contact-us`. Final 6
links: Home, About us, About India, Tours, Services, Contact Us. The
entire `Legal & Compliance` column was removed — all 4 of its entries
were `/under-development` placeholders with no real legal pages behind
them. `legalLinks` const + the rendered `<div>` block (heading + `<ul>`)
deleted from Footer.tsx. Links grid rebalanced
`lg:grid-cols-3` → `sm:grid-cols-2` (+ `lg:max-w-3xl` so the remaining
Contact Us + Quick Links columns don't fan out across the full container
width).
*(2) Working navbar search.* New `app/components/SearchOverlay.tsx` —
full-screen modal mirroring the proven `ExpertInquiryModal` pattern
(`bg-black/70 backdrop-blur-md z-[100]`, ESC close, body-scroll-lock,
click-outside dismiss). Centered 720px card with cream-tinted autofocus
search input, prefix magnifier, live itinerary list below. Matching uses
the existing `applyFilters` helper from `app/journeys/filters.ts` (sole
source of search logic — searches title + subtitle + route +
categories). Each result row shows a 56px thumbnail (`heroImage`),
Big-Caslon title, and `duration · region · €price` meta line; click
pushes to `/itineraries/<slug>`. Empty-query state shows a "Popular
journeys" peek of the first 3 itineraries. No-match state shows a soft
"No journeys match …" with a "Browse all journeys" CTA. Footer bar of
the overlay always exposes a `See all N results in Journeys →` deep-link
to `/journeys?q=<encoded>` (the existing /journeys filter system already
honours `?q=`). Keyboard nav: ↑/↓ cycles through results,
Enter navigates, ESC closes; visible kbd hint in the footer.
*(3) Navbar wiring.* Added `searchOpen` state. Desktop search button (was
decorative SVG, no onClick) now triggers `setSearchOpen(true)` + got
`cursor-pointer` + better aria label. Added a new "Search" row in the
mobile hamburger menu — same magnifier icon, taps close the mobile menu
then open the overlay (so it isn't trapped behind the menu's z-50
backdrop). `<SearchOverlay>` mounted once at the bottom of Navbar's JSX.
Build clean 43/43.
**Files:** modified — `app/components/Footer.tsx`,
`app/components/Navbar.tsx`. new — `app/components/SearchOverlay.tsx`.
**Next:** User reviews on dev. Walk: (a) Footer at desktop + mobile —
6 Quick Links + Contact column + form area should balance, no Legal
column. (b) Desktop magnifier in navbar → overlay opens with popular
journeys peek; type `kerala`/`rajasthan`/`heritage` → live results,
arrow-key + Enter navigates, click a result → itinerary page. (c) "See
all results in Journeys" → `/journeys?q=…` with input pre-filled. (d)
Mobile hamburger → Search row → menu closes, overlay opens. Possible
follow-ups: surface category chips inside the overlay for one-tap
"Heritage / Wildlife / Wellness" entry points if user wants a more
guided start; thumbnail-fallback if any future itinerary ships without a
`heroImage` (currently all 20 have one).

---

*Sessions 2–20 archived. See `SESSION_LOG_ARCHIVE.md` for full historical log
including: initial UX audit + P0 fixes (form, navbar, dead links), Link
codemod, P1 batch (hero CTA, carousel pacing), Home Figma sync feedback
rounds, About Us Figma sync, UI consistency batch (unified itinerary card,
responsive CTA), the 4-session `/about-india/*` sync pass (culture,
architecture, nature, spiritual, wildlife, wellness), the Our Services
rollout (12–14), site-wide smooth-scroll + `/journeys` page (15–16), and the
itinerary roster + detail-page polish, responsive sweep, and enquiry-form
redesign (17–20).*
