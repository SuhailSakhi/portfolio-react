import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import ProjectVisual from '../components/ProjectVisual';
import { projects } from '../data/projects';

export default function ProjectsPage({ theme, toggleTheme }) {
    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage === 'nl' ? 'nl' : 'en';
    return (
        <div className="app-shell">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="projects-page">
                <header className="projects-header">
                    <h1 className="section-title">{language === 'nl' ? 'Projecten' : 'Projects'}<span className="accent-period">.</span></h1>
                    <p className="section-copy">{language === 'nl' ? 'Mijn bijdrage, de keuzes onderweg en hoe het product tot stand kwam.' : 'My contribution, decisions along the way and how each product took shape.'}</p>
                </header>
                <div className="project-list">
                    {projects.map(project => (
                        <Link key={project.slug} to={`/projects/${project.slug}`} className="project-entry">
                            <ProjectVisual project={project} language={language} />
                            <div className="project-entry-copy">
                                <h2>{project.name}<ArrowUpRight aria-hidden="true" /></h2>
                                <p>{project.title[language]}</p>
                                <ul className="project-roles">{project.roles.map(role => <li key={role}>{role}</li>)}</ul>
                                <span className="case-link">{language === 'nl' ? 'Bekijk de case' : 'Read the case'} →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}
