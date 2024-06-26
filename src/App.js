import React, { useState, useEffect, useRef } from 'react';
import './tailwind.css';

function App() {
    const [trail, setTrail] = useState([]);
    const [mouseStopped, setMouseStopped] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isSmallScreen) {
            const handleMouseMove = (e) => {
                const trailLength = 8;
                const newTrail = [{ x: e.clientX, y: e.clientY }];
                setTrail((prevTrail) => {
                    return [...prevTrail.slice(-trailLength), ...newTrail];
                });
                setMouseStopped(false);
            };

            document.addEventListener('mousemove', handleMouseMove);

            const timer = setTimeout(() => {
                setMouseStopped(true);
            }, 1000);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                clearTimeout(timer);
            };
        } else {
            setTrail([]);
        }
    }, [isSmallScreen]);


    useEffect(() => {
        if (mouseStopped) {
            setTrail([]);
        }
    }, [mouseStopped]);

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref, event) => {
        event.preventDefault();
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
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


    const projects = [
        {
            name: 'Country Trivia (AI)',
            images: [
                '/img/country.png',
                '/img/country2.png',
            ]
        },
        {
            name: 'Studate',
            images: [
                '/img/Studate3.png',
                `/img/studate2.png`,
                '/img/studate4.png',
                '/img/studate5.png',

            ]
        },
        {
            name: 'Vedute',
            images: [
                '/img/poster.png',
                '/img/poster2.png',
                '/img/poster3.png',

            ]
        },
    ];
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? projects[currentProjectIndex].images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === projects[currentProjectIndex].images.length - 1 ? 0 : prevIndex + 1));
    };

    const selectProject = (index) => {
        setCurrentProjectIndex(index);
        setCurrentImageIndex(0); // Reset the image index when a new project is selected
    };

    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="bg-black text-white h-16 flex items-center fixed w-full top-0 z-50">
                <div>
                    <img
                        className="h-10 w-auto" src="/img/logo.png" alt="logo"
                        onClick={(e) => {
                            e.preventDefault(); // Voorkom standaardgedrag van de link
                            scrollToSection(homeRef, e); // Scroll naar de home-sectie
                        }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <a href="#" className="text-white mr-4" onClick={(e) => scrollToSection(homeRef, e)}>Home</a>
                            <a href="#" className="text-white mr-4" onClick={(e) => scrollToSection(aboutRef, e)}>About</a>
                            <a href="#" className="text-white mr-4" onClick={(e) => scrollToSection(skillsRef, e)}>Skills</a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-white mr-4" onClick={(e) => scrollToSection(projectsRef, e)}>Projects</a>
                            <a href="#" className="text-white mr-4" onClick={(e) => scrollToSection(contactRef, e)}>Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Name Section met Animatie */}
            <section id="home" ref={homeRef} className={`bg-black text-white py-20 sm:py-40 relative mt-16 sm:mt-0 h-screen ${isSmallScreen ? 'text-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-9xl font-bold flex items-center justify-center">
                            Welcome <img className="w-12 h-auto ml-2" src="/img/wave.png" alt="wave" />
                        </h1>
                        <h2 className="text-5xl font-bold">I am  <span className="text-blue-500">Suhail Sakhizadh</span></h2>
                        <p className="mt-4 text-xl font-medium">Student Creative Technologist</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={(e) => scrollToSection(aboutRef, e)}>
                            More about me
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none wave-cursor">
                    {trail.map((point, index) => (
                        <img
                            key={index}
                            className="absolute"
                            src="/img/wave.png"
                            alt="logo"
                            style={{
                                width: '15px',
                                left: point.x - 10,
                                top: point.y - 10,
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" ref={aboutRef} className="py-20 sm:py-60 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <div className="w-1/2">
                        <img className="w-80 h-80 object-cover rounded-full" src="/img/pf.jpg" alt="Profielfoto" />
                    </div>
                    <div className="w-1/2 px-6">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">About Me</h2>
                        <p className="text-lg text-blue-500">
                            "As a creative developer, I am more than just focused on code. My differentiating factor lies in my ability to come up with out-of-the-box ideas and to research and engage with the target audience in the development process. This enables me to create the most optimal product."
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" ref={skillsRef} className="py-20 px-4 sm:px-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-20 flex flex-col items-center sm:flex-row">
                    <div className="w-full sm:w-1/2 px-15  text-center mb-8 sm:mb-0">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">My Skills</h2>
                        <p className="text-lg text-blue-500">
                            "I have some experience in various aspects of web development and design. Additionally, I possess problem-solving skills and have experience with project management such as Agile and Scrum. I am currently seeking a position at a company where I can continue to learn and grow professionally."
                        </p>
                        <br />
                        <div className="w-full flex justify-center items-center">
                            <p className="text-lg text-blue-500">
                                "I have worked with the following technologies:"
                            </p>
                        </div>
                    </div>
                    {!isSmallScreen && (
                        <div className="w-1/2">
                            <img className="w-64 h-64 aspect-square profielfoto" src="/img/memoji2.png" alt="Profielfoto" />
                        </div>
                    )}
                </div>
                <div className="max-w-7xl mx-auto px-20 flex items-center overflow-hidden">
                    <div id="carousel" className="carousel">
                        <img src="img/html5-logo-31813.png" alt="HTML" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/html5-logo-31821.png" alt="CSS" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/javascript-39410.png" alt="JavaScript" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo192.png" alt="React" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/php-logo.png" alt="PHP" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/laravel.svg" alt="Laravel" className="w-12 h-10 mx-2 skill-icon" />
                        <img src="img/mongodb-logo.png" alt="MongoDB" className="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/mysql-logo.png" alt="MySQL" className="w-10 h-10 mx-2 skill-icon" />
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" ref={projectsRef} className="bg-gray-100 py-30 sm:py-40">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">My favorite projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Project 1 */}
                        <div className="rounded overflow-hidden shadow-lg m-4 card">
                            <div className="relative fixed-height">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/3zsaGY8SLe8"  // Vervang de src met je YouTube-video link
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="hover:cursor-pointer"
                                ></iframe>
                            </div>
                            <div className="px-6 py-4 flex flex-col justify-between">
                                <div>
                                    <div className="font-bold text-xl mb-2">{projects[currentProjectIndex].name}</div>
                                    <p className="text-gray-700 text-base">A guessing game that picks a random Country and the flag from the Country api and then gives a fact in a prompt to the OpenAI Azure API. You can change the personality of the AI to generate different facts. The game will be live soon.</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">#AI</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">#Game</button>
                                </div>
                            </div>
                        </div>


                        {/* Project 2 */}
                        <div className="rounded overflow-hidden shadow-lg m-4 card">
                            <div className="carousel3 relative">
                                <img src="img/Studate-home.png" alt="Project 2" className="object-cover w-full fixed-height hover:cursor-pointer" onClick={() => openModal("img/Studate-home.png")} />
                            </div>
                            <div className="px-6 py-4 flex flex-col justify-between">
                                <div>
                                    <div className="font-bold text-xl mb-2">Studate</div>
                                    <p className="text-gray-700 text-base">A Laravel and MySQL-based project, crafted as a backend-oriented dating platform for students. Users could create profiles and like others'. You can also filter based on age or gender.</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">#MVC Back end</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">#laravel</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full">#MySQL</button>
                                </div>
                            </div>
                        </div>
                        {/* Project 3 */}
                        <div className="rounded overflow-hidden shadow-lg m-4 card">
                            <div className="carousel4 relative fixed-height">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/rk4RZ-d_pjg"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="hover:cursor-pointer"
                                ></iframe>
                            </div>
                            <div className="px-6 py-4 flex flex-col justify-between">
                                <div>
                                    <div className="font-bold text-xl mb-2">Field Finder Rotterdam</div>
                                    <p className="text-gray-700 text-base">
                                        Football Field Finder is a mobile application that helps you find the nearest football field in Rotterdam. It is built using React Native and Expo-go.
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">#React Native</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">#Mobile</button>
                                </div>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="rounded overflow-hidden shadow-lg m-4 card">
                            <img src="/img/Weetjegezond.png" alt="Project 4" className="object-cover w-full fixed-height hover:cursor-pointer" onClick={() => openModal("/img/Weetjegezond.png")} />
                            <div className="px-6 py-4 flex flex-col justify-between">
                                <div>
                                    <div className="font-bold text-xl mb-2">Weetjegezond</div>
                                    <p className="text-gray-700 text-base">"Weetjegezond is an upcoming smartphone app aimed at helping people lead healthier lives through gamification. Similar to Duolingo, users will tackle daily challenges designed to promote healthier habits. Please note that the app is still in development."</p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">#Gamification</button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">#Health</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center" onClick={closeModal}>
                    <div className="max-w-lg w-full p-4 bg-white rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <img className="w-full" src={modalImage} alt="Modal" style={{ maxWidth: '100%', height: 'auto', maxHeight: '100vh' }} />
                        <button className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}


            {/* Footer */}
            <footer id="contact" ref={contactRef} className="bg-gray-150 text-gray-700 py-8">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-4">Contact</h2>
                    <div className="flex justify-center">
                        <a href="https://www.linkedin.com/in/suhail-s-b38b35271/" className="mx-4">
                            <img src="img/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                        </a>
                        <a href="https://github.com/SuhailSakhi" className="mx-4">
                            <img src="img/github-mark.png" alt="GitHub" className="w-12 h-12" />
                        </a>
                        <a href="mailto:suhail_909@outlook.com" className="mx-4">
                            <img src="img/email.png" alt="Email" className="w-12 h-12" />
                        </a>
                        {/*<a href="https://www.youtube.com/watch?v=uxpDa-c-4Mc" className="mx-4">*/}
                        {/*    <img src="img/logo-zwart.png" alt="logo" className="w-10 h-12" />*/}
                        {/*</a>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
