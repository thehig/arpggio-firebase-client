import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  FIREBASE_LOGIN_BEGIN,
  FIREBASE_LOGIN_SUCCESS,
  FIREBASE_LOGIN_FAILURE,
  FIREBASE_LOGIN_DISMISS_ERROR,
} from 'features/common/redux/constants';

import {
  firebaseLogin,
  dismissFirebaseLoginError,
  reducer,
} from 'features/common/redux/firebaseLogin';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('common/redux/firebaseLogin', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('action should handle firebaseLogin success', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: FIREBASE_LOGIN_BEGIN },
      { type: FIREBASE_LOGIN_SUCCESS, data: {} },
    ];

    return store.dispatch(firebaseLogin({ error: false }))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('action should handle firebaseLogin failure', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: FIREBASE_LOGIN_BEGIN },
      { type: FIREBASE_LOGIN_FAILURE, data: { error: 'some error' } },
    ];

    return store.dispatch(firebaseLogin({ error: true }))
      .catch(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });

  it('action should handle dismissFirebaseLoginError', () => {
    const expectedAction = {
      type: FIREBASE_LOGIN_DISMISS_ERROR,
    };
    expect(dismissFirebaseLoginError()).to.deep.equal(expectedAction);
  });

  it('reducer should handle FIREBASE_LOGIN_BEGIN', () => {
    const prevState = { firebaseLoginPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGIN_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLoginPending).to.be.true;
  });

  it('reducer should handle FIREBASE_LOGIN_SUCCESS', () => {
    const prevState = { firebaseLoginPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGIN_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLoginPending).to.be.false;
  });

  it('reducer should handle FIREBASE_LOGIN_FAILURE', () => {
    const prevState = { firebaseLoginPending: true };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGIN_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLoginPending).to.be.false;
    expect(state.firebaseLoginError).to.exist;
  });

  it('reducer should handle FIREBASE_LOGIN_DISMISS_ERROR', () => {
    const prevState = { firebaseLoginError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: FIREBASE_LOGIN_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.firebaseLoginError).to.be.null;
  });
});
