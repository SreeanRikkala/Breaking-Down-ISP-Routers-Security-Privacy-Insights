import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Breaking Down ISP Router Security</h1>
                    <p className="hero-tagline">Is your ISP's Router Secure?</p>
                    <p className="hero-description">
                        We evaluated top ISP Routers for Security,
                        usability, performance, and price to help you choose
                    </p>
                    <button className="hero-button">
                        Learn More <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;