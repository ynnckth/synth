import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import {AudioServiceContext} from '../App';
import './Synthesizer.css';
import SynthControls from './SynthControls/SynthControls';


const Synthesizer: React.FC = () => {
  return (
    <div className="synth">
      <AudioServiceContext.Consumer>
        {audioService => <SynthControls audioService={audioService}/>}
      </AudioServiceContext.Consumer>

      <AudioServiceContext.Consumer>
        {audioService => <Keyboard audioService={audioService}/>}
      </AudioServiceContext.Consumer>
    </div>
  );
};

export default Synthesizer;