import React from 'react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionContact({ contactRef }) {
    return (
        <section
            ref={contactRef}
            id="contact"
            className="bg-[#fdfaf6] py-24 px-6 sm:px-10 border-t border-black/10"
        >
            <div className="max-w-xl mx-auto text-center">
                <FadeInWhenVisible direction="up">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-[#1a1a1a] mb-4 tracking-tight">
                        Let's Connect
                    </h2>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2} direction="up">
                    <p className="text-[#3a2e27] text-lg mb-10 leading-relaxed">
                        Heb je een project, idee of gewoon een vraag? Stuur me gerust een bericht via LinkedIn of e-mail.
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4} direction="up">
                    <a
                        href="https://www.linkedin.com/in/suhail-s-b38b35271/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#3a2e27] hover:bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md mb-6"
                    >
                        💬 Stuur me een bericht op LinkedIn
                    </a>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.6} direction="up">
                    <p className="text-[#1a1a1a] text-md">
                        Of mail me op:<br />
                        <a
                            href="mailto:suhail_909@outlook.com"
                            className="text-[#5b3a29] underline hover:text-black transition"
                        >
                            suhail_909@outlook.com
                        </a>
                    </p>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
