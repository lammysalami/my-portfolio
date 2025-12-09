import React from "react";

const projects = [
  {
    title: "Real Estate Listing App",
    tech: "React • TypeScript • Tailwind",
    description:
      "Responsive property listing interface with cards, filters, and search, built to practice modern UI layouts.",
    live: "https://alx-listing-app-setup.vercel.app",
    repo: "https://github.com/lammysalami/alx-listing-app-00.git",
  },
  {
    title: "E-Commerce UI",
    tech: "React • JavaScript • CSS",
    description:
      "Mini store front-end with product grid, cart interactions, and reusable components.",
    live: "https://alx-listing-app-setup.vercel.app",
    repo: "https://github.com/lammysalami/alx-listing-app-setup.git",
  },
  {
    title: "Portfolio Website",
    tech: "React • Tailwind",
    description:
      "This portfolio site — built as a single-page application and deployed with Vercel.",
    live: "https://quill-project-drab.vercel.app",
    repo: "https://github.com/lammysalami/quill-project.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Selected work
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group border border-slate-800 bg-slate-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-400/80 transition-colors"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold group-hover:text-indigo-300">
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-300/80">
                {project.tech}
              </p>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full border border-slate-700 hover:border-indigo-400 text-slate-200"
              >
                Live demo
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full text-slate-300 hover:text-indigo-300 underline-offset-4 hover:underline"
              >
                Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
