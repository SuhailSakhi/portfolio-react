import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MousePointer2, Lightbulb, Search } from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionSkillsCarousel({ skillsRef }) {
    const { t } = useTranslation();
    const skills = [
        {
            icon: Search,
            title: t('skills.researchTitle'),
            text: t('skills.researchText'),
            tags: ['User research', 'Gen Z', 'Interviews'],
        },
        {
            icon: Lightbulb,
            title: t('skills.entrepreneurshipTitle'),
            text: t('skills.entrepreneurshipText'),
            tags: ['Concept development', 'UX', 'Strategy'],
        },
        {
            icon: MousePointer2,
            title: t('skills.codingTitle'),
            text: t('skills.codingText'),
            tags: ['Prototyping', 'Interaction', 'User flows'],
        },
    ];

    return (
        <section ref={skillsRef} id="skills" className="content-section section-halo py-28 px-6">
            <div className="max-w-6xl mx-auto mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="section-title">{t('skills.title')}</h2>
                </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {skills.map(({ icon: Icon, title, text, tags }, index) => (
                    <FadeInWhenVisible key={title} direction="up" delay={index * 0.12}>
                        <motion.article whileHover={{ y: -8 }} className="glass-card skill-card h-full">
                            <Icon className="card-icon" size={28} />
                            <h3>{title}</h3>
                            <p>{text}</p>
                            <div className="skill-tags">
                                {tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                        </motion.article>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}
