import {
  FIREBASE_LOGOUT_BEGIN,
  FIREBASE_LOGOUT_SUCCESS,
  FIREBASE_LOGOUT_FAILURE,
  FIREBASE_LOGOUT_DISMISS_ERROR,
} from './constants';

export function firebaseLogout(firebase) {
  return (dispatch) => {
    dispatch({
      type: FIREBASE_LOGOUT_BEGIN,
    });

    const promise = firebase
      .logout()
      .then(() => dispatch({ type: FIREBASE_LOGOUT_SUCCESS }))
      .catch(() => dispatch({ type: FIREBASE_LOGOUT_FAILURE }));

    return promise;
  };
}
export function dismissFirebaseLogoutError() {
  return {
    type: FIREBASE_LOGOUT_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FIREBASE_LOGOUT_BEGIN:
      return state
        .set('firebaseLogoutPending', true);

    case FIREBASE_LOGOUT_SUCCESS:
      return state
        .set('firebaseLogoutPending', false);

    case FIREBASE_LOGOUT_FAILURE:
      return state
        .set('firebaseLogoutPending', false);

    default:
      return state;
  }
}
