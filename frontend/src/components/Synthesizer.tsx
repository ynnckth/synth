import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import {AudioServiceContext} from '../App';
import './Synthesizer.css';
import AudioService from "../services/AudioService";

interface IProps {
  audioService: AudioService;
}

interface IState {
  selectedWaveForm: string;
}

class Synthesizer extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedWaveForm: 'sine',
    };
    this.handleWaveFormChanged = this.handleWaveFormChanged.bind(this);
  }

  handleWaveFormChanged(event: any): void {
    this.setState({selectedWaveForm: event.target.value});
    this.props.audioService.setWaveForm(event.target.value);
  }

  render() {
    return (
      <div className="synth">
        {/* TODO: improve UI */}
        <select value={this.state.selectedWaveForm} onChange={this.handleWaveFormChanged}>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="sawtooth">Sawtooth</option>
        </select>

        <svg viewBox="0 0 1120 600" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <AudioServiceContext.Consumer>
            {audioService => <Keyboard audioService={audioService}/>}
          </AudioServiceContext.Consumer>
        </svg>
      </div>
    );
  }
}

export default Synthesizer;
