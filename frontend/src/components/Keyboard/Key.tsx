import React from 'react';
import {KeyType} from '../../types/types'

interface KeyProps {
  note: string;
  keyType: KeyType;
  position: number;
  isPressed: boolean;

  onKeyPressed: (note: string) => void;
  onKeyReleased: (note: string) => void;
}

const getKeyColor = (keyType: KeyType, isPressed: boolean): string => {
  if (keyType === KeyType.WHITE) {
    return isPressed
      ? '#f7f7f7'
      : '#FFFFF7';
  } else {
    return isPressed
      ? 'black'
      : '#4B4B4B';
  }
};

const Key: React.FC<KeyProps> = (props: KeyProps) => {
  const {keyType, position, isPressed, note, onKeyPressed, onKeyReleased} = props;
  return (
    <svg>
      <rect
        stroke={keyType === KeyType.WHITE ? '#555555' : '#979797'}
        fill={getKeyColor(keyType, isPressed)}
        x={position}
        y={0}
        width={keyType === KeyType.WHITE ? 80 : 40}
        height={keyType === KeyType.WHITE ? 400 : 280}
        onMouseDown={() => onKeyPressed(note)}
        onMouseUp={() => onKeyReleased(note)}>
      </rect>
    </svg>
  );
};

export default Key;
