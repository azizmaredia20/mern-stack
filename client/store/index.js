import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

export * from './reducer'
export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);