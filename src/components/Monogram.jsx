import React from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

export default function Monogram({ interactive = false }) {
    const reducedMotion = useReducedMotion();
    const rotateX = useSpring(0, { stiffness: 100, damping: 22 });
    const rotateY = useSpring(0, { stiffness: 100, damping: 22 });
    const reset = () => { rotateX.set(0); rotateY.set(0); };
    const move = (event) => {
        if (!interactive || reducedMotion || event.pointerType !== 'mouse') return;
        const bounds = event.currentTarget.getBoundingClientRect();
        rotateX.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 12);
        rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 16);
    };
    return (
        <div className={interactive ? 'monogram-stage' : 'monogram-small'} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
            <motion.svg
                viewBox="0 0 360 320"
                className="ss-monogram"
                style={interactive && !reducedMotion ? { rotateX, rotateY } : undefined}
                fill="none"
            >
                <g strokeLinejoin="bevel" strokeWidth="44">
                    <path className="monogram-depth" d="M174 74H89L53 110V143L146 184V221L110 257H29" transform="translate(7 7)" />
                    <path className="monogram-depth" d="M331 63H247L211 99V136L304 177V210L268 246H184" transform="translate(7 7)" />
                    <path className="monogram-face" d="M174 74H89L53 110V143L146 184V221L110 257H29" />
                    <path className="monogram-face" d="M331 63H247L211 99V136L304 177V210L268 246H184" />
                    <path className="monogram-accent" d="M211 136L304 177" />
                </g>
            </motion.svg>
        </div>
    );
}
