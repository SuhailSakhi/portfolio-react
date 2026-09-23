import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProjectVisual from '../components/ProjectVisual';
import { projects, flowSteps } from '../data/projects';

export function EnquiryFlow({ language }) {
    const [active, setActive] = useState(0);
    const nl = language === 'nl';
    return (
        <div className="enquiry-flow">
            <ol className="flow-controls" aria-label={nl ? 'Stappen in de aanvraag' : 'Enquiry steps'}>
                {flowSteps.map(([label], index) => <li key={index}>
                    <button type="button" aria-pressed={active === index} aria-controls="flow-detail" onClick={() => setActive(index)}>
                        <span>{String(index + 1).padStart(2, '0')}</span>{label[language]}
                    </button>
                </li>)}
            </ol>
            <div className="flow-detail" id="flow-detail" aria-live="polite" aria-atomic="true">
                <span className="flow-count" aria-hidden="true">{String(active + 1).padStart(2, '0')}</span>
                <h3>{flowSteps[active][0][language]}</h3>
                <p>{flowSteps[active][1][language]}</p>
            </div>
            <div className="flow-navigation">
                <button className="secondary-button" disabled={active === 0} onClick={() => setActive(active - 1)} aria-label={nl ? 'Vorige stap' : 'Previous step'}><ArrowLeft size={18} /></button>
                <span>{active + 1} / {flowSteps.length}</span>
                <button className="secondary-button" disabled={active === flowSteps.length - 1} onClick={() => setActive(active + 1)} aria-label={nl ? 'Volgende stap' : 'Next step'}><ArrowRight size={18} /></button>
            </div>
        </div>
    );
}

export default function ProjectCasePage({ theme, toggleTheme }) {
    const { slug } = useParams();
    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage === 'nl' ? 'nl' : 'en';
    const nl = language === 'nl';
    const project = projects.find(item => item.slug === slug);
    if (!project) return <div className="app-shell"><Navbar theme={theme} toggleTheme={toggleTheme} /><main className="projects-page"><h1 className="section-title">{nl ? 'Project niet gevonden' : 'Project not found'}</h1><Link className="secondary-button mt-8" to="/projects">{nl ? 'Alle projecten' : 'All projects'}</Link></main></div>;
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    return (
        <div className="app-shell case-shell">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="projects-page">
                <Link className="case-back" to="/projects"><ArrowLeft size={18} />{nl ? 'Alle projecten' : 'All projects'}</Link>
                <header className="case-header">
                    <h1>{project.name}<span className="accent-period">.</span></h1>
                    <h2>{project.title[language]}</h2>
                    <p className="section-copy">{project.intro[language]}</p>
                    <div className="case-role-block"><h3>{nl ? 'Mijn rol' : 'My role'}</h3><ul className="project-roles">{project.roles.map(role => <li key={role}>{role}</li>)}</ul></div>
                    {project.notice && <p className="case-notice">{project.notice[language]}</p>}
                </header>
                <ProjectVisual project={project} language={language} />
                <div className="case-body">
                    <nav className="case-index" aria-label={nl ? 'In deze case' : 'In this case'}>
                        {project.chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{chapter.title[language]}</a>)}
                    </nav>
                    <div>
                        {project.chapters.map(chapter => <section className="case-chapter" id={chapter.id} key={chapter.id}>
                            <h2>{chapter.title[language]}</h2>
                            <p>{chapter.text[language]}</p>
                            {chapter.notes && <ul className="research-notes">{chapter.notes.map((note, index) => <li key={index}>{note[language]}</li>)}</ul>}
                            {chapter.flow && <EnquiryFlow language={language} />}
                        </section>)}
                    </div>
                </div>
                <Link className="next-case" to={`/projects/${next.slug}`}><span>{nl ? 'Volgend project' : 'Next project'}</span><strong>{next.name}</strong><ArrowRight aria-hidden="true" /></Link>
            </main>
        </div>
    );
}
