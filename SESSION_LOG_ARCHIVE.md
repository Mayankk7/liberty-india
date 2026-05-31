# Liberty India — Session Log Archive

> Historical session log entries archived from `CLAUDE.md` to keep the main
> context file under the ~30k char performance threshold. Claude does not need
> to read this file at session start — it's reference only. Refer to it if a
> specific historical decision needs to be revisited.

> Newest on top.

### 2026-05-27 (session 20) — Floating button → black + enquiry form spacing redesign
**Done:**
*(1) Floating CTA button.* `FloatingExpertButton.tsx`: orange
`bg-[#E07B39]` → `bg-black`, hover `bg-[#c66a2f]` → `bg-[#1a1a1a]`,
shadow orange glow → neutral black drop shadow
(`0_10px_28px_-10px_rgba(0,0,0,0.45)` / hover bumps to 36/0.55). Now
matches the modal's pure-B&W design language; no longer reads as a
marketing button.
*(2) Form redesign — less cluttered, more spacious.*
ExpertInquiryModal: dropped the awkward inline Title dropdown (was
`grid-cols-[80px_1fr_1fr]` — irregular 3-column row created visual
imbalance); removed `TITLES` const and `title` field from `FormState`
+ `INITIAL` + `fullName` join. First/Last now a clean 2-column grid.
Modal widened `max-w-[840px]` → `max-w-[960px]`, rounded `14px` →
`16px`, max-h `90vh` → `92vh`, left image min-h `480px` → `540px`.
Right-pane padding `p-5 md:p-7` → `p-6 md:p-9 lg:p-10`. Form rhythm:
`space-y-3.5` → `space-y-5`, row gaps `gap-3 md:gap-4` → `gap-4 md:gap-5`.
Inputs: padding `px-3.5 py-2.5` → `px-4 py-3`, text `text-[14px]` →
`text-[15px]`. Labels redesigned: `text-xs mb-1` →
`text-[12px] mb-2 tracking-[0.06em] uppercase font-medium text-[#424242]/85`
(premium small-caps eyebrow style). Textarea min-h `88px` → `100px`.
Added a subtle hairline `h-px bg-[#E9E4BF]/60` divider between form
fields and the consent block, separating "fill the form" from "confirm
and submit." Submit button got `py-3.5` → `py-4`, tracking
`0.18em` → `0.2em`, top margin `mt-2` → `mt-1` (divider provides
separation). Disclaimer paragraph centered for symmetry.
Build clean 43/43.
**Files:** modified — `app/itineraries/template/FloatingExpertButton.tsx`,
`app/itineraries/template/ExpertInquiryModal.tsx`.
**Next:** User reviews modal on dev — verify the wider 960px feels
spacious (not loose), check uppercase labels read as premium (not
shouty), confirm B&W floating button matches modal aesthetic. If Title
field is needed back later, it can be re-added as a small inline select
inside First Name (input + prefix dropdown pattern) — was dropped
purely for visual cleanliness, not for data reasons.

