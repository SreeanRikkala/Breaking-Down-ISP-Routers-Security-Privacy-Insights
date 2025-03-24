import React, { useState, useRef } from 'react';
import '../../styles/Home.css';

const VulnerabilitiesSection = () => {
    const [selectedVuln, setSelectedVuln] = useState(null);
    const [showMoreContent, setShowMoreContent] = useState(false);
    const scrollContainerRef = useRef(null);

    const vulnList = [
        { id: 'vuln1', h1: 'heading-1', subh1: 'sh1', description: 'Team is working. coming very soon.', image: require('../../assets/images/cve-router5.jpeg') },
        { id: 'vuln2', h1: 'heading-2', subh1: 'sh2', description: 'Content for heading-2 article.', image: require('../../assets/images/cve-router2..jpeg') },
        { id: 'vuln3', h1: 'heading-3', subh1: 'sh3', description: 'Content for heading-3 article.', image: require('../../assets/images/cve-router3.jpeg') },
        { id: 'vuln4', h1: 'heading-4', subh1: 'sh4', description: 'Content for heading-4 article.', image: require('../../assets/images/cve-router4.jpeg') },
        { id: 'vuln5', h1: 'heading-5', subh1: 'sh5', description: 'Content for heading-5 article.', image: require('../../assets/images/cve-router1.jpeg') },
        { id: 'vuln6', h1: 'heading-6', subh1: 'sh6', description: 'Content for heading-6 article.', image: require('../../assets/images/AdobeStock_70682444.jpeg') },
    ];

    const handleVulnClick = (id) => {
        if (id === 'vuln1') {
            if (selectedVuln === null || selectedVuln === 'vuln1') {
                setShowMoreContent(!showMoreContent);
            } else {
                setSelectedVuln('vuln1');
                setShowMoreContent(true);
            }
            return;
        }

        setSelectedVuln(id === selectedVuln ? null : id);
        setShowMoreContent(false);

        window.scrollTo({ top: document.getElementById('common-vulns').offsetTop - 100, behavior: 'smooth' });
    };

    const handleReadMore = (e) => {
        e.stopPropagation();
        setShowMoreContent(true);
    };

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const featuredArticle = selectedVuln
        ? vulnList.find(v => v.id === selectedVuln)
        : vulnList[0];

    return (
        <section id="common-vulns" className="vulns-section graph-paper-bg">
            <div className="container">
                <div className="section-header">
                    <h2>Common Vulnerabilities</h2>
                </div>

                <div className="featured-article">
                    <div className="article-card featured">
                        <div className="article-image">
                            <img src={featuredArticle.image} alt={featuredArticle.h1} />
                        </div>
                        <div className="article-content">
                            <div className="article-meta">
                                <span className="article-date">sample date</span>
                                <span className="article-dot">•</span>
                                <span className="article-read-time">2 Min Read</span>
                            </div>
                            <h1 className="article-title">{featuredArticle.h1}</h1>
                            <h2 className="article-subtitle">{featuredArticle.subh1}</h2>
                            <p className="article-description">
                                {showMoreContent || selectedVuln ?
                                    featuredArticle.description + " Additional detailed content is to be added here. we plan to do it by the end of milestone 2 or later."
                                    : featuredArticle.description}
                            </p>
                            {!showMoreContent && !selectedVuln && (
                                <button className="read-more-btn" onClick={handleReadMore}>READ MORE</button>
                            )}
                            {(showMoreContent || selectedVuln) && (
                                <button className="read-more-btn" onClick={() => {
                                    setShowMoreContent(false);
                                    setSelectedVuln(null);
                                }}>COLLAPSE</button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="scroll-articles-container">
                    <button className="scroll-btn scroll-left" onClick={() => handleScroll('left')}>
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="articles-scroll" ref={scrollContainerRef}>
                        {vulnList.map((vuln) => (
                            <div
                                key={vuln.id}
                                className={`article-card ${selectedVuln === vuln.id ? 'active' : ''}`}
                                onClick={() => handleVulnClick(vuln.id)}
                            >
                                <div className="article-image">
                                    <img src={vuln.image} alt={vuln.h1} />
                                </div>
                                <div className="article-meta">
                                    <span className="article-date">May 18</span>
                                    <span className="article-dot">•</span>
                                    <span className="article-read-time">2 Min Read</span>
                                </div>
                                <h3 className="article-card-title">{vuln.h1}</h3>
                            </div>
                        ))}
                    </div>

                    <button className="scroll-btn scroll-right" onClick={() => handleScroll('right')}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VulnerabilitiesSection;