import React from 'react';
import '../styles/RouterCard.css';

const RouterCard = ({ router }) => {
    const { name, provider, securityScore, usabilityScore, costScore, strengths, weaknesses, image } = router;

    const overallScore = ((securityScore * 0.5) + (usabilityScore * 0.3) + (costScore * 0.2)).toFixed(1);


    const getScoreColor = (score) => {
        if (score >= 8) return 'green';
        if (score >= 6.5) return 'orange';
        return 'red';
    };

    return (
        <div className="router-card">
            <div className="router-image">
                <img src={image || require('../assets/images/Public1.jpg')} alt={name} />
            </div>
            <div className="router-content">
                <div className="router-header">
                    <h3>{name}</h3>
                    <span className="provider-badge">{provider}</span>
                </div>

                <div className="score-grid">
                    <div className="score-item">
                        <div className="score-label-container">
                            <span className="score-label">Security</span>
                            <span className={`score-value ${getScoreColor(securityScore)}`}>
                                {securityScore}/10
                            </span>
                        </div>
                        <div className="score-bar">
                            <div
                                className="score-fill"
                                style={{
                                    width: `${securityScore * 10}%`,
                                    backgroundColor: getScoreColor(securityScore)
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="score-item">
                        <div className="score-label-container">
                            <span className="score-label">Usability</span>
                            <span className={`score-value ${getScoreColor(usabilityScore)}`}>
                                {usabilityScore}/10
                            </span>
                        </div>
                        <div className="score-bar">
                            <div
                                className="score-fill"
                                style={{
                                    width: `${usabilityScore * 10}%`,
                                    backgroundColor: getScoreColor(usabilityScore)
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="score-item">
                        <div className="score-label-container">
                            <span className="score-label">Cost</span>
                            <span className={`score-value ${getScoreColor(costScore)}`}>
                                {costScore}/10
                            </span>
                        </div>
                        <div className="score-bar">
                            <div
                                className="score-fill"
                                style={{
                                    width: `${costScore * 10}%`,
                                    backgroundColor: getScoreColor(costScore)
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="score-item overall">
                        <div className="score-label-container">
                            <span className="score-label">Overall</span>
                            <span className={`score-value ${getScoreColor(overallScore)}`}>
                                {overallScore}/10
                            </span>
                        </div>
                        <div className="score-bar">
                            <div
                                className="score-fill"
                                style={{
                                    width: `${overallScore * 10}%`,
                                    backgroundColor: getScoreColor(overallScore)
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="router-details">
                    <div className="strengths">
                        <h4>Strengths</h4>
                        <ul>
                            {strengths.map((strength, index) => (
                                <li key={index}>{strength}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="weaknesses">
                        <h4>Weaknesses</h4>
                        <ul>
                            {weaknesses.map((weakness, index) => (
                                <li key={index}>{weakness}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className="detail-button">View Full Details</button>
            </div>
        </div>
    );
};

export default RouterCard;