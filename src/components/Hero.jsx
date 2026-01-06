import React from 'react';

function Hero() {
    return ( 
        <section id="top" className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-indigo-300/80">
                Front-End Developer
                </p>
                <h1 className="text-3x1 sm:text-4x1 md: text-5x1 font-bold tracking-tight">
                    Hey, I'm Olamide Salami. <br />
                    I build clean, responsive{""}
                    <span className="text-indigo-400">
                        web interfaces
                    </span>
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-x1">
                    I'm a front-end developer focused on creating fast, beautiful, and user-friendly web experiences using React, Typescript, and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-3">
                    <a 
                        href="#projects"
                        className="px-4 py-2 rounded-full border-slate-600 hover :border-indigo-400 text-sm font-medium text-slate-200 transition-colors"
                    >
                        View My Projects
                    </a>
                    <a 
                        href="#contact"
                        className="px-4 py-2 rounded-full border border-slate-600 hover:border-indigo-400 text-sm font-medium text-slate-200 transition-colors"
                    >
                        Let's work together
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
                <div className="relative">
                    <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-3x1 bg-gradient-to-tr from-indigo-500 via-purple to-sky-500 blur-2x1 opacity-60 absolute inset-0 -z-10" />
                    <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-3xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center gap-2 shadow-xl">
                       <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                         Stack
                       </span>
                        <p className="text-sm font-medium text-slate-100 text-center">
                            React • TypeScript • Tailwind • Next.js
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Hero;
