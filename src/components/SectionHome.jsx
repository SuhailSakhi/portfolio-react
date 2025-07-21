import React from 'react';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionHome({ homeRef, scrollToSection, aboutRef, isSmallScreen }) {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            ref={homeRef}
            className={`relative h-screen mt-16 sm:mt-0 flex items-center justify-center overflow-hidden bg-[#fdfaf6]`}
        >
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <FadeInWhenVisible direction="up">
                    <h1 className="text-5xl text-[#000500] sm:text-7xl md:text-9xl font-bold flex items-center justify-center">
                        {t('home.welcome')}
                        <img className="w-10 sm:w-12 h-auto ml-2" src="/img/wave.png" alt="wave" />
                    </h1>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2} direction="up">
                    <h2 className="text-3xl text-[#1e1e1e] sm:text-5xl font-bold mt-4">
                        {t('home.intro.pre')} <span className="text-[#362417]">{t('home.intro.name')}</span>
                    </h2>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.4} direction="up">
                    <p className="mt-6 text-lg sm:text-xl font-medium text-[#1e1e1e]">
                        {t('home.subtitle')}
                    </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.6} direction="up">
                    <button
                        className="mt-6 inline-block bg-[#362417] hover:bg-[#1D130C] text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md"
                        onClick={(e) => scrollToSection(aboutRef, e)}
                    >
                        {t('home.button')}
                    </button>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
