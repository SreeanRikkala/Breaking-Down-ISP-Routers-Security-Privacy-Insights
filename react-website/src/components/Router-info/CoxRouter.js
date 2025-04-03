import React, { useState, useEffect } from 'react';
import '../../styles/RouterEvaluation.css';



const CoxRouter = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [routerData, setRouterData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        import('../../assets/data/cox-router-data.json')
            .then(data => {
                setRouterData(data.default);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading router data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="router-loading">Loading router data...</div>;
    if (!routerData) return <div className="router-error">Failed to load router data</div>;

    return (
        <div className="router-component">
            <div className="router-profile-card">
                <div className="router-main-content">
                    <div className="router-image-section">
                        <img
                            src={require('../../assets/images/cox-panoramic.png')}
                            alt="Cox Panoramic Wi-Fi Gateway"
                            className="router-image"
                        />
                    </div>

                    <div className="router-info-section">
                        <h2 className="router-name">Cox Panoramic Wi-Fi Gateway</h2>
                        <p className="router-description">Next-generation connectivity with advanced security</p>

                        <div className="router-specs-grid">
                            <div className="spec-box">
                                <h4 className="spec-title">WI-FI STANDARD</h4>
                                <p className="spec-value">802.11ax (Wi-Fi 6)</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">SECURITY</h4>
                                <p className="spec-value">WPA3</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">MAX SPEED</h4>
                                <p className="spec-value">1 Gbps</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">MONTHLY COST</h4>
                                <p className="spec-value">$13.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="score-section">
                        <h3 className="score-heading">Overall Score</h3>
                        <div className="score-display">
                            <div className="score-value">{routerData.finalScore}</div>
                            <div className="score-max">/10</div>
                        </div>
                        <div className="score-trend">
                            <span className="trend-icon">↑</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs-navigation">
                <div className="tabs-container">
                    <button
                        className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'usability' ? 'active' : ''}`}
                        onClick={() => setActiveTab('usability')}
                    >
                        Usability
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
                        onClick={() => setActiveTab('performance')}
                    >
                        Performance
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'cost' ? 'active' : ''}`}
                        onClick={() => setActiveTab('cost')}
                    >
                        Cost
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'methodology' ? 'active' : ''}`}
                        onClick={() => setActiveTab('methodology')}
                    >
                        Methodology
                    </button>
                </div>
            </div>

            <div className="tab-content">
                {activeTab === 'overview' && (
                    <div className="overview-tab">
                        <div className="score-cards">
                            <div className="score-card">
                                <h3 className="card-title">Security</h3>
                                <div className="card-score">{routerData.scores.security.value}/10</div>
                                <div className="score-bar">
                                    <div
                                        className="bar-fill security"
                                        style={{ width: `${routerData.scores.security.value * 10}%` }}
                                    ></div>
                                </div>
                                <div className="score-weight">Weight: 40%</div>
                            </div>

                            <div className="score-card">
                                <h3 className="card-title">Performance</h3>
                                <div className="card-score">{routerData.scores.performance.value}/10</div>
                                <div className="score-bar">
                                    <div
                                        className="bar-fill performance"
                                        style={{ width: `${routerData.scores.performance.value * 10}%` }}
                                    ></div>
                                </div>
                                <div className="score-weight">Weight: 30%</div>
                            </div>

                            <div className="score-card">
                                <h3 className="card-title">Usability</h3>
                                <div className="card-score">{routerData.scores.usability.value}/10</div>
                                <div className="score-bar">
                                    <div
                                        className="bar-fill usability"
                                        style={{ width: `${routerData.scores.usability.value * 10}%` }}
                                    ></div>
                                </div>
                                <div className="score-weight">Weight: 20%</div>
                            </div>

                            <div className="score-card">
                                <h3 className="card-title">Cost Value</h3>
                                <div className="card-score">{routerData.scores.cost.value}/10</div>
                                <div className="score-bar">
                                    <div
                                        className="bar-fill cost"
                                        style={{ width: `${routerData.scores.cost.value * 10}%` }}
                                    ></div>
                                </div>
                                <div className="score-weight">Weight: 10%</div>
                            </div>
                        </div>

                        <div className="assessment-grid">
                            <div className="strengths-card">
                                <h3 className="assessment-title">Strengths</h3>
                                <ul className="strengths-list">
                                    {routerData.strengths.map((strength, index) => (
                                        <li key={index} className="strength-item">
                                            <span className="check-icon">✓</span>
                                            <span>{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="weaknesses-card">
                                <h3 className="assessment-title">Weaknesses</h3>
                                <ul className="weaknesses-list">
                                    {routerData.weaknesses.map((weakness, index) => (
                                        <li key={index} className="weakness-item">
                                            <span className="x-icon">✗</span>
                                            <span>{weakness}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/*other tabs coming in here */}
                {activeTab === 'security' && (
                    <div className="security-tab">
                        <div className="tab-header">
                            <h2>Security Assessment</h2>
                            <div className="score-summary">
                                <div className="score-circle">
                                    <div className="score-number">{routerData.scores.security.value}</div>
                                    <div className="score-label">/10</div>
                                </div>
                            </div>
                        </div>

                        <div className="criteria-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Criteria</th>
                                    <th>Description</th>
                                    <th>Scale</th>
                                    <th>Result</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.security.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.scale}</td>
                                        <td>{detail.result}/10</td>
                                        <td>{detail.notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="security-summary">
                            <h3>Security Overview</h3>
                            <p>The Cox Panoramic Wi-Fi Gateway received a security score of {routerData.scores.security.value}/10, which represents 40% of the overall router rating.</p>
                            <p>Key strengths include WPA3 support, required password changes during setup, and proper network isolation features.</p>
                            <p>Areas for improvement include the lack of automatic security updates and UPnP being enabled by default.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'usability' && (
                    <div className="usability-tab">
                        <div className="tab-header">
                            <h2>Usability Assessment</h2>
                            <div className="score-summary">
                                <div className="score-circle">
                                    <div className="score-number">{routerData.scores.usability.value}</div>
                                    <div className="score-label">/10</div>
                                </div>
                            </div>
                        </div>

                        <div className="criteria-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Criteria</th>
                                    <th>Description</th>
                                    <th>Scale</th>
                                    <th>Result</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.usability.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.scale}</td>
                                        <td>{detail.result}/10</td>
                                        <td>{detail.notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="usability-summary">
                            <h3>Usability Overview</h3>
                            <p>The Cox Panoramic Wi-Fi Gateway received a usability score of {routerData.scores.usability.value}/10, which represents 20% of the overall router rating.</p>
                            <p>The router excels in quick setup time (averaging 15 minutes), requires no additional drivers, and provides comprehensive online documentation.</p>
                            <p>The main usability drawback is its estimated lifespan of 5-6 years, which falls short of the recommended 7-year standard.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'performance' && (
                    <div className="performance-tab">
                        <div className="tab-header">
                            <h2>Performance Assessment</h2>
                            <div className="score-summary">
                                <div className="score-circle">
                                    <div className="score-number">{routerData.scores.performance.value}</div>
                                    <div className="score-label">/10</div>
                                </div>
                            </div>
                        </div>

                        <div className="criteria-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Criteria</th>
                                    <th>Description</th>
                                    <th>Scale</th>
                                    <th>Result</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.performance.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.scale}</td>
                                        <td>{detail.result}/10</td>
                                        <td>{detail.notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="performance-chart">
                            <h3>Performance Visualization</h3>
                            <div className="speed-meter">
                                <div className="meter-label">Wi-Fi Speed</div>
                                <div className="meter-bar">
                                    <div className="meter-fill" style={{ width: `${routerData.scores.performance.details[0].result * 10}%` }}></div>
                                </div>
                                <div className="meter-value">{routerData.scores.performance.details[0].result}/10</div>
                            </div>

                            <div className="speed-meter">
                                <div className="meter-label">Signal Strength</div>
                                <div className="meter-bar">
                                    <div className="meter-fill" style={{ width: `${routerData.scores.performance.details[1].result * 10}%` }}></div>
                                </div>
                                <div className="meter-value">{routerData.scores.performance.details[1].result}/10</div>
                            </div>

                            <div className="speed-meter">
                                <div className="meter-label">Latency & Jitter</div>
                                <div className="meter-bar">
                                    <div className="meter-fill" style={{ width: `${routerData.scores.performance.details[2].result * 10}%` }}></div>
                                </div>
                                <div className="meter-value">{routerData.scores.performance.details[2].result}/10</div>
                            </div>

                            <div className="speed-meter">
                                <div className="meter-label">Multi-Device Handling</div>
                                <div className="meter-bar">
                                    <div className="meter-fill" style={{ width: `${routerData.scores.performance.details[3].result * 10}%` }}></div>
                                </div>
                                <div className="meter-value">{routerData.scores.performance.details[3].result}/10</div>
                            </div>
                        </div>

                        <div className="performance-summary">
                            <h3>Performance Overview</h3>
                            <p>The Cox Panoramic Wi-Fi Gateway received a performance score of {routerData.scores.performance.value}/10, which represents 30% of the overall router rating.</p>
                            <p>The router demonstrates excellent multi-device handling capabilities and delivers approximately 70% of the advertised 1 Gbps speeds.</p>
                            <p>Performance limitations include signal strength degradation beyond 20 feet and average ping times of 25-30ms.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'cost' && (
                    <div className="cost-tab">
                        <div className="tab-header">
                            <h2>Cost Assessment</h2>
                            <div className="score-summary">
                                <div className="score-circle">
                                    <div className="score-number">{routerData.scores.cost.value}</div>
                                    <div className="score-label">/10</div>
                                </div>
                            </div>
                        </div>

                        <div className="criteria-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Criteria</th>
                                    <th>Description</th>
                                    <th>Scale</th>
                                    <th>Result</th>
                                    <th>Notes</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.cost.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.scale}</td>
                                        <td>{detail.result}/10</td>
                                        <td>{detail.notes}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="cost-analysis">
                            <h3>Cost Breakdown</h3>
                            <div className="cost-details">
                                <div className="cost-item">
                                    <div className="cost-label">Monthly Fee:</div>
                                    <div className="cost-value">${routerData.specs.price.replace('/month', '')}</div>
                                </div>
                                <div className="cost-item">
                                    <div className="cost-label">Annual Cost:</div>
                                    <div className="cost-value">${parseInt(routerData.specs.price.replace('/month', '')) * 12}</div>
                                </div>
                                <div className="cost-item">
                                    <div className="cost-label">One-time Activation Fee:</div>
                                    <div className="cost-value">$20</div>
                                </div>
                                <div className="cost-item">
                                    <div className="cost-label">3-Year Total Cost:</div>
                                    <div className="cost-value">${(parseInt(routerData.specs.price.replace('/month', '')) * 36) + 20}</div>
                                </div>
                            </div>
                        </div>

                        <div className="cost-summary">
                            <h3>Cost Overview</h3>
                            <p>The Cox Panoramic Wi-Fi Gateway received a cost value score of {routerData.scores.cost.value}/10, which represents 10% of the overall router rating.</p>
                            <p>The relatively high monthly rental fee of $13 and the inability to purchase the device outright significantly impact its cost-effectiveness rating.</p>
                            <p>Over a 3-year period, the total cost of renting this router would be ${(parseInt(routerData.specs.price.replace('/month', '')) * 36) + 20}, which includes a one-time $20 activation fee.</p>
                        </div>
                    </div>
                )}

                {activeTab === 'methodology' && (
                    <div className="methodology-tab">
                        <div className="tab-header">
                            <h2>Evaluation Methodology</h2>
                        </div>

                        <div className="methodology-content">
                            <div className="methodology-section">
                                <h3>Evaluation Criteria</h3>
                                <p>Our router evaluations follow industry-standard testing procedures and criteria from authoritative sources including:</p>
                                <ul className="reference-list">
                                    {routerData.references.map((reference, index) => (
                                        <li key={index} className="reference-item">
                                            <strong>{reference.id}:</strong> {reference.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>



                            <div className="methodology-section">
                                <h3>Testing Protocol</h3>
                                <p>Our evaluation process includes:</p>
                                <ul className="protocol-list">
                                    <li>Hands-on testing in controlled environments</li>
                                    <li>Analysis of technical specifications</li>
                                    <li>Review of firmware security features</li>
                                    <li>Real-world performance measurements</li>
                                    <li>Review of user experiences and reports</li>
                                    <li>Cost analysis compared to market alternatives</li>
                                </ul>
                            </div>

                            <div className="methodology-section">
                                <h3>Final Score Calculation</h3>
                                <p>The final router score is calculated using a weighted average of the four category scores:</p>
                                <div className="calculation-formula">
                                    <p>Final Score = (Security × 0.4) + (Performance × 0.3) + (Usability × 0.2) + (Cost × 0.1)</p>
                                </div>
                                <p>For the Cox Panoramic Wi-Fi Gateway, this calculation is:</p>
                                <div className="calculation-example">
                                    <p>({routerData.scores.security.value} × 0.4) + ({routerData.scores.performance.value} × 0.3) + ({routerData.scores.usability.value} × 0.2) + ({routerData.scores.cost.value} × 0.1) = {routerData.finalScore}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoxRouter;