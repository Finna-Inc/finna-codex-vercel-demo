document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 5, 4) * 70}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const deploymentCard = document.querySelector("[data-deployment-card]");

function setDeploymentText(selector, value) {
  deploymentCard.querySelector(selector).textContent = value;
}

async function loadDeployment() {
  try {
    const response = await fetch("/api/deployment", {
      headers: { accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Deployment endpoint returned ${response.status}`);
    }

    const deployment = await response.json();
    const isProduction = deployment.environment === "production";
    const isPreview = deployment.environment === "preview";

    setDeploymentText(
      "[data-deployment-state]",
      isProduction ? "Production is live" : isPreview ? "Preview is live" : "Local preview",
    );
    setDeploymentText("[data-deployment-environment]", deployment.environment);
    setDeploymentText("[data-deployment-branch]", deployment.branch);
    setDeploymentText("[data-deployment-commit]", deployment.commit);
    setDeploymentText("[data-deployment-repository]", deployment.repository);
    setDeploymentText(
      "[data-deployment-note]",
      isProduction
        ? "This deployment came from the reviewed production branch."
        : isPreview
          ? "This deployment is isolated from production and ready for review."
          : "Local metadata confirms the same interface used by Vercel previews.",
    );
  } catch (error) {
    deploymentCard.classList.add("is-error");
    setDeploymentText("[data-deployment-state]", "Metadata unavailable");
    setDeploymentText("[data-deployment-note]", "The page is healthy, but deployment metadata could not be loaded.");
    console.error(error);
  }
}

loadDeployment();
