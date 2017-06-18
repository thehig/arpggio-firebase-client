import {
  DefaultPage,
} from './index';

import { requireAuthentication } from '../../components/AuthenticatedComponent';

export default {
  path: 'home',
  name: 'Home',
  childRoutes: [
    { name: 'Home', path: 'default-page', component: requireAuthentication(DefaultPage), isIndex: true },
  ],
};
