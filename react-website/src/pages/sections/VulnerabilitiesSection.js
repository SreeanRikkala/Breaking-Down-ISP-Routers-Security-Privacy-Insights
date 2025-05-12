import React, { useState, useRef } from 'react';
import '../../styles/Home.css';

const VulnerabilitiesSection = () => {
    const [selectedVuln, setSelectedVuln] = useState(null);
    const [showMoreContent, setShowMoreContent] = useState(false);
    const scrollContainerRef = useRef(null);

    const vulnList = [
        {
            id: 'vuln1',
            h1: 'CVE-2022-37337: Remote Code Execution in Netgear Orbi CBR750',
            subh1: 'Critical Vulnerability Enables Complete Router Takeover',
            description: 'Our research during the Netgear Orbi CBR750 series helped us reveal a critical vulnerability that allows unauthenticated remote code execution. According to security advisories, attackers can send specially crafted HTTP requests to the router\'s web interface without authentication, leading to arbitrary command execution. This vulnerability received a CVSS score of 9.1. Based on our research, Netgear addressed this issue in firmware v4.6.14.3 released in January 2023, though many devices likely remain unpatched.',
            image: require('../../assets/images/cve-router5.jpeg')
        },
        {
            id: 'vuln2',
            h1: 'CVE-2022-31793: Path Traversal in Arris G34 & G54 Routers',
            subh1: 'Unpatched Vulnerability Exposes Sensitive Configuration Files',
            description: 'Through our review of Arris router security, we found information about a path traversal vulnerability affecting G34 and G54 models. The flaw exists in the Arris embedded web server and can allow attackers to download arbitrary files from the device\'s filesystem. According to security researchers, configuration backups containing administrative credentials may be exposed.',
            image: require('../../assets/images/cve-router2..jpeg')
        },
        {
            id: 'vuln3',
            h1: 'CVE-2024-21833: Command Injection in TP-Link Archer Series',
            subh1: 'Network-Adjacent Attack Vector Affects Multiple Router Models',
            description: 'Our research on TP-Link routers found documentation of an OS command injection vulnerability. According to security bulletins, this flaw allows network-adjacent attackers to execute privileged commands without authentication. The vulnerability affects numerous Archer models and certain Deco mesh units. Based on TP-Link advisories, this issue was addressed in November 2023 updates, with Archer AX3000 V1.1.2 Build 20231115 and later versions containing the necessary patches.',
            image: require('../../assets/images/cve-router3.jpeg')
        },
        {
            id: 'vuln4',
            h1: 'CVE-2022-4001/4002/4003: Motorola MT8733 Vulnerabilities',
            subh1: 'Multiple Security Flaws Affecting Cable Modem Gateways',
            description: 'In our research of the Motorola MT8733 cable modem, we found reports of three significant vulnerabilities. Security advisories describe an authentication bypass (CVE-2022-4001) allowing API access without proper authentication, a command injection vulnerability (CVE-2022-4002) enabling privileged code execution, and a denial-of-service condition (CVE-2022-4003). Our literature review shows these issues were addressed in firmware updates throughout 2024, but many devices may still be running vulnerable versions.',
            image: require('../../assets/images/cve-router4.jpeg')
        },
        {
            id: 'vuln5',
            h1: 'CVE-2022-38452: Telnet Backdoor in Netgear CBR750',
            subh1: 'Authentication-Dependent Vulnerability Remains Unresolved',
            description: 'During our examination of security features on the Netgear Orbi 750 series (including CBR750), we found information about a backdoor in the telnet service. According to security researchers, this vulnerability allows attackers with valid administrative credentials and the device\'s MAC address to execute arbitrary commands. Interestingly, while Netgear addressed related vulnerabilities like CVE-2022-37337, our research suggests this particular issue was not remediated in firmware v4.6.14.3 or subsequent updates.',
            image: require('../../assets/images/cve-router1.jpeg')
        },
        {
            id: 'vuln6',
            h1: 'CVE-2022-45701: Shell Command Injection in Arris Routers',
            subh1: 'Authenticated RCE Vulnerability Without Vendor Patches',
            description: 'Our research uncovered information about a shell command injection vulnerability affecting numerous Arris cable modem models. Security bulletins indicate this post-authentication exploitation vector allows attackers to use the \\${...} syntax to inject operating system commands with root privileges. According to vulnerability databases and researcher reports, neither Arris nor major ISPs have issued patches for this vulnerability, making it a significant concern for users of these widely deployed ISP-provided routers.',
            image: require('../../assets/images/AdobeStock_70682444.jpeg')
        }
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
                                <span className="article-date">April 2024</span>
                                <span className="article-dot">•</span>
                                <span className="article-read-time">3 Min Read</span>
                            </div>
                            <h1 className="article-title">{featuredArticle.h1}</h1>
                            <h2 className="article-subtitle">{featuredArticle.subh1}</h2>
                            <p className="article-description">
                                {showMoreContent || selectedVuln ?
                                    featuredArticle.description + " As part of our project, we've gathered this information from security advisories, CVE databases, and researcher reports to highlight common router vulnerabilities that affect consumer devices. Understanding these vulnerabilities helps emphasize the importance of keeping router firmware updated and implementing proper security measures."
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
                                    <span className="article-date">April 2024</span>
                                    <span className="article-dot">•</span>
                                    <span className="article-read-time">3 Min Read</span>
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