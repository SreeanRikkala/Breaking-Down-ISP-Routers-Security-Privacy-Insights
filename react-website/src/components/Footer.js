import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <a
                        href="https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        <i className="fab fa-github"></i> View on GitHub
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {year} ISP Router Security Insights</p>
            </div>
        </footer>
    );
};

export default Footer;