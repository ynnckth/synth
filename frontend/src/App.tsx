import React from 'react';
import './App.css';
import Synthesizer from './components/Synthesizer';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="synth">
        <Synthesizer/>
      </div>
    </div>
  );
};

export default App;
