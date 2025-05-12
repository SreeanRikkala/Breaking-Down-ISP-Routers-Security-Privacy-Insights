import React from 'react';
import '../styles/M-and-share.css';
import ISPMarketShare from './ISPMarketShare';

const MAndShare = () => {
    return (
        <section className="product-router-section">
            <div className="section-header">
                <h2>Router Security Hub</h2>
            </div>

            <div className="product-grid">
                <div className="product-row">
                    {/* Methodology Card */}
                    <div className="product-card methodology-card dark" style={{ backgroundColor: "#2d2d2d" }}>
                        <div className="product-info">
                            <h3>Evaluation Methodology</h3>
                            <p className="card-description">How we assess router security</p>

                            <div className="methodology-categories">
                                <div className="methodology-category">
                                    <span className="category-name">Security (40%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Performance (30%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Usability (20%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Cost (10%)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ISPMarketShare />
                </div>

            </div>
        </section>
    );
};

export default MAndShare;