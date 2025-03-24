import React, { useState } from 'react';
import '../styles/ISPMarketShare.css';
import graphImage from '../assets/images/graph_ISPM.png';

const ISPMarketShare = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpanded(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setExpanded(false);
    };

    return (
        <>
            <div className={`isp-card ${expanded ? 'hidden-when-expanded' : ''}`}>
                <div className="card-inner">
                    <div className="graph-preview">
                        <img src={graphImage} alt="ISP Market Share Graph" />
                    </div>
                    <div className="card-content">
                        <div className="card-header">U.S. ISP Market Share</div>
                        <h2 className="card-title">Top 5 Internet Service Providers - Q4 2024</h2>
                        <button
                            className="read-more-btn"
                            onClick={handleExpand}
                        >
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>


            {expanded && (
                <div className="full-section-overlay">
                    <div className="full-section-content">
                        <button
                            className="close-button"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            ×
                        </button>

                        <div className="expanded-header">
                            <h3>U.S. ISP Market Share</h3>
                            <h4>Top 5 Internet Service Providers - Q4 2024</h4>
                        </div>

                        <div className="side-by-side-layout">

                            <div className="expanded-graph-container">
                                <img
                                    src={graphImage}
                                    alt="ISP Market Share Graph"
                                    className="graph-image"
                                />
                            </div>


                            <div className="expanded-content-container">
                                <div className="expanded-text">
                                    <p>
                                        This chart highlights the distribution of U.S. broadband subscribers among the top Internet Service
                                        Providers as of Q4 2024. Comcast and Charter continue to dominate, but notable shifts are occurring.
                                        T-Mobile has emerged as a significant competitor in the market.
                                    </p>
                                    <p>
                                        Understanding these market shifts is crucial because <strong>ISP size and infrastructure investments
                                        often directly impact the security and quality of their routers and home networking equipment</strong>.
                                    </p>
                                </div>

                                <div className="isp-data">
                                    <table className="isp-table">
                                        <thead>
                                        <tr>
                                            <th>ISP</th>
                                            <th>Subscribers (millions)</th>
                                            <th>Market Share</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Comcast</td>
                                            <td>32.1</td>
                                            <td>34.4%</td>
                                        </tr>
                                        <tr>
                                            <td>Charter</td>
                                            <td>30.2</td>
                                            <td>32.8%</td>
                                        </tr>
                                        <tr>
                                            <td>AT&T</td>
                                            <td>15.3</td>
                                            <td>16.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Verizon</td>
                                            <td>12.2</td>
                                            <td>11.7%</td>
                                        </tr>
                                        <tr>
                                            <td>T-Mobile</td>
                                            <td>6.3</td>
                                            <td>4.7%</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ISPMarketShare;