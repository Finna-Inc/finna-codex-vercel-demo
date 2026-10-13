import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

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
