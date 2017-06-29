import { SET_WINDOW_SIZE, LOCATION_HASH_UPDATED } from './constants';
import * as ReactGA from 'react-ga';

export function getWindowSize() {
  return {
    type: SET_WINDOW_SIZE,
    windowSize: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
}

export function locationHashUpdated(hash) {
  window.location.hash = hash;
  ReactGA.pageview(hash);

  return {
    type: LOCATION_HASH_UPDATED,
    hash
  };
}
