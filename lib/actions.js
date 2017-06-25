import { SET_WIDTH } from './constants';

export function getWindowWidth() {
  return {
    type: SET_WIDTH,
    windowWidth: window.innerWidth,
  };
}
