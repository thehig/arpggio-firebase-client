import { expect } from 'chai';

import {
  TOGGLE_DRAWER,
} from 'features/common/redux/constants';

import {
  toggleDrawer,
  reducer,
} from 'features/common/redux/toggleDrawer';

describe('common/redux/toggleDrawer', () => {
  it('action: toggleDrawer', () => {
    const expectedAction = {
      type: TOGGLE_DRAWER,
    };
    expect(toggleDrawer()).to.deep.equal(expectedAction);
  });

  it('reducer should handle TOGGLE_DRAWER', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TOGGLE_DRAWER }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
