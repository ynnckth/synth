import React from 'react';
import './App.css';
import Synthesizer from './components/Synthesizer';
import AudioService from './services/AudioService';

const audioService = new AudioService();
export const AudioServiceContext = React.createContext<AudioService>(audioService);

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="synth">
        <AudioServiceContext.Provider value={audioService}>
          <Synthesizer/>
        </AudioServiceContext.Provider>
      </div>
    </div>
  );
};

export default App;
