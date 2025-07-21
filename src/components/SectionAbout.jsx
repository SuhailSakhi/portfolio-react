import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAbout({ aboutRef }) {
    const { t } = useTranslation();

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
                        <h2 className="text-4xl font-bold text-white mb-6">{t('about.title')}</h2>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.4} direction="up">
                        <p className="text-lg text-[#d9c6b7] leading-relaxed">
                            {t('about.description')}
                        </p>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}
