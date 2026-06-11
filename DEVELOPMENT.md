# Development

Astro static site for [markdownbetterview.com](https://markdownbetterview.com),
deployed to GitHub Pages.

## Requirements

- Node.js **≥ 22.12** (Astro 6)

## Project structure

```text
/
├── public/            # static assets (favicon, og image, videos, hosted install scripts)
├── src/
│   ├── components/    # Astro components (Nav, Footer, …)
│   ├── content/
│   │   └── changelog/ # release notes — one .md per version (version/date/title frontmatter)
│   ├── layouts/
│   └── pages/         # routes (index, comparison, support, privacy, changelog, integrations)
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Local dev server at `localhost:4321`        |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`): pull requests build-only;
merging to `main` deploys to GitHub Pages.

## Notes

- `public/setup` and `public/cli_setup` are copies of the install scripts from
  the app repository (`mardown-better-view`, `integrations/`) — keep them in
  sync when the upstream scripts change.
- Changelog entries are user-facing release notes — business language, no
  technical internals. Publish a version's entry only once it is live on the
  App Store.
