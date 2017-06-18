import { expect } from 'chai';

import {
  GAMES_TEST_ACTION,
} from 'features/games/redux/constants';

import {
  gamesTestAction,
  reducer,
} from 'features/games/redux/gamesTestAction';

describe('games/redux/gamesTestAction', () => {
  it('action: gamesTestAction', () => {
    const expectedAction = {
      type: GAMES_TEST_ACTION,
    };
    expect(gamesTestAction()).to.deep.equal(expectedAction);
  });

  it('reducer should handle GAMES_TEST_ACTION', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: GAMES_TEST_ACTION }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
