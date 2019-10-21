import config from '../app-config.json';
import {NoteFrequencyMapping} from '../types/types';


export default class AudioService {

  audioContext: AudioContext;
  noteOscillators: Map<string, OscillatorNode | undefined>; // note => oscillator
  gain: GainNode;
  oscillatorWaveType: OscillatorType;

  constructor() {
    // @ts-ignore
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
    this.oscillatorWaveType = 'sine'; // TODO: make configurable
    this.gain = this.audioContext.createGain();
    this.gain.gain.value = 0.2; // TODO: make configurable
    this.gain.connect(this.audioContext.destination);
    this.noteOscillators = new Map<string, OscillatorNode>();
  }

  setWaveForm(waveForm: OscillatorType): void {
    this.oscillatorWaveType = waveForm;
  }

  playNote(note: string): void {
    const noteFrequency = (config.noteFrequencyMappings as NoteFrequencyMapping[])
      .filter(m => m.note === note)[0].frequency;

    if (!noteFrequency) {
      return;
    }

    const oscillator = this.audioContext.createOscillator();
    oscillator.type = this.oscillatorWaveType;
    oscillator.frequency.value = noteFrequency;
    oscillator.connect(this.gain);
    oscillator.start();
    this.noteOscillators.set(note, oscillator);
  }

  releaseNote(note: string): void {
    const oscillator = this.noteOscillators.get(note);
    if (!oscillator) {
      return;
    }

    oscillator.disconnect();
    this.noteOscillators.set(note, undefined);
  }

  releaseAllNotes(): void {
    (config.noteFrequencyMappings as NoteFrequencyMapping[])
      .forEach(m => this.releaseNote(m.note));
  }
}