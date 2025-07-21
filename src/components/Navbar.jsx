import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar({ scrollToSection, refs = {} }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'nl' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navItems = [
        { label: t('navbar.about'), ref: refs.aboutRef, hash: '#about' },
        { label: t('navbar.skills'), ref: refs.skillsRef, hash: '#skills' },
        { label: t('navbar.projects'), path: '/projects' },
        { label: t('navbar.contact'), ref: refs.contactRef, hash: '/contact' },
    ];

    const handleNavClick = (item, e) => {
        e.preventDefault();
        setMenuOpen(false);

        if (item.path) {
            navigate(item.path);
        } else if (item.ref && scrollToSection) {
            scrollToSection(item.ref, e);
        } else if (item.hash) {
            navigate(`/${item.hash}`);
        }
    };

    return (
        <nav className="bg-black text-white fixed w-full top-0 left-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img className="h-10 w-auto cursor-pointer" src="/img/memoji2.png" alt="logo" />
                    </Link>
                    <span className="font-semibold hidden sm:inline">{t('navbar.brand') || 'Suhail'}</span>
                </div>

                {/* Desktop nav */}
                <div className="hidden sm:flex gap-x-8 items-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.path || item.hash || '#'}
                            onClick={(e) => handleNavClick(item, e)}
                            whileHover={{ scale: 1.05 }}
                            className="transition"
                        >
                            {item.label}
                        </motion.a>
                    ))}
                    <button
                        onClick={changeLanguage}
                        className="text-sm bg-white text-[#1D130C] font-semibold px-3 py-1 rounded-lg hover:bg-gray-200 transition"
                    >
                        {i18n.language === 'en' ? '🇳🇱 Nederlands' : '🇬🇧 English'}
                    </button>
                </div>

                {/* Hamburger for mobile */}
                <div className="sm:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
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
                        className="sm:hidden bg-[#1D130C] px-6 pb-4 pt-2 text-white"
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
                                    className="mt-4 bg-white text-[#1D130C] font-semibold px-3 py-1 rounded-lg hover:bg-gray-200 transition"
                                >
                                    {i18n.language === 'en' ? '🇳🇱 Nederlands' : '🇬🇧 English'}
                                </button>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
