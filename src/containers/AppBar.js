import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { bindActionCreators } from 'redux';

import { AppBar as Bar } from 'material-ui';
// import Avatar from 'material-ui/Avatar';

import { LoginButton, Logged } from '../components/';
import { globalSelectors } from '../common/rootReducer';
import { firebaseLogout } from '../features/common/redux/actions'


@firebaseConnect()
@connect(
  state => ({
    logged: globalSelectors.logged(state),
    username: globalSelectors.username(state),
  }),
  dispatch => ({
    actions: bindActionCreators({ firebaseLogout }, dispatch),
  }),
)
export default class AppBar extends Component {
  static propTypes = {
    firebase: PropTypes.shape({
      login: PropTypes.func.isRequired,
      logout: PropTypes.func.isRequired,
    }).isRequired,
    logged: PropTypes.bool.isRequired,
    username: PropTypes.string,
    onMenuClick: PropTypes.func,
    actions: PropTypes.shape({
      firebaseLogout: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    onMenuClick: () => { console.log('AppBar.onMenuClick is unset'); },
    username: 'Anonymous',
  }

  constructor(props) {
    super(props);

    this.help = ::this.help;
    this.refresh = ::this.refresh;
    this.login = ::this.login;
    this.logout = ::this.logout;
    this.createRightElement = ::this.createRightElement;
  }

  help() {
    browserHistory.push('/about');
  }

  refresh() {
    window.location.reload(false);
  }

  login() {
    browserHistory.push('/login');
  }

  logout() {
    this.props.actions.firebaseLogout(this.props.firebase);
  }

  createRightElement() {
    const {
      logged,
      username
    } = this.props;

    const {
      help,
      login,
      logout,
      refresh,
    } = this;

    console.log('Hello', username);

    return logged
      ? (
        <Logged
          onLogoutClick={logout}
          onHelpClick={help}
          onRefreshClick={refresh}
        />
      ) : <LoginButton onTouchTap={login} />
    ;
  }

  render() {
    const { onMenuClick } = this.props;
    return (
      <Bar
        title="arpgg.io"
        onLeftIconButtonTouchTap={onMenuClick}
        iconElementRight={this.createRightElement()}
      />
    );
  }
}
