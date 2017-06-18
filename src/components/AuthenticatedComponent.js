import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { globalSelectors } from '../common/rootReducer';

export function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired,
      location: PropTypes.shape({
        pathname: PropTypes.string
      }).isRequired,
    };

    componentWillMount() {
      this.checkAuth({
        logged: this.props.isAuthenticated,
        path: this.props.location.pathname,
      });
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth({
        logged: nextProps.isAuthenticated,
        path: nextProps.location.pathname,
      });
    }

    checkAuth({ logged, path }) {
      if (!logged) {
        browserHistory.replace(`/login?next=${path}`);
      }
    }

    render() {
      const { isAuthenticated } = this.props;
      return (
        <div>
          {isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: globalSelectors.logged(state),
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
