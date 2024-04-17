import React, { useState, useEffect, useRef } from 'react';
import './tailwind.css';

function App() {
    const [trail, setTrail] = useState([]);
    const [mouseStopped, setMouseStopped] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const trailLength = 8;
            const newTrail = [{ x: e.clientX, y: e.clientY }];
            setTrail((prevTrail) => {
                return [...prevTrail.slice(-trailLength), ...newTrail];
            });
            setMouseStopped(false); // Reset de timer wanneer de muis beweegt
        };

        document.addEventListener('mousemove', handleMouseMove);

        const timer = setTimeout(() => {
            setMouseStopped(true); // Zet mouseStopped op true nadat de muis stopt met bewegen
        }, 1000); // Tijd in milliseconden, hier na 1 seconde

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer); // Verwijder de timer wanneer het component wordt uitgerend
        };
    }, []);

    useEffect(() => {
        if (mouseStopped) {
            setTrail([]); // Leeg de trail als de muis stopt met bewegen
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

    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="bg-black text-white h-16 flex items-center fixed w-full top-0 z-50">
                <div>
                    <img
                        className="h-12" src="/img/logo.png" alt="logo"
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

            {/* Naam Section met Animatie */}
            <section id="home" ref={homeRef} className="bg-black text-white py-40 relative mt-16 h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-7xl font-bold flex items-center justify-center">
                            Welcome <img className="w-12 h-auto ml-2" src="/img/wave.png" alt="wave" />
                        </h1>
                        <h2 className="text-4xl font-bold">I am  <span className="text-blue-500">Suhail Sakhizadh</span></h2>
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

            {/* Over mij Section */}
            <section id="about" ref={aboutRef} className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex items-center">
                    <div className="w-1/2">
                        <img className="w-80 h-80 object-cover rounded-full" src="/img/pf.jpg" alt="Profielfoto" />
                    </div>
                    <div className="w-1/2 px-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                        <p className="text-lg text-blue-500">
                            "As a creative developer, I am more than just focused on code. My differentiating factor lies in my ability to come up with out-of-the-box ideas and to research and engage with the target audience in the development process. This enables me to create the most optimal product."                        </p>
                    </div>
                </div>
            </section>

            {/* skills section */}
            <section id="skills" ref={skillsRef} className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-20 flex items-center">
                    <div className="w-1/2 px-15">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
                        <p className="text-lg text-blue-500">
                            "I have some experience in various aspects of web development and design. My expertise encompasses a wide range of programming languages, frameworks, and design skills. Additionally, I possess problem-solving skills and have experience with project management such as Agile and Scrum. My passion for creativity enables me to devise innovative solutions and elevate my work to a higher level. I am currently seeking a position at a company where I can continue to learn and grow professionally."
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img className="w-64 h-64 aspect-square profielfoto" src="/img/memoji2.png" alt="Profielfoto" />
                    </div>
                </div>
                <br/>
                <div className="w-1/2 flex justify-center items-center skill-icons-container">
                    <p className="text-lg text-blue-500">
                        "I have worked with the following technologies:"
                    </p>
                </div>
                <br/>
                <div className="max-w-7xl mx-auto px-20 flex items-center overflow-hidden"> {/* Voeg overflow-hidden toe aan deze div */}
                    <div id="carousel" class="carousel">
                        <img src="img/logo-zwart.png" alt="HTML" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="CSS" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="JavaScript" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="React" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="PHP" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="Laravel" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="MongoDB" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="Figma" class="w-10 h-10 mx-2 skill-icon" />
                        <img src="img/logo-zwart.png" alt="Figma" className="w-10 h-10 mx-2 skill-icon"/>

                    </div>
                </div>
            </section>


            {/* Projecten Section */}
            <section id="projects" ref={projectsRef} className="bg-gray-100 py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My favorite projects</h2>
                    <div className="flex flex-wrap justify-center">
                        {/* Projectkaart 1 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                            <img className="w-full" src="/img/project1.jpg" alt="Project 1" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Project 1</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                            </div>
                        </div>

                        {/* Projectkaart 2 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                            <img className="w-full" src="/img/project2.jpg" alt="Project 2" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Project 2</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                            </div>
                        </div>
                        {/* Projectkaart 3 */}
                        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                            <img className="w-full" src="/img/project3.jpg" alt="Project 3" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Project 3</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                        <a href="https://www.youtube.com/watch?v=uxpDa-c-4Mc" className="mx-4">
                            <img src="img/logo-zwart.png" alt="logo" className="w-10 h-12" />
                        </a>
                        {/*<a href="/resume.pdf" download="resume.pdf" className="mx-4">*/}
                        {/*    <p className="text-3xl font-bold text-gray-800 mb-8">CV</p>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
