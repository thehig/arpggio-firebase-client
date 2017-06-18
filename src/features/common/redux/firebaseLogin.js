import {
  FIREBASE_LOGIN_BEGIN,
  FIREBASE_LOGIN_SUCCESS,
  FIREBASE_LOGIN_FAILURE,
  FIREBASE_LOGIN_DISMISS_ERROR,
} from './constants';

export function firebaseLogin(firebase) {
  return (dispatch) => {
    dispatch({
      type: FIREBASE_LOGIN_BEGIN,
    });

    const promise = firebase
      .login({
        provider: 'google',
        type: 'popup',
      })
      .then(() => dispatch({ type: FIREBASE_LOGIN_SUCCESS }))
      .catch(() => dispatch({ type: FIREBASE_LOGIN_FAILURE }));

    return promise;
  };
}
export function dismissFirebaseLogoutError() {
  return {
    type: FIREBASE_LOGIN_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FIREBASE_LOGIN_BEGIN:
      return state
        .set('firebaseLogoutPending', true);

    case FIREBASE_LOGIN_SUCCESS:
      return state
        .set('firebaseLogoutPending', false);

    case FIREBASE_LOGIN_FAILURE:
      return state
        .set('firebaseLogoutPending', false);

    default:
      return state;
  }
}

