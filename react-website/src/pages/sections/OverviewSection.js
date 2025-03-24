import React from 'react';
import '../../styles/Home.css';

const OverviewSection = () => {
    return (
        <section id="overview" className="overview-section-improved">
            <div className="container">
                <div className="section-header">
                    <h2>Project Overview</h2>
                </div>
                <div className="overview-content-improved">
                    <p>
                        There is an expectation of privacy and security for marketed network devices. Routers, modems, switches, IoT devices, and other smart home devices are expected to keep PII (Personal Identifiable Information) secure. Although there are industry standards for information security, such as NIST and SOC2, routers often rely on consumers’ knowledge to apply the proper security configuration. Relying on consumers’ knowledge can lead to poor data governance, privacy concerns, vulnerabilities, and insecure networks. It is imperative that the best practices for data governance are in place to protect users’ data and keep their networks private.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;