<div align="center">

# 🎮 Video Game Discovery

**Browse, search, filter and sort thousands of games with the RAWG API.**
A React and TypeScript single-page app built with Vite and Chakra UI.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?logo=chakraui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)

</div>

## Overview

This project is based on the public [RAWG](https://rawg.io/apidocs) video games API. It focuses on the client-side data layer: typed API requests, cancellation of stale requests, and clear loading and error states.

## Features

- **Search** games by name.
- **Filter** by genre and by platform.
- **Sort** by relevance, date added, name, release date, popularity or average rating.
- **Game cards** with the cover image, supported platforms and critic score.
- **Light and dark mode** switch.
- **Loading skeletons** while data is being fetched, and an error message when a request fails.
- **Responsive layout:** the genre sidebar is hidden below the `lg` breakpoint, and the grid goes from 1 to 4 columns.

## How it works

- **Typed data hooks.** A generic `useData<T>` hook wraps Axios, and `useGames` builds the query (genre, platform, ordering and search text) on top of it.
- **No stale responses.** Each request uses an `AbortController`. When the filters change or the component unmounts, the previous request is cancelled and `CanceledError` is ignored.
- **Fewer API calls.** Genres and platforms are served from local static data instead of being requested on every load.
- **Single API client.** One configured Axios instance holds the base URL and the API key.

## Tech stack

| Layer | Technologies |
| --- | --- |
| **UI** | React 18, TypeScript, Chakra UI, React Icons, Framer Motion |
| **Data** | Axios, the RAWG REST API |
| **Tooling** | Vite, ESLint with typescript-eslint |

## Project structure

```text
src/
  components/   GameGrid, GameCard, GenreList, PlatformSelector, SortSelector, SearchInput, NavBar, ...
  hooks/        useData (generic), useGames, useGenres, usePlatforms
  services/     api-client (Axios instance), image-url
  data/         Static genres and platforms
  theme.ts      Chakra theme (dark mode by default)
```

## Run it locally

Requires Node.js 18+ and a free API key from [rawg.io/apidocs](https://rawg.io/apidocs).

```bash
git clone https://github.com/Kev-Villegas/videoGames-discovery-app.git
cd videoGames-discovery-app
npm install
```

Create a `.env` file in the project root:

```bash
VITE_API_KEY=your_rawg_api_key
```

Start the dev server:

```bash
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Starts the Vite dev server |
| `npm run build` | Type-checks with `tsc` and builds for production |
| `npm run lint` | Runs ESLint with zero warnings allowed |
| `npm run preview` | Serves the production build locally |

## Known limitations and next steps

- The RAWG key is read at build time with `VITE_API_KEY`, so it ships in the client bundle. Next: proxy the requests through a small serverless function.
- Data fetching is hand-written with `useEffect`. Next: move to TanStack Query for caching, retries and request deduplication.
- No tests yet. Next: add component tests with Vitest and Testing Library.

## Author

Built by [Kevin Villegas](https://github.com/Kev-Villegas) · [Portfolio](https://www.kevcode.com.ar) · [LinkedIn](https://www.linkedin.com/in/kevin--villegas)
