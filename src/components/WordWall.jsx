import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WordWall() {
    const { i18n } = useTranslation();
    const nl = i18n.resolvedLanguage === 'nl';
    const words = nl
        ? ['Onderzoek', 'Ideeën', 'Prototypes', 'Gen Z']
        : ['Research', 'Ideas', 'Prototypes', 'Gen Z'];

    return (
        <ul className="word-wall" aria-label={nl ? 'Mijn focus' : 'My focus'}>
            {words.map((word, index) => (
                <li className={`word-wall-line word-wall-line--${index + 1}`} key={index}>
                    <span>{word}</span>
                </li>
            ))}
        </ul>
    );
}
