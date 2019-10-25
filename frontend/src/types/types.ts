
export interface KeyboardKey {
  note: string;
  position: number;
  type: KeyType;
}

export enum KeyType {
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

export interface ComputerKeyMapping {
  key: string;
  keyCode: number;
  note: string;
}

export interface NoteFrequencyMapping {
  note: string;
  frequency: number;
}

export interface SynthWaveForm {
  waveForm: OscillatorType;
  imagePath: string;
}