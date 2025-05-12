import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#top" className="navbar-logo" onClick={() => setMenuOpen(false)}>
                    <span>ISP Router Security</span>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#top" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#overview" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Overview
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#common-vulns" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Vulnerabilities
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#router-evaluation" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Router Evaluations
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#resources" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Resources
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
                            About Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
