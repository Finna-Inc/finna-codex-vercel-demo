import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import deploymentHandler from "../api/deployment.js";

test("homepage explains the full delivery loop", async () => {
  const html = await readFile("index.html", "utf8");

  for (const step of [
    "Prompt Codex",
    "Build + verify",
    "Commit the change",
    "Open the PR",
    "Merge to ship",
  ]) {
    assert.match(html, new RegExp(step.replace("+", "\\+")));
  }
});

test("Vercel configuration keeps the health function on Node 22", async () => {
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  assert.equal(config.functions["api/*.js"].runtime, "nodejs22.x");
});

test("deployment endpoint exposes review-safe Vercel metadata", () => {
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

  let statusCode;
  let body;
  const response = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(payload) {
      body = payload;
    },
  };

  deploymentHandler({}, response);

  assert.equal(statusCode, 200);
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
