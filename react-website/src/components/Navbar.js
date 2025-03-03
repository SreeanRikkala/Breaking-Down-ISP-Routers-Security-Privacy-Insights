import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="navbar-logo">
                    <span>ISP Router Security</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#overview" className="nav-link" onClick={() => setMenuOpen(false)}>
                            X1
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#common-vulns" className="nav-link" onClick={() => setMenuOpen(false)}>
                            X2
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#section3" className="nav-link" onClick={() => setMenuOpen(false)}>
                            X3
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#section4" className="nav-link" onClick={() => setMenuOpen(false)}>
                            X4
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;