
export interface Note {
  note: string;
  // TODO: add other properties
}

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