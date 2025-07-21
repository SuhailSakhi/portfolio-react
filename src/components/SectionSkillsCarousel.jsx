// components/SectionSkills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionSkillsCarousel({ skillsRef }) {
    const { t } = useTranslation();

    return (
        <section ref={skillsRef} id="skills" className="bg-[#1D130C] py-28 px-6 text-white">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="text-4xl sm:text-5xl font-semibold">{t('skills.title')}</h2>
                </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <FadeInWhenVisible direction="up">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#fdfaf6] text-[#1D130C] p-8 rounded-2xl shadow-md hover:shadow-xl h-full flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-bold mb-4">🧠 {t('skills.codingTitle')}</h3>
                        <p className="text-[#4e3c2d]">{t('skills.codingText')}</p>
                    </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible direction="up" delay={0.2}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#fdfaf6] text-[#1D130C] p-8 rounded-2xl shadow-md hover:shadow-xl h-full flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-bold mb-4">🚀 {t('skills.entrepreneurshipTitle')}</h3>
                        <p className="text-[#4e3c2d]">{t('skills.entrepreneurshipText')}</p>
                    </motion.div>
                </FadeInWhenVisible>

                <FadeInWhenVisible direction="up" delay={0.4}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#fdfaf6] text-[#1D130C] p-8 rounded-2xl shadow-md hover:shadow-xl h-full flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-bold mb-4">🌍 {t('skills.researchTitle')}</h3>
                        <p className="text-[#4e3c2d]">{t('skills.researchText')}</p>
                    </motion.div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
