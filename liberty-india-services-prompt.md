# Liberty India — "Our Services" Section Revamp Prompt

## Context

We are revamping the **"Our Services"** sub-pages of the Liberty India website (Next.js, hosted previously at liberty-india.com/beta/). The About Us section is fully done — we are now moving section by section through every page under **Our Services** (Meetings & Conferences, Incentives, Weddings, Leisure, etc., based on the Figma).

The new design is a **complete departure** from the old layout. Compare:

- **OLD layout:** Hero banner → centered tagline → 3-image collage with floating description card → bullet-list panel + single image → multi-card grid of destination options → Customized Programs form.
- **NEW layout:** Hero banner → centered tagline → **single full-width "Overview" block with an image-slideshow background and a floating white description card on the left** → Customized Programs form (image + form, same as before). The bullet list and the multi-card destination grid are **removed entirely** from these pages.

I will hand you Figma file links for every section in one batch. Match the Figma 1:1 — typography, spacing, colors, content copy, and component structure. Do **not** improvise layouts.

## The pattern to implement (applies to every "Our Services" sub-page)

### 1. Hero banner (top)
- Full-width hero image, section title overlaid in serif white text (e.g., "MEETINGS & CONFERENCES").
- This already exists — keep it, just verify it matches Figma.

### 2. Tagline strip
- Cream/ivory background band, centered serif heading (e.g., "Business by Day, Inspiration by Night").
- Single line, generous vertical padding.

### 3. Overview block (this is the part being rebuilt)
This is the new core component. It must be **reused across every Our Services sub-page** with only the background images and the description text changing per section.

**Structure:**
- Full-width container, large fixed height (match Figma — roughly 600–700px tall on desktop).
- Background: an **automatic image slideshow** that cycles through all `p1, p2, p3, …` images for that section.
- Overlay: a **white card on the left side**, vertically centered, containing only the section's description paragraph in a clean serif/sans body font. No heading inside the card. Card has subtle padding (around 32–40px) and sits above the slideshow with no border, just a flat white fill.
- On mobile: card should stack full-width below or overlay with reduced opacity — follow Figma.

**Slideshow behavior:**
- Cycle each image for exactly **1 second**, then advance to the next.
- Loop infinitely (after the last image, return to the first).
- Use a soft crossfade between slides (around 200–300ms) so the transition is smooth, not a hard cut. Total cycle stays at 1s per image including the fade.
- No manual controls (no arrows, no dots) — pure ambient background.
- Preload all images on mount so the loop is seamless.
- Pause when the tab is hidden (use the Page Visibility API) to save resources.

### 4. Customized Programs form
- Two-column: left = Victoria Memorial style location image; right = form ("For Customized Programs" heading, intro copy, fields: Full Name, Organization Name, Email, "Tell us more about your travel plans" textarea, two checkboxes, Submit button).
- This already exists — verify against Figma; copy and field order must match.

### 5. "We organize the stay of your dreams" CTA band
- Already exists — leave untouched unless Figma shows changes.

### 6. Footer
- Already exists — leave untouched.

**Remove from the old page:**
- The 3-image collage with floating description card.
- The "Liberty India specializes in…" bullet list panel + adjacent single image.
- The "Meetings and Events Destination Options" multi-card grid.

## Image source — ImageKit

All slideshow images are hosted on ImageKit under this account:
`https://ik.imagekit.io/libertyindia/`

Folder structure:
```
/services/
  /meetings-conferences/  → p1.png, p2.png, p3.png, …
  /incentive/             → p1.png, p2.png, p3.png, …
  /weddings/              → p1.png, p2.png, …
  /leisure/               → p1.png, p2.png, …
  …one folder per Our Services sub-page
```

Example confirmed URL:
`https://ik.imagekit.io/libertyindia/services/incentive/p1.png?updatedAt=1779259505181`

The number of `pN` images per section varies. Build the slideshow component so it accepts an array of image URLs as a prop — do **not** hardcode the count. I will pass the exact URL list per page.

ImageKit URL transformations (use these to keep performance tight):
- Append `?tr=w-1920,q-80,f-auto` for desktop hero slideshows.
- Append `?tr=w-768,q-75,f-auto` for mobile.
- Use Next.js `<Image>` with `priority` on the first slide and lazy on the rest, or just `<img>` with preloading if simpler in this component.

## Build approach

1. Create a reusable component, e.g. `components/services/SectionOverview.tsx`, that accepts:
   ```ts
   type SectionOverviewProps = {
     images: string[];        // ordered ImageKit URLs, p1 first
     description: string;     // body copy for the white card
     intervalMs?: number;     // default 1000
     fadeMs?: number;         // default 250
   }
   ```
2. Implement the slideshow using `useEffect` + `setInterval`, with two stacked layers and an opacity transition for the crossfade.
3. Add the Page Visibility pause.
4. Drop this component into each Our Services sub-page (`/our-services/meetings-conferences/page.tsx`, `/our-services/incentive/page.tsx`, etc.) in place of the removed old sections.
5. Keep the existing Hero, tagline strip, Customized Programs form, CTA band, and Footer as-is unless the Figma indicates a change.

## Figma references — every "Our Services" sub-page

Match each page **1:1** to its Figma frame for layout, typography, spacing, colors, and content. The slideshow background + white description-card pattern is the constant; only the imagery and description copy change per section.

| Section | Route | Figma frame |
|---|---|---|
| Meetings & Conferences | `/our-services/meetings-conferences` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1151&t=YFXtLUS1CTjx6Wja-4 |
| Incentives | `/our-services/incentives` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-2178&t=YFXtLUS1CTjx6Wja-4 |
| Premium Leisure | `/our-services/premium-leisure` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1292&t=YFXtLUS1CTjx6Wja-4 |
| Cruise Handling | `/our-services/cruise-handling` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1456&t=YFXtLUS1CTjx6Wja-4 |
| Education Tours | `/our-services/education-tours` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1604&t=YFXtLUS1CTjx6Wja-4 |
| Special Interest | `/our-services/special-interest` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1751&t=YFXtLUS1CTjx6Wja-4 |
| Sports Tourism | `/our-services/sports-tourism` | https://www.figma.com/design/fHkCYCck2nqXVvoCcS6oj0/Liberty-India-Website---V1?node-id=852-1896&t=YFXtLUS1CTjx6Wja-4 |

For each page, pull the description copy directly from the Figma frame's white-card text layer. If a section's overview deviates from the standard pattern in Figma (different card position, additional sub-blocks, etc.), follow Figma — the spec above is the default, Figma is the source of truth.

Match the **exact** ImageKit folder slug to the section. Confirmed folder so far:
- Incentives → `/services/incentive/` (note: singular `incentive`, not `incentives`)
- For the rest, I will confirm the folder name when I send the image URL list. Do not assume the folder slug — wait for me to provide it.

## What I'll send next

- The exact ordered list of ImageKit URLs per section (so you know how many slides each section has).
- Any description copy that needs refining beyond what's in the Figma frame.

## What I need you to do right now

1. Confirm you understand the new pattern and the removals.
2. Build `SectionOverview.tsx` as a reusable component per the spec above.
3. Refactor the **Meetings & Conferences** page (`/our-services/meetings-conferences`) first as the reference implementation — remove the old collage/bullet-list/destination-grid sections, drop in the new `SectionOverview` component with placeholder images (I'll swap to the real ImageKit URLs once you confirm the component works), and verify spacing/typography against the After screenshot I'll attach.
4. Once approved, we'll roll the same refactor to every other Our Services sub-page using the Figma links.

Do not start on the other sub-pages until I confirm the Meetings & Conferences refactor matches the Figma exactly.
