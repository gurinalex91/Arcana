# Arcana

Interactive tarot-style mini-app (MVP).  
Tech: Angular 21 (standalone, SSR enabled), SCSS.

## Requirements

- Node 24.11.0 or newer Node 24 LTS
- npm 11

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

The SSR server reads optional runtime environment variables:

- `PORT` - HTTP port, defaults to `4000`
- `HOST` - bind address, defaults to `0.0.0.0`
- `NG_ALLOWED_HOSTS` - comma-separated public hostnames allowed for SSR host-header checks

## Scripts

- `npm start` - dev server
- `npm run build` - production build
- `npm test` - interactive unit tests
- `npm run test:ci` - headless unit tests for CI
- `npm run lint-all` - ESLint, Stylelint, and Prettier checks
- `npm run verify` - lint, test, and build
- `npm run serve:ssr` - run the production server bundle

## License

MIT
