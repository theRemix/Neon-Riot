import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer';

const middleware = [thunk];

const enhancers = compose(
  applyMiddleware(...middleware),
  process.env.CLIENT &&
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, enhancers)
}
