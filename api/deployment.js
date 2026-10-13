export default function handler(_request, response) {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;

  response.status(200).json({
    environment: process.env.VERCEL_ENV || "local",
    branch: process.env.VERCEL_GIT_COMMIT_REF || "working-tree",
    commit: sha ? sha.slice(0, 7) : "uncommitted",
    repository: process.env.VERCEL_GIT_REPO_SLUG
      ? `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`
      : "Finna-Inc/finna-codex-vercel-demo",
  });
}