### 2026-05-27 (session 19) — Enquiry form polish + site-wide responsive sweep
**Done:** Two-part follow-up to session 18.
*Part 1 — ExpertInquiryModal refinement.* Stronger focus (backdrop
`bg-black/55 backdrop-blur-sm` → `bg-black/70 backdrop-blur-md`,
click-outside-to-close DISABLED — only ESC or × dismiss now). Smaller
card (`max-w-[1000px]` → `840px`; split `5fr/7fr` → `4fr/6fr`; left pane
`min-h-[560px]` → `480px`; right pane padding `p-6 md:p-8 lg:p-10` →
`p-5 md:p-7`; max-h `94vh` → `90vh`). Tighter form (title `text-2xl
md:text-3xl lg:text-[34px]` → `text-[22px] md:text-[26px] lg:text-[30px]`;
form `space-y-4` → `space-y-3.5`; input padding `px-4 py-3` →
`px-3.5 py-2.5`; textarea `min-h-[110px]` → `min-h-[88px]`; field labels
`mb-1.5` → `mb-1`). **Submit button redesigned pure B&W**: dropped the
orange `border-[#E07B39]` and gold `text-[#FDF39F]`, dropped the heavy
shadow glow (`0_10px_28px_-8px_…` + `0_14px_36px_-8px_…`) and the
`hover:scale-[1.005]`. New treatment: `bg-black hover:bg-white border
border-black text-white hover:text-black shadow-[0_2px_8px_…]
transition-colors duration-300`. Hover smoothly inverts to white-on-black
→ black-on-white. Premium minimal.
*Part 2 — Responsive sweep (10 files).* (i) **HeroCarousel**: service
line tracking `0.25em` → `0.15em md:0.25em` + smaller mobile text +
month gap `gap-4` → `gap-2 sm:gap-4` + destination label hidden below
sm (was overflowing). (ii) **Services**: title sizes `text-xl md:text-2xl`
→ `text-base sm:text-lg md:text-2xl` (4-up row was unreadable at 375px);
4-up row card heights `h-[360px] md:h-[460px]` → `h-[260px] sm:h-[320px]
md:h-[460px]`. (iii) **AboutIndia**: all 6 cards `h-72 md:h-84 lg:h-96`
→ `h-56 sm:h-64 md:h-84 lg:h-96`; collage `min-h-150` → `min-h-[420px]
sm:min-h-[520px] md:min-h-175`. (iv) **TabStrip**: gap `gap-6 md:gap-12`
→ `gap-3 sm:gap-6 md:gap-12`; text + padding also stepped down on small
screens. (v) **ImageTextOverlay**: heritage image `h-[414px]` → `h-[240px]
sm:h-[320px] md:h-[414px]`; floating card width `w-[85%] md:w-[38%]` →
`w-[90%] sm:w-[85%] md:w-[38%]`; offsets + padding scaled. (vi) **Journey
Finder**: new mobile-only "Filters (N)" toggle button — below `lg`, the
4 dropdowns are hidden until the toggle is tapped; `lg+` keeps inline
layout; dropdown panel `min-w-[220px]` → `min-w-[200px]
max-w-[calc(100vw-2rem)]` so it never exceeds viewport. (vii) **Footer**:
name/email/phone grid `sm:grid-cols-3` → `md:grid-cols-3` (don't fan out
at 640px); mobile-only input padding bump `px-3.5 py-2.5` →
`px-4 py-3 md:px-3.5 md:py-2.5`. (viii) **Itinerary HeroSection**:
`h-[72vh] min-h-[480px]` → `h-[58vh] md:h-[72vh] min-h-[360px]
md:min-h-[480px]` (was almost two full mobile screens). (ix)
**ItineraryCards**: gap `gap-8 md:gap-12` → `gap-6 sm:gap-8 md:gap-10
lg:gap-12` (no jank at 768px boundary). (x) **Contact Us page**:
`max-w-md` → `max-w-sm md:max-w-md`; input/button text `text-lg` →
`text-base md:text-lg`; horizontal padding added.
*Navbar*: audited but no change needed — already uses `lg:hidden` /
`hidden lg:flex` so hamburger appears at <1024px correctly. Audit
incorrectly flagged it.
Build clean 43/43. No TS / lint regressions.
**Files:** modified — `app/itineraries/template/ExpertInquiryModal.tsx`,
`app/components/HeroCarousel.tsx`, `app/components/Services.tsx`,
`app/components/AboutIndia.tsx`, `app/itineraries/template/TabStrip.tsx`,
`app/components/ImageTextOverlay.tsx`, `app/journeys/JourneyFinder.tsx`,
`app/components/Footer.tsx`, `app/itineraries/template/HeroSection.tsx`,
`app/components/ItineraryCards.tsx`, `app/contact-us/page.tsx`.
**Next:** User reviews on dev at 375 / 414 / 768 / 1024 / 1440 widths.
Focus areas: ExpertInquiryModal (centered/scales, no glow, B&W inversion
on hover, click-outside no longer dismisses), JourneyFinder mobile filter
toggle UX, Services 4-up tiles readability at 375, AboutIndia card
collage min-height. Pending follow-up candidates if needed: deeper
JourneyFinder mobile sidebar pattern (current toggle is the lightweight
fix); responsive audit on the not-yet-touched `/event-prod` page (still
on old flat-route layout per CLAUDE.md known-debt list); broader pass on
`/our-services/*` page hero typography at 375px (not in this session's
P0/P1 list).

