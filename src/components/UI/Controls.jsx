import React from 'react';

const Controls = ({ counts, setCounts }) => {
    const updateCount = (type, delta) => {
        setCounts(prev => ({
            ...prev,
            [type]: Math.max(0, prev[type] + delta)
        }));
    };

    return (
        <div className="controls-container">
            <div className="control-group">
                <h3>Protons</h3>
                <div className="buttons">
                    <button onClick={() => updateCount('protons', -1)}>-</button>
                    <span>{counts.protons}</span>
                    <button onClick={() => updateCount('protons', 1)}>+</button>
                </div>
            </div>
            <div className="control-group">
                <h3>Neutrons</h3>
                <div className="buttons">
                    <button onClick={() => updateCount('neutrons', -1)}>-</button>
                    <span>{counts.neutrons}</span>
                    <button onClick={() => updateCount('neutrons', 1)}>+</button>
                </div>
            </div>
            <div className="control-group">
                <h3>Electrons</h3>
                <div className="buttons">
                    <button onClick={() => updateCount('electrons', -1)}>-</button>
                    <span>{counts.electrons}</span>
                    <button onClick={() => updateCount('electrons', 1)}>+</button>
                </div>
            </div>
            <button className="reset-btn" onClick={() => setCounts({ protons: 1, neutrons: 0, electrons: 1 })}>Reset</button>
        </div>
    );
};

export default Controls;
