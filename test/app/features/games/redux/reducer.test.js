import { expect } from 'chai';
import reducer from 'features/games/redux/reducer';

describe('feature/games/redux/reducer', () => {
  it('feature games reducer should do nothing if no matched action', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: '__unknown_action_type__' }
    );
    expect(state).to.equal(prevState);
  });

  // TODO: add global reducer test if needed.
});
