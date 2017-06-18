import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';

import fromCommonSelectors from '../features/common/redux/selectors';
import gamesReducer from '../features/games/redux/reducer';

const rootReducer = combineReducers({
  firebase,     // Note: This is a firebase object
  routing: routerReducer,
  home: homeReducer,
  common: commonReducer,
  games: gamesReducer,
});

export default rootReducer;

// Take all of the selectors in fromCommonSelectors and bind them to the assigned element of state
export const commonSelectors = Object.keys(fromCommonSelectors).reduce((previous, current) => {
  previous[current] = state => fromCommonSelectors[current](state.common); // eslint-disable-line
  return previous;
}, {});


// Globally accessible Selectors that don't correspond to an action directly
export const globalSelectors = {
  // !(No Auth)
  logged: (state) => {
    const authFail = !state ||
                     !state.firebase ||
                     !state.firebase.get('auth') ||
                     state.firebase.get('auth') === null;
    // console.log('AuthFail', authFail);
    return !authFail;
  },
  username: (state) => {
    const auth = state.firebase.get('auth');
    if (auth == null) return undefined;
    if (!auth.displayName) return 'Logging In...';
    return auth.displayName;
  }
};
