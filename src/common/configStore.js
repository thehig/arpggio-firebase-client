import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import fbConfig from '../../firebase.config';

// console.log('fbConfig', fbConfig);

const middlewares = [thunk];
let devToolsExtension = f => f;

/* istanbul ignore if  */
if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger');

  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    devToolsExtension
  ));
  /* istanbul ignore if  */
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
