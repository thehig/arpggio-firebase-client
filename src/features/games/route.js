import {
  DefaultPage,
} from './index';
import { requireAuthentication } from '../../components/AuthenticatedComponent';

export default {
  path: 'games',
  name: 'Games',
  childRoutes: [
    { name: 'Games', path: 'default-page', component: requireAuthentication(DefaultPage), isIndex: true },
  ],
};
