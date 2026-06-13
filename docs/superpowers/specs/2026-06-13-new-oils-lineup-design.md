# Design: Add Sesame, Growth & Flaxseed Oils to the Lineup

**Date:** 2026-06-13
**Status:** Approved

## Goal

Add three new products — **Sesame Oil**, **Growth Oil**, and **Flaxseed Oil** — to the
YabOil storefront as first-class products (dedicated detail pages + lineup cards +
homepage carousel slots), matching how Black Seed and Pumpkin Seed are treated. Push the
renamed product imagery and an updated 7-bottle collection image to Cloudinary, and write
SEO-optimized, keyword-rich marketing copy for each.

## Decisions

- **Integration depth:** Full first-class treatment for all three (detail page, lineup
  card, homepage carousel).
- **Pricing:** Sesame **$38**, Growth **$58** (premium hero blend), Flaxseed **$42** —
  consistent across lineup and detail pages.
- **Cloudinary:** No credentials configured locally. User runs the upload commands
  themselves (API secret never passes through the assistant). Cloud `dud5jjhfz`, folder
  `yaboil`.
- **Growth Oil is a blend:** latin name → "Botanical Blend", origin → "Small-Batch Blend".
- **Origin angle:** Lean into authentic Ethiopian sourcing — Humera sesame, highland flax
  (telba). Approved by user.
- **SEO infrastructure:** No per-route meta framework exists (single static `<title>`).
  "SEO-optimized" = keyword-rich body copy + strong alt text + a lightweight per-page
  `document.title` added to `ProductDetailLayout`.

## Image rename + Cloudinary push

Copy the four source files into `public/images/` with clean kebab-case names, then upload:

| Source (Downloads) | Repo file | Cloudinary public_id |
|---|---|---|
| `Gemini_…d6t1sud6t1su… (1).png` | `public/images/growth.png` | `yaboil/growth` |
| `Gemini_…k9ohiuk9ohiu… (1).png` | `public/images/sesame.png` | `yaboil/sesame` |
| `Gemini_…m6kco8m6kco8… (1).png` | `public/images/flaxseed.png` | `yaboil/flaxseed` |
| `Gemini_…uz5gmuuz5gmu… (1).png` | `public/images/collection-2.png` | `yaboil/collection-2` |

The updated collection uses a **new** public_id (`collection-2`) rather than overwriting
`collection`, to avoid stale CDN/browser cache.

Upload command shape (one per file; user fills in secret):

```
cloudinary upload public/images/sesame.png -n dud5jjhfz -k <KEY> -s <SECRET> -f yaboil --usefilename true -u false
```

`--usefilename true -u false` yields the exact public_id `yaboil/<filename>`.

## Code changes

1. **`src/config/images.ts`** — add `sesame`, `growth`, `flaxseed`; point `collection`
   at `collection-2.png`.
2. **`src/pages/SesameDetail.tsx`, `GrowthDetail.tsx`, `FlaxseedDetail.tsx`** — new files,
   each a `product` object passed to `ProductDetailLayout`. Decorative illustration reuses
   existing botanical line art (no new illustration assets).
3. **`src/App.tsx`** — routes `/product/sesame`, `/product/growth`, `/product/flaxseed`.
4. **`src/components/ProductDetailLayout.tsx`** — add `useEffect` setting
   `document.title = \`YabOil | ${product.name}\``.
5. **`src/pages/Lineup.tsx`** — append 3 cards (offset stagger preserved); intro copy
   "Four → Seven exceptional botanicals".
6. **`src/components/CinematicShowcase.tsx`** — append 3 products + 3 matching background
   gradients (honey / olive / amber); tag the three new ones "New".
7. **`README.md`** — update App Surface routes and product count.

## Scope boundaries

- The curated 2×2 editorial grids on GoldenHour / HighImpact stay 4-up (adding 3 breaks
  the layout). New oils still appear on the Process page via the updated collection image.
- No payment/backend changes.

## SEO copy

### Sesame Oil — *Sesamum indicum* · Ethiopia (Humera) · $38 · 120ML / 4OZ

