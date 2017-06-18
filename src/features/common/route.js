import {
  LoginPage,
  AboutPage,
  HomePage,
} from './index';

export default {
  path: '',
  name: 'Root',
  childRoutes: [
    { path: 'login', name: 'Login', component: LoginPage },
    { path: 'about', name: 'About', component: AboutPage },
    { path: 'home', name: 'Home', component: HomePage },
  ],
};
