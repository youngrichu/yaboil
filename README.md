# YabOil

YabOil is a Vite + React storefront prototype for a small-batch botanical oil brand. It presents an editorial commerce experience with product storytelling, product detail pages, a local cart flow, a simulated checkout drawer, and a simulated account portal.

The current app is front-end only. Cart, checkout, login, profile, order history, and auto-refill state are stored in `localStorage`; there is no real payment processor, authentication backend, order API, or inventory system wired in yet.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4 via `@tailwindcss/vite`
- React Router
- Motion for page and modal transitions
- Lucide React icons

## App Surface

- `/` - homepage with brand story, product spotlight, and editorial sections
- `/lineup` - four-product botanical oil lineup
- `/product` and `/product/black-seed` - black seed oil product detail and add-to-cart flow
- `/product/pumpkin-seed` - pumpkin seed oil product detail
- `/process` - sourcing and cold-press process story
- `/philosophy` - brand philosophy
- `/journal` and `/journal/harvesting-the-desert` - editorial content
- `/golden-hour` and `/high-impact` - alternate visual theme routes
- `/cart` - local cart, promo codes, gift note, and simulated checkout
- `/account` - simulated login/signup, profile editing, order history, and auto-refill controls

## Local Development

Prerequisites:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The dev server runs on port `3000` and binds to `0.0.0.0` by default:

```text
http://localhost:3000
```

Run a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the TypeScript check:

```bash
npm run lint
```

Clean generated build output:

```bash
npm run clean
```

## Environment

No environment variables are required for the current front-end prototype.

`.env.example` still contains generated AI Studio placeholders from the original scaffold. They are not consumed by the current React app code.

## Implementation Notes

- The cart key is `yaboil_cart`.
- The simulated account profile key is `yaboil_user`.
- Simulated subscriptions and orders use `yaboil_subs` and `yaboil_orders`.
- Header cart count synchronization uses `storage` and `cart-updated` browser events.
- Product and editorial imagery currently references externally hosted image URLs.
- `vite.config.ts` keeps the old `DISABLE_HMR` support from the scaffold for agent/editing environments.

## Production Gaps

Before using this as a real storefront, replace the local simulations with durable systems:

- real authentication and session handling
- server-side cart/order persistence
- payment integration
- shipping and tax calculation
- inventory and product data source
- form validation at API boundaries
- analytics and observability
