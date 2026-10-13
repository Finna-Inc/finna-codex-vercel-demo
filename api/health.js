export default function handler(_request, response) {
  response.status(200).json({
    ok: true,
    service: "finna-codex-vercel-demo",
    timestamp: new Date().toISOString(),
  });
}
