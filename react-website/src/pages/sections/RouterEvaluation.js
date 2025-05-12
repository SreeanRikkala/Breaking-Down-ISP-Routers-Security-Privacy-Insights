import React, { useState } from 'react';
import '../../styles/RouterEvaluation.css';
import CAX30Router from '../../components/Router-info/CAX30';
import TPLinkAxe300Router from '../../components/Router-info/TP-Link-AXE300';
import ArrisG34Router from '../../components/Router-info/Arris-G34';
import ArrisG54ChartRouter from '../../components/Router-info/Arris-G54-Charter';
import ArrisG54ComcastRouter from '../../components/Router-info/Arris-G54-Comcast';
import AsusCmax6000Router from '../../components/Router-info/Asus-CMAX6000';
import CbrCoxRouter from '../../components/Router-info/CBR750-Router';
import MG8702Router from '../../components/Router-info/MG8702';
import MotorolaMT8733Router from '../../components/Router-info/Motorolla-MT8733';

const RouterEvaluation = () => {
    const [selectedRouter, setSelectedRouter] = useState('cbr750');

    const routerOptions = [
        { id: 'cbr750', name: 'Cox CBR750' },
        { id: 'tplink', name: 'TP-Link Archer AXE300' },
        { id: 'arris-g34', name: 'Arris G34' },
        { id: 'arris-g54-char', name: 'Arris G54 Charter' },
        { id: 'arris-g54-com', name: 'Arris G54 Comcast' },
        { id: 'asus-cm6000', name: 'ASUS CMAX6000' },
        { id: 'cax30', name: 'NETGEAR CAX30' },
        { id: 'mg8702', name: 'Motorola MG8702AC' },
        { id: 'motorola-mt8733', name: 'Motorola MT8733' }
    ];

    const getRouterComponent = () => {
        switch (selectedRouter) {
            case 'cbr750':
                return <CbrCoxRouter />;
            case 'tplink':
                return <TPLinkAxe300Router />;
            case 'arris-g34':
                return <ArrisG34Router />;
            case 'arris-g54-char':
                return <ArrisG54ChartRouter />;
            case 'arris-g54-com':
                return <ArrisG54ComcastRouter />;
            case 'asus-cm6000':
                return <AsusCmax6000Router />;
            case 'cax30':
                return <CAX30Router />;
            case 'mg8702':
                return <MG8702Router />;
            case 'motorola-mt8733':
                return <MotorolaMT8733Router />;
            default:
                return <CbrCoxRouter />;
        }
    };

    const getRouterTitle = () => {
        const router = routerOptions.find(r => r.id === selectedRouter);
        return router ? router.name : 'Router Security Evaluation';
    };

    return (
        <div id="router-evaluation" className="router-evaluation-fullwidth">
            <div className="page-header-container">
                <h1 className="page-title">Detailed security evaluations of popular routers</h1>
            </div>

            <div className="router-selector-container">
                <div className="router-buttons">
                    {routerOptions.map(router => (
                        <button
                            key={router.id}
                            className={`router-button ${selectedRouter === router.id ? 'active' : ''}`}
                            onClick={() => setSelectedRouter(router.id)}
                        >
                            {router.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="router-title-container">
                <h2 className="router-title">{getRouterTitle()} Security Evaluation</h2>
            </div>

            {getRouterComponent()}
        </div>
    );
};

export default RouterEvaluation;