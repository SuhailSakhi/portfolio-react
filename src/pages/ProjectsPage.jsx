import React, { useRef } from 'react';
import Navbar from '../components/Navbar';

export default function ProjectsPage() {
    const dummyRef = useRef(null);

    return (
        <div className="min-h-screen bg-[#fdfaf6] text-[#1D130C]">
            <Navbar
                scrollToSection={() => {}}
                refs={{
                    homeRef: dummyRef,
                    aboutRef: dummyRef,
                    skillsRef: dummyRef,
                    projectsRef: dummyRef,
                    contactRef: dummyRef
                }}
            />

            <div className="max-w-6xl mx-auto py-28 px-6 text-center">
                <h1 className="text-5xl font-bold mb-8">My Projects</h1>
                <p className="text-lg text-gray-700">
Work in progress                </p>
            </div>
        </div>
    );
}
