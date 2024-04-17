import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-20 flex items-center">
                <div className="w-1/2 px-15">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
                    <p className="text-lg text-blue-500">
                        "I have some experience in various aspects of web development and design. My expertise encompasses a wide range of programming languages, frameworks, and design skills. Additionally, I possess problem-solving skills and have experience with project management such as Agile and Scrum. My passion for creativity enables me to devise innovative solutions and elevate my work to a higher level. I am currently seeking a position at a company where I can continue to learn and grow professionally.
                    </p>
                </div>
                <div className="w-1/2">
                    <img className="w-64 h-64 aspect-square profielfoto" src="/img/memoji2.png" alt="Profielfoto" />
                </div>
            </div>
            <br />
            <div className="w-1/2 flex justify-center items-center skill-icons-container">
                <img src="img/logo-zwart.png" alt="HTML" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="CSS" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="JavaScript" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="React" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="PHP" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="Laravel" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="MongoDB" className="w-10 h-10 mx-2" />
                <img src="img/logo-zwart.png" alt="Figma" className="w-10 h-10 mx-2" />
                {/* Voeg hier andere iconen toe */}
            </div>
        </section>
    );
};

export default SkillsSection;
