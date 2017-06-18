import App from '../containers/App';

import { PageNotFound } from '../components';
import homeRoute from '../features/home/route';
import commonRoute from '../features/common/route';
import gamesRoute from '../features/games/route';

const rootRouteRedirect = (props, replace) => {
  // console.log('root redirect', props);
  replace({ pathname: '/login' });
};

/*
    *Authenticated* redirects to /Login if not logged in

    '/'       -   Redirects to /Login
    '/Login'  -   Redirects to /Home if logged in
    '/Home'   -   IndexRoute is Authenticated
    '/Games'  -   IndexRoute is Authenticated
*/

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    { onEnter: rootRouteRedirect, isIndex: true },
    homeRoute,
    commonRoute,
    gamesRoute,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ],
}];

// Handle isIndex property of route config:
//  1. remove the first child with isIndex=true from childRoutes
//  2. assign it to the indexRoute property of the parent.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => { // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
        console.error('More than one index route: ', route);
      }

      /* istanbul ignore else */
      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line
        route.indexRoute = child; // eslint-disable-line
        return false;
      }
    }
    return true;
  });

  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
