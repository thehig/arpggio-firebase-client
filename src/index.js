import 'babel-polyfill';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configStore from './common/configStore';
import Root from './containers/Root';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

const root = document.createElement('div');
document.body.appendChild(root);
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  root
);


// Hot Module Replacement API
/* istanbul ignore if  */
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default; // eslint-disable-line
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      root
    );
  });
}
