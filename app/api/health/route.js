export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({
    ok: true,
    service: "finna-codex-vercel-demo",
    timestamp: new Date().toISOString(),
  });
}
