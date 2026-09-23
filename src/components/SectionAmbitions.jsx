import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Search, Users } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAmbitions() {
    const { t } = useTranslation();
    const cards = [
        { icon: Lightbulb, number: '01', title: t('ambitions.developerTitle'), text: t('ambitions.developerText') },
        { icon: Users, number: '02', title: t('ambitions.beyondTitle'), text: t('ambitions.beyondText') },
        { icon: Search, number: '03', title: t('ambitions.researchTitle'), text: t('ambitions.researchText') },
    ];

    return (
        <section className="content-section section-deep py-28 px-6">
            <div className="max-w-6xl mx-auto mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="section-title">{t('ambitions.title')}</h2>
                </FadeInWhenVisible>
            </div>

            <div className="ambition-list max-w-6xl mx-auto">
                {cards.map(({ icon: Icon, number, title, text }, index) => (
                    <FadeInWhenVisible key={number} direction="up" delay={index * 0.12}>
                        <motion.article whileHover={{ x: 8 }} className="ambition-row">
                            <span className="ambition-index">{number}</span>
                            <div className="ambition-heading">
                                <Icon className="card-icon" size={27} />
                                <h3>{title}</h3>
                            </div>
                            <p>{text}</p>
                        </motion.article>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}
