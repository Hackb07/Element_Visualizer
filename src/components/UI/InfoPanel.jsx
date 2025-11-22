import React from 'react';
import { getElement } from '../../data/elements';

const InfoPanel = ({ counts }) => {
    const element = getElement(counts.protons);
    const isIon = counts.protons !== counts.electrons;
    const charge = counts.protons - counts.electrons;
    const massNumber = counts.protons + counts.neutrons;

    return (
        <div className="info-panel">
            <div className="element-header" style={{ borderColor: element.cpk }}>
                <div className="symbol" style={{ color: element.cpk }}>{element.symbol}</div>
                <div className="name">
                    <h2>{element.name}</h2>
                    <span className="atomic-number">Atomic #: {element.atomicNumber}</span>
                </div>
            </div>

            <div className="properties">
                <div className="prop-row">
                    <span>Mass Number:</span>
                    <span>{massNumber}</span>
                </div>
                <div className="prop-row">
                    <span>Charge:</span>
                    <span className={charge > 0 ? 'pos' : charge < 0 ? 'neg' : 'neutral'}>
                        {charge > 0 ? '+' + charge : charge}
                    </span>
                </div>
                <div className="prop-row">
                    <span>Status:</span>
                    <span>{isIon ? 'Ion' : 'Neutral Atom'}</span>
                </div>
            </div>

            <div className="details">
                <h3>Description</h3>
                <p>{element.desc}</p>

                <h3>Uses (Advantages)</h3>
                <p>{element.uses}</p>

                <h3>Hazards (Disadvantages)</h3>
                <p>{element.hazards}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
