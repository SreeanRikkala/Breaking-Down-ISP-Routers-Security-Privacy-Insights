import React, { useState, useEffect } from 'react';
import '../../styles/RouterEvaluation.css';

const CAX30Router = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [routerData, setRouterData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        import('../../assets/data/cax30.json')
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
                            src={require('../../assets/images/router-weights/cax30.jpg')}
                            alt="ARRIS SURFboard CAX30"
                            className="router-image"
                        />
                    </div>

                    <div className="router-info-section">
                        <h2 className="router-name">ARRIS SURFboard CAX30</h2>
                        <p className="router-description">DOCSIS 3.1 Cable Modem + Wi-Fi 6 Router</p>

                        <div className="router-specs-grid">
                            <div className="spec-box">
                                <h4 className="spec-title">WI-FI STANDARD</h4>
                                <p className="spec-value">Wi-Fi 6 (802.11ax)</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">DOCSIS VERSION</h4>
                                <p className="spec-value">{routerData.specs.docsisVersion}</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">MAX SPEED</h4>
                                <p className="spec-value">3000 Mbps</p>
                            </div>

                            <div className="spec-box">
                                <h4 className="spec-title">MONTHLY COST</h4>
                                <p className="spec-value">{routerData.specs.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="score-section">
                        <h3 className="score-heading">Overall Score</h3>
                        <div className="score-display">
                            <div className="score-value">{routerData.finalScore}</div>
                            <div className="score-max">/10</div>
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
                        className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
                        onClick={() => setActiveTab('performance')}
                    >
                        Performance
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
                                <div className="score-weight">Weight: 50%</div>
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
                                <div className="score-weight">Weight: 25%</div>
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
                                <div className="score-weight">Weight: 17%</div>
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
                                <div className="score-weight">Weight: 8%</div>
                            </div>
                        </div>
                    </div>
                )}

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
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.security.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.result}/10</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
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
                                    <th>Result</th>
                                </tr>
                                </thead>
                                <tbody>
                                {routerData.scores.performance.details.map((detail, index) => (
                                    <tr key={index} className={detail.result >= 7 ? "good-score" : detail.result >= 4 ? "average-score" : "poor-score"}>
                                        <td>{detail.id}</td>
                                        <td>{detail.criteria}</td>
                                        <td>{detail.description}</td>
                                        <td>{detail.result}/10</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
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
                                <h3>Final Score Calculation</h3>
                                <p>The final router score is calculated using a weighted average of the four category scores:</p>
                                <div className="calculation-formula">
                                    <p>{routerData.calculationFormula}</p>
                                </div>
                                <p>For the ARRIS SURFboard CAX30, this calculation is:</p>
                                <div className="calculation-example">
                                    <p>{routerData.calculation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CAX30Router;