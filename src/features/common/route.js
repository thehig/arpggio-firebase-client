import {
  LoginPage,
} from './index';

// import { globalSelectors } from '../../common/rootReducer';

const redirectIfAuthed = (nextState, replace, callback) => {
  // const isLoggedIn = globalSelectors.logged(nextState);
  // console.log('redirectIfAuthed', isLoggedIn);

  // if (isLoggedIn) {
  //   replace('/home');
  // }
  return callback();
};

export default {
  path: '',
  name: 'Root',
  childRoutes: [
    { path: 'login', name: 'Login', component: LoginPage, onEnter: redirectIfAuthed },
  ],
};
