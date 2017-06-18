import initialState from './initialState';
import { reducer as commonTestAction } from './commonTestAction';
import { reducer as setDrawer } from './setDrawer';
import { reducer as toggleDrawer } from './toggleDrawer';

const reducers = [
  commonTestAction,
  setDrawer,
  toggleDrawer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
