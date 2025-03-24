import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-minimal">
            <div className="footer-container-minimal">
                <div className="github-link-container">
                    <a
                        href="https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-icon"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>

                <div className="copyright-container">
                    <p>&copy; {year} ISP Router Security Insights | All Rights Reserved</p>
                    <p className="footer-disclaimer">
                        This project is for educational and research purposes only.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;