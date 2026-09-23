import React from 'react';

export default function ProjectVisual({ project, language }) {
    const nl = language === 'nl';
    const labels = project.slug === 'offertetool'
        ? (nl ? ['Aanvraag', 'Structuur', 'Gesprek'] : ['Enquiry', 'Structure', 'Conversation'])
        : project.slug === 'subba'
            ? (nl ? ['Idee', 'Concept', 'Realisatie'] : ['Idea', 'Concept', 'Implementation'])
            : (nl ? ['Context', 'Behoeften', 'Ervaring'] : ['Context', 'Needs', 'Experience']);
    return (
        <div className={`project-visual project-visual--${project.slug}`}>
            <span className="project-monogram" aria-hidden="true">{project.number}</span>
            <div className="visual-process">
                {labels.map((label, index) => <React.Fragment key={label}>
                    {index > 0 && <span className="visual-connector" aria-hidden="true">→</span>}
                    <span className="visual-process-step">{label}</span>
                </React.Fragment>)}
            </div>
            <span className="visual-caption">{nl ? 'Schematische procesweergave' : 'Schematic process overview'}</span>
        </div>
    );
}
