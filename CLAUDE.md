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

### 2026-06-13 (session 61) — Hero crossfade: kill the fade-to-black between slides
**Done:** Client: hero "becomes black then changes the picture" on every slide change. Root cause in
`HeroCarousel.tsx`: the crossfade fired `startFade` via a blind **500ms `fadeStartTimer`** fallback, so
on any hero image that took >500ms to load the OUTGOING overlay faded out before the incoming had
painted → the dark `bg-[#1a1008]` showed through → image popped in. Rewrote the crossfade to be
load-gated and inverted so the background can never show:
- **Bottom layer (z-1) = the OUTGOING/settled image, always opaque** (keyed on `prevIndex`, never
  remounts mid-transition → stays painted).
- **Top layer (z-2) = the INCOMING image**, keyed on `activeMonth.id`, `opacity: startFade ? 1 : 0`
  with a 900ms transition; fades in **only** on the image's real `onLoad` (`handleActiveLoad`).
- On fade-in `transitionEnd` (`handleIncomingFadeEnd`) → settle: `prevIndex = activeIndex` (bottom
  remounts to the new image but is fully covered by the opaque top). Removed the 500ms timer entirely;
  kept a single **6000ms safety** that only force-settles if `onLoad`/`transitionEnd` never fire.
- Moved `priority` to the bottom (initial LCP); top loads on demand. Both keep Parallax + quality 90.
Net: outgoing image stays put until the incoming has actually loaded and faded in over it — no black
gap, no pop. Build clean 45/45.
**Files:** `app/components/HeroCarousel.tsx`, `CLAUDE.md`.
**Next:** Client reviews the home hero (tab months / let it auto-advance, incl. throttled/slow network)
— slides should cross-fade with the previous photo held until the next is ready; never a black flash.

### 2026-06-13 (session 60) — Home AboutIndia quote: smaller on mobile
**Done:** Client: make the "Journeys, when crafted with intention, become lifelong memories" quote
smaller on mobile. In `AboutIndia.tsx` the overlay `<p>` was `text-3xl md:text-4xl lg:text-5xl
xl:text-6xl` → `text-xl sm:text-2xl md:text-4xl …` (mobile 30→20px, small tablet 24px; `md:`+ desktop
unchanged). Build clean 45/45.
**Files:** `app/components/AboutIndia.tsx`, `CLAUDE.md`.
**Next:** Client reviews the home About-India quote band on mobile — smaller text. Adjust `text-xl`
up/down if needed.

### 2026-06-13 (session 59) — Fix Customised Programs image 500s (Next 16 qualities + oversized sources)
**Done:** Client: programs image still not loading on Meetings + Incentives. Diagnosed via the Next image
optimizer directly (dev server). Two distinct causes; build clean 45/45.
1. **`quality={90}` not allowed (Next 16):** `next.config.ts images` had no `qualities`, so it defaulted
   to `[75]` → any `quality={90}` image 400s. Only `HeroCarousel.tsx` (lines 163, 187) uses 90. Added
   `qualities: [75, 90]`. **⚠️ next.config change needs a `npm run dev` RESTART to take effect.**
2. **Oversized sources 500 the optimizer:** the new Meetings `programs.png` is **7 MB / 1926×2448 RGBA**
   — `/_next/image?…q=75` returned **500 intermittently** (AVIF encode OOM/timeout on the heavy source;
   normal images were 200). Incentives `programs.svg` = **4.7 MB** (returns 200 since SVGs aren't
   sharp-processed, but very heavy). Fix = let ImageKit pre-resize so Next gets a light source:
   - Meetings: `…/programs.png?updatedAt=…` → `…/programs.png?tr=w-1600&updatedAt=…` (1.76 MB; optimizer 3/3 200).
   - Incentives: `…/programs.svg` → `…/programs.svg?tr=w-1600,f-png` (rasterised to 1.29 MB; optimizer 3/3 200).
**Files:** `next.config.ts`, `app/our-services/meetings-conferences/page.tsx`,
`app/our-services/incentives/page.tsx`, `CLAUDE.md`.
**Next:** Client **restarts the dev server** (for the qualities config), then reviews `/our-services/
meetings-conferences` + `/incentives` — both Customised Programs photos should now load. Real fix for the
future: client should upload web-sized images (the 7 MB/4.7 MB originals are far too heavy); the `tr=`
resize is a CDN-side band-aid.

