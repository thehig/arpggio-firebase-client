import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import { browserHistory } from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import * as actions from './redux/actions';


import { globalSelectors } from '../../common/rootReducer';
import { LoginForm } from './';

@firebaseConnect()
export class LoginPage extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    firebase: PropTypes.object.isRequired,
    logged: PropTypes.bool.isRequired,
    next: PropTypes.string,
  };

  static defaultProps = {
    next: null,
  }

  constructor(props) {
    super(props);
    this.onLoginClick = ::this.onLoginClick;
    this.onLoginSubmit = ::this.onLoginSubmit;
    this.redirectIfLoggedIn = ::this.redirectIfLoggedIn;
  }

  componentWillMount() {
    // User enters page when logged in
    this.redirectIfLoggedIn({
      logged: this.props.logged,
      next: this.props.next,
    });
  }

  componentWillReceiveProps(nextProps) {
    // User was on this page, but their auth state changed
    //  This can happen when you refresh the app and
    //  Firebase takes a second to auth you
    this.redirectIfLoggedIn({
      logged: nextProps.logged,
      next: nextProps.next,
    });
  }

  onLoginClick() {
    this.props.firebase.login({
      provider: 'google',
      type: 'popup'
    });
  }

  onLoginSubmit(submitForm) {
    // SubmitForm can be an Immutable map, or a basic JSON obj
    console.log('onLoginSubmit', submitForm);
  }

  redirectIfLoggedIn({ logged, next }) {
    if (logged) {
      browserHistory.replace(next || '/home');
    }
  }

  render() {
    return (
      <div className="common-login">
        Page Content: common/Login
        <FlatButton onTouchTap={this.onLoginClick} label="Login With Google" />
        <LoginForm onSubmit={this.onLoginSubmit} />
      </div>
    );
  }
}


function nextRoute(ownProps) {
  if (
    ownProps &&
    ownProps.location &&
    ownProps.location.query &&
    ownProps.location.query.next) {
    return ownProps.location.query.next;
  }
  return undefined;
}

/* istanbul ignore next */
function mapStateToProps(state, ownProps) {
  return {
    common: state.get('common'),
    logged: globalSelectors.logged(state),
    next: nextRoute(ownProps),
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
