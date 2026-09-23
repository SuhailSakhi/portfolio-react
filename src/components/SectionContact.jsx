import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Mail } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionContact({ contactRef }) {
    const { t } = useTranslation();

    return (
        <section ref={contactRef} id="contact" className="content-section section-deep py-28 px-6">
            <div className="max-w-6xl mx-auto">
                <FadeInWhenVisible direction="up">
                    <div className="contact-panel glass-card">
                        <div>
                            <h2 className="section-title">{t('contact.title')}</h2>
                            <p className="section-copy mt-6 max-w-xl">{t('contact.text')}</p>
                        </div>
                        <div className="contact-actions">
                            <a href="https://www.linkedin.com/in/suhail-s-b38b35271/" target="_blank" rel="noopener noreferrer" className="primary-button">
                                LinkedIn <ArrowUpRight size={19} />
                            </a>
                            <a
                                href="mailto:suhail_909@outlook.com"
                                className="secondary-button"
                            >
                                <Mail size={18} /> {t('contact.email')}
                            </a>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
