import { SET_WINDOW_SIZE, UPDATE_INPUT, LOCATION_HASH_UPDATED } from './constants';

export const initialState = {
  windowSize: {
    width: 0,
    height: 0,
  },
  hash: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.windowSize,
      };
    case UPDATE_INPUT:
      window.location.hash = action.input;
      return {
        ...state
      };
    case LOCATION_HASH_UPDATED:
      return {
        ...state,
        hash: action.hash,
      };
    default:
      return state
  }
};
