import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAbout({ aboutRef }) {
    return (
        <section id="about" ref={aboutRef} className="py-24 px-6 bg-[#1D130C] text-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
                <FadeInWhenVisible direction="up">
                    <img
                        className="w-72 h-72 object-cover rounded-full shadow-lg transition-transform transform hover:scale-105"
                        src="/img/pf.jpg"
                        alt="Profielfoto"
                    />
                </FadeInWhenVisible>
                <div className="text-center lg:text-left max-w-xl">
                    <FadeInWhenVisible delay={0.2} direction="up">
                        <h2 className="text-4xl font-bold text-[#ffff] mb-6">Who am I?</h2>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.4} direction="up">
                        <p className="text-lg text-[#5e6e7d ] leading-relaxed">
                            "As a creative developer, I am more than just focused on code. My differentiating factor lies in
                            my ability to come up with out-of-the-box ideas and to research and engage with the
                            target audience in the development process. This enables me to create the most optimal
                            product."
                        </p>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>

    );
}
