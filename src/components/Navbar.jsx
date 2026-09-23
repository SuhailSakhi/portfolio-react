import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Navbar({ scrollToSection, refs = {}, theme = 'dark', toggleTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = () => {
        const newLang = i18n.resolvedLanguage === 'en' ? 'nl' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navItems = [
        { label: t('navbar.about'), ref: refs.aboutRef, hash: '#about' },
        { label: t('navbar.skills'), ref: refs.skillsRef, hash: '#skills' },
        { label: t('navbar.projects'), path: '/projects' },
        { label: t('navbar.contact'), ref: refs.contactRef, hash: '#contact' },
    ];

    const handleNavClick = (item, e) => {
        e.preventDefault();
        setMenuOpen(false);

        if (item.path) {
            navigate(item.path);
        } else if (location.pathname === '/' && item.ref?.current && scrollToSection) {
            scrollToSection(item.ref, e);
        } else if (item.hash) {
            navigate(`/${item.hash}`);
        }
    };

    return (
        <nav className="site-nav fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <Link className="nav-logo" to="/" aria-label="Suhail — Home" onClick={() => setMenuOpen(false)}>
                        <img src={theme === 'dark' ? '/img/logo-ss-white.png' : '/img/logo-ss.png'} alt="Suhail Sakhizadh" width="1774" height="887" />
                    </Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:flex gap-x-8 items-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.path || item.hash || '#'}
                            onClick={(e) => handleNavClick(item, e)}
                            whileHover={{ scale: 1.05 }}
                            className="nav-link transition"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <div className="nav-actions">
                        <button onClick={changeLanguage} className="nav-control text-sm font-semibold">
                            {i18n.resolvedLanguage === 'en' ? 'NL' : 'EN'}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="nav-control"
                            aria-label={theme === 'dark' ? t('navbar.lightMode') : t('navbar.darkMode')}
                        >
                            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                        </button>
                    </div>
                </div>

                {/* Hamburger for mobile */}
                <div className="sm:hidden">
                    <button className="nav-control" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mobile-menu sm:hidden px-6 pb-5 pt-2"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <a
                                        href={item.path || item.hash || '#'}
                                        onClick={(e) => handleNavClick(item, e)}
                                        className="block py-2 text-lg"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <button
                                    onClick={() => {
                                        changeLanguage();
                                        setMenuOpen(false);
                                    }}
                                    className="nav-control mt-4 text-sm font-semibold"
                                >
                                    {i18n.resolvedLanguage === 'en' ? 'Nederlands' : 'English'}
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className="nav-control mt-4 ml-3"
                                    aria-label={theme === 'dark' ? t('navbar.lightMode') : t('navbar.darkMode')}
                                >
                                    {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                                </button>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
