import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "styles.css",
  "app.js",
  "api/deployment.js",
  "api/health.js",
  "vercel.json",
  "AGENTS.md",
  ".github/workflows/ci.yml",
];

await Promise.all(requiredFiles.map((file) => access(file)));

const html = await readFile("index.html", "utf8");
const requiredText = [
  "Finna",
  "Codex",
  "GitHub",
  "Vercel",
  "id=\"workflow\"",
  "data-deployment-card",
];

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`index.html is missing required text: ${text}`);
  }
}

console.log(`Validated ${requiredFiles.length} required files and homepage content.`);
