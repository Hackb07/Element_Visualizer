import React, { useState } from 'react';
import Scene from './components/Scene';
import Controls from './components/UI/Controls';
import InfoPanel from './components/UI/InfoPanel';
// import './App.css'; // Removed to avoid conflicts with index.css

function App() {
  const [counts, setCounts] = useState({
    protons: 1,
    neutrons: 0,
    electrons: 1
  });

  return (
    <div className="app-container">
      <div className="scene-container">
        <Scene {...counts} />
      </div>
      <div className="ui-overlay">
        <h1 className="app-title">Element Builder 3D</h1>
        <div className="main-layout">
          <InfoPanel counts={counts} />
          <Controls counts={counts} setCounts={setCounts} />
        </div>
      </div>
    </div>
  );
}

export default App;
