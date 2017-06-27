import { SET_WINDOW_SIZE, UPDATE_INPUT, LOCATION_HASH_UPDATED } from './constants';

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

export function locationHashUpdated() {
  return {
    type: LOCATION_HASH_UPDATED,
    hash: window.location.hash.substr(1)
  };
}