### 2026-06-13 (session 58) — Fix invisible "Customised Programs" image on Meetings page
**Done:** Client flagged the Customised Programs image not showing on `/our-services/meetings-conferences`.
Root cause: the page passed `…/services/meetings/program.svg` (singular, `.svg`) → **404** (probed). The
real asset is `…/services/meetings/programs.png` (plural, `.png`, client-supplied URL) → 200. Updated the
`<CustomizedPrograms imageSrc=…>` to the working PNG (with the client's `?updatedAt=` cache-buster). The
Incentives page's `…/services/incentive/programs.svg` is fine (200), left untouched. Build clean 45/45.
**Files:** `app/our-services/meetings-conferences/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews `/our-services/meetings-conferences` — the Customised Programs photo now renders.

### 2026-06-13 (session 57) — Spiritual: left/right SPACING on section titles + paragraphs (mobile)
**Done:** Client: "add the borders [= side spacing, per session 53's clarification] on left and right
of the section title and paragraph" — same fix as nature. The 3 spiritual section headers (Sacred Hindu
Pilgrimage Sites, Buddhist Sacred Journey, Sikh Spirituality) shared `w-full max-w-5xl mx-auto
text-center mb-12 md:mb-14`; `replace_all` `w-full` → `w-[90%]` gives ~5% side margin on mobile
(matching the `w-[90%]` ImageTextOverlay cards) while desktop stays capped at `max-w-5xl` (unchanged).
The intro page-title (`w-full max-w-5xl mt-4 …`, no paragraph) + footer connector line were left as-is.
Build clean 45/45.
**Files:** `app/spiritual/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews `/spiritual` mobile — section titles/paragraphs now inset from the edges. (Same
pattern still available for wellness section headers if wanted.)

### 2026-06-13 (session 56) — Architecture inter-section spacing + Wellness Ayurveda cards get images
**Done:** Two areas. Build clean 45/45.
1. **Architecture — reduced empty space above Rajput + Colonial (mobile only).** Each gap = previous
   section's `pb` + the section's own `pt`. Indo-Islamic / Rajput / Colonial all shared
   `py-6 md:py-16 lg:py-20`; split the mobile values, desktop `md:py-16 lg:py-20` kept (the overlay
   cards' `-bottom-10` protrusion needs the desktop pb): Indo-Islamic `py-6…` → `pt-6 pb-3…`; Rajput
   `py-6…` → `py-3…`; Colonial `py-6…` → `pt-3 pb-6…`. Net mobile gaps above Rajput & Colonial ~48px→24px.
2. **Wellness "Ayurveda Retreat Experiences" — images added per the Figma** (node 707-810). The 5
   offering cards were text-only; now each is a vertical card (photo on top `h-72` + title/body below),
   mirroring the Retreat Locations card pattern just beneath it. Images from the client's ImageKit
   uploads (probed all 5 → 200): `Ayurvedic Consultations.png`, `Customized Treatment Programs.png`,
   `Lifestyle Counselling.png`, `Herbal Medicine.png`, `Diet & Nutrition.png`. **Note:** the Diet image
   only resolves with the literal `&` (`…/Diet%20&%20Nutrition.png`); the `%26` form 404s — kept the
   literal form (round-trips fine through Next/Image). Lifestyle Counselling wasn't in the client's
   pasted list but the file exists, so all 5 cards have real photos.
**Files:** `app/architecture/page.tsx`, `app/wellness/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews `/architecture` mobile (tighter gaps above Rajput & Colonial) and `/wellness`
(Ayurveda cards now show a photo on top of each tab). The Figma row looks gapless/edge-to-edge; I kept
the site's `gap-4` + shadow card style for cohesion with the Retreat Locations section below — say the
word to make it a flush edge-to-edge band instead.
**Follow-up (same session):** Client wanted (a) the Ayurveda row **gapless on desktop** but **carded
with visible images on mobile**, and (b) **more** space above Festival + Artisan in culture. (a) Grid
`gap-4` → `gap-4 lg:gap-0` and card `shadow-md` → `shadow-md lg:shadow-none` → flush edge-to-edge band
at `lg` (the Figma look), separated shadowed cards (images intact) below `lg`. (b) Festival/Artisan
mobile `pt-4` → `pt-8` (gaps above each ~24px → ~40px; desktop `md:py-14` / `md:pt-4` untouched). Build
clean 45/45.
**Follow-up 2 (same session):** (1) **Hydration mismatch on the footer form** — a browser extension
injects `fdprocessedid` onto form controls before React hydrates (the error named the `<button>`).
Added `suppressHydrationWarning` to all 7 Footer form controls (name/phone/email inputs, select,
textarea, checkbox, submit button) so the extension-injected attr no longer trips hydration. This is a
rendering hint, not logic/fields/state — within the P0-freeze rules. (2) **Wellness Ayurveda** — client
asked to bottom-align 3 of the 5 photos; the image `className` now derives object-position from the card
title: `object-bottom` for Ayurvedic Consultations / Customised Treatment Programs / Lifestyle
Counselling, `object-center` for Herbal Medicine + Diet & Nutrition (kept as-is). Build clean 45/45.

### 2026-06-13 (session 55) — Culture: eliminate empty space above Festival + Artisan & Craft (mobile)
**Done:** Client: "eliminate the empty space above Festival Immersion Experiences and above Artisan &
Craft Traditions." Each gap = previous section's bottom padding + the section's own top padding.
Zeroed the top padding of Festival/Artisan and shrank the bottom padding of the section above each
(mobile only; desktop `md:py-14` etc. preserved). Build clean 45/45.
- A Tapestry of Faiths: `py-6 md:py-14` → `pt-6 pb-2 md:py-14` (mobile bottom 24→8px).
- Festival Immersion Experiences: `py-6 md:py-14` → `pt-0 pb-2 md:py-14` (mobile top 24→0, bottom 24→8px).
- Artisan & Craft Traditions: `pt-2 md:pt-4 pb-10 md:pb-14` → `pt-0 md:pt-4 pb-10 md:pb-14` (mobile top 8→0).
Net mobile gaps: above Festival ~48px→8px, above Artisan ~32px→8px (kept an 8px hair so the heading
isn't glued to the card above; can go fully flush if wanted). Builds on session 54's `last:mb-0` (no
trailing card margin).
**Files:** `app/culture/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews `/culture` mobile — Festival and Artisan headings now sit just under the
preceding section. If still too much/too little, trivial to adjust the 8px.
**Follow-up (same session):** Client: "add space above each section where we removed it fully" — the
8px (pt-0) read as glued. Bumped the two `pt-0` sections back to `pt-4` (Festival `pt-0 pb-2 md:py-14`
→ `pt-4 pb-2 md:py-14`; Artisan `pt-0 md:pt-4 …` → `pt-4 md:pt-4 …`). Net mobile gaps now ~24px above
each (Faiths/Festival `pb-2` 8px + own `pt-4` 16px); desktop unchanged. Build clean 45/45.

### 2026-06-13 (session 54) — Heritage polish: heading centring, space above Living Traditions, Ancient Temple breathing room
**Done:** Three client items on `/heritage`. Build clean 45/45.
1. **"5,000 Years Written in Stone" centred:** the h2 was already in a `text-center` container, but
   added explicit `text-center mx-auto` to the heading itself (belt-and-suspenders). If it still reads
   left on the client's screen it's likely a dev cache — flagged.
2. **Extra empty space above "Living Traditions of Indian Art" eliminated:** root cause = the shared
   `ImageTextOverlay` gave its **last** card a `mb-16 md:mb-20` bottom margin, so every overlay
   section had ~64px dead space below its last card (incl. Indian Dance Heritage, directly above
   Living Traditions). Added `last:mb-0` to the Reveal wrapper → last card has no bottom margin; the
   section `py` handles spacing. Beneficially tightens the bottom of ALL overlay sections (heritage
   Dance/Art, culture Faiths/Fest, nature, spiritual, architecture) — consistent, not just heritage.
3. **A little space above/below the "Ancient Temple Architecture" header:** its header `py` had been
   cut to `py-6` in the session-51 tightening; nudged to `py-8 md:py-16` (mobile +8px above the heading
   and below the paragraph; desktop unchanged).
**Files:** `app/heritage/page.tsx`, `app/components/ImageTextOverlay.tsx`, `CLAUDE.md`.
**Next:** Client reviews `/heritage` — heading centred, less gap before Living Traditions, a bit more
room around the Ancient Temple header. Note #2 (`last:mb-0`) also affects culture/nature/spiritual/
architecture overlay-section bottoms (intended/consistent). If "5,000 Years" still looks off, send a
screenshot.

### 2026-06-13 (session 53) — Nature: left/right SPACING on section title + paragraph (mobile)
**Done:** First attempt added decorative `border-x` accent lines to the 4 nature section titles —
client clarified they meant **spacing** ("not design borders, the spacing borders"), i.e. left/right
padding so the title + paragraph don't touch the screen edges on mobile. **Reverted the borders** and
instead changed the nature section-header containers `w-full max-w-5xl mx-auto text-center mb-12 md:mb-14`
→ `w-[90%] max-w-5xl mx-auto text-center …` (replace_all, hits the intro heading + the 4 section headers).
`w-[90%]` gives ~5% side margin on mobile (matching the `w-[90%]` ImageTextOverlay cards below) while
desktop is unchanged (both `w-full` and `w-[90%]` cap at `max-w-5xl`). Build clean 45/45.
**Files:** `app/nature/page.tsx`, `CLAUDE.md`.
**Note:** spiritual + wellness section headers use the same edge-to-edge `w-full max-w-5xl mx-auto
text-center` pattern — can apply the same `w-[90%]` side spacing there if the client wants consistency.
**Next:** Client reviews `/nature` mobile — section titles/paragraphs now have left/right breathing
room (aligned with the cards). Confirm desktop unchanged.

### 2026-06-13 (session 52) — About-India: heading→paragraph gap reduced on the remaining section titles
**Done:** Client (showing the "Festival Immersion Experiences" block, `mb-4`): "decrease the spacing
between heading and paragraph in all sections, don't miss any." Session 50 only reduced the `mb-6`
headings (nature/spiritual/wellness → `mb-2 md:mb-6`); the `mb-4`/`mb-3` section titles were missed.
Reduced those to **`mb-2` on mobile** (desktop `md:` value kept), so every section title now has the
same tight heading→paragraph gap on mobile:
- heritage: Dance/Art + Ancient Temple `font-bold … mb-4 [max-w-3xl] mx-auto` → `mb-2 md:mb-4 …`.
- culture: Faiths/Festivals `… mb-4 mx-auto` → `mb-2 md:mb-4 mx-auto`; Artisan & Craft `… mb-3`
  → `mb-2 md:mb-3`.
- Already `mb-2` (no change): architecture section headings, nature/spiritual/wellness (session 50),
  wellness Retreat. Intro page-headings + connector bands have no heading+paragraph pair (skipped).
Build clean 45/45. Desktop unchanged (gap reduction gated to mobile via `md:`).
**Files:** `app/heritage/page.tsx`, `app/culture/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews mobile — every section title sits tight to its paragraph. (Desktop gaps
preserved; say the word to reduce those too.)

### 2026-06-13 (session 51) — About-India: tightened between-section padding (mobile only)
**Done:** Client: "remove the padding between the sections" → confirmed (AskUserQuestion) = all
about-india pages, **reduce** (not flush), mobile only / desktop protected. Reduced every content
section's **mobile** vertical padding to a consistent `py-6` (was 8–12), keeping each `md:` value so
desktop is byte-for-byte unchanged. Build clean 45/45. Patterns reduced (mobile → `py-6`/`pt-6`/`pb-8`,
`md:` kept):
`py-12 md:py-16 lg:py-20`→`py-6 …` (architecture ×5, nature intro); `py-10 md:py-2`→`py-6 md:py-2`
(nature ×4, spiritual ×3); `py-10 md:py-14`→`py-6 md:py-14` (heritage Dance/Art/Mughal, culture
Faiths/Fest); `py-12 md:py-16`→`py-6 md:py-16` (heritage temple header + Nagara/Vesara);
`py-8 md:py-12 lg:py-16`→`py-6 …` (spiritual/wellness/wildlife intros); `py-10 md:py-12`→`py-6 md:py-12`
(heritage/culture connector bands); `pt-12 md:pt-16 lg:pt-20`→`pt-6 …` (heritage/culture/architecture
intro sections); `pb-20 md:pb-24`→`pb-8 md:pb-24` + `pb-16 md:pb-20 lg:pb-24`→`pb-8 …` (heritage card
sections); wellness cream band `p-12`→`px-12 py-6 md:py-12` + retreat `py-16 md:py-20`→`py-6 md:py-20`.
Net: mobile between-section gaps roughly halve; desktop unchanged everywhere.
**Files:** `app/{heritage,culture,architecture,nature,spiritual,wellness,wildlife}/page.tsx`, `CLAUDE.md`.
**Next:** Client reviews mobile (375/390) — sections sit closer together; confirm desktop (≥768) is
unchanged.

### 2026-06-13 (session 50) — About-India: spacing model unified, fonts, gaps, wellness retreat redesign
**Done:** Four client directives. Build clean 45/45.
1. **One spacing model (mobile, desktop untouched):** the overlay sections that used tiny `pt-2 pb-2`
   (nature ×4, spiritual ×3) → `py-10 md:py-2` (mobile `py-10` to match the other sections' rhythm;
   desktop `py-2` preserved). Mobile section spacing now consistent across about-india (no `py-2`
   outliers); minor `py-10` vs card-grid `py-12` difference remains (≈8px).
2. **Fonts → design system, site/card-wide:** `ImageTextOverlay` card-title font (was Merriweather on
   the heritage variant) → **always Big Caslon (`var(--font-playfair)`)** — fixes overlay card titles
   on heritage/culture/nature/spiritual (both breakpoints, per the explicit "everywhere" ask). Wellness
   Ayurveda card titles Merriweather → Playfair. Card bodies/descriptions already Segoe
   (`var(--font-merriweather)`). **Left as-is (flagged):** the big editorial intro-card statements +
   cream-band connector lines are `<p>` in Playfair (Big Caslon) — they're heading-like serif
   statements per the design benchmark; not converted to Segoe. Say the word to switch those too.
3. **Section-header gaps (mobile, desktop protected):** heading→paragraph reduced
   (`mb-6`→`mb-2 md:mb-6` on nature/spiritual/wellness section headings); header→content increased a
   little (`text-center mb-10 md:mb-14`→`mb-12 md:mb-14` across about-india, mobile +8px).
4. **Wellness "Retreat Locations" redesigned** (`wellness/page.tsx`): was 3 horizontal alternating
   image/text rows with a hidden (`-z-10`) backdrop. Now **vertical cards** (image-on-top + compact
   info card `p-5`/`text-[13px]`) in a `grid-cols-1 md:grid-cols-3` grid over the **now-visible**
   `wellness-locations.jpg` backdrop (`bg-black/45` overlay for the white heading); smaller info card,
   image `h-[240px] sm:h-[320px] md:h-56`. Matches the site's card-grid look.
**Files:** `app/{heritage,culture,architecture,nature,spiritual,wellness}/page.tsx`,
`app/components/ImageTextOverlay.tsx`, `CLAUDE.md`.
**Note:** #2 font fix focused on about-india + the shared `ImageTextOverlay`; the rest of the site
already follows the system (global `h1–h6`/`.font-serif` = Big Caslon, body = Segoe) — can sweep other
pages if wanted. #4 retreat redesign changed desktop too (rows→card grid) per "make it vertical like
other layout".
**Next:** Client reviews mobile + desktop — wellness Retreat Locations card grid over the photo;
overlay card titles now Big Caslon; section spacing/gaps consistent.

### 2026-06-13 (session 49) — About-India mobile standardization pass (type scale + card-image size)
**Done:** Client asked for a systematic mobile-only standardization across all about-india sections
(audit → standard → apply → verify). After the audit + agreeing the standard, applied (mobile values
+ `md:` overrides preserving desktop byte-for-byte; build clean 45/45):
- **Card image size unified → `h-[240px] sm:h-[320px]`** on mobile everywhere (was 5 different heights):
  heritage Dravidian (`360/420`→), Nagara/Vesara/Taj/Red Fort (`300/360`→, replace_all), architecture
  rock-cut (`h-90 md:h-110`→ keep md:h-110), culture craft mobile cards (`300/360`→), wellness retreat
  rows (`h-72 md:h-80`→ keep md:h-80). ImageTextOverlay already `h-[240px] sm:h-[320px] md:h-[414px]`.
- **Card title → `text-xl` mobile:** heritage Dravidian (`text-[22px]`→), wellness retreat
  (`text-2xl`→`text-xl md:text-2xl`). Others already text-xl.
- **Intro paragraphs → `text-sm` mobile:** nature/spiritual/wellness (`text-xs md:text-sm`→`text-sm
  md:text-sm`, desktop 14 preserved); architecture section descriptions (`text-base md:text-lg`→`text-sm
  md:text-lg`). heritage/culture already text-sm.
- **Architecture colour outlier → `#424242` on mobile** (desktop `gray-900`/`gray-700` kept via `md:`):
  section headings (`font-semibold gray-900`→`font-bold text-[#424242] md:font-semibold md:text-gray-900`),
  section descriptions, rock-cut card title + body. Brings architecture in line with the `#424242`
  design-system colour on mobile only.
**Files:** `app/{heritage,culture,architecture,nature,spiritual,wellness}/page.tsx`, `CLAUDE.md`.
**Deliberately NOT done (flagged to client, need a decision):**
1. **Section vertical-padding rhythm** still varies per page — the pages mix two spacing models
   (`ImageTextOverlay`-based sections carry spacing via the overlay's `mb-16`, vs card-grid sections
   using section `py`). Forcing one mobile `py` across both risks desktop; left as-is pending decision.
2. **ImageTextOverlay heritage-variant card-title font = Merriweather** (heritage Dance/Art, culture
   Faiths/Fest, nature, spiritual). Design system wants Playfair, but the font is applied via inline
   style on both breakpoints — switching would change desktop (violates mobile-only). Needs OK to
   change desktop, or a gated Playfair-mobile/Merriweather-desktop switch.
3. **Wellness retreat body** left at `text-base` (it's a feature paragraph, not a caption).
4. Heading→paragraph (`mb-2/4/6`) and header→content gaps not yet unified (can do with `md:` protection).
**Next:** Client reviews mobile (375/390) — card images now uniform height across every section;
intro paragraphs + card titles consistent; architecture text colour matches. Confirm desktop (1280)
unchanged. Then decide on the 4 flagged items above.

### 2026-06-13 (session 48) — Heading/paragraph alignment finished + wellness Ayurveda/Retreat fixes
**Done:** Client: "do this alignment in all about-india pages, and fix the broken wellness section
(Ayurveda + Retreat Locations)." Build clean 45/45.
1. **Alignment (heading width = paragraph width) completed.** Session 47 did the four `width:70vw`
   blocks. Mapped the rest: the only remaining mismatches were sections whose paragraph is
   `max-w-3xl mx-auto` but whose `<h2>` was full container width → added `max-w-3xl mx-auto` to those
   headings: **architecture** 4 section headings (Ancient & Rock-Cut / Indo-Islamic / Rajput /
   Colonial — shared class, `replace_all`) + **heritage** "Ancient Temple Architecture". No change
   needed on nature/spiritual (h2 + p both direct children of a `max-w-5xl` container = already equal),
   culture "Artisan & Craft" (p uncapped), or wellness headers (`max-w-5xl`). `AncientRockCutSection.tsx`
   is dead code (unused) — skipped. **Flag:** "Colonial & Indo–Saracenic Architecture" is long; at
   `max-w-3xl` it may wrap to 2 lines (matches the paragraph column).
2. **Wellness "Ayurveda Retreat Experiences" fixed** (`wellness/page.tsx`): was a baked-in wide PNG
   (`experiences.png`, `hidden md:block`) + a separate `md:hidden` card list — cramped/unreadable on
   tablet. Replaced with the **5 cards as a responsive HTML grid on all screens**
   (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-5`, `bg-white shadow-md p-5`), reusing the same copy.
   Removed the now-unused `import Image from 'next/image'`.
3. **Wellness "Wellness Retreat Locations" fixed** (3 alternating image/text rows over a bg photo):
   rows were touching → added `mt-6 md:mt-8` between them; the middle (Six Senses Vana) row showed
   text-on-top on mobile (DOM text-then-image) → `flex flex-col-reverse md:flex-row` so all three lead
   with the image on mobile (desktop alternating layout unchanged); `bg-white bg-opacity-95`
   (Tailwind-v4-removed utility) → `bg-white/95` so the near-opaque card actually renders. Left the
   backdrop photo as-is.
**Files:** `app/architecture/page.tsx`, `app/heritage/page.tsx`, `app/wellness/page.tsx`, `CLAUDE.md`.
**Next:** User reviews — architecture/heritage section headings now match their paragraph width
(check "Colonial…" wrap); `/wellness` Ayurveda = 5 responsive cards (no baked image), Retreat
Locations = spaced rows, image-on-top on mobile for all 3. If the Retreat "broken" was actually the
heading sitting over the backdrop photo on mobile, that's a quick follow-up (push image below heading
/ add overlay).

### 2026-06-13 (session 47) — Section headings constrained to match their paragraph width (70vw)
**Done:** Client (showing the "Living Traditions of Indian Art" block): "for each section heading text,
make the heading width equal to paragraph width." Those section-header blocks have a `<p>` with inline
`width: 70vw` (+ `mx-auto text-center`) but a full-width `<h2>` above it. Added `mx-auto` (className) +
`width: '70vw'` (style) to the `<h2>` in all **4** blocks that use the 70vw paragraph so the heading
box matches the paragraph box: heritage "Indian Dance Heritage" + "Living Traditions of Indian Art";
culture "A Tapestry of Faiths" + "Festival Immersion Experiences". Scoped each edit by the unique
heading text (these 4 h2s share the same class/style as other headings — e.g. "Ancient Temple
Architecture" — whose paragraphs are `max-w-3xl`, so those were left alone). Build clean 45/45.
**Note:** only the `70vw`-paragraph sections were changed (the exact pattern the client pasted). Other
section headers use `max-w-3xl` paragraphs; can extend the same treatment to those if wanted.
**Files:** `app/heritage/page.tsx`, `app/culture/page.tsx`, `CLAUDE.md`.

### 2026-06-13 (session 46) — Architecture page polish (section-by-section pass, start)
**Done:** Client started a per-section polish of `/architecture`. Build clean 45/45.
1. **Overview background taller + empty space removed** (`architecture/page.tsx`): the "Monuments to
   Human Imagination" intro — container `py-32 sm:py-40 md:py-0 md:h-137.5 lg:h-162.5 xl:h-180`
   → `py-40 sm:py-48 md:py-0 md:h-150 lg:h-175 xl:h-190` (taller backdrop photos on mobile + desktop).
   The text card had a forced `md:h-[60%]` that made it taller than its copy (empty space inside) →
   removed, so the card now sizes to content. Tightened the cream "Liberty India's architecture
   journeys reveal" band `p-12` → `py-8 md:py-10 px-4` (was a big cream band around one short line).
2. **Shadow on the Nagara / Dravidian / Vesara info cards** (Ancient & Rock-Cut): the 3 caption cards
   had no shadow → added `shadow-md` (replace_all on the shared caption div), matching the heritage
   cards.
3. **Overlay info cards "moved down like heritage"** (Qutub Minar, Buland Darwaza, Amber Fort, Umaid
   Bhawan, Victoria Memorial, Mumbai CST) — these are `ImageTextOverlay` (default variant). The caption
   already flowed below on mobile (session 45), but the **default `imageClass` was `h-auto`** (short
   ~190px banner) while heritage uses a fixed taller banner, so the card didn't read as "moved down."
   Unified `imageClass` to `w-full h-[240px] sm:h-[320px] md:h-[414px] object-cover` for both variants
   (heritage value unchanged → heritage/culture/nature/spiritual identical; only architecture, the sole
   default caller, changes). Architecture overlays now match heritage: dominant banner + caption
   overlapping just the bottom edge.
**Files:** `app/architecture/page.tsx`, `app/components/ImageTextOverlay.tsx`, `CLAUDE.md`.
**Flag for client:** the cream band text "Liberty India's architecture journeys reveal" reads as an
incomplete sentence (heritage's equivalent is a full line) — left the copy as-is (didn't invent text);
say the word if you want it completed/rewritten.
**Next:** User reviews `/architecture` (mobile + desktop): taller overview backdrop, no empty space in
the overview card, shadowed rock-cut cards, and the 6 overlay cards now match heritage. Continue the
per-section polish on the next about-india page when ready.
**Follow-up (same session):** Client clarified the overview height increase should be **mobile only**
(confirmed via AskUserQuestion = the intro "Monuments to Human Imagination" backdrop). Reverted the
session-46 desktop bump (`md:h-150 lg:h-175 xl:h-190` → back to `md:h-137.5 lg:h-162.5 xl:h-180`) and
increased the mobile backdrop further (`py-40 sm:py-48` → `py-52 sm:py-60`, ~208/240px photo bands).
Desktop overview now identical to its original height; only mobile is taller. Build clean 45/45.
**Follow-up 2 (same session):** Client: "make padding equal between all the sections." The 4 content
sections (Rock-Cut / Indo-Islamic / Rajput / Colonial) already share `py-12 md:py-16 lg:py-20`; the
outlier was the cream "…journeys reveal" band (`py-8 md:py-10`, tightened in follow-up 1) → bumped to
`py-12 md:py-16 lg:py-20` to match, and dropped the redundant `mt-0` on the Rock-Cut section. All
section vertical padding now uniform. (Note: this re-adds some space to the cream band that follow-up 1
had trimmed — consistency was the newer ask; offered to dial all sections to a tighter uniform value
if the cream band reads too airy.) Overview keeps its matching `pt-12 md:pt-16 lg:pt-20` + `pb-0`
(full-bleed backdrop). Build clean 45/45.

### 2026-06-13 (session 45) — About-India: heritage card mobile treatment rolled out to remaining pages
**Done:** Client: "do the same card layouting in culture, architecture, nature, spiritual, wellness,
wildlife (mobile)." Mapped every card section across the 6 pages. **Key correction:** `ImageTextOverlay`
is called with `variant="heritage"` by **heritage, culture, nature, spiritual** — only **architecture**
uses the **default** variant. So the session-44 + move-banner-down edits to the heritage variant had
**already** applied to culture/nature/spiritual's overlay cards (the session-44 note's "default variant /
other pages unchanged" claim was wrong — its brace-glob grep had silently failed). Net result this
session, mobile only (every `md:`/`lg:` byte-identical → tablet/desktop unchanged), build clean 45/45:
- **`ImageTextOverlay.tsx` (Part A):** unified the caption position so **both** variants use the
  flow-below-on-mobile layout (`relative md:absolute z-10 -mt-12 md:mt-0 mx-auto … md:-bottom-10
  w-[90%] md:w-[38%] … md:right/left-8 lg:right/left-12`). The heritage branch was already exactly this
  → heritage/culture/nature/spiritual unchanged; only the **default** branch (architecture's 3 overlay
  sections: Indo-Islamic / Rajput / Colonial) changed. Also rebalanced the **default** font classes to
  match (kept Playfair/gray): `titleClass` `text-lg`→`text-xl`, `descriptionClass` `text-sm
  leading-relaxed`→`text-[13px] leading-loose md:leading-relaxed`. (Component imported only by the 5
  about-india pages; architecture is the only default caller → blast radius = architecture.)
- **architecture "Ancient & Rock-Cut" 3 cards (Part B)** (`architecture/page.tsx`): identical
  classNames → `replace_all`. Caption `absolute … bottom-0 translate-y-1/2 w-[92%]` → `relative
  md:absolute z-10 -mt-8 md:mt-0 mx-auto md:mx-0 md:left-1/2 md:-translate-x-1/2 md:bottom-0
  md:translate-y-1/2 w-[92%]` (flows below + overlaps edge on mobile; desktop identical). Container
  `flex … gap-0` → `gap-10 md:gap-0` (was crowding on mobile). Fonts h3 `text-lg`→`text-xl`,
  p `text-sm`→`text-[13px] leading-loose`.
- **culture craft collage (Part C)** (`culture/page.tsx`): kept the desktop 2×2 image collage +
  centred text cards (wrapped `hidden md:block`); added a `md:hidden` mobile stack that renders the 4
  craft items (Textile/Pottery/Metal Work/Kashmiri Wood Carving) via `.map` as image-on-top +
  caption-below cards (image `h-[300px] sm:h-[360px] object-cover`, caption `-mt-12 mx-auto w-[90%]
  p-5`, h3 `text-xl`, body `text-[13px] leading-loose`). Same `hidden md:block`/`md:hidden` split the
  wellness Ayurveda section already uses. Fixes the cramped floating text cards on phones.
- **No changes needed:** nature, spiritual (overlay-only, already done), culture overlays (done),
  wellness (retreat rows already stack image-then-text; Ayurveda already a mobile card list), wildlife
  (Wild Heritage is a baked graphic — collage.png + lion.svg — no image+caption cards). All 6 intros
  were already done in session 41.
**Files:** `app/components/ImageTextOverlay.tsx`, `app/architecture/page.tsx`, `app/culture/page.tsx`,
`CLAUDE.md`.
**Next:** User reviews mobile (<768px): `/architecture` (3 overlay sections flow caption below the
banner + the Rock-Cut cards stack with a gap), `/culture` (craft section now 4 clean stacked cards).
**Also re-check `/nature` + `/spiritual` overlay sections** — they were silently changed by the
session-44 edits (should read well now, but confirm). Confirm tablet/desktop identical on all six.

### 2026-06-13 (session 44) — Heritage: temple-card mobile treatment extended to Mughal + Dance + Art
**Done:** Client: "like we did with Ancient Temple Architecture, do the same with the other sections of
the Heritage page." Confirmed scope (AskUserQuestion) = **Mughal + Dance + Art** (the remaining card
sections; the intro overview was done session 41, the 3 temple cards sessions 42–43). **Mobile only**
(base/`sm:`; every `md:`/`lg:` byte-identical → tablet/desktop unchanged). Build clean 45/45.
- **Mughal & Indo-Islamic (Taj Mahal + Red Fort)** — inline 2-card grid in `app/heritage/page.tsx`,
  structurally identical to Nagara/Vesara, so a direct repeat of that recipe: grid `gap-6 md:gap-8`
  → `gap-14 md:gap-8`; both images `w-full h-full` → `w-full h-[300px] sm:h-[360px] md:h-full
  object-cover`; both captions `w-[85%] … px-6 py-5` → `w-[90%] md:w-[85%] … p-5` (md unchanged);
  both headings `text-lg` → `text-xl`; both bodies `text-sm leading-relaxed` → `text-[13px]
  leading-loose md:leading-relaxed`. Edits scoped by unique heading/body text (Taj/Red Fort share
  classNames). **Watch:** `taj-mahal.svg` (4:3 art) cropped via object-cover at the new fixed height —
  revert just it to natural aspect if it looks off; `red_fort.jpg` is a photo (crops fine).
- **Indian Dance Heritage + Living Traditions of Indian Art** — both render via the shared
  `ImageTextOverlay` (heritage variant). Key fact: the other 4 about-india pages (architecture,
  nature, spiritual, culture) call it with **no `variant` = `default`**, and the component branches
  fonts on `isHeritage`, so editing the **heritage branch only** is Heritage-scoped. They already use
  image-on-top + overlapping caption, so only the type was rebalanced to match the temple cards:
  heritage `titleClass` `text-lg` → `text-xl`; heritage `descriptionClass` `text-sm … leading-relaxed`
  → `text-[13px] … leading-loose md:leading-relaxed`. Left the heritage `imageClass`
  (`h-[240px] sm:h-[320px] md:h-[414px]`, wide 2.7:1 banners) and the (non-variant-gated) caption
  `<div>` untouched so other pages stay identical.
**Files:** `app/heritage/page.tsx`, `app/components/ImageTextOverlay.tsx`, `CLAUDE.md`.
**Next:** User reviews `/heritage` mobile (<768px) — Mughal cards now match the temple cards (taller
photos, clear gap, overlapping caption, rebalanced type); Dance/Art type matches. **Verify the other
about-india pages** (`/culture`, `/architecture`, `/nature`, `/spiritual`) ImageTextOverlay sections
are unchanged (default variant). Confirm heritage tablet/desktop identical to before.
**Follow-up (same session):** Client: "move the info banner down in all cards — they're still covering
most of the area." Root cause: the grid cards (Nagara/Vesara/Taj/Red Fort) used an `absolute -bottom-8`
caption that, being tall, covered ~60–67% of the image; ImageTextOverlay (Dance/Art) similar (~61%).
Fix (mobile only, desktop untouched) = move the caption to flow **below** the image and overlap only
its bottom edge (the Dravidian pattern). (1) All 4 grid captions: `absolute -bottom-8 … left-1/2
-translate-x-1/2` → `relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10
md:left-1/2 md:-translate-x-1/2` (one `replace_all` — identical classNames). Now overlaps ~48px (~16%),
image dominant; desktop unchanged. (2) Dravidian overlap `-mt-20` → `-mt-12` (sits a touch lower).
(3) `ImageTextOverlay.tsx`: gated the caption position by `isHeritage` — heritage mobile = `relative
-mt-12 mx-auto` (flows below, overlaps edge), heritage desktop + the **entire default variant** are
byte-identical (verified: default branch reproduces the original classes), so culture/architecture/
nature/spiritual are untouched. Build clean 45/45.

### 2026-06-13 (session 43) — Heritage temple cards: mobile layout matched to Figma frame
**Done:** Client shared a Figma mobile frame (node `1155:1083` / card `1155:1086`) for the temple
cards and asked to "arrange the current something like this." Pulled the frame via Figma MCP
(get_screenshot + get_design_context): target = **image on top (dominant, full-width ~349px), white
text card below it, centred and slightly narrower (337/367 ≈ 90%), pulled up to overlap the image's
bottom edge**; heading 22px serif, body ~12px with airy line-height. Reworked all 3 temple cards in
`app/heritage/page.tsx` to that layout — **mobile only** (every `md:`/`lg:` left byte-identical →
tablet/desktop unchanged). Build clean 45/45.
- **Dravidian card** (was a narrow box pinned over the lower-left of a tall photo): image
  `h-[440px] sm:h-[500px]` → `h-[360px] sm:h-[420px]` (Figma ~square proportion); card switched from
  `absolute bottom-[8px] left-4 w-[85%]` to `relative md:absolute -mt-20 md:mt-0 mx-auto md:mx-0
  w-[90%] md:w-[38%] p-5` — so on mobile it's an in-flow centred card overlapping the photo's bottom
  by 80px (photo peeks at the sides); desktop keeps the original left-bottom `md:absolute md:bottom-0
  md:left-8 md:w-[38%]` overlay. Heading `text-lg` → `text-[22px]` (Figma 22px), body `text-sm
  leading-relaxed` → `text-[13px] leading-loose` (md unchanged).
- **Nagara + Vesara** (already image-on-top + caption overlapping the bottom): unified to match —
  width `w-[85%]` → `w-[90%] md:w-[85%]`, padding `px-6 py-5` → `p-5` (md unchanged), heading
  `text-lg` → `text-xl`, body → `text-[13px] leading-loose md:leading-relaxed`. Kept their absolute
  `-bottom-8` overlap (already Figma-like) and the `gap-14 md:gap-8` stacking gap from session 42.
- **Font note:** kept the site's **Playfair** heading (Figma uses Merriweather Bold) for consistency
  with every other card on the site; trivial to switch if the client wants the exact Figma face.
  Skipped the Figma's decorative second small temple cut-out (no such asset; not needed for the
  layout). Edits scoped by unique heading/body text since the card classNames are shared with the
  Mughal (Taj/Red Fort) cards — those + the dance/art `ImageTextOverlay` remain untouched.
**Files:** `app/heritage/page.tsx`, `CLAUDE.md`.
**Next:** User reviews `/heritage` at mobile width (<768px) — all 3 temple cards now read as
image-on-top + centred white card overlapping the bottom (Figma look). Confirm tablet/desktop
identical and Mughal/dance/art cards unchanged. Follow-ups available: exact Figma heading font
(Merriweather), or tweak the photo height / overlap depth.
**Follow-up (same session):** Client: "bring South onto the next line with India" + "don't change the
container size, change the picture to fit it like the Figma." (1) Heading: added
`<br className="md:hidden" />` before "South India" → mobile reads "Dravidian Temples of" / "South
India"; desktop wraps naturally (unchanged). (2) Image fit — **investigated the source asset**:
`Ancient_Temple_Architecture.png` is a wide **3620×1400 (2.6:1) composite** (a detailed gopuram on
the left + a separate blue-sky temple inset rectangle on the right), so the mobile `object-cover`
center-crop was landing on the seam between the two. `object-contain` would "fit" but leaves big
white bands in the tall box (≠ the Figma's filled look). Previewed crops with PIL → the **left-framed
crop** shows the full gopuram against clean blue sky (artifact-free, fills the box). Fix: kept the
container size (`h-[360px] sm:h-[420px]`) and added `object-left md:object-center` so mobile shows
that clean temple-on-sky; desktop is `md:h-auto` (full banner, no crop) so `object-left` is a no-op
there → desktop unchanged. **Recommend** a proper portrait/blue-sky temple photo if they want the
exact Figma image (the composite can't fill a tall portrait box seamlessly any other way). Build
clean 45/45.

### 2026-06-13 (session 42) — Heritage: mobile restyle of the 3 temple-architecture cards
**Done:** Client review of `/heritage` on mobile — the three "Ancient Temple Architecture" cards read
poorly. Scoped (via AskUserQuestion) to those 3 cards only (Dravidian + Northern Nagara + Vesara),
**mobile only** (base/`sm:`; every `md:`/`lg:` left byte-identical so tablet/desktop unchanged), keep
the overlay caption style with a taller photo. All inline in `app/heritage/page.tsx` — Mughal
(Taj/Red Fort) cards and the dance/art `ImageTextOverlay` sections untouched. Build clean 45/45.
- **Dravidian card:** photo `h-[340px] sm:h-[420px]` → `h-[440px] sm:h-[500px]` (more visible above
  the overlay); card padding `px-6 py-5` → `px-5 py-4` (mobile) so the white box is more compact;
  heading `text-xl … mb-4` → `text-lg … mb-2 md:mb-4` (20px→18px, tighter) — body stays `text-sm`,
  hierarchy intact.
- **Nagara + Vesara (2-col grid that stacks on mobile):** grid `gap-6 md:gap-8` → `gap-14 md:gap-8`
  so the `-bottom-8` protruding caption of a stacked card no longer crowds the next card's image;
  each image `w-full h-full` → `w-full h-[300px] sm:h-[360px] md:h-full object-cover` for a taller,
  more dominant mobile photo. **Watch:** these two are 4:3 SVG art cropped via `object-cover` at the
  new fixed height — if any temple looks awkwardly cropped on device, revert just those to natural
  aspect (drop the base/sm height, keep `md:h-full`).
- Note: `w-full h-full object-cover` and `grid … gap-6 md:gap-8` also appear in the Mughal section,
  so each edit was scoped by unique context (image `src` / the section comment) to avoid touching it.
**Files:** `app/heritage/page.tsx`, `CLAUDE.md`.
**Next:** User reviews `/heritage` at mobile width (<768px) — Dravidian photo dominant with a compact
caption + smaller heading; Nagara/Vesara stacked with clear separation and taller photos. Confirm
tablet/desktop identical and the Mughal/dance/art cards unchanged. Follow-up if SVG crops look off.

### 2026-06-13 (session 41) — Mobile "overview" layout rolled out sitewide
**Done:** Client approved the About-Us "20 Years" mobile overview (session 40: tall photo backdrop +
white banner centred on top) and asked for the **same layout on every overview section**. Confirmed
scope via AskUserQuestion = all three families. Build clean 45/45. **Desktop untouched everywhere**
(every change gated to `md:` / `lg:`).
- **Part A — 7 About-India intro sections** (`heritage`, `culture`, `architecture`, `nature`,
  `spiritual`, `wellness`, `wildlife` `/page.tsx`): identical structure to About-Us, so the same
  3-edit recipe — container mobile `h-96` → `h-auto py-32 sm:py-40 md:py-0` (keep each page's md/lg/xl
  heights); image grid `+grid-rows-3 md:grid-rows-none` so the 3 photos stack into a gapless vertical
  backdrop on mobile; text card `relative md:absolute mx-4 md:mx-0 w-auto md:w-[42%]` with all desktop
  positioning (`top-*`/`left-*`/translate, and architecture's inline `width:42% height:60%` → `md:`
  classes) gated behind `md:`. 6 are top-aligned cards (Variant A); architecture is the centred
  Variant B (inline style removed).
- **Part B — service pages** (`app/components/services/SectionOverview.tsx`, one shared component →
  all 7 `/our-services/*`): it already renders a tall `min-h-screen` Ken-Burns slideshow; the white
  card was `hidden md:block` with a separate `md:hidden` text block stacked below on mobile. Removed
  the stacked block and made the card show on mobile too — `absolute inset-x-4 md:inset-x-auto …
  top-1/2 md:top-[calc(50%-60px)] -translate-y-1/2 … md:max-w-md`. Mobile now = full-bleed slideshow
  with the banner centred on top.
- **Part C — itinerary Overview tab** (`app/itineraries/template/OverviewSection.tsx`, one shared
  component → all itineraries): was a 2-col grid (text+download | side image) that stacked below `lg`.
  Kept the `lg+` two-column layout exactly; below `lg` added a `lg:hidden absolute inset-0` backdrop
  using `overviewImage`, made the section `relative py-16 sm:py-20`, the grid `relative z-10`, the
  left column a white banner (`bg-white shadow-lg lg:shadow-none p-7 sm:p-9 lg:p-0`) holding the
  heading/paragraphs/`DownloadActions`, and gated the side image `hidden lg:block`. Caveat (client
  opted in): single image + text-heavy copy → thinner photo bands than Part A on long overviews.
**Files:** `app/{heritage,culture,architecture,nature,spiritual,wellness,wildlife}/page.tsx`,
`app/components/services/SectionOverview.tsx`, `app/itineraries/template/OverviewSection.tsx`,
`CLAUDE.md`.
**Next:** User reviews on dev at mobile width — (a) all 7 about-india intros: photo backdrop + centred
banner + photo bands top/bottom, no gaps/overflow; (b) each `/our-services/*` overview: slideshow with
banner on top (no separate text block below); (c) an itinerary (e.g. `/itineraries/eastindia`)
Overview: image backdrop with heading+text+download banner on top. Confirm desktop identical to before
on all. Possible follow-up: if itinerary photo bands feel too thin, bump its `py` or shorten copy.

### 2026-06-13 (session 40) — Mobile fixes: hero crossfade, About-Us overview stack, Our Promise spacing
**Done:** Start of a "make mobile production-ready" pass; first three client items. Build clean 45/45.
1. **Hero crossfade no longer breaks between slides** (`HeroCarousel.tsx`): the old approach hard-cut
   the incoming image in on a fixed 1200ms timer while a CSS keyframe (`animate-hero-fade-in`) and an
   opacity `transition` fought over the same property — on slower mobile connections the timer
   outran the image load and the dark `#1a1008` background flashed through (the "breaking"). Rewrote
   to a load-gated crossfade: the **active image is the always-opaque base layer** (z-1, keeps the
   Parallax), and the **outgoing image sits on top** (z-2) and only fades out once the incoming image
   has actually painted (`onLoad` → `startFade`), with a 500ms fallback (in case onLoad doesn't fire
   for a fully-cached image) and a 2200ms safety teardown (in case `transitionend` is missed). No more
   keyframe-vs-transition conflict; the swap can never reveal the bare background. Removed the now-dead
   `transitionTimer` ref / `animate-hero-fade-in` usage from this component (the utility still exists
   for the Navbar overlay).
2. **About-Us "20 Years" overview made mobile-safe** (`about-us/page.tsx`): the text card was
   `position:absolute width:42%` over an `absolute inset-0` image grid with `h-full` rows — on mobile
   the 42% card (~157px) couldn't hold the paragraph and overflowed, while the grid's `h-full` rows
   collapsed to ~0 (no intrinsic content height). Desktop is **untouched** (all overlay classes behind
   `md:`). **Client follow-up (same session):** the first stack attempt (single image banner + card
   in flow) left awkward cream gaps and a disconnected image floating below — client wanted the
   photos shown as a **continuous vertical backdrop with the banner on top**. Final mobile layout: the
   image grid is now `absolute inset-0 grid-cols-1 grid-rows-3` (→ `md:grid-rows-none md:grid-cols-3`),
   so all three photos stack into a gapless vertical column filling the section; the white card is the
   only in-flow child (`relative md:absolute`, z-10) centred on top, and the container's vertical
   padding (not card margin — avoids margin-collapse) creates equal photo bands framing the banner
   top & bottom. Backdrop = card height + padding, so it always expands to contain the copy (no
   overflow, no gaps). Middle photo sits behind the card, same as the desktop triptych. **Client then
   asked for a taller background / more visible photos** → padding bumped to `py-32 sm:py-40 md:py-0`
   (128/160px bands, was 56/64px), so much more of the top & bottom photos shows on mobile.
3. **Our Promise pillar spacing/grouping on mobile** (`about-us/page.tsx`): grid was `gap-0` and the
   three text blocks carried desktop-only directional padding (`pr-4`/`px-4`/`pl-4`), so stacked on
   mobile they touched with no gap and looked misaligned. Grid → `gap-10 md:gap-0`; directional
   paddings gated behind `md:` so mobile text is symmetric (`pt-6` only). Desktop unchanged.
**Files:** `app/components/HeroCarousel.tsx`, `app/about-us/page.tsx`, `CLAUDE.md`.
**Next:** User reviews on dev at mobile width (<768px) — (a) home hero: tab through months / let it
auto-advance, the image should cross-fade with no dark flash or jump; (b) `/about-us` "20 Years"
section: three photos form a vertical backdrop with the white banner centred on top (photo bands
top & bottom), full paragraph visible, no cream gaps/overflow; (c) `/about-us` "Our Promise": three
cards stacked with clear spacing, text aligned.
Desktop should look identical to before on all three. More mobile-view items to follow.

### 2026-06-13 (session 39) — Mobile navbar overlay restyle + scroll lock
**Done:** Client flagged the mobile hamburger menu "layout/styling looks off". Redesigned the
overlay in `Navbar.tsx` (the `mobileMenuOpen` block): was a bare `justify-end` close button + a
loose centered stack of `uppercase tracking-widest` merriweather links. Now a structured 3-row
flex column — (1) **header** mirroring the navbar top row: white logo left + close button right,
hairline `border-b border-white/10`, matching `px-8 py-2` rhythm; (2) **nav** vertically centred,
left-aligned **editorial serif** links (Big Caslon via `--font-playfair`, `1.65rem`) with
per-row hairline dividers, a `→` that slides in on hover, current-route highlighted `#EF9120`
(via `pathname === href` — hash items stay neutral), and a staggered fade-in reusing the existing
`search-result-in` utility (`animationDelay i*55+60ms`); (3) **footer** a styled pill "Search
journeys" (border + `bg-white/5`, opens the search overlay) above the small-caps tagline "Where
Ancient Wisdom Meets Modern Luxury". Backdrop `bg-[#141313]/95 backdrop-blur-xl` + `animate-hero-
fade-in`, bumped to `z-[60]`. Also added a **scroll-lock effect**: while the menu is open it
`lenis.stop()`s + sets `body overflow:hidden` (Lenis owns scroll, so body-overflow alone leaks
through — same reason the modals use `data-lenis-prevent`) and binds ESC-to-close; all restored on
unmount. Build clean 45/45.
**Follow-up (same session) — white-bg bug:** Client: "the bg color is white in the navbar in mobile
view." Root cause = the overlay was rendered **inside** `<nav>`, which always carries a
`translate-y-*` class; a non-`none` translate makes the nav the containing block for `position:fixed`
descendants, so the overlay's `inset-0` sized to the navbar **bar** (~60px) instead of the viewport —
leaving the page (white on every `variant="white"` route) showing around the clipped dark panel.
Fix: moved the overlay out to sit as a **sibling of `<nav>`** at the fragment level (same as the
search scrim already does), so `inset-0` is viewport-relative and the dark backdrop fills the screen.
Pure relocation — markup unchanged. Build clean 45/45 (note: had to clear a 100%-full C: drive +
redirect build TEMP to D: to get the build to run — env issue, not code).
**Files:** `app/components/Navbar.tsx`, `CLAUDE.md`.
**Next:** User reviews on dev at mobile width (<1024px) — open the hamburger on a `variant="white"`
page (e.g. an itinerary or /journeys): the menu now fills the screen with the dark backdrop (no
white showing through), logo+close header, serif links cascade in with active-route accent, search
pill + tagline at the bottom, page behind no longer scrolls. ESC / tapping a link closes it.
**Env note:** C: drive was full (0 B free); freed npm-cache + Windows Temp. Stale `.next` was 6.5 GB
on D: — deleted, rebuilds clean. `D:\tmp-build` left behind (harness blocked its removal); safe to
delete manually.

### 2026-06-10 (session 38f) — Title finalised: "East India & The City of Joy"
**Done:** Client follow-up ("rename it to East India city of joy") — title is now
**"East India & The City of Joy"** ("&The" styled to match the original branding / "Taj & Tigers"
convention) in `itineraries.ts` (title + datesPrices[0] + comment) and `exploreItems.ts`. Slug stays
`eastindia` (38e). Build clean 45/45.
**Files:** `app/itineraries/itineraries.ts`, `app/components/services/exploreItems.ts`, `CLAUDE.md`.
**Next:** User confirms the title casing — if they want literally "East India City of Joy" (no "&The"),
it's a 3-string swap.

### 2026-06-10 (session 38i) — ImageKit migration phase 2: code repointed, locals deleted
**Done:** Client uploaded the staging folder — it landed at
`ik.imagekit.io/libertyindia/images/imagekit-upload/…` (inside an `images` folder, not the
library root as planned — harmless, code just points at the real location). Probed **all 301
URLs → 0 failures**, then swapped every quoted `"/images/…` ref in `itineraries.ts` (exactly 301)
to `https://ik.imagekit.io/libertyindia/images/imagekit-upload/…`. Inventory re-run: 364/364 refs
remote, 0 failing HEAD. Deleted the 301 migrated files from `public/images/` (kept all 17
SOURCES.md license manifests + unreferenced `tram-ride.jpg`); removed `imagekit-upload/` staging.
PDF route verified safe (its `toDataUri` fetches http URLs, falls back to fs for local — line
30/35 of `api/itinerary-pdf/route.ts`). Build clean 45/45.
**Files:** `app/itineraries/itineraries.ts` (301 URL swaps), 301 deletions under `public/images/`,
`CLAUDE.md`.
**Next:** User reviews itinerary pages on dev (images now served by ImageKit CDN). NOTE: the
`images/imagekit-upload/` prefix is ugly but functional — if the client ever MOVES those folders
in the ImageKit dashboard, all 301 URLs change and the code must be re-swapped; advise leaving
them where they are.

### 2026-06-10 (session 38h) — ImageKit migration phase 1: upload staging folder built
**Done:** Client wants all repo-hosted images moved to ImageKit. Built **`imagekit-upload/`**
(gitignored) at repo root: all **301 local images** referenced by `itineraries.ts` (58.4MB, 42
folders), copied preserving the exact ImageKit structure (`itineraries/<slug>/…`,
`signature-experience/northeast-india/…`) + `UPLOAD-MANIFEST.md` listing every file's expected
final URL. No collisions with existing ImageKit folders (different filenames/extensions;
`eastindia/` is new). Scripts: `.claude-tmp/build-upload-folder.mjs` (+ inventory). No app-code
changes.
**Files:** `.gitignore` (+imagekit-upload/), `CLAUDE.md`. (Staging folder itself not committed.)
**Next — waiting on client/user:** upload the CONTENTS of `imagekit-upload/` (the two folders)
into the ROOT of the ImageKit media library (drag-drop preserves structure). Then **phase 2**:
probe all manifest URLs (200), script-swap every local `/images/…` ref in `itineraries.ts` to
the ImageKit URL, delete the local originals (keep SOURCES.md) + `imagekit-upload/`, build, commit.

### 2026-06-10 (session 38g) — Complete image audit: East India page rebuilt + sitewide hotel/day fixes
**Done:** Client reported wrong Suggested-Hotels pictures on East India → full audit of **all 364
image refs** across 18 itineraries (inventory script `.claude-tmp/inventory.mjs`; 0 missing files,
0 broken URLs; findings log `.claude-tmp/image-audit-38.md`). Build clean 45/45.
1. **East India hotels (the reported bug):** the 3 hotel cards literally reused day-2/4/7 scenery
   SVGs. Now: Oberoi Grand = **exact property** (Commons), Wild Mahseer + Diphlu = flagged
   representative stand-ins → `public/images/itineraries/eastindia/hotels/`.
2. **East India page rebuilt:** ALL refs were client SVG wrappers on ImageKit, 3–23MB each (~89MB/
   page — Next passes SVGs through unoptimized). 10 of 15 had WRONG subjects (Thai longtails for
   Majuli ferry, zoo rhino, Sri-Lanka falls for Nohkalikai, Laos karst for Dawki, Chinese town for
   Kamakhya, European valley for Guwahati, Munnar for overview, Bali terraces + Thai tea for flat
   Assam, Ranthambore waterhole for Kaziranga). Correct ones (Hooghly bridge, Victoria ×2, buffalo,
   ridge road) extracted from the SVGs and re-encoded; wrong ones re-sourced (Pexels/Commons —
   Majuli mask artist, Kamakhya, real Nohkalikai, Dawki, wild Kaziranga rhino, Assam tea ×2,
   Brahmaputra, Saraighat, living-root-bridge overview). Signature botanical-garden was **Mae Fah
   Luang Garden, Thailand** → Great Banyan (Kolkata); jazz-bar/cooking recompressed (13MB/5MB→<200KB).
   Page now ~2.5MB total.
3. **Hotel fixes sitewide (audited all 44 unique files):** replaced — ITC Mughal (was a Moroccan
   riad / Suryagarh / Kerala resort ×5 paths → one arch-courtyard rep), Samode Haveli (was
   Patwon-ki-Haveli monument / Suryagarh ×5 → **exact Samode Haveli** Commons), Claridges
   consolidated to the one credible file (was CGI render/gold kitsch/modern grey ×5 paths),
   **Elgin Nor-Khill was a SWISS ALPS hotel** → Mayfair Gangtok rep ×2, Elgin Darjeeling (was a
   Munnar block) → **exact Elgin** ×2, Raaj Kutir (was Kochi-style) → Itachuna Rajbari rep ×2,
   Trident (was a budget pension room) → **exact Trident tower** (watermark cropped), Outpost 12
   (was European pine glamping ×2) → Forest Hills Tala rep, Heritage Hampi (was tourist-on-rock
   scenery ×2) → bungalow resort rep, Kaav (was plain reservoir) → lakeside lodge, Suryauday (was
   Suryagarh dup) → Varanasi ghats, Renaissance Lucknow (blurry night phone pic) → Taj Vivanta rep,
   Kutch Safari (was a WILD-ASS HERD photo) → Thar tent camp; jehan-numa-ECI + brij-encounter =
   same-property copies for consistency.
4. **Day fixes (audited all 74 remote ImageKit images + Commons-era locals):** T&T day-5 (Fatehpur
   Sikri shown for Jaipur day → City Palace), sojourn day-3 (watermarked dreamstime ropeway →
   Dali Monastery Darjeeling) + day-5 (hero dup → Pemayangtse), unveiling hero+day-10 (off-route
   Marudamalai, dup → Brihadeeswarar sunrise + Kapaleeshwarar) + day-6/7 (very low-res → sharp
   Chettinad mansion + Kumbakonam carver), colourful-rajasthan day-5 (AI-looking camels → real Sam
   dunes) + day-10/11 (Deogarh Mahal shown for BOTH Chittorgarh and Bundi days → real Chittorgarh
   Fort + Bundi Chitrashala) + day-3 (low-res → Shekhawat Haveli), gujarat day-6 (225px pond for
   wild-ass-sanctuary day → the wild-ass photo that had been misused as the Kutch hotel).
   Clean: classical-GT (8/8), kairali (9/9 genuine property photos), gujarat 1-4,7.
5. All Pexels IDs cross-checked against every SOURCES.md (2 dup collisions caught and avoided);
   16 SOURCES.md updated + eastindia SOURCES.md rewritten.
**Files:** `app/itineraries/itineraries.ts` (eastindia all image refs → local; 12 day-slot URL
fixes), ~60 image files under `public/images/`, 17 SOURCES.md, `CLAUDE.md`.
**Flag for client:** gujarat day-5 (Ambika Niwas aerial) carries the photographer's watermark
(©Saful…) — it's their own upload; ask for the original. Hotel stand-ins are flagged
*representative* in SOURCES.md — swap when client supplies real photography.
**Next:** Review on dev — `/itineraries/eastindia` (hotels + all days + fast load), the fixed day
slots above, and any Suggested Hotels row (Samode/Elgin/Trident now exact properties).

### 2026-06-10 (session 38e) — East India slug renamed: `northeast-india-city-of-joy` → `eastindia`
**Done:** Follow-up to the 38c title rename — URL now `/itineraries/eastindia`. Replaced the slug in
all 4 code references: `itineraries.ts` (slug field + `ITINERARY_MAP_ROUTES` key + coordinates
lookup), `exploreItems.ts` (record key, slug, 4 section lists), `journeys/filters.ts` (region map
key), `fileMap.ts` (download key). Added a **permanent redirect** old → new in `next.config.ts`
(old slug is live on deployed production). ImageKit `north-east/` image URLs unaffected (absolute
paths, not slug-derived). Build clean 45/45 — route list shows `/itineraries/eastindia`.
**Files:** `app/itineraries/itineraries.ts`, `app/components/services/exploreItems.ts`,
`app/journeys/filters.ts`, `app/itineraries/template/fileMap.ts`, `next.config.ts`, `CLAUDE.md`.
**Next:** User verifies `/itineraries/eastindia` renders and the old URL redirects (dev). Note slug
deviates from the site's hyphenated convention (`east-india`) per the client's literal request.

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
