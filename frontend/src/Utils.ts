import config from './app-config.json';
import {ComputerKeyMapping} from "./types/types";


export const isAcceptedComputerKey = (computerKey: string) => {
  return (config.computerKeyMappings as ComputerKeyMapping[])
    .map(key => key.key).includes(computerKey);
};

export const getMatchingNote = (computerKey: string): string => {
  const foundKey = (config.computerKeyMappings as ComputerKeyMapping[])
    .find(compKey => compKey.key === computerKey);
  return foundKey ? foundKey.note : '';
};
