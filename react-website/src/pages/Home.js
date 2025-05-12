import React from 'react';
import '../styles/Home.css';
import OverviewSection from './sections/OverviewSection';
import VulnerabilitiesSection from './sections/VulnerabilitiesSection';
import HeroSection from './sections/HeroSection';
import MAndShare from '../components/M-and-share';
import RouterEvaluation from './sections/RouterEvaluation';
import ResourceCenter from './sections/ResourceCenter';
import About from "./sections/About-us";

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
            <MAndShare />

            <ResourceCenter />

            <About />

        </div>
    );
};

export default Home;