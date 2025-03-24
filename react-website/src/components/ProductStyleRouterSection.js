import React from 'react';
import '../styles/ProductStyleRouterSection.css';
import ISPMarketShare from './ISPMarketShare';

const ProductStyleRouterSection = () => {
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
                                    <span className="category-name">Security (50%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Performance (25%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Usability 15-20% (17%)</span>
                                </div>
                                <div className="methodology-category">
                                    <span className="category-name">Cost (8%)</span>
                                </div>
                            </div>

                            <button className="read-more-btn">VIEW METHODOLOGY</button>
                        </div>
                    </div>

                    <ISPMarketShare />
                </div>

                <div className="product-row">
                    {/* Empty Card 1 */}
                    <div className="product-card empty-card" style={{ backgroundColor: "#f1ff73" }}>
                        <div className="empty-card-content">
                            <span>Empty Card</span>
                        </div>
                    </div>

                    {/* Empty Card 2 */}
                    <div className="product-card empty-card" style={{ backgroundColor: "#e0e0e0" }}>
                        <div className="empty-card-content">
                            <span>Empty Card</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductStyleRouterSection;