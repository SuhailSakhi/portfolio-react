import React, { useState, useEffect, useRef } from 'react';
import '../src/tailwind.css';
import Navbar from './components/Navbar';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import SectionContact from './components/SectionContact';
import SectionAmbitions from './components/SectionAmbitions';
import SectionSkillsCarousel from './components/SectionSkillsCarousel';


function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        handleResize(); // Initial check
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
        <div className="bg-white">
            <Navbar
                scrollToSection={scrollToSection}
                refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
            />
            <SectionHome
                homeRef={homeRef}
                aboutRef={aboutRef}
                scrollToSection={scrollToSection}
                isSmallScreen={isSmallScreen}
            />
            <SectionAbout aboutRef={aboutRef} />
            <SectionAmbitions />
            <SectionSkillsCarousel />
            <SectionContact contactRef={contactRef} />
            {/*<Footer contactRef={contactRef} />*/}
            {isModalOpen && <ImageModal modalImage={modalImage} closeModal={closeModal} />}
        </div>
    );
}

export default App;
