import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  drawerOpen: false,
  firebaseLoginPending: false,
  firebaseLogoutPending: false,
});

export default initialState;
