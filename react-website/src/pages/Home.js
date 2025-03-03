import React from 'react';
import '../styles/Home.css';
import OverviewSection from './sections/OverviewSection';
import VulnerabilitiesSection from './sections/VulnerabilitiesSection';
import HeroSection from './sections/HeroSection';


const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <HeroSection />

            {/* Overview Section */}
            <OverviewSection />

            {/* Vulnerabilities Section */}
            <VulnerabilitiesSection />

            {/* Empty Section 3 */}
            <section id="section3" className="empty-section">
                <div className="container">
                    <div className="section-header">
                        <h2>we can make this security grid section</h2>
                    </div>
                    <div className="empty-content">
                        <p>Searchable grid can go here</p>
                    </div>
                </div>
            </section>

            {/* Empty Section 4 */}
            <section id="section4" className="empty-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Section 4 </h2>
                    </div>
                    <div className="empty-content">
                        <p>empty section data goes here</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;