import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css';
import './i18n';

import Navbar from './components/Navbar';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionAmbitions from './components/SectionAmbitions';
import SectionSkillsCarousel from './components/SectionSkillsCarousel';
import SectionContact from './components/SectionContact';
import ImageModal from './components/ImageModal';
import ProjectsPage from './pages/ProjectsPage'; // Nieuw!

function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

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

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="bg-white">
                        <Navbar
                            scrollToSection={scrollToSection}
                            refs={{ homeRef, aboutRef, skillsRef, contactRef }}
                        />
                        <SectionHome
                            homeRef={homeRef}
                            aboutRef={aboutRef}
                            scrollToSection={scrollToSection}
                            isSmallScreen={isSmallScreen}
                        />
                        <SectionAbout aboutRef={aboutRef} />
                        <SectionAmbitions />
                        <SectionSkillsCarousel skillsRef={skillsRef} />
                        <SectionContact contactRef={contactRef} />
                        {isModalOpen && <ImageModal modalImage={modalImage} closeModal={closeModal} />}
                    </div>
                } />
                <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
