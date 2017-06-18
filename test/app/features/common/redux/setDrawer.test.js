import { expect } from 'chai';

import {
  SET_DRAWER,
} from 'features/common/redux/constants';

import {
  setDrawer,
  reducer,
} from 'features/common/redux/setDrawer';

describe('common/redux/setDrawer', () => {
  it('action: setDrawer', () => {
    const expectedAction = {
      type: SET_DRAWER,
    };
    expect(setDrawer()).to.deep.equal(expectedAction);
  });

  it('reducer should handle SET_DRAWER', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: SET_DRAWER }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
