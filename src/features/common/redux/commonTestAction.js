import {
  COMMON_TEST_ACTION,
} from './constants';

export function commonTestAction() {
  return {
    type: COMMON_TEST_ACTION,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
