import {
  TOGGLE_DRAWER,
} from './constants';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('drawerOpen', !(state.get('drawerOpen')));
    default:
      return state;
  }
}
