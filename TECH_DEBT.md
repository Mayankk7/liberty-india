# Tech Debt / Deprecations

Logged for future sessions. Do not fix inline with unrelated work — schedule deliberately.

## Deprecations spotted during the `legacyBehavior` Link migration (2026-05-19)

- **`onKeyPress` is deprecated** (React). Found in:
  - `app/components/ItineraryCards.tsx` (the non-slug `<div>` fallback, ~line 150)
  - `app/components/Services.tsx` (multiple card `role="button"` divs)
  Replace with `onKeyDown`. Tracked in CLAUDE.md audit as **P2-13**.

- **`window.location.href` used for internal navigation** instead of `next/link`
  / `useRouter`. Causes full-page reloads, no prefetch. Found in
  `ItineraryCards.tsx`, `Services.tsx`, `Navbar.tsx`, `AboutUs.tsx`.
  Tracked in CLAUDE.md audit as **P2-11**.

These were observed only; the Link codemod task was scoped to `legacyBehavior`
cleanup and did not touch them.

## Deferred / blocked P1 items (2026-05-19)

- **P1-7 — Jan & Feb share `feb.png` (BLOCKED, needs asset).** The hero
  carousel's January slide reuses February's image. There is no January asset
  on the CDN (`jan.png/.jpg/.webp` and `january.png` all 404 at
  `https://ik.imagekit.io/libertyindia/hero-section/`). Cannot fix in code
  without a real January image (Jallikattu, Tamil Nadu). **Action:** upload a
  Jan asset, then update `MONTHS[0].image` in `HeroCarousel.tsx`.

- **P1-8 — Fragile Services masonry (DEFERRED, needs visual review).**
  `Services.tsx` uses hard-coded pixel heights (`h-[700px]`, `h-[650px]`, …)
  plus a magic `md:-mt-[300px]` to fake a masonry overlap. Brittle across
  viewports. A proper fix (CSS grid / columns masonry) is a layout rewrite
  with high visual-regression risk and must be done with the dev server
  visible for side-by-side checking. Schedule as its own focused session.
