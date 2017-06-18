import {
  SET_DRAWER,
} from './constants';

export function setDrawer(isOpen) {
  return {
    type: SET_DRAWER,
    payload: {
      value: isOpen,
    }
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_DRAWER:
      return {
        ...state,
        drawerOpen: action.payload.value,
      };

    default:
      return state;
  }
}

export function getDrawerState(state) {
  return state.drawerOpen;
}
