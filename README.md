# mov-e

## Overview

- React single-page app for searching movies via the OMDb API.
- Search input triggers a fetch to the OMDb search endpoint (`s=` query) and renders results.
- Results display as cards with poster, year, type, and title.
- Styling is handled in `src/App.css` with a dark theme and card hover effects.

## Environment Variables

Create a `.env` file at the project root with your OMDb API key:

```
REACT_APP_OMDB_API_KEY=your_key_here
```

You can copy `.env.example` as a starting point.

## Scripts

- `npm start` - Run the dev server.
- `npm test` - Run tests in watch mode.
- `npm run build` - Build for production.
- `npm run eject` - Eject CRA config (irreversible).
