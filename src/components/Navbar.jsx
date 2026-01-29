import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css'; // We will create this or use inline styles with our global variables

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Programs', path: '/programs' },
        { name: 'Events', path: '/events' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'E-Library', path: '/e-library' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-2 mx-4 mt-4 shadow-lg' : 'bg-transparent py-4'
                }`}
            style={{
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                background: scrolled ? 'rgba(30, 41, 59, 0.8)' : 'transparent',
                border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                borderRadius: scrolled ? '1rem' : '0',
                width: scrolled ? 'calc(100% - 2rem)' : '100%',
                left: scrolled ? '1rem' : '0'
            }}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 font-bold text-2xl z-50">
                    <span className="gradient-text">CSIT Dept.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-[var(--primary)] ${location.pathname === link.path ? 'text-[var(--primary)]' : 'text-[var(--text-main)]'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden xl:flex items-center gap-4">
                    <a
                        href="https://www.bkbirlacollegekalyan.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
                    >
                        Applied
                    </a>
                    <Link to="/get-started" className="btn btn-primary text-sm px-4 py-2">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="xl:hidden z-50 p-2 text-[var(--text-main)]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-[var(--background)] z-40 flex flex-col items-center justify-center gap-8 xl:hidden"
                        >
                            <div className="flex flex-col items-center gap-6 w-full px-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-2xl font-semibold hover:text-[var(--primary)] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col gap-4 w-full mt-8"
                                >
                                    <a
                                        href="https://www.bkbirlacollegekalyan.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline w-full justify-center"
                                    >
                                        Applied (College Website) <ChevronRight size={16} className="ml-2" />
                                    </a>
                                    <Link to="/get-started" className="btn btn-primary w-full justify-center">
                                        Get Started
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