### 2026-05-27 (session 18) — Itinerary detail page polish (4-part batch)
**Done:** Four-task batch on `/itineraries/<slug>`:
*(1) Day cards tightened + hover animation.* DaysSection card padding/font
scale reduced (image col `md:w-56 lg:w-64` → `md:w-44 lg:w-52`; body
`text-[15px]/leading-1.85` → `text-[14px]/leading-1.7`; day badge from
`px-5 py-3 text-base/lg` → `px-4 py-2 text-sm`). Added `group` +
`transition-all duration-300 ease-out hover:-translate-y-0.5
hover:border-[#E07B39]/40 hover:shadow-…` on the article, plus image
`group-hover:scale-[1.04] duration-500` for a subtle Ken-Burns lift on
hover.
*(2) Floating "Speak to an Expert" CTA + Figma-style modal.* New
`FloatingExpertButton.tsx` mounts inside `ItineraryTemplate` — fixed
bottom-right pill (`bg-[#E07B39]`, chat-bubble icon + label, label hidden
`<sm`), fades in after scrollY > 240, hides itself while modal is open.
New `ExpertInquiryModal.tsx` is a split-pane modal modeled on Figma
node 1066-1078: left hero image with "Enquire" overlay (uses each
itinerary's `heroImage`), right white form with Title dropdown +
First/Last name + Phone + Email + Travel Plans textarea + Privacy
(required) + Marketing opt-in checkboxes, dark+gold "SPEAK TO AN EXPERT"
submit. Maps to existing `/api/inquiry` payload by joining name fields
and appending marketing-opt-in flag to the message — zero API changes.
The in-page DetailsSection CTA still uses the original `InquiryModal`
(unchanged).
*(3) "Good to Know" icons.* DetailsSection: new `NotesList` component +
`pickNoteIcon` keyword router (calendar/tag/cloud/document/shield/coin/
luggage/info) + 8 new icon components reusing the existing `baseSvg`
factory. Notes now render with round cream chips (parallel to the
Inclusions list across the divider) instead of tiny orange dot glyphs.
Two-column grid preserved.
*(4) Footer button stroke thinned.* Footer "Speak to an Expert" submit:
`border-2 border-[#E07B39]` → `border border-[#E07B39]` (halved 2px → 1px
per user spec). Logic untouched (P0-frozen contract honoured).
Build clean 43/43 (counts each itinerary slug).
**Files:** modified — `app/itineraries/template/DaysSection.tsx`,
`app/itineraries/template/DetailsSection.tsx`,
`app/itineraries/ItineraryTemplate.tsx`, `app/components/Footer.tsx`. new
— `app/itineraries/template/FloatingExpertButton.tsx`,
`app/itineraries/template/ExpertInquiryModal.tsx`.
**Next:** User reviews on dev — verify hover feel on day cards, floating
button placement/scroll behavior, modal split-pane render at desktop and
mobile breakpoints, note icons matching the intended phrases (the regex
router may need keyword tuning if itineraries add notes about topics not
yet covered). The new ExpertInquiryModal posts via the existing
`/api/inquiry` route; live email delivery still depends on
`RESEND_API_KEY` being set in Vercel env (same as before — unchanged).

### 2026-05-25 (session 17) — Added 2 itineraries → 9 total (matches Figma roster)
**Done:** Added *Vibrant Gujarat with Central India* (18 days, Western, €1,890,
Heritage/Culture/Architecture/Adventure) and *Gems of South India* (12 days,
Southern, €1,420, Heritage/Culture/Architecture/Nature) to
`app/itineraries/itineraries.ts`. Both entries are full schema — day-by-day,
inclusions/exclusions, dates/prices, notes — but with `signatureExperiences:
[]` (the section auto-skips when empty). Added their `ITINERARY_MAP_ROUTES`
entries for the interactive map. Extended `app/journeys/filters.ts` Region
type with `Western` and `Central` and mapped the two new slugs.
**Files:** `app/itineraries/itineraries.ts` (+2 itinerary entries, +2 map
routes), `app/journeys/filters.ts` (Region type expansion + REGION_BY_SLUG
entries), `CLAUDE.md`. Build clean 34/34 — 9 itinerary detail pages now
generate at `/itineraries/<slug>`.
**Next:** Both new itineraries reuse neighbour itineraries' hero/overview
images as visual placeholders (Gujarat ← Colourful Rajasthan,
South India ← Tamil Nadu) — flagged in inline file comments. Replace when
real Gujarat/MP and Karnataka/Hampi/Goa photography is sourced.
Signature Experience images still missing on Kairali, Golden Triangle,
Taj & Tigers, Tamil Nadu, Colourful Rajasthan, NE Sojourn, and now the 2
new ones (8 itineraries total without signature images).

### 2026-05-25 (session 16) — Scroll perf fixes + All Journeys page + NE Signature images
**Done:**
*Part 1 — scroll perf.* Removed permanent `will-change: opacity, transform` from
`.reveal-init` (it had promoted ~35 off-screen elements into composited layers
on first paint, ballooning compositor cost). Moved the hint to `.reveal-in`
only; `Reveal.tsx` now clears `will-change` via `onAnimationEnd`. Rewrote
`Parallax.tsx` to cache wrapper offsetTop on mount + ResizeObserver instead of
calling `getBoundingClientRect()` every Lenis tick, and disabled parallax on
`(max-width: 768px)`. Bumped Lenis `lerp` 0.10 → 0.12 (snappier, fewer
intermediate frames). Scroll now reads smooth, not laggy.
*Part 2 — `/journeys` page.* New `app/journeys/page.tsx` (server) +
`JourneyFinder.tsx` (client) + `filters.ts` (pure helpers). Filter pill
contains search + 4 multi-select dropdowns: Region (Northern / Southern /
Northeastern — derived via slug→region map), Interests (categories), Travel
Style (Quick Escape ≤7d / Classic 8–13d / Extended 14+d), Ways To Travel
(Private vs Small Group — mirrors existing durationDays > 10 convention).
Active filters render as removable chips; "Showing N Results" counter;
empty state w/ clear-all. URL search params keep state shareable
(`?region=…&interest=…&style=…&way=…&q=…`). Grid reuses `<ItineraryCard>`
with new optional `badge` prop for the "Private/Small Group Journeys" pill
overlay. Navbar "Journeys" item now points to `/journeys` (was
`/#journeys`); homepage Journeys CTA → `/journeys`; Footer "Tours" → same.
Homepage Journeys section keeps Small/Private toggle; removed the dead
"View All / Hide" state since the new page replaces that flow.
*Part 3 — NE India Signature images.* Downloaded 6 Figma assets (Botanical
Garden, Tram Ride, Mother Teresa's House, Cooking Workshop, Miniature
Painting, Jazz Bar) to `public/images/signature-experience/northeast-india/`
and wired them to the Northeast India itinerary's
`signatureExperiences[].image` fields. Section now renders 6 real photos
matching Figma node 1064:1072.
Build clean 32/32.
**Files:**
- modified: `app/globals.css`, `app/components/Reveal.tsx`,
  `app/components/Parallax.tsx`, `app/components/LenisProvider.tsx`,
  `app/components/ItineraryCard.tsx` (+ `badge` prop),
  `app/components/Navbar.tsx`, `app/components/Footer.tsx`,
  `app/components/Journeys.tsx`, `app/itineraries/itineraries.ts`
  (NE India signature image paths), `CLAUDE.md`.
- new: `app/journeys/page.tsx`, `app/journeys/JourneyFinder.tsx`,
  `app/journeys/filters.ts`, 6 photos in
  `public/images/signature-experience/northeast-india/`.
**Next:** User reviews `/journeys` on dev — verify filter UX, mobile wrap,
URL sync. Pending follow-ups: (a) the 6 downloaded NE India photos are
large (~48MB combined — botanical-garden 18MB, jazz-bar 13MB, tram-ride
11MB); Next/Image serves resized variants but originals bloat the repo —
consider compressing or moving to ImageKit. (b) Signature Experience
images still missing on Kairali, Golden Triangle, Taj & Tigers, Tamil
Nadu, Colourful Rajasthan, NE India Sojourn (6 itineraries). (c) Add
`/journeys` to a sitemap when one exists.

### 2026-05-25 (session 15) — Site-wide smooth scroll + subtle reveal animations
**Done:** Added Lenis-based momentum scroll site-wide (replaces native
`scroll-behavior: smooth`), plus subtle scroll-triggered fade-up reveals on
section headings + card grids (stagger via `delay={i*80}`), plus light
parallax on hero images. New primitives: `LenisProvider` (root mount,
reduced-motion-aware), `useReveal` hook (IntersectionObserver, fires once),
`<Reveal>` wrapper, `<Parallax>` wrapper (subscribes to Lenis scroll, inner
div `relative` so Next/Image `fill` couples to the translate). Globals.css
gained `revealFadeUp` keyframes + `reveal-init`/`reveal-in` utilities with
a `prefers-reduced-motion` override. IndiaMap container gets
`data-lenis-prevent` so Leaflet keeps native wheel scroll. Build 31/31 clean.
**Files:** new — `app/components/LenisProvider.tsx`,
`app/components/Reveal.tsx`, `app/components/Parallax.tsx`,
`app/hooks/useReveal.ts`. modified — `app/layout.tsx`, `app/globals.css`,
`app/components/HeroCarousel.tsx` (Parallax on active image),
`app/components/services/ServiceHero.tsx` (Parallax on hero image),
`app/components/AboutUs.tsx`, `AboutIndia.tsx`, `Services.tsx`,
`Journeys.tsx`, `ImageTextOverlay.tsx`, `ItineraryCards.tsx` (Reveal +
stagger), `app/itineraries/IndiaMap.tsx` (`data-lenis-prevent`). Dep:
`lenis`.
**Next:** User reviews scroll feel on dev. Possible follow-ups: tune Lenis
`lerp` if it feels heavy; add Reveal to `/about-us` and `/our-services/*`
page wrappers if more cohesion wanted; revisit ImageTextOverlay parallax
(skipped — fixed-height images leave no overscan room).

### 2026-05-20 (session 14) — Per-section Figma block fix on /our-services
**Done:** Pulled remaining 6 Figma frames; 5 of 7 service sub-pages needed
their terminal block swapped from `<CustomizedPrograms>` form →
`<ItineraryCards>` "Explore Programs" 6-card grid (Premium Leisure, Cruise
Handling, Special Interest, Sports Tourism, Education Tours). Meetings &
Incentives keep the form (Figma confirmed). New shared helper
`app/components/services/exploreItems.ts` exports `getExploreItems(folderSlug)`
+ `EXPLORE_HEADING` / `EXPLORE_SUBHEADING` / `EXPLORE_BG` (#FDF39F4D).
Cruise Handling tagline corrected to "Seamless Integration of River & Coastal
Voyages" per Figma. Build 30/30 clean.
**Files:** `app/components/services/exploreItems.ts` (new); 5 service
`page.tsx` files rewritten; `CLAUDE.md`.
**Next:** User reviews 5 changed pages on dev. Candidate follow-ups: real
per-section itineraries, wire CustomizedPrograms form to `/api/contact`,
fold `/event-prod` into pattern.

### 2026-05-20 (session 13) — Our Services rollout complete (7 sub-pages)
**Done:** Built 3 shared service-page components (`ServiceHero`,
`TaglineStrip`, `CustomizedPrograms`) and rolled the Meetings & Conferences
pattern to all 6 remaining service sub-pages. 6 old flat routes deleted;
homepage Services grid hrefs repointed. Special-Interest content pulled from
Figma node 852-1751.
**Files:** 3 new components in `app/components/services/`; 6 new
`/our-services/<slug>/page.tsx`; `app/components/Services.tsx` (6 href edits);
6 old flat routes deleted.
**Next:** User reviews all 7 pages on dev server.

### 2026-05-20 (session 12) — Our Services revamp START
**Done:** New `SectionOverview` component (crossfade slideshow bg + floating
white card). First reference implementation at
`/our-services/meetings-conferences`. Old `/meetings` deleted; homepage Services
card repointed.
**Files:** `app/components/services/SectionOverview.tsx` (new);
`app/our-services/meetings-conferences/page.tsx` (new);
`app/components/Services.tsx` (href edit). Deleted: `app/meetings/page.tsx`.
**Next:** Roll pattern to remaining 6 sub-pages (done in session 13).

### 2026-05-20 (session 11) — WILDLIFE + WELLNESS synced (section-sync pass COMPLETE)
**Scope:** Final batch of the section-sync pass. Figma nodes `1:33054`
(wildlife) + `1:32861` (wellness). **All 6 `/about-india/*` sections now synced.**
**Done (build 30/30):**
- **wildlife:** Cleanup only — page already matched Figma + benchmark verbatim.
  Normalised 12-space indentation; replaced `min-h-150/175/200` with
  `min-h-[600px]/[700px]/[800px]`.
- **wellness:**
  - Ayurveda Retreat Experiences (Figma `1:33012`–`1:33041`): kept
    `experiences.png` bg; added semantic 5-card overlay (Ayurvedic
    Consultations / Customized Treatment Programs / Lifestyle Counselling /
    Herbal Medicine / Diet & Nutrition) — Merriweather Bold titles, `#424242`,
    `bg-white shadow-md`, 5-col grid over lower portion of image, stacks
    1-col on mobile. ⚠️ **Verify on dev** — risk of duplication if PNG has
    cards baked in.
  - Horizontal-overflow bug fixed: wrapper `w-[110vw]` → `w-full`; retreat
    card rows `w-[97vw]` → `w-full`.
**Flags:**
- ⚠️ Ayurveda overlay duplication check required on first dev load.
- **Sitewide ItineraryCards content-debt** flagged: all 6 sections pass
  3 itinerary items wired to Northeast/Golden-Triangle/Tamil-Nadu with
  `category:'Culture'`. Figma shows 6 cards per section with section-specific
  categories.

### 2026-05-19 (session 10) — NATURE + SPIRITUAL synced
**Done (build 30/30):**
- **nature:** Hero `w-[102vw]`→`w-full`, `font-extrabold`→`font-semibold`;
  intro card converted to heritage top-overlap; Figma intro copy adopted; all
  4 ImageTextOverlay → `variant="heritage"`; section renamed "Serene Backwater
  **Escapes**"; ItineraryCards heading copy-paste bug fixed (Culture →
  Nature).
- **spiritual:** Same heritage-pattern alignment; Figma copy adopted ("An
  ancient way of life…"); connector responsive bug fixed
  (`text-2xl` ×4 → `text-xl md:text-2xl lg:text-3xl`); ItineraryCards heading
  fix (Culture → Spiritual).
**Follow-up (user review):** Nature card sides re-flipped via `startPosition`
(no shared-component change): Mountain `right`→`left`, Coastal `left`→`right`,
Desert `right`→`left`.

### 2026-05-19 (session 9) — ARCHITECTURE synced
**Done (build 30/30, Figma node `1:32318`):**
- Hero + intro heading/card → heritage benchmark; connector → bold serif;
  4 section headings/subtexts → `#424242`; 3 ImageTextOverlay →
  `variant="heritage"`.
- Figma copy adopted: Indo-Islamic subtext, Rajput subtext.
- **Bugs fixed:** Rajput `startPosition="right"`→`"left"` (Amber Fort left /
  Umaid right); ItineraryCards heading "Explore the Culture…" → "Explore the
  Architecture…".
- Verified all 12 architecture CDN assets return 200.
**Flag:** Figma's Colonial card 1 labelled "Victoria Terminus" but describes
Victoria Memorial — kept code's correct copy.

### 2026-05-19 (session 8) — Section-sync system + CULTURE synced
**Done (build 30/30):**
- **New command** `.claude/commands/section-sync.md` — encodes Heritage
  Benchmark Checklist (overlay-card placement, `#424242` text, serif intro,
  bold-serif connector, `variant="heritage"` ImageTextOverlay w/ `h-[414px]`,
  CDN image paths) and per-section workflow.
- **Culture page synced to Figma `1:32121`:** hero alignment; intro heading
  copy "Where Every Thread Tells a Tale" (from Figma); intro card → heritage
  top-overlap; connector → bold serif; section headings → `#424242`;
  ImageTextOverlay → `variant="heritage"`; broken `/images/about-india/culture/*`
  paths (all 404) repointed to CDN.
- **CTA section fixed site-wide** (`Footer.tsx`): removed `mt-10` causing
  white strip before dark CTA; `footer-1.svg` baked export only scales to
  0.983 of SVG width → added `origin-left scale-x-[1.03]` to bg `<Image>` to
  bleed past right edge. P0 form logic untouched.

### 2026-05-19 (session 7) — UI consistency & responsiveness batch
**Done (build 30/30):**
1. **Unified itinerary card site-wide.** New shared
   `app/components/ItineraryCard.tsx` (homepage Journeys card design).
   `ItineraryCards.tsx` refactored to render it via adapter (keeps header/grid/
   `bgColor`; `variant` prop kept for compat but no-op). `Journeys.tsx`
   refactored to use shared card. 10 topic-page call sites untouched.
2. **Background `#fdf8e8`** on Journeys section + "How do you want to travel?"
   header band.
3. **CTA section made responsive** (`Footer.tsx`): restructured — bg image now
   `fill object-cover` behind content layer driving the height. Stacks
   single-column until `lg` (1024px). P0 form logic untouched.
4. **Navbar font weight** `font-light`→`font-normal`.

### 2026-05-19 (session 6) — Figma sync: ABOUT US page
**Done (build 30/30, Figma node `1:31820`):**
- Hero "About us" h1: `font-light`→`font-bold` + `text-shadow-lg`.
- "20 Years…" band: removed forced `<br/>`; bg `#FDF8E8`→`rgba(253,243,159,0.3)`.
- Intro card paragraph replaced with new Figma copy; font → playfair.
- Our Philosophy: sub-line → "True luxury lies in meaningful connection";
  body replaced with 2-line pull-quote.
- Our Promise: section bg → white; pillar heading colour `#E07B39`→`#e58021`.
- What Sets Us Apart: "Bespoke Curation" body replaced with Figma copy.
- Site-wide on this page: text token `text-gray-900/600` → `#424242`.
- CTA + Footer + Navbar (shared components) intentionally not touched.

### 2026-05-19 (session 5f) — Big Caslon CC font self-hosted
**Done (build 30/30):** User supplied licensed font. Copied 6 weights
(.otf, 400/700/900 + italics) to `public/fonts/`. Added `@font-face` rules at
top of `globals.css` with `font-display: swap`. Pre-existing `--font-playfair`
override now resolves to real face. `font-semibold` (600) maps to nearest 700.
**Files:** `public/fonts/BigCaslonCC-*.otf`, `app/globals.css`.

### 2026-05-19 (session 5e) — Home Figma sync: feedback round 4
**Done (build 30/30):**
1. AboutUs cream-strip tagline → `var(--font-playfair)` (= Big Caslon CC);
   monument-icon margin cut to `mb-0.5 md:mb-1`.
2. AboutUs main description weight `font-medium`→`font-normal`.
3. Services: section bg white; "How do you want to travel?" header on
   full-width `#f8f5f0` cream band; "Our Core Expertise" + grid on white.
4. Journeys toggle shrunk: `px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base`.
5. CTA: removed monument icon, replaced with white Liberty logo
   (`hero-section/logo.svg`).
6. CTA polish: left-weighted `from-black/70` readability gradient; hierarchy
   reworked (logo → orange eyebrow → semibold heading → support line); form
   card `bg-black/45 + ring + "Plan your journey" label`. Form logic untouched.

### 2026-05-19 (session 5d) — Home Figma sync: feedback round 3
**Done (build 30/30):**
1. **Journeys toggle** rebuilt to Figma node `103:5476`: white container,
   `border border-black`, `rounded-[10px]`, no inner pill. Inactive = white +
   `#424242`; active = `#424242` + `#fdf39f`; `text-[24px]`,
   `tracking-[0.48px]`, Segoe UI body font.
2. AboutUs cream-strip tagline bigger + heavier; padding tightened.
3. AboutUs main description `font-light`→`font-medium`.
4. CTA: added monument/peak icon above heading in left text block.
5. Footer Zarah AI logo: applied `mixBlendMode: 'screen'` to drop dark box
   (transparent export from designer would be cleaner).

### 2026-05-19 (session 5c) — Home Figma sync: feedback round 2
**Done (build 30/30, Home-scoped):**
- Hero hierarchy: "India's Leading…" stays bold white; eyebrow greyed; removed
  absolute backdrop div (CSS paint-order bug dimming headline).
- Footer reorganised: balanced top row (logo+brand left / socials right),
  even 3-col grid, unified column heading tracking.
- Journeys: all cards equal height (wrapper h-full, card flex-col h-full,
  price row mt-auto).
- Journeys toggle redesigned to Figma node 979:1362 — dark pill (#3a3a3a),
  active = gold #E5C06B on recessed #262626, inactive grey.
- Headings: global 1% letter-spacing (`0.01em`) on h1–h6 + .font-serif.

### 2026-05-19 (session 5b) — Home Figma sync: client feedback round
**Done (build 30/30):**
1. Global fonts: `globals.css` overrides `--font-playfair`/`--font-merriweather`
   with `!important` → headings Big Caslon CC, body Segoe UI.
2. Hero eyebrow larger + semibold + tracking + soft blurred dark backdrop
   behind hero heading block.
3. Removed misaligned About-India "Extraordinary Tapestry" overlay added
   earlier — reverted to prior structure.
4. Services: row-of-4 cards equal height to row-of-3 (h-[360px] md:h-[460px]);
   gaps tightened to gap-2.
5. Footer: "Powered by Travel Mate tech" → "Powered by Zarah AI" + logo
   (`public/zarah-ai.png`, from Figma node 978:1067).
6. Footer CTA: removed duplicate gold monument decorative icon; polished form
   (translucent card, full-width inputs, brand-orange filled submit). Form
   logic/fields (P0) unchanged.

### 2026-05-19 (session 5) — Figma sync: HOME section (P0/P1/P2 backlog paused)
**Note:** Figma `get_metadata`/`get_design_context` failed all session
("session expired"). Worked around with `get_screenshot` (1920×14479) + slices.
**Done (build green):**
- Navbar: added desktop search icon.
- Hero: tagline moved ABOVE headline as eyebrow; removed center logo; removed
  "Plan Your Journey" CTA (Figma wins over P1-5); sub-line "MICE | Leisure |
  Special Interest Tour | Events & Beyond"; headline wrap "India's Leading /
  Destination Management Company".
- About-Us: cream-strip copy → "Liberty crafts extraordinary journeys to
  India…"; CTA label → "Discover More".
- About-India: added overlaid "India's Extraordinary Tapestry…" heading + 20-
  years paragraph on map collage.
- Services: added "Our Core Expertise" label; rebuilt grid (1 wide / row of 3
  / row of 4) via clean ServiceCard component — retired fragile P1-8
  negative-margin masonry; `onKeyDown` (was `onKeyPress`).
- Journeys: toggle reordered/relabelled (Small Groups | Private Group); cards
  redesigned — tag pills → "Category | Best Time | season" meta line; price
  prefixed "Starting From".
- Footer: 4→3 columns (removed Support); "Contact us"→"Blog"; "Legal"→"Legal &
  Compliance"; "Powered by Travel Mate tech" bottom bar. Contact form
  untouched (P0 frozen).
**Flags:** Heading font ("more readable" — client doc) — user to supply exact
font/size/weight. Missing asset: Travel Mate Tech logo. Figma structured-data
connector still broken. Figma "Special Interest Tours" card showed
Event-Production text (Figma-side placeholder) — code keeps correct copy.

### 2026-05-19 (session 4) — P1 batch (partial: hero + services)
**Done:**
- **P1-5 ✅** Above-the-fold CTA "Plan Your Journey" → `/#contact` in
  `HeroCarousel.tsx`.
- **P1-6 ✅** Carousel: auto-advance 3s → 6s; pauses on hover/focus;
  respects `prefers-reduced-motion`; fixed crossfade `setTimeout` leak.
- **P1-7 ⚠️ BLOCKED:** Jan/Feb duplicate image — no January asset on CDN.
- **P1-8 ⏸️ DEFERRED:** Services masonry rewrite — high visual-regression risk.
- **P1-9 ✅** Added dark gradient overlay to Sports Tourism + Special Interest
  service cards.
- **P1-10 ✅** Services routing now data-driven: added `href` to each service
  object, fixed scrambled `id`s, replaced 8 scattered hard-coded route strings.
  All 8 routes verified 200.

### 2026-05-19 (session 3) — Link codemod (legacyBehavior cleanup)
**Done:** Ran `npx @next/codemod@latest new-link .`. Converted 2 legacy
`<Link>` usages (Journeys, ItineraryCards) off `passHref`/`legacyBehavior` +
nested `<a>`. `style` now on `<Link>` directly. Build 30/30, zero
`legacyBehavior`/`passHref` left, no new hydration warnings. Other
deprecations logged in `TECH_DEBT.md` (`onKeyPress`, `window.location.href`
internal nav).

### 2026-05-19 (session 2) — All P0 issues fixed
**Done (build clean):**
- **P0-1 ✅** Contact form works. New `app/api/contact/route.ts`:
  server-side validation + email via Resend REST API (no SDK dep),
  gated on `RESEND_API_KEY`. Footer form rewritten with controlled submit,
  loading spinner, success panel, error banner.
- **P0-2 ✅** Form inputs readable: `bg-white/95`, `border-gray-300`,
  `placeholder-gray-500`, focus ring. Consent label white on dark photo.
- **P0-3 ✅** `Navbar.tsx` hamburger `text-white` on transparent hero,
  `text-gray-700` when scrolled.
- **P0-4 ✅** Footer Quick/Support/Legal links repointed (real routes +
  `/under-development` for non-existent pages).
**Deployment note:** Set `RESEND_API_KEY`, `CONTACT_TO`
(default `India@liberty-int.com`), `CONTACT_FROM` (Resend-verified sender) in
Vercel env. Until then form succeeds but only server-logs.

### 2026-05-19 — Project context init + full UX audit of homepage
**Done:** Created `CLAUDE.md`. Surveyed codebase. Full UX/UI audit of homepage
+ core components.
**Audit findings (backlog):**
- **P0-1** Contact form `console.log` only — no submit/states.
- **P0-2** Form inputs unreadable (bg-transparent + dark text on photo).
- **P0-3** Mobile hamburger always `text-gray-700` (invisible on dark hero).
- **P0-4** Dead links: footer Quick/Support/Legal all `#faq`/`#terms`.
- **P1-5** No CTA above the fold in HeroCarousel.
- **P1-6** Hero 3s auto-advance, no pause-on-hover, no reduced-motion.
- **P1-7** Jan & Feb same image (`feb.png`).
- **P1-8** Services masonry hard-coded `md:-mt-[300px]`.
- **P1-9** Sports Tourism + Special Interest cards lack dark gradient overlay.
- **P1-10** Services routing maps by array index with mismatched id/title/route.
- **P2-11** Inconsistent nav: `window.location.href` vs `<a>` vs `<Link>`.
- **P2-12** AboutUs CTA: full-sentence button label + dead guard code.
- **P2-13** Deprecated: `Link legacyBehavior`+`<a>`, `onKeyPress`.
- **P2-14** Repeated inline `style={{fontFamily}}` instead of utilities.
- **P2-15** Inconsistent container widths.
- **P2-16** No global `focus-visible` styles.
- **P2-17** Journeys categorization heuristic arbitrary.
