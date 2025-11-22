import React from 'react';
import { getElement, getStability, getElectronConfig, getValency } from '../../data/elements';

const InfoPanel = ({ counts, viewMode, setViewMode, showBonds, setShowBonds }) => {
    const element = getElement(counts.protons);
    const isIon = counts.protons !== counts.electrons;
    const charge = counts.protons - counts.electrons;
    const massNumber = counts.protons + counts.neutrons;
    const stability = getStability(counts.protons, counts.neutrons);
    const config = getElectronConfig(counts.electrons);
    const valency = getValency(counts.electrons);

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
                    <span>Electron Config:</span>
                    <span>{config}</span>
                </div>
                <div className="prop-row">
                    <span>Valency:</span>
                    <span>{valency > 0 ? '+' + valency : valency}</span>
                </div>
                <div className="prop-row">
                    <span>Structure:</span>
                    <span>{element.structure}</span>
                </div>
                <div className="prop-row">
                    <span>Stability:</span>
                    <span style={{ color: stability === 'Stable' ? '#92FE9D' : '#FF5555' }}>
                        {stability}
                    </span>
                </div>

                <button
                    className="view-toggle-btn"
                    onClick={() => setViewMode(prev => prev === 'atom' ? 'crystal' : 'atom')}
                    style={{
                        width: '100%',
                        marginTop: '10px',
                        padding: '8px',
                        background: 'rgba(0, 201, 255, 0.2)',
                        border: '1px solid rgba(0, 201, 255, 0.5)',
                        color: '#92FE9D',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    {viewMode === 'atom' ? 'View Crystal Structure' : 'Back to Atom'}
                </button>

                {viewMode === 'crystal' && (
                    <button
                        className="bond-toggle-btn"
                        onClick={() => setShowBonds(prev => !prev)}
                        style={{
                            width: '100%',
                            marginTop: '10px',
                            padding: '8px',
                            background: showBonds ? 'rgba(255, 200, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                            border: showBonds ? '1px solid rgba(255, 200, 0, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
                            color: showBonds ? '#FFD700' : '#AAAAAA',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        {showBonds ? 'Hide Bonds' : 'Show Bonds'}
                    </button>
                )}
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
