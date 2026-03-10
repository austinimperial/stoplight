## stoplight

**stoplight** is a small React + TypeScript app that simulates a traffic light cycling through green, yellow, and red lights. Each light has its own duration, and the app smoothly transitions between them to act as a simple visual timer or demo.

The UI is built with Tailwind-style utility classes and Vite for fast local development.

### Features

- **Animated light cycle**: Automatically rotates through green, yellow, and red with different durations.
- **Simple, focused UI**: Full-screen centered stoplight with subtle opacity transitions.

## Getting started

### Prerequisites

- **Node.js** 18+ (or a compatible LTS version)
- **npm**, **pnpm**, or **yarn** (examples below use `npm`)

### Install dependencies

From the project root (`stoplight` directory):

```bash
npm install
```

## Running the app

### Start the dev server

```bash
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`) in your browser to see the stoplight.

### Build for production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Preview the production build

```bash
npm run preview
```

This serves the `dist` build locally so you can verify it before deploying.
