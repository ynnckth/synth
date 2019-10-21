import React from 'react';
import Key from "./Key";
import config from '../../app-config.json'
import {KeyboardKey} from "../../types/types";

interface IProps {
}

interface IState {
  [note: string]: boolean;
}

class Keyboard extends React.Component<IProps, IState> {

  public state: IState;

  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  noteIsActive(note: string) {
    return false;
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
              onKeyPressed={() => {}}
              onKeyReleased={() => {}}
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
                onKeyPressed={() => {}}
                onKeyReleased={() => {}}
              />
            )}
        </g>
      </svg>
    )
  }
}

export default Keyboard;
