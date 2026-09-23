import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Layers3, Users } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAbout({ aboutRef }) {
    const { t } = useTranslation();

    return (
        <section id="about" ref={aboutRef} className="content-section section-halo py-28 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
                <FadeInWhenVisible direction="up">
                    <div className="portrait-frame">
                        <img src="/img/pf.jpg" alt={t('about.photoAlt')} />
                    </div>
                </FadeInWhenVisible>
                <div>
                    <FadeInWhenVisible delay={0.2} direction="up">
                        <h2 className="section-title">{t('about.title')}</h2>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.4} direction="up">
                        <div className="section-copy mt-7 space-y-4">
                            <p>{t('about.description')}</p>
                            <p>{t('about.descriptionExtra')}</p>
                            <div className="genz-statement">
                                <h3>{t('about.specialtyTitle')}</h3>
                                <p>{t('about.specialtyText')}</p>
                            </div>
                        </div>
                        <div className="about-pillars mt-9">
                            <div><Compass /><span>{t('about.pillars.strategy')}</span></div>
                            <div><Layers3 /><span>{t('about.pillars.build')}</span></div>
                            <div><Users /><span>{t('about.pillars.people')}</span></div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}
