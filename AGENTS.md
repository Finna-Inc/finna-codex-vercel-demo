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
