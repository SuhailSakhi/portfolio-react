import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAmbitions() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f4f1eb] py-28 px-6">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-[#1D130C]">
                        {t('ambitions.title')}
                    </h2>
                </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Developer Card */}
                <FadeInWhenVisible direction="up">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#1D130C] text-[#f4f1eb] p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-4 h-full"
                    >
                        <h3 className="text-2xl font-bold mb-4">💻 {t('ambitions.developerTitle')}</h3>
                        <p className="text-[#d9c6b7]">
                            {t('ambitions.developerText')}
                        </p>
                    </motion.div>
                </FadeInWhenVisible>

                {/* Personal Card */}
                <FadeInWhenVisible direction="up" delay={0.2}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#1D130C] text-[#f4f1eb] p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col gap-4 h-full"
                    >
                        <h3 className="text-2xl font-bold mb-4">🌱 {t('ambitions.beyondTitle')}</h3>
                        <p className="text-[#d9c6b7]">
                            {t('ambitions.beyondText')}
                        </p>
                    </motion.div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
