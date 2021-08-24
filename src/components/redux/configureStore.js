import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
  // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  )
}