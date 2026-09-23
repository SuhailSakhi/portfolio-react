import React, { useState } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WordWall from './WordWall';

export default function SectionHome({ homeRef }) {
    const { t } = useTranslation();
    const reducedMotion = useReducedMotion();
    const [cursorVisible, setCursorVisible] = useState(false);
    const cursorX = useSpring(0, { stiffness: 220, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 220, damping: 28 });
    const moveCursor = (event) => {
        if (reducedMotion || event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        if (!cursorVisible) {
            cursorX.jump(x);
            cursorY.jump(y);
            setCursorVisible(true);
        } else {
            cursorX.set(x);
            cursorY.set(y);
        }
    };

    return (
        <section
            id="home"
            ref={homeRef}
            className="hero-section editorial-hero"
            onPointerMove={moveCursor}
            onPointerLeave={() => setCursorVisible(false)}
        >
            {!reducedMotion && (
                <motion.div
                    className="hero-cursor-ring"
                    aria-hidden="true"
                    style={{ left: cursorX, top: cursorY, opacity: cursorVisible ? 1 : 0 }}
                />
            )}
            <div className="hero-editorial-layout">
                <div className="hero-editorial-copy">
                    <h1 className="hero-title home-headline" aria-label="Suhail Sakhizadh">
                        {['Suhail', 'Sakhizadh'].map((name, wordIndex) => (
                            <React.Fragment key={name}>
                                {wordIndex > 0 && <>{' '}<br /></>}
                                {Array.from(name).map((letter, index) => (
                                    <span className="name-letter" aria-hidden="true" key={index}>{letter}</span>
                                ))}
                            </React.Fragment>
                        ))}
                    </h1>
                    <p className="hero-copy">{t('home.subtitle')}</p>
                    <p className="hero-disciplines">Research · Product Design · Prototyping · Development</p>
                    <Link className="hero-project-link" to="/projects">{t('home.projectsButton')} <ArrowUpRight size={21} aria-hidden="true" /></Link>
                </div>
                <WordWall />
            </div>
        </section>
    );
}
