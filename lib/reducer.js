import { SET_WINDOW_SIZE, UPDATE_INPUT } from './constants';

export const initialState = {
  windowSize: {
    width: 0,
    height: 0,
  },
  input: 'hello world',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.windowSize,
      };
    case UPDATE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state
  }
};
