import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import {AudioServiceContext} from '../App';

const Synthesizer: React.FC = () => {
  return (
    <svg viewBox="0 0 1120 600" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <AudioServiceContext.Consumer>
        {audioService => <Keyboard audioService={audioService}/>}
      </AudioServiceContext.Consumer>
    </svg>
  );
};

export default Synthesizer;
