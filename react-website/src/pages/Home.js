import React from 'react';
import '../styles/Home.css';
import OverviewSection from './sections/OverviewSection';
import VulnerabilitiesSection from './sections/VulnerabilitiesSection';
import HeroSection from './sections/HeroSection';
import ProductStyleRouterSection from '../components/ProductStyleRouterSection';
import RouterEvaluation from './sections/RouterEvaluation';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <HeroSection />

            <OverviewSection />

            {/* Vulnerabilities Section */}
            <VulnerabilitiesSection />

            {/* Router Evaluation Section */}
            <RouterEvaluation />


            {/* Product Style Router Section */}
            <ProductStyleRouterSection />




            {/* Empty Section 4 */}
            <section id="section4" className="empty-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Section 4</h2>
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