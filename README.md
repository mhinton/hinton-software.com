# hinton-software.com-app

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server on <http://localhost:4000>

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

#### Netlify deployment notes

I might need to run the `build-prerender` script instead of `build` to get the
netlify forms feature to work.

Locally preview production build:

```bash
npm run preview
```
