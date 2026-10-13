import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "app/layout.jsx",
  "app/page.jsx",
  "app/globals.css",
  "app/api/deployment/route.js",
  "app/api/health/route.js",
  "components/deployment-card.jsx",
  "vercel.json",
  "AGENTS.md",
  ".github/workflows/ci.yml",
];

await Promise.all(requiredFiles.map((file) => access(file)));

const page = await readFile("app/page.jsx", "utf8");
const requiredText = [
  "Finna",
  "Codex",
  "GitHub",
  "Vercel",
  "id=\"workflow\"",
  "<DeploymentCard />",
];

for (const text of requiredText) {
  if (!page.includes(text)) {
    throw new Error(`app/page.jsx is missing required text: ${text}`);
  }
}

console.log(`Validated ${requiredFiles.length} required files and Next.js homepage content.`);
