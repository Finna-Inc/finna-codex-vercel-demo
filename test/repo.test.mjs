import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { GET as getDeployment } from "../app/api/deployment/route.js";
import { GET as getHealth } from "../app/api/health/route.js";

test("homepage explains the full delivery loop", async () => {
  const page = await readFile("app/page.jsx", "utf8");

  for (const step of [
    "Prompt Codex",
    "Build + verify",
    "Commit the change",
    "Open the PR",
    "Merge to ship",
  ]) {
    assert.match(page, new RegExp(step.replace("+", "\\+")));
  }
});

test("Vercel configuration keeps security headers", async () => {
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  const headers = config.headers[0].headers;
  assert.ok(headers.some(({ key }) => key === "X-Content-Type-Options"));
});

test("deployment endpoint preserves review-safe Vercel metadata", async () => {
  const originalEnv = {
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_REF: process.env.VERCEL_GIT_COMMIT_REF,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    VERCEL_GIT_REPO_OWNER: process.env.VERCEL_GIT_REPO_OWNER,
    VERCEL_GIT_REPO_SLUG: process.env.VERCEL_GIT_REPO_SLUG,
  };

  Object.assign(process.env, {
    VERCEL_ENV: "preview",
    VERCEL_GIT_COMMIT_REF: "codex/add-deployment-status",
    VERCEL_GIT_COMMIT_SHA: "1234567890abcdef",
    VERCEL_GIT_REPO_OWNER: "Finna-Inc",
    VERCEL_GIT_REPO_SLUG: "finna-codex-vercel-demo",
  });

  const response = getDeployment();
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(body, {
    environment: "preview",
    branch: "codex/add-deployment-status",
    commit: "1234567",
    repository: "Finna-Inc/finna-codex-vercel-demo",
  });

  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
});

test("health endpoint preserves its public response shape", async () => {
  const response = getHealth();
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.ok, true);
  assert.equal(body.service, "finna-codex-vercel-demo");
  assert.match(body.timestamp, /^\d{4}-\d{2}-\d{2}T/);
});
