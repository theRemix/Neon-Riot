import { SET_WINDOW_SIZE } from './constants';

export const initialState = {
  windowSize: {
    width: 0,
    height: 0,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.windowSize,
      };
    default:
      return state
  }
};
