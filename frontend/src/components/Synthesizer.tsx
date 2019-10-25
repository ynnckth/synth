import React from 'react';
import Keyboard from './Keyboard/Keyboard';
import {AudioServiceContext} from '../App';
import './Synthesizer.css';
import AudioService from "../services/AudioService";
import sine from '../assets/images/sine.png';
import square from '../assets/images/square.png';
import triangle from '../assets/images/triangle.png';
import sawtooth from '../assets/images/sawtooth.png';

interface IProps {
  audioService: AudioService;
}

interface IState {
  selectedWaveForm: string;
}

interface WaveForm {
  waveForm: OscillatorType;
  imagePath: string;
}

class Synthesizer extends React.Component<IProps, IState> {

  public state: IState;
  private waveForms: WaveForm[];

  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedWaveForm: 'sine',
    };
    this.waveForms = [
      {waveForm: 'sine', imagePath: sine},
      {waveForm: 'square', imagePath: square},
      {waveForm: 'triangle', imagePath: triangle},
      {waveForm: 'sawtooth', imagePath: sawtooth},
    ];
  }

  selectWaveForm(waveForm: OscillatorType): void {
    this.setState({selectedWaveForm: waveForm});
    this.props.audioService.setWaveForm(waveForm);
  }

  render() {
    return (
      <div className="synth">

        {/* Controls */}
        <svg viewBox="0 0 100 10">
          <rect x={0} y={3} width={30} height={5} fill="#E8E8E8" stroke="black" strokeWidth={0.05}/>
          {this.waveForms.map((waveForm, idx) =>
            <svg key={`waveform-${idx}`} onClick={() => this.selectWaveForm(waveForm.waveForm)}>
              <rect key={`wave-bg-${idx}`} x={idx * 7.5} y={3} width={7.5} height={5} fill={this.state.selectedWaveForm === waveForm.waveForm ? '#A9A9A9' : 'transparent'}/>
              <image key={`wave-${idx}`} x={idx * 7.5 + 1.75} y={3+0.5} xlinkHref={waveForm.imagePath} width="4" height="4"/>
            </svg>)}
        </svg>

        {/* Keyboard */}
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
