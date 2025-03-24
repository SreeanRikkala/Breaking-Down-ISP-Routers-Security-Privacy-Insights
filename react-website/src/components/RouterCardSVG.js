import React from 'react';


const NetgearSVG = () => (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="240" height="90" rx="4" fill="#000" />
        <circle cx="80" cy="45" r="12" fill="#4f4" />
        <circle cx="120" cy="45" r="12" fill="#44f" />
        <circle cx="160" cy="45" r="12" fill="#f44" />
        <rect x="200" cy="45" width="20" height="20" rx="2" fill="#333" />
        <rect x="20" y="110" width="200" height="10" rx="3" fill="#333" />
        <g fill="#4f4" transform="translate(20, 140)">
            <circle cx="0" cy="0" r="3" />
            <circle cx="20" cy="0" r="3" />
            <circle cx="40" cy="0" r="3" />
            <circle cx="60" cy="0" r="3" />
            <circle cx="80" cy="0" r="3" />
            <circle cx="100" cy="0" r="3" />
        </g>
    </svg>
);

const AsusSVG = () => (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="0" width="200" height="60" rx="30" fill="#333" />
        <rect x="60" y="40" width="120" height="100" rx="10" fill="#222" />
        <rect x="80" y="60" width="80" height="60" rx="4" fill="#333" />
        <circle cx="120" cy="90" r="25" fill="#222" />
        <circle cx="80" cy="75" r="6" fill="#44f" />
        <circle cx="160" cy="75" r="6" fill="#44f" />
        <g fill="#4f4" transform="translate(60, 130)">
            <circle cx="0" cy="0" r="3" />
            <circle cx="20" cy="0" r="3" />
            <circle cx="40" cy="0" r="3" />
            <circle cx="60" cy="0" r="3" />
            <circle cx="80" cy="0" r="3" />
            <circle cx="100" cy="0" r="3" />
        </g>
    </svg>
);

const TPLinkSVG = () => (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="10" width="100" height="100" rx="50" fill="#333" />
        <circle cx="120" cy="60" r="35" fill="#222" />
        <circle cx="120" cy="60" r="20" fill="#444" />
        <circle cx="80" cy="40" r="8" fill="#4f4" />
        <circle cx="160" cy="40" r="8" fill="#4f4" />
    </svg>
);

const UbiquitiSVG = () => (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="80" r="70" fill="#333" />
        <circle cx="120" cy="80" r="60" fill="#222" />
        <circle cx="120" cy="80" r="50" fill="#444" />
        <circle cx="120" cy="80" r="30" fill="#222" />
        <path d="M120,50 L125,75 L150,80 L125,85 L120,110 L115,85 L90,80 L115,75 Z" fill="#4f4" />
    </svg>
);

const SecurityGraphSVG = () => (
    <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4f4', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#4f4', stopOpacity: 0.2 }} />
        </linearGradient>
        <rect x="0" y="0" width="240" height="160" fill="#f5f5f5" />
        <line x1="20" y1="20" x2="20" y2="140" stroke="#ccc" strokeWidth="1" />
        <line x1="20" y1="140" x2="220" y2="140" stroke="#ccc" strokeWidth="1" />

        <path d="M20,120 L60,100 L100,110 L140,70 L180,90 L220,40" stroke="#4f4" strokeWidth="2" fill="none" />

        <path d="M20,120 L60,100 L100,110 L140,70 L180,90 L220,40 L220,140 L20,140 Z" fill="url(#grad)" />

        <circle cx="60" cy="100" r="4" fill="#4f4" />
        <circle cx="100" cy="110" r="4" fill="#4f4" />
        <circle cx="140" cy="70" r="4" fill="#4f4" />
        <circle cx="180" cy="90" r="4" fill="#4f4" />
        <circle cx="220" cy="40" r="4" fill="#4f4" />
    </svg>
);

export { NetgearSVG, AsusSVG, TPLinkSVG, UbiquitiSVG, SecurityGraphSVG };