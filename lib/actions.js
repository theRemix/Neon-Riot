import { SET_WINDOW_SIZE, UPDATE_INPUT } from './constants';

export function getWindowSize() {
  return {
    type: SET_WINDOW_SIZE,
    windowSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
}

export function updateInput(input) {
  return {
    type: UPDATE_INPUT,
    input,
  };
}
