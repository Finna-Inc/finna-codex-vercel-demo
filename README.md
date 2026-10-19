# Finna × Codex × GitHub × Vercel

The home page runs the Finna Family Office prototype. Hash routes such as
`/#/home` preserve its navigation. The delivery-loop demo remains at
`/delivery-demo`; health and deployment APIs are unchanged.

Imported from `Finna-Inc/finna-family-office-app` at commit
`6c6ed251b2c45cf18d7f939bb2b33f11ff8eeda0`. Runtime files live in `public/`.
This is a browser-only prototype with fictional seed data and browser-local state,
not the live customer app or its authentication, storage or AI backend. Review
with sample data. No customer records were imported.

The vendored `public/brand/` assets are preserved from the source prototype.
Refresh them from the design repository's generated assets rather than editing
vendored tokens or components. This import does not upgrade them to brand-v2.

A small, inspectable demo of an AI-assisted delivery loop:

```text
Codex task → code + tests → commit → pull request → Vercel preview → merge → production
```

The app uses the Next.js App Router and React, includes responsive layouts and Vercel route handlers, and uses GitHub Actions for deterministic checks. It is intentionally small enough to explain in a live demo.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run check
npm test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The health endpoint is available at [http://localhost:3000/api/health](http://localhost:3000/api/health), and the deployment card reads [http://localhost:3000/api/deployment](http://localhost:3000/api/deployment).

## Demonstrate the workflow with Codex

1. Add this repository as a project in Codex.
2. Ask Codex for one focused, visible change. Include the expected behavior and checks.
3. Review the local diff and test output.
4. Ask Codex to commit the change on a feature branch and open a pull request.
5. Review the GitHub Actions result and the Vercel preview URL on the pull request.
6. Merge the pull request into `main` after review. Vercel will deploy the reviewed commit to production.

Example prompt:

> Add a live deployment card that shows the current Vercel environment, Git branch, and short commit SHA. Keep a useful local fallback, update the tests, run every check, commit the change on a feature branch, and open a pull request.

Repository-specific instructions live in [`AGENTS.md`](./AGENTS.md). Codex Code Review can use concise repository rules from `AGENTS.md`, and a review can be requested with `@codex review`; see the [official OpenAI guidance](https://developers.openai.com/blog/custom-code-review-rules-for-codex).

## Connect Vercel once

1. In Vercel, select **New Project**.
2. Import this GitHub repository from the `Finna-Inc` organization.
3. Keep the root directory as `.` and the production branch as `main`.
4. Deploy.

After the Git integration is connected, Vercel creates preview deployments for branch pushes and pull requests, then creates a production deployment when changes reach the production branch. See [Vercel's Git deployment documentation](https://vercel.com/docs/git).

## Repository map

| Path | Purpose |
| --- | --- |
| `app/delivery-demo/page.jsx`, `app/globals.css` | Responsive React demo experience |
| `app/api/*/route.js` | Next.js health and deployment-metadata route handlers |
| `components/` | Interactive client components |
| `.github/workflows/ci.yml` | Pull-request and `main` checks |
| `.github/pull_request_template.md` | Review and deployment checklist |
| `AGENTS.md` | Codex implementation and review guidance |
| `scripts/` and `test/` | Local server and dependency-free verification |

## Deployment contract

- Feature branches and pull requests are preview environments.
- `main` is the production branch.
- CI and human review happen before merge.
- Reverting a merged commit is the normal rollback path.
