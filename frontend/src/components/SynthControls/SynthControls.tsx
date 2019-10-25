import React from 'react';
import AudioService from "../../services/AudioService";
import sine from '../../assets/images/sine.png';
import square from '../../assets/images/square.png';
import triangle from '../../assets/images/triangle.png';
import sawtooth from '../../assets/images/sawtooth.png';
import {SynthWaveForm} from '../../types/types';

interface IProps {
  audioService: AudioService;
}

interface IState {
  selectedWaveForm: OscillatorType;
}

class SynthControls extends React.Component<IProps, IState> {

  public state: IState;
  private waveForms: SynthWaveForm[];

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
      <svg viewBox="0 0 100 10">

        {/* Wave form selection */}
        <rect x={0} y={3} width={30} height={5} fill="#E8E8E8" stroke="black" strokeWidth={0.05}/>
        {this.waveForms.map((waveForm, idx) =>
          <svg key={`waveform-${idx}`} onClick={() => this.selectWaveForm(waveForm.waveForm)}>
            <rect key={`wave-bg-${idx}`} x={idx * 7.5} y={3} width={7.5} height={5}
                  fill={this.state.selectedWaveForm === waveForm.waveForm ? '#A9A9A9' : 'transparent'}/>
            <image key={`wave-${idx}`} x={idx * 7.5 + 1.75} y={3 + 0.5} xlinkHref={waveForm.imagePath} width="4"
                   height="4"/>
          </svg>)}
      </svg>
    );
  }
}

export default SynthControls;
