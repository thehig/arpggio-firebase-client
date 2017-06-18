import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as importActions from '../features/common/redux/actions';

import routeConfig from '../common/routeConfig';
import { AppDrawer, AppShell } from '../components';
import AppBar from './AppBar';

class App extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { common, actions } = this.props;

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
            open={common.drawerOpen}
            setDrawer={actions.setDrawer}
            routes={routeConfig}
            onRequestChange={actions.toggleDrawer}
            onNavigate={navigate}
          />

          <AppShell>
            { this.props.children }
          </AppShell>
        </div>
      </MuiThemeProvider>
    );
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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

