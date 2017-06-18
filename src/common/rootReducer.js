import { combineReducers } from 'redux-immutable';

import { firebaseStateReducer as firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import routerReducer from './immutableRouterReducer';

import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import gamesReducer from '../features/games/redux/reducer';

import fromCommonSelectors from '../features/common/redux/selectors';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  form: formReducer,
  routing: routerReducer,

  home: homeReducer,
  common: commonReducer,
  games: gamesReducer,
});

export default rootReducer;

// Take all of the selectors in fromCommonSelectors and bind them to the assigned element of state
export const commonSelectors = Object.keys(fromCommonSelectors).reduce((previous, current) => {
  previous[current] = state => fromCommonSelectors[current](state.get('common')); // eslint-disable-line
  return previous;
}, {});


// Globally accessible Selectors that don't correspond to an action directly
export const globalSelectors = {
  // !(No Auth)
  logged: (state) => {
    const authFail = state.getIn(['firebase', 'auth']) === null;
    return !authFail;
  },
  username: (state) => {
    const auth = state.getIn(['firebase', 'auth']);
    if (auth == null) return undefined;
    const displayName = auth.displayName;
    if (!displayName) return 'Logging In...';
    return displayName;
  },
  errors: (state) => {
    const errorsList = [];

    // if (process.env.NODE_ENV === 'dev') {
    //   errorsList.push(new Error('Development Error'));
    // }

    const firebaseAuthError = state.getIn(['firebase', 'authError']);
    if (firebaseAuthError !== null) {
      errorsList.push({
        ...firebaseAuthError,
        source: 'Firebase Auth',
      });
    }

    return errorsList;
  },
};
