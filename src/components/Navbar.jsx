import React from 'react';

export default function Navbar({ scrollToSection, refs }) {
    return (
        <nav className="bg-black text-white h-16 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex items-center justify-center gap-x-10 h-16">
                    <img
                        className="h-10 w-auto"
                        src="/img/memoji2.png"
                        alt="logo"
                        onClick={(e) => scrollToSection(refs.homeRef, e)}
                    />
                    <a href="#" onClick={(e) => scrollToSection(refs.aboutRef, e)}>About</a>
                    <a href="#" onClick={(e) => scrollToSection(refs.skillsRef, e)}>Skills</a>
                    <a href="#" onClick={(e) => scrollToSection(refs.projectsRef, e)}>Projects</a>
                    <a href="#" onClick={(e) => scrollToSection(refs.contactRef, e)}>Contact</a>
                </div>
            </div>
        </nav>
    );
}
