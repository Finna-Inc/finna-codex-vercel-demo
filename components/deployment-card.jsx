"use client";

import { useCallback, useEffect, useState } from "react";

const initialDeployment = {
  environment: "—",
  branch: "—",
  commit: "—",
  repository: "—",
};

function deploymentMessage(deployment) {
  if (deployment.environment === "production") {
    return ["Production is live", "This deployment came from the reviewed production branch."];
  }
  if (deployment.environment === "preview") {
    return ["Preview is live", "This deployment is isolated from production and ready for review."];
  }
  return ["Local preview", "Local metadata uses the same response contract as Vercel previews."];
}

export default function DeploymentCard() {
  const [deployment, setDeployment] = useState(initialDeployment);
  const [status, setStatus] = useState("loading");

  const loadDeployment = useCallback(async () => {
    setStatus("loading");

    try {
      const response = await fetch("/api/deployment", {
        headers: { accept: "application/json" },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Deployment endpoint returned ${response.status}`);
      }

      setDeployment(await response.json());
      setStatus("ready");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadDeployment();
  }, [loadDeployment]);

  const [headline, note] = status === "ready"
    ? deploymentMessage(deployment)
    : status === "error"
      ? ["Metadata unavailable", "The page is healthy, but deployment metadata could not be loaded."]
      : ["Reading environment…", "Waiting for deployment metadata."];

  return (
    <div className={`deployment-card reveal${status === "error" ? " is-error" : ""}`} aria-live="polite">
      <div className="deployment-card-topline">
        <span className="pulse" aria-hidden="true" />
        <span>{headline}</span>
      </div>
      <dl className="deployment-details">
        {Object.entries(deployment).map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd title={value}>{value}</dd>
          </div>
        ))}
      </dl>
      <div className="deployment-note-row">
        <p className="deployment-note">{note}</p>
        {status === "error" ? (
          <button className="retry-button focus-ring" type="button" onClick={loadDeployment}>
            Retry
          </button>
        ) : null}
      </div>
    </div>
  );
}
