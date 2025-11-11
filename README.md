# Arcana

Interactive tarot-style mini-app (MVP).  
Tech: Angular 20 (standalone, SSR enabled), SCSS.

## Requirements
- Node 24.11.0 (LTS)

## Quick Start
```bash
npm ci
npm start        # http://localhost:4200
``` 

## Build & Run
```bash
npm run build
npm run serve:ssr   # http://localhost:4000
``` 

## Scripts
start – dev server
build – production build
test – unit tests
serve:ssr – run server bundle

## Prerender
SSR is enabled. Prerender routes are configured in angular.json.

## License
MIT