import React from 'react';
import '../styles/RouterCard.css';

const RouterCard = ({ router }) => {
    const { name, provider, securityScore, usabilityScore, costScore, strengths, weaknesses, image } = router;

    const overallScore = ((securityScore * 0.5) + (usabilityScore * 0.3) + (costScore * 0.2)).toFixed(1);

    // Function to determine score color
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
            <div className="router-header">
                <h3>{name}</h3>
                <span className="provider-badge">{provider}</span>
            </div>

            <div className="score-grid">
                <div className="score-item">
                    <span className="score-label">Security</span>
                    <span className={`score-value ${getScoreColor(securityScore)}`}>
            {securityScore}/10
          </span>
                </div>
                <div className="score-item">
                    <span className="score-label">Usability</span>
                    <span className={`score-value ${getScoreColor(usabilityScore)}`}>
            {usabilityScore}/10
          </span>
                </div>
                <div className="score-item">
                    <span className="score-label">Cost</span>
                    <span className={`score-value ${getScoreColor(costScore)}`}>
            {costScore}/10
          </span>
                </div>
                <div className="score-item overall">
                    <span className="score-label">Overall</span>
                    <span className={`score-value ${getScoreColor(overallScore)}`}>
            {overallScore}/10
          </span>
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
    );
};

export default RouterCard;