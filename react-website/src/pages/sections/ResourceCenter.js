import React from 'react';
import '../../styles/ResourceCenter.css';
import IoTImage from '../../assets/images/Resource-center/Iot.jpg';
import RouterImage from '../../assets/images/Resource-center/router.jpg';
import PrivacyImage from '../../assets/images/Resource-center/privacy.jpeg';
import NetworkImage from '../../assets/images/Resource-center/nodes.jpg';
import ScoringCriteria from '../../assets/Research-docs/scoring_criteria.md';
import EvaluationMatrix from '../../assets/Research-docs/Evaluation-Matrix-Revised.xlsx';
import CombinedRatings from '../../assets/Research-docs/Combined Ratings.xlsx';
import Methodology from '../../assets/Research-docs/Methodology.md';

const ResourceCenter = () => {
    const researchDocuments = [
        {
            title: 'Router Security Research Paper',
            description: 'Our comprehensive assessment of ISP router security',
            downloadSize: '1.2 MB',
            format: 'MD',
            image: RouterImage,
            file: ScoringCriteria,
            filename: 'scoring_criteria.md'
        },
        {
            title: 'Evaluation Matrix',
            description: 'Detailed scoring spreadsheet for all evaluated routers',
            downloadSize: '450 KB',
            format: 'XLSX',
            image: NetworkImage,
            file: EvaluationMatrix,
            filename: 'Evaluation-Matrix-Revised.xlsx'
        },
        {
            title: 'Combined Router Ratings',
            description: 'Summary of all router evaluations and final scores',
            downloadSize: '320 KB',
            format: 'XLSX',
            image: PrivacyImage,
            file: CombinedRatings,
            filename: 'Combined-Ratings.xlsx'
        },
        {
            title: 'Methodology & Scoring Criteria',
            description: 'Our evaluation framework and detailed metrics',
            downloadSize: '95 KB',
            format: 'MD',
            image: IoTImage,
            file: Methodology,
            filename: 'Methodology.md'
        }
    ];

    const handleDownload = (fileURL, filename) => {
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadAll = () => {
        researchDocuments.forEach((doc, index) => {
            setTimeout(() => {
                handleDownload(doc.file, doc.filename);
            }, index * 500);
        });
    };

    return (
        <section className="resource-section" id="resources">
            <div className="resource-container">
                <div className="resource-header">
                    <h2 className="section-title">Resource Center</h2>
                    <p className="section-description">
                        Access our research documents and evaluation materials.
                    </p>
                </div>

                <div className="resource-grid">
                    {researchDocuments.map((doc, index) => (
                        <div
                            key={index}
                            className="resource-card"
                            onClick={() => handleDownload(doc.file, doc.filename)}
                        >
                            <div className="resource-image">
                                <img src={doc.image} alt={doc.title} />
                            </div>
                            <div className="resource-content">
                                <h3 className="resource-title">{doc.title}</h3>
                                <p className="resource-description">{doc.description}</p>
                                <div className="resource-meta">
                                    {doc.format} • {doc.downloadSize}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="resource-footer">
                    <button className="download-all-btn" onClick={handleDownloadAll}>
                        DOWNLOAD ALL RESEARCH MATERIALS →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ResourceCenter;