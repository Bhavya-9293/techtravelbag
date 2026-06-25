# HABÄNE — Carry the City

A storefront for **Habäne**, a premium tech-travel bag brand (smart duffels, weekenders, backpacks & slings). Built as a fast, static front-end — no build step, just open `index.html`.

**Live:** https://habane-store.vercel.app

## Features
- Clean, sortable/filterable product grid with **Comet-style two-image hover** (crossfade + cross-zoom)
- **Cart drawer** with qty steppers, free-shipping progress bar & simulated checkout
- **Quick-view modal** with colour / size / quantity selection
- **Search overlay** and **sort** (price, newest, rating)
- **Wishlist** + **cart** persisted to `localStorage`
- **3D Showroom** — interactive `.glb` luggage models via Google `<model-viewer>` (drag-rotate, zoom, model switcher)
- Conversion layer: **spin-to-win discount wheel** (auto-applies in cart), stock urgency, trust strip, **#CARRYTHECITY** UGC wall, playful FAQ
- Brand palette: midnight navy + metallic silver + ice-blue accent; Conthrax (display) + Montserrat (body)

## Structure
```
habane-website/
├─ index.html      # markup
├─ styles.css      # all styling
├─ script.js       # cart, quick-view, search, wheel, 3D logic
└─ assets/
   ├─ products/    # product + alt hover photos
   ├─ brand/       # logos / wordmark
   ├─ fonts/       # Conthrax + Montserrat
   └─ 3d/          # .glb models + base64 models.js
```

## Run locally
Just open `index.html` in a browser. (The 3D viewer loads `model-viewer` from a CDN, so it needs an internet connection.)

## Notes
- Prices, product names and copy are placeholders for the demo.
- 3D models sourced from [Poly Pizza](https://poly.pizza) (CC-BY) — credited in-page.
- Front-end only: checkout, email capture and discounts are simulated (no backend yet).
