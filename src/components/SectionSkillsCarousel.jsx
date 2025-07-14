import React from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

const cards = [
    {
        title: '💻 Creative Developer',
        text: 'I build smooth UIs with React, Tailwind, and animations. Focused on clarity, usability, and flow.',
    },
    {
        title: '🌱 Beyond Code',
        text: 'Fascinated by design, psychology, and meaningful digital experiences.',
    },
    {
        title: '🎨 Design Thinking',
        text: 'From wireframes to mockups, I use Figma and Framer to design smart user journeys.',
    },
];

export default function SectionSkillsCarousel() {
    return (
        <section className="bg-[#f4f1eb] py-28 px-6">
            <div className="max-w-6xl mx-auto text-center mb-14">
                <FadeInWhenVisible direction="up">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-[#1D130C]">
                        What I Bring to the Table
                    </h2>
                </FadeInWhenVisible>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
                {cards.map((card, index) => (
                    <FadeInWhenVisible key={index} delay={index * 0.2} direction="up">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 250 }}
                            className="w-full h-[340px] bg-[#1D130C] text-[#f4f1eb] p-6 rounded-2xl shadow-md hover:shadow-xl flex flex-col justify-between"
                        >
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className="text-[#d9c6b7] text-sm">{card.text}</p>
                        </motion.div>
                    </FadeInWhenVisible>
                ))}
            </div>
        </section>
    );
}
