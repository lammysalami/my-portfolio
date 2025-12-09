import React from "react";

const skills = {
  "Languages & Markup": ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["React", "Next.js", "Tailwind CSS"],
  "Tools & Others": ["Git", "GitHub", "Vercel", "Responsive Design", "REST APIs"],
};

function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-slate-800 bg-slate-900/40 rounded-xl p-4 space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-[0.2em]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-100 border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
