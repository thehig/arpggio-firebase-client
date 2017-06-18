import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as importActions from '../features/common/redux/actions';

import routeConfig from '../common/routeConfig';
import { AppDrawer, AppShell, AppErrorDisplay } from '../components';
import AppBar from './AppBar';

import { globalSelectors } from '../common/rootReducer';

class App extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    errors: PropTypes.array.isRequired,
  };

  render() {
    const { common, actions, errors } = this.props;

    const navigate = (route) => {
      browserHistory.push(route);
      actions.setDrawer(false);
    };

    return (
      <MuiThemeProvider>
        <div className="app">
          <AppBar
            onMenuClick={actions.toggleDrawer}
          />

          <AppDrawer
            open={common.get('drawerOpen')}
            setDrawer={actions.setDrawer}
            routes={routeConfig}
            onRequestChange={actions.toggleDrawer}
            onNavigate={navigate}
          />

          <AppShell>
            { this.props.children }
          </AppShell>

          <AppErrorDisplay
            errors={errors}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.get('common'),
    errors: globalSelectors.errors(state),
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...importActions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

