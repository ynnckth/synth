import React from 'react';
import './App.css';
import Synthesizer from './components/Synthesizer';
import AudioService from './services/AudioService';

const audioService = new AudioService();
export const AudioServiceContext = React.createContext<AudioService>(audioService);

const App: React.FC = () => {
  return (
    <div className="app">
      <AudioServiceContext.Provider value={audioService}>
        <AudioServiceContext.Consumer>
          {audioService => <Synthesizer audioService={audioService}/>}
        </AudioServiceContext.Consumer>
      </AudioServiceContext.Provider>
    </div>
  );
};

export default App;
