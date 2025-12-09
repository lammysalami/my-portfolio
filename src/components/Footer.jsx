import React from "react";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Olamide Salami. All rights reserved.</p>
        <p>Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
