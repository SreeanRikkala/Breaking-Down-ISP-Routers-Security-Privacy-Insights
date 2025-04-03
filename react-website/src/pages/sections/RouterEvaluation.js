import React, { useState } from 'react';
import '../../styles/RouterEvaluation.css';
import CoxRouter from '../../components/Router-info/CoxRouter';

const RouterEvaluation = () => {
    const [selectedRouter, setSelectedRouter] = useState('cox');

    const routerOptions = [
        { id: 'cox', name: 'Cox Panoramic Wi-Fi Gateway' },
        { id: 'comcast', name: 'R2', disabled: true, label: 'after M-2' },
        { id: 'att', name: 'R3', disabled: true, label: 'after M-2' },
        { id: 'verizon', name: 'R4', disabled: true, label: 'after M-2' }
    ];

    return (
        <div className="router-evaluation-fullwidth">
            <div className="page-header-container">
                    <h1 className="page-title">Detailed security evaluations of popular ISP-provided routers</h1>
            </div>

            <div className="router-selector-container">
                <div className="router-buttons">
                    {routerOptions.map(router => (
                        <button
                            key={router.id}
                            className={`router-button ${selectedRouter === router.id ? 'active' : ''} ${router.disabled ? 'disabled' : ''}`}
                            onClick={() => !router.disabled && setSelectedRouter(router.id)}
                            disabled={router.disabled}
                        >
                            {router.name}
                            {router.disabled && router.label && (
                                <span className="router-label">{router.label}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {selectedRouter === 'cox' && (
                <>
                    <div className="router-title-container">
                        <h2 className="router-title">Cox Router Security Evaluation</h2>
                        <div className="router-subtitle-container">
                            <h3 className="router-model">Panoramic Wi-Fi Gateway / Technicolor CGM4981</h3>
                            <span className="provider-badge">Cox</span>
                        </div>
                    </div>

                    <CoxRouter />
                </>
            )}
        </div>
    );
};

export default RouterEvaluation;