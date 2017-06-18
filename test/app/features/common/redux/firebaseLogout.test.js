import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  FIREBASE_LOGOUT_BEGIN,
  FIREBASE_LOGOUT_SUCCESS,
  FIREBASE_LOGOUT_FAILURE,
  FIREBASE_LOGOUT_DISMISS_ERROR,
} from 'features/common/redux/constants';

import {
  firebaseLogout,
  dismissFirebaseLogoutError,
  reducer,
} from 'features/common/redux/firebaseLogout';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('common/redux/firebaseLogout', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('action should handle firebaseLogout success', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: FIREBASE_LOGOUT_BEGIN },
      { type: FIREBASE_LOGOUT_SUCCESS, data: {} },
    ];

    return store.dispatch(firebaseLogout({ error: false }))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('action should handle firebaseLogout failure', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: FIREBASE_LOGOUT_BEGIN },
      { type: FIREBASE_LOGOUT_FAILURE, data: { error: 'some error' } },
    ];

    return store.dispatch(firebaseLogout({ error: true }))
      .catch(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('action should handle dismissFirebaseLogoutError', () => {
    const expectedAction = {
      type: FIREBASE_LOGOUT_DISMISS_ERROR,
    };
    expect(dismissFirebaseLogoutError()).to.deep.equal(expectedAction);
  });

  it('reducer should handle FIREBASE_LOGOUT_BEGIN', () => {
    const prevState = { firebaseLogoutPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGOUT_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLogoutPending).to.be.true;
  });

  it('reducer should handle FIREBASE_LOGOUT_SUCCESS', () => {
    const prevState = { firebaseLogoutPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGOUT_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLogoutPending).to.be.false;
  });

  it('reducer should handle FIREBASE_LOGOUT_FAILURE', () => {
    const prevState = { firebaseLogoutPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGOUT_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLogoutPending).to.be.false;
    expect(state.firebaseLogoutError).to.exist;
  });

  it('reducer should handle FIREBASE_LOGOUT_DISMISS_ERROR', () => {
    const prevState = { firebaseLogoutError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGOUT_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLogoutError).to.be.null;
  });
});
