import { SET_WIDTH } from './constants';

const initialState = {
  windowWidth: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        windowWidth: action.windowWidth,
      };
    default:
      return state
  }
};
