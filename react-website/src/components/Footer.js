import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        const subject = "Message from ISP Router Security Website";
        const body = `Email from: ${email}\n\nMessage:\n`;
        window.location.href = `mailto:sreeanrikkala@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h2 className="footer-title">Contact Us</h2>
                        <p className="footer-description">
                            Have questions about our project? Send us a message and we'll
                            get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="footer-right">
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="email-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="subscribe-btn"
                                onClick={handleSendMessage}
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} School Project - Router Security. All rights reserved.
                    </p>

                    <div className="footer-links">
                        <a href="#about" className="footer-link">About</a>
                        <a href="#resources" className="footer-link">Resources</a>
                        <a href="#top" className="footer-link">Credits</a>
                    </div>

                    <div className="social-links">
                        <a href="mailto:sreeanrikkala@gmail.com" className="social-link" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://github.com/SreeanRikkala/Breaking-Down-ISP-Routers-Security-Privacy-Insights" className="social-link" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
