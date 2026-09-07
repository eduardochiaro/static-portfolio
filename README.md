# static-portfolio

Personal portfolio and field notes for [Eduardo Chiaro](https://eduardochiaro.com) — Senior Software Engineer.

Next.js App Router, exported as a fully static site (`output: 'export'`). No server, no API routes, no database. Every page is pre-rendered at build time.

## Stack

Next.js 16 · React 19 · TypeScript (strict) · Tailwind CSS v4 · `marked` for note rendering.

## Content

All content lives outside the app:

- `src/data/` is a **symlink** into a separate content repo (`eduardochiaro.com-data`). It holds `metadata.json`, `home.json`, `resume.json`, `pebble.json`, and a `notes/` directory of Markdown files.
- Note filenames are `YYYY-MM-DD-slug.md`; the date and slug come from the filename, the title from the first `#` heading.
- `data-placeholder/` mirrors that structure for anyone cloning without the content repo — copy it to `src/data/`.

## Routes

| Route                     | Source                                                                |
| ------------------------- | --------------------------------------------------------------------- |
| `/`                       | `home.json` + `resume.json`                                           |
| `/resume`                 | `resume.json`, plus a GitHub contribution graph fetched at build time |
| `/notes`, `/notes/[slug]` | Markdown in `src/data/notes/`                                         |
| `/pebble`                 | `pebble.json` — Pebble watchface gallery                              |

## Commands

```bash
npm run dev       # dev server
npm run build     # static export to out/
npm run lint      # eslint
npm run cleanup   # prettier + eslint --fix
```

## Environment

`.env.local`:

- `GOOGLE_ANALYTICS_ID` — omit to skip the analytics script.
- `GITHUB_TOKEN` — a classic PAT with no scopes. Omit and the resume's contribution graph is skipped.

## Design prototypes

`design/` holds standalone HTML explorations, independent of the Next.js build. Open them directly in a browser.
