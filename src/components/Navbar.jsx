import React from 'react';

const navItems = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#skills", label: "Skills"},
    {href: "#contact", label: "Contact"},
];

function Navbar() {
    return ( 
        <header className= " fixed top-0 left-0 right-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
            <nav className= "max-w-5x1 mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#top" className = "font-semibold tracking-tight text-lg">
                    Olamide<span className="text-indigo-400">.dev</span>
                </a>
                <ul className="hidden sm:flex gap-6 text-sm">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a 
                                href={item.href} 
                                className="text-slate-300 hover:text-indigo-400 transition-colors"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a 
                    href="#contact"
                    className="hidden sm; inline-flex text-xs px-3 py-1.5 rounded-full bg-indigo-500 hover :bg-indigo-400 transition-colors"
                >
                    Hire Me
                </a>
            </nav>
        </header>
     );
}

export default Navbar;