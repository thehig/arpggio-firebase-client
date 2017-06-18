import {
  HOME_TEST_ACTION,
} from './constants';

export function homeTestAction() {
  return {
    type: HOME_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
