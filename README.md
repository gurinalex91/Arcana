# Arcana

Interactive tarot-style mini-app (MVP).

This repository contains the existing Arcana frontend baseline. It is not a
project-generation template.

## Stack

- Angular 21 standalone application
- Angular SSR via `@angular/ssr` and Express
- SCSS for global and component styles
- npm 11 with `package-lock.json`
- Node 24 LTS

## Requirements

- Node `24.11.0` or newer Node 24 LTS
- npm `11.x`

Use the checked-in versions as the source of truth:

- `.nvmrc` pins `v24.11.0`
- `package.json` declares `packageManager: npm@11.11.0`
- `package.json` declares `engines.node: >=24.11.0 <25`

## Quick Start

```bash
nvm use
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

## Project Structure

```text
src/
  app/
    app.ts                 # root standalone component
    app.html               # root template
    app.scss               # root component styles
    app.config.ts          # browser app providers
    app.config.server.ts   # server app providers
    app.routes.ts          # app routes
    app.routes.server.ts   # server route config
  main.ts                  # browser bootstrap
  main.server.ts           # server bootstrap
  server.ts                # SSR server
  styles.scss              # global SCSS
public/                    # static assets
```

## Scripts

- `npm start` - dev server
- `npm run build` - production build
- `npm test` - interactive unit tests
- `npm run test:ci` - headless unit tests for CI
- `npm run lint-all` - ESLint, Stylelint, and Prettier checks
- `npm run verify` - lint, test, and build
- `npm run serve:ssr` - run the production server bundle

## Development Workflow

- Prefer small, reviewable changes.
- Keep UI and business logic changes separate from baseline maintenance.
- Use Angular standalone components and SCSS; do not add UI kits, Tailwind,
  state managers, or routing changes unless the project explicitly needs them.
- Run `npm run lint-all` before submitting documentation/config updates.
- Run `npm run verify` before changes that touch app behavior or build config.

## TODO / Open Questions

- Confirm the release/versioning policy before changing `version` from `0.0.0`.
- Define deployment-specific values for `NG_ALLOWED_HOSTS` when a public host is
  selected.
- Add environment configuration only when an API/backend contract exists.

## License

MIT
