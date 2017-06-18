import { expect } from 'chai';

import {
  COMMON_TEST_ACTION,
} from 'features/common/redux/constants';

import {
  commonTestAction,
  reducer,
} from 'features/common/redux/commonTestAction';

describe('common/redux/commonTestAction', () => {
  it('action: commonTestAction', () => {
    const expectedAction = {
      type: COMMON_TEST_ACTION,
    };
    expect(commonTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle COMMON_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: COMMON_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
