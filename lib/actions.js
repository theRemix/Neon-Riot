import { SET_WINDOW_SIZE } from './constants';

export function getWindowSize() {
  return {
    type: SET_WINDOW_SIZE,
    windowSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
}
