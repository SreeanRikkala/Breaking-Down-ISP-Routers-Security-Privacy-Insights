import React, { useState } from 'react';

const VulnerabilitiesSection = () => {
    const [selectedVuln, setSelectedVuln] = useState(null);
    const vulnList = [
        {
            id: 'vuln1',
            h1: 'heading-1',
            subh1: 'sh1',
            description: '',
            image: require('../../assets/images/Public1.jpg')
        },
        {
            id: 'vuln2',
            h1: 'heading-2',
            subh1: 'sh2',
            description: '',
            image: require('../../assets/images/Public2.jpg')
        },
        {
            id: 'vuln3',
            h1: 'heading-3',
            subh1: 'sh3',
            description: '',
            image: require('../../assets/images/Public3.jpg')
        },
        {
            id: 'vuln4',
            h1: 'heading-4',
            subh1: 'sh4',
            description: '',
            image: require('../../assets/images/Public1.jpg')
        },
        {
            id: 'vuln5',
            h1: 'heading-5',
            subh1: 'sh5',
            description: '',
            image: require('../../assets/images/Public2.jpg')
        }
    ];


    const handleVulnClick = (id) => {
        setSelectedVuln(id === selectedVuln ? null : id);
    };

    // Front and back
    const getNavigation = () => {
        if (!selectedVuln) return { prev: null, next: null };

        const currentIndex = vulnList.findIndex(vuln => vuln.id === selectedVuln);
        const prev = currentIndex > 0 ? vulnList[currentIndex - 1].id : null;
        const next = currentIndex < vulnList.length - 1 ? vulnList[currentIndex + 1].id : null;

        return { prev, next };
    };

    const { prev, next } = getNavigation();

    return (
        <section id="common-vulns" className="vulns-section">
            <div className="container">
                <div className="section-header">
                    <h2>Common Vulnerabilities</h2>
                </div>

                {!selectedVuln ? (
                    <div className="news-layout">
                        <div className="main-story">
                            <div
                                className="vuln-card main-card"
                                onClick={() => handleVulnClick(vulnList[0].id)}
                            >
                                <div className="vuln-image" style={{backgroundImage: `url(${vulnList[0].image})`}}>
                                    <div className="vuln-overlay">
                                        <div className="vuln-text">
                                            <h1>{vulnList[0].h1}</h1>
                                            <div className="subh1">{vulnList[0].subh1}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="side-stories">
                            {vulnList.slice(1, 5).map(vuln => (
                                <div
                                    key={vuln.id}
                                    className="vuln-card side-card"
                                    onClick={() => handleVulnClick(vuln.id)}
                                >
                                    <div className="vuln-image" style={{backgroundImage: `url(${vuln.image})`}}>
                                        <div className="vuln-overlay">
                                            <div className="vuln-text">
                                                <h1>{vuln.h1}</h1>
                                                <div className="subh1">{vuln.subh1}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="vuln-detail">
                        {prev && (
                            <button
                                className="nav-button prev-button"
                                onClick={() => setSelectedVuln(prev)}
                                aria-label="Previous vulnerability"
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                        )}

                        <div className="vuln-detail-container">
                            <div className="vuln-detail-header">
                                <div className="vuln-detail-titles">
                                    <h1>{vulnList.find(v => v.id === selectedVuln)?.h1}</h1>
                                    <div className="subh1-detail">{vulnList.find(v => v.id === selectedVuln)?.subh1}</div>
                                </div>
                                <button
                                    className="close-button"
                                    onClick={() => setSelectedVuln(null)}
                                    aria-label="Close details"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="vuln-detail-content">
                                <div className="vuln-detail-image">
                                    <img
                                        src={vulnList.find(v => v.id === selectedVuln)?.image}
                                        alt={vulnList.find(v => v.id === selectedVuln)?.h1}
                                    />
                                </div>
                                <div className="vuln-detail-description">
                                    <p className="empty-placeholder">content space(will be filling it) </p>
                                </div>
                            </div>
                        </div>

                        {next && (
                            <button
                                className="nav-button next-button"
                                onClick={() => setSelectedVuln(next)}
                                aria-label="Next vulnerability"
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default VulnerabilitiesSection;