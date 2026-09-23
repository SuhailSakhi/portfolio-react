import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import './i18n';

import Navbar from './components/Navbar';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionAmbitions from './components/SectionAmbitions';
import SectionSkillsCarousel from './components/SectionSkillsCarousel';
import SectionContact from './components/SectionContact';
import ProjectsPage from './pages/ProjectsPage';
import ProjectCasePage from './pages/ProjectCasePage';
import RouteScroll from './components/RouteScroll';

function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (ref, event) => {
        event.preventDefault();
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const toggleTheme = () => {
        const updateTheme = () => {
            setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
        };

        if (document.startViewTransition) {
            document.startViewTransition(updateTheme);
        } else {
            updateTheme();
        }
    };

    return (
        <Router>
            <RouteScroll />
            <Routes>
                <Route path="/" element={
                    <div className="app-shell">
                        <Navbar
                            scrollToSection={scrollToSection}
                            refs={{ homeRef, aboutRef, skillsRef, contactRef }}
                            theme={theme}
                            toggleTheme={toggleTheme}
                        />
                        <SectionHome
                            homeRef={homeRef}
                            isSmallScreen={isSmallScreen}
                        />
                        <SectionAbout aboutRef={aboutRef} />
                        <SectionAmbitions />
                        <SectionSkillsCarousel skillsRef={skillsRef} />
                        <SectionContact contactRef={contactRef} />
                    </div>
                } />
                <Route
                    path="/projects"
                    element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />}
                />
                <Route path="/projects/:slug" element={<ProjectCasePage theme={theme} toggleTheme={toggleTheme} />} />
            </Routes>
        </Router>
    );
}

export default App;
