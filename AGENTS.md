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
