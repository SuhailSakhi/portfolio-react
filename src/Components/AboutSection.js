import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 flex items-center">
                <div className="w-1/2">
                    <img className="w-80 h-80 object-cover rounded-full" src="/img/pf.jpg" alt="Profielfoto" />
                </div>
                <div className="w-1/2 px-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-lg text-blue-500">
                        "As a creative developer, I am more than just focused on code. My differentiating factor lies in my ability to come up with out-of-the-box ideas and to research and engage with the target audience in the development process. This enables me to create the most optimal product."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
