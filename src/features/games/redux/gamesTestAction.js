import {
  GAMES_TEST_ACTION,
} from './constants';

export function gamesTestAction() {
  return {
    type: GAMES_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case GAMES_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
