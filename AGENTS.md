# Repository guidance

This repository demonstrates Finna's Codex-to-GitHub-to-Vercel delivery loop.

## Working agreement

- Keep the app dependency-free unless a feature clearly requires a framework.
- Keep pull requests focused on one visible outcome.
- Run `npm run check` and `npm test` before committing.
- Treat the Vercel preview as part of review, not as proof that CI passed.
- Never commit credentials, tokens, customer information, or copied production data.

## Code review rules

- Preserve the response shape of public routes under `api/`; add fields instead of renaming or removing existing fields.
- Reject any UI or log output that exposes secrets, customer information, or internal identifiers.
- Require keyboard access, visible focus, semantic headings, and reduced-motion support for interactive UI changes.
- Keep production deployment tied to reviewed changes on `main`; do not add bypass workflows that deploy unreviewed branches to production.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Finna design source of truth

Use **Finna Brand System**, currently version 2.0, for all new design decisions.
Permanent entry: https://finna-inc.github.io/design/.
Local source: `C:/Finna/design/brand-v2/`. Read its `FINNA-STYLE-GUIDE.md`,
`tokens.css`, and relevant components before making UI changes. Follow the design
agreement in `C:/Finna/design/AGENTS.md`.

The design repository's `brand/` directory is archived 1.x. App-local copies of
brand assets are runtime dependencies, not the authoritative design source; preserve
existing imports until an explicit, verified migration. Reuse documented tokens and
SVG assets. Identify missing patterns instead of inventing purported brand rules.

Check affected desktop/mobile layouts, light/dark modes, and keyboard/interaction
states. Report unverified states and distinguish local implementation from deployment.
Use short, nonessential eyebrows and digital terminology (canvas, surface, text).
