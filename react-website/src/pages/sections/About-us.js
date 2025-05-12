import React from 'react';
import '../../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2>About Our Team</h2>
                </div>
                <div className="about-content-container">
                    <div className="about-content-text">
                        <p className="about-description">
                            As a team of cybersecurity students at University of Nebraska, we've created this resource to help bridge the gap between technical networking concepts and practical implementation for regular users.
                        </p>
                        <p className="about-description">
                            We discovered that while most routers have built-in security features, many users don't know how to properly configure them. Our project aims to provide simple, actionable guides that anyone can follow to significantly improve their home network security.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;