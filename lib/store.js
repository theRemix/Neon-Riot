import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer';

const middleware = [thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
    process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

export const initStore = (state = initialState) => {
  return createStore(reducer, state, enhancers)
}
