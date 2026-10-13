import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3000);
const root = process.cwd();
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

createServer(async (request, response) => {
  if (request.url === "/api/health") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        ok: true,
        service: "finna-codex-vercel-demo",
        timestamp: new Date().toISOString(),
      }),
    );
    return;
  }

  if (request.url === "/api/deployment") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        environment: "local",
        branch: "working-tree",
        commit: "uncommitted",
        repository: "Finna-Inc/finna-codex-vercel-demo",
      }),
    );
    return;
  }

  const requestPath = request.url === "/" ? "/index.html" : request.url;
  const safePath = normalize(requestPath.split("?")[0]).replace(/^(\.\.(\/|\\|$))+/, "");
  const filePath = join(root, safePath);

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "content-type": contentTypes[extname(filePath)] || "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, () => {
  console.log(`Finna Codex demo is running at http://localhost:${port}`);
});
