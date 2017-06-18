import { expect } from 'chai';

import {
  HOME_TEST_ACTION,
} from 'features/home/redux/constants';

import {
  homeTestAction,
  reducer,
} from 'features/home/redux/homeTestAction';

describe('home/redux/homeTestAction', () => {
  it('action: homeTestAction', () => {
    const expectedAction = {
      type: HOME_TEST_ACTION,
    };
    expect(homeTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle HOME_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
