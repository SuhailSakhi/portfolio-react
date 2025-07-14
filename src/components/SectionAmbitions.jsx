// components/SectionAmbitions.jsx
import React from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function SectionAmbitions() {
    return (
        <section className="bg-[#f4f1eb] py-28 px-6">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-[#1D130C]">
                        What I Bring to the Table
                    </h2>
                </FadeInWhenVisible>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Developer Card */}
                <FadeInWhenVisible direction="up">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#1D130C] text-[#f4f1eb] p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-bold mb-4">💻 Creative Developer</h3>
                        <p className="text-[#d9c6b7]">
                            I love building user interfaces with elegance and logic. My tools include React, Tailwind, animations, and a strong understanding of accessibility and user experience.
                        </p>
                    </motion.div>
                </FadeInWhenVisible>

                {/* Personal Card */}
                <FadeInWhenVisible direction="up" delay={0.2}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        className="bg-[#1D130C] text-[#f4f1eb] p-8 rounded-2xl shadow-md hover:shadow-xl flex flex-col justify-between"
                    >
                        <h3 className="text-2xl font-bold mb-4">🌱 Beyond Code</h3>
                        <p className="text-[#d9c6b7]">
                            Outside of development, I’m drawn to design, psychology, and storytelling. I enjoy creating things that connect people, whether it's through apps, visuals or real-life interaction.
                        </p>
                    </motion.div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