**Lead:** Cold-pressed from Ethiopia's prized Humera sesame seeds, this golden,
fast-absorbing oil is naturally abundant in vitamin E, sesamol, and skin-loving fatty
acids. Lightweight yet deeply conditioning — it seals moisture into hair, soothes a dry
scalp, and leaves skin supple with a soft, non-greasy finish.

- **Lightweight, Deep Conditioning:** Naturally rich in vitamin E and sesamol
  antioxidants, cold-pressed sesame oil penetrates the hair shaft to smooth frizz, tame
  split ends, and shield strands from heat and pollution — without the heavy residue of
  richer oils.
- **Usage & Ritual:** Warm 3–4 drops between palms and work through mid-lengths to ends,
  or massage into the scalp before washing as a nourishing pre-shampoo treatment. A single
  drop doubles as a quick-absorbing daily face and body moisturizer.
- **Ingredients:** 100% Pure Cold-Pressed Sesame Seed Oil (Sesamum indicum). No fillers,
  no synthetic fragrance, no preservatives.
- **Sourcing:** Single-origin from the Humera lowlands of northern Ethiopia, a region
  world-renowned for some of the planet's finest sesame. Pressed in small batches to
  preserve every drop's antioxidant potency and signature nutty warmth.

### Growth Oil — *Botanical Blend* · Small-Batch Blend · $58 · 120ML / 4OZ

**Lead:** A potent root-to-tip growth elixir, hand-blended from rosemary, black seed,
castor, and nourishing seed oils. Designed to invigorate the scalp, strengthen the
follicle, and support visibly thicker, fuller, more resilient hair — our most-loved
formula for length and density.

- **The Growth Synergy:** Rosemary stimulates circulation at the scalp, castor delivers a
  humectant shield that fortifies each strand, and black seed calms and balances —
  together a time-honored trio celebrated for encouraging healthy hair growth and reducing
  breakage.
- **Usage & Ritual:** Part the hair and apply 5–8 drops directly to the scalp, massaging
  in slow circles for 2–3 minutes. Use 3–4 times weekly, leaving on overnight or at least
  30 minutes before washing. Consistency is everything — give it a full cycle to see
  results.
- **Ingredients:** A pure botanical blend of Rosemary Oil (Salvia rosmarinus),
  Cold-Pressed Black Seed Oil (Nigella sativa), Castor Oil (Ricinus communis), and
  supporting seed oils. No mineral oil, silicones, or synthetic fragrance.
- **Sourcing:** Blended by hand in small batches from single-origin oils we press
  ourselves, so every bottle carries the same potency from first drop to last.

### Flaxseed Oil — *Linum usitatissimum* · Ethiopia (telba) · $42 · 120ML / 4OZ

**Lead:** Cold-pressed from heritage Ethiopian flax — known locally as *telba* — this
amber oil is one of nature's richest plant sources of omega-3 (ALA) and protective
lignans. It hydrates from inside the strand out, defining curls, calming frizz, and
nourishing the scalp for softer, springier, more resilient hair.

- **Omega-Rich Definition:** Loaded with omega-3 alpha-linolenic acid and lignan
  antioxidants, flaxseed oil reinforces the hair's elasticity and shine — a curl-lover's
  secret for natural hold and definition without crunch, and a featherweight conditioner
  for fine hair.
- **Usage & Ritual:** Smooth a few drops over damp curls to shape and define, or warm
  between palms and glide over dry ends to seal frizz. As a scalp treatment, massage in
  before washing to deliver essential fatty acids straight to the root.
- **Ingredients:** 100% Pure Cold-Pressed Flaxseed (Linseed) Oil (Linum usitatissimum).
  No fillers, no synthetic fragrance, no preservatives.
- **Sourcing:** Pressed from highland Ethiopian flax, a heritage crop cultivated for
  generations as telba. Small-batch cold-pressing protects the delicate omega-3 profile
  that makes this oil so prized — and so perishable in lesser hands.

## Verification

- `npm run lint` (tsc) — no type errors
- `npm run build` — clean production build
- `npm test` — existing suite passes
