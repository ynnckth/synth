import React from 'react';
import Key from "./Key";
import config from '../../app-config.json'
import {KeyboardKey} from '../../types/types';
import {getMatchingNote, isAcceptedComputerKey} from '../../Utils';
import AudioService from "../../services/AudioService";

interface IProps {
  audioService: AudioService;
}

interface ActiveNotes {
  [note: string]: boolean;
}

interface IState {
  activeNotes: ActiveNotes | undefined;
}

class Keyboard extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {
      activeNotes: {}
    };
    this.handleComputerKeyPressed = this.handleComputerKeyPressed.bind(this);
    this.handleComputerKeyReleased = this.handleComputerKeyReleased.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleComputerKeyPressed);
    window.addEventListener('keyup', this.handleComputerKeyReleased);
  }

  playNote(note: string): void {
    this.updateActiveNotes(note, true);
    this.props.audioService.playNote(note);
  }

  releaseNote(note: string): void {
    this.updateActiveNotes(note, false);
    this.props.audioService.releaseNote(note);
  }

  private handleComputerKeyPressed(event: KeyboardEvent): void {
    const playedNote = getMatchingNote(event.key);
    if (isAcceptedComputerKey(event.key) && !this.noteIsActive(playedNote)) {
      this.playNote(playedNote);
    }
  }

  private handleComputerKeyReleased(event: KeyboardEvent): void {
    if (isAcceptedComputerKey(event.key)) {
      const releasedNote = getMatchingNote(event.key);
      this.releaseNote(releasedNote);
    }
  }

  private updateActiveNotes(note: string, isActive: boolean) {
    this.setState({
      activeNotes: {
        ...this.state.activeNotes,
        [note]: isActive,
      }
    });
  }

  noteIsActive(note: string): boolean {
    return this.state.activeNotes !== undefined && this.state.activeNotes[note];
  }

  render() {
    return (
      <svg>
        <g id="octave-1">
        {(config.keyboardKeys as KeyboardKey[])
          .map(key =>
            <Key
              key={`${key.note}1`}
              note={`${key.note}1`}
              keyType={key.type}
              position={key.position}
              isPressed={this.noteIsActive(`${key.note}1`)}
              onKeyPressed={(note) => this.playNote(note)}
              onKeyReleased={(note) => this.releaseNote(note)}
            />
          )}
        </g>

        <g id="octave-2" transform="translate(560.000000, 0.000000)">
          {(config.keyboardKeys as KeyboardKey[])
            .map(key =>
              <Key
                key={`${key.note}2`}
                note={`${key.note}2`}
                keyType={key.type}
                position={key.position}
                isPressed={this.noteIsActive(`${key.note}2`)}
                onKeyPressed={(note) => this.playNote(note)}
                onKeyReleased={(note) => this.releaseNote(note)}
              />
            )}
        </g>
      </svg>
    )
  }
}

export default Keyboard;
