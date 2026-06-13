# Design: Unify Product Data into a Single Catalog

**Date:** 2026-06-13
**Status:** Approved

## Problem

Each oil's data is defined in three places — `src/pages/Lineup.tsx`,
`src/components/CinematicShowcase.tsx`, and a per-product detail page — and the
copies have **drifted**:

| Product | Lineup $ | Carousel $ | Detail $ | Spec drift |
|---|---|---|---|---|
| Black Seed | 48 | 48 | 54 | — |
| Pumpkin Seed | 42 | 38 | 42 | detail 250ML vs carousel 120ML |
| Castor | 38 | 34 | (no page) | 60ML/2OZ |
| Rosemary | 55 | 42 | (no page) | 60ML/2OZ |

There is also a latent bug: Lineup's Castor and Rosemary "Discover" buttons link
to `/product`, which renders the **Black Seed** page.

## Goal

One source of truth, `src/data/products.ts`, that the lineup grid, homepage
carousel, and detail pages all derive from. Collapse the five near-identical
detail page files into a single dynamic `/product/:id` route. Fix the
Castor/Rosemary routing bug by giving them real detail pages.

## Architecture

- **`src/data/products.ts`** — exports `Product` type, the `products: Product[]`
  catalog, and `getProduct(id): Product | undefined`.
- **`Lineup.tsx`** — maps the catalog. `offset` (masonry stagger) is computed
  from index (`i % 2 === 1`), not stored.
- **`CinematicShowcase.tsx`** — maps the catalog. The parallel `bgGradients`
  array is removed; each product carries its own `bgGradient`. Initial
  `activeIndex` is the index of the `Best Seller`-tagged product (Rosemary), so
  the carousel still opens on Rosemary despite the unified order.
- **`ProductPage.tsx`** (new) — reads `:id`, calls `getProduct`, renders
  `ProductDetailLayout`; unknown id → `<Navigate to="/lineup" replace />`.
- **`App.tsx`** — replace 5 detail imports/routes with:
  - `<Route path="/product/:id" element={<ProductPage />} />`
  - `<Route path="/product" element={<Navigate to="/product/black-seed" replace />} />`

## Product shape

```ts
interface ProductSection { title: string; body: string; }

interface Product {
  id: string;            // slug → /product/:id and cart id
  name: string;
  latinName: string;     // lineup hover overlay
  origin: string;        // lineup footer
  price: number;
  specs: string;         // "120ML / 4OZ"
  image: string;         // IMAGES.*
  imageAlt: string;
  illustration: string;  // IMAGES.* faint detail bg
  tagline: string;       // carousel `desc`
  cardDesc: string;      // lineup card description
  blurb: string;         // carousel detail-panel text
  description: string;   // detail-page intro paragraph
  sections: ProductSection[];
  bgText: string;        // carousel kinetic typography
  bgGradient: string;    // carousel background
  tag?: string;          // "New" | "Best Seller"
}
```

One object per product; distinct fields per surface; no cross-file duplication.

## Canonical values (drift resolved — approved)

Rule: **Lineup price wins**, except Rosemary set to $25 by user.

| Product | Price | Spec | Tag |
|---|---|---|---|
| Black Seed | 48 | 120ML / 4OZ | — |
| Pumpkin Seed | 42 | 120ML / 4OZ | — |
| Castor | 38 | 60ML / 2OZ | — |
| Rosemary | **25** | 60ML / 2OZ | Best Seller |
| Sesame | 38 | 120ML / 4OZ | New |
| Growth | 58 | 120ML / 4OZ | New |
| Flaxseed | 42 | 120ML / 4OZ | New |

Catalog order = lineup order: black-seed, pumpkin-seed, castor, rosemary,
sesame, growth, flaxseed. Carousel opens on the Best Seller (Rosemary).

## New detail copy (Castor & Rosemary)

**Castor Oil** — *Ricinus communis*, India, $38, 60ML/2OZ
- intro: "A dense, humectant barrier oil cold-pressed and hexane-free from
  organic castor seeds. Traditionally used for generations to fortify hair,
  lashes, and brows, this rich, glossy oil seals in moisture, shields strands
  from breakage, and creates the conditions for thicker, lusher-looking growth."
- The Humectant Shield / Usage & Ritual / Ingredients / Sourcing (full voice
  matching existing pages).

**Rosemary Oil** — *Salvia rosmarinus*, Spain, $25, 60ML/2OZ
- intro: "A pure, steam-distilled rosemary essential extract prized for
  centuries as a scalp tonic. Invigorating and clarifying, it stimulates
  circulation at the roots, awakens tired follicles, and restores shine and
  vitality to dull, lifeless hair."
- Stimulating & Clarifying / Usage & Ritual (note: dilute before use) /
  Ingredients / Sourcing.

## Files

- **Add:** `src/data/products.ts`, `src/pages/ProductPage.tsx`,
  `src/data/products.test.ts`
- **Delete:** `src/pages/ProductDetail.tsx`, `PumpkinSeedDetail.tsx`,
  `SesameDetail.tsx`, `GrowthDetail.tsx`, `FlaxseedDetail.tsx`
- **Edit:** `src/pages/Lineup.tsx`, `src/components/CinematicShowcase.tsx`,
  `src/App.tsx`

## Behavior changes (intended)

- Black Seed detail price 54 → 48; Pumpkin carousel 38 → 42; Pumpkin detail spec
  250ML → 120ML; Castor carousel 34 → 38; Rosemary 42/55 → 25.
- Castor and Rosemary now have real detail pages (was: Black Seed).

## Out of scope

`Cart.tsx` `seedDefaultItems` (fictional demo products) and `Process.tsx`
editorial step images. `src/config/images.ts` unchanged.

## Testing

- `src/data/products.test.ts`: ids unique; every product's `getProduct(id)`
  round-trips; required fields non-empty; bgGradient present on all.
- `npm run lint` (tsc) clean; `vite build` clean; `vitest` green.
- Manual: `/product/rosemary` and `/product/castor` render their own pages;
  Lineup "Discover" links route correctly; carousel opens on Rosemary.
