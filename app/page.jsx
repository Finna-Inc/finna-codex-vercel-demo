import DeploymentCard from "../components/deployment-card";
import PageEffects from "../components/page-effects";

const workflow = [
  {
    number: "01",
    icon: "✦",
    title: "Prompt Codex",
    copy: "Start with intent, repository context, and a clear definition of done.",
    status: "Task opened",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Build + verify",
    copy: "Codex edits the Next.js app and runs the same checks as the team.",
    status: "Checks pass",
  },
  {
    number: "03",
    icon: "⑂",
    title: "Commit the change",
    copy: "A focused branch and readable commit keep the work inspectable.",
    status: "Branch ready",
  },
  {
    number: "04",
    icon: "↗",
    title: "Open the PR",
    copy: "Review the diff, CI result, and responsive Vercel preview together.",
    status: "Preview live",
  },
  {
    number: "05",
    icon: "●",
    title: "Merge to ship",
    copy: "Merge to main; Vercel deploys the exact code that passed review.",
    status: "Production",
    final: true,
  },
];

const principles = [
  ["01", "Human-readable", "Every change has a task, branch, commit, and pull request."],
  ["02", "Preview-first", "Stakeholders test the real responsive experience before production."],
  ["03", "Easy to reverse", "Git history and Vercel deployments make rollback a routine operation."],
];

export default function Home() {
  return (
    <div className="page-shell">
      <PageEffects />

      <header className="site-header">
        <a className="brand focus-ring" href="#top" aria-label="Finna Codex demo home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>finna<span className="brand-divider">/</span>labs</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className="header-link focus-ring" href="#workflow">
            View the workflow <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow reveal">Next.js delivery loop · 001</div>
          <h1 id="hero-title" className="reveal">
            I did this!
          </h1>
          <div className="hero-footer reveal">
            <p>
              A responsive React demo of how Finna can use OpenAI Codex to write code,
              commit a focused change, open a pull request, and let Vercel carry it to production.
            </p>
            <a className="primary-link focus-ring" href="#workflow">
              Follow the change
              <span className="primary-link-icon" aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-core">⌁</div>
          </div>
        </section>

        <section className="workflow" id="workflow" aria-labelledby="workflow-title">
          <div className="section-heading reveal">
            <p className="section-kicker">The path to production</p>
            <h2 id="workflow-title">One change. Five visible checkpoints.</h2>
          </div>

          <ol className="workflow-grid">
            {workflow.map((step) => (
              <li
                className={`workflow-card reveal${step.final ? " workflow-card-final" : ""}`}
                key={step.number}
              >
                <div className="card-number">{step.number}</div>
                <div className="card-icon" aria-hidden="true">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className={`card-status${step.final ? " card-status-live" : ""}`}>
                  {step.status}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="deployment" aria-labelledby="deployment-title">
          <div className="deployment-intro reveal">
            <p className="section-kicker">Deployment signal</p>
            <h2 id="deployment-title">Know exactly what you are testing.</h2>
            <p>
              This React component reads Vercel deployment metadata. A pull request shows its
              feature branch, production shows <code>main</code>, and local development has a safe fallback.
            </p>
          </div>
          <DeploymentCard />
        </section>

        <section className="principles" aria-labelledby="principles-title">
          <div className="principles-copy reveal">
            <p className="section-kicker">Built for trust</p>
            <h2 id="principles-title">Fast does not have to mean invisible.</h2>
          </div>
          <div className="principles-list">
            {principles.map(([number, title, copy]) => (
              <article className="principle reveal" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Finna engineering demo</p>
        <p>Codex → GitHub → Vercel</p>
        <p>© {new Date().getFullYear()} Finna</p>
      </footer>
    </div>
  );
}
