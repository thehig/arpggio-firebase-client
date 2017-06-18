import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { commonSelectors } from '../../common/rootReducer';

export class DefaultPage extends Component {
  static propTypes = {
    // home: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
    drawerOpen: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div className="home-default-page">
        Page Content: home/DefaultPage (drawer {this.props.drawerOpen ? 'open' : 'closed'})
      </div>
    );
  }
}

// const tempGetFn = (state) => {
//   console.log('tempGetFn', state);
//   return ;
// };

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
    drawerOpen: commonSelectors.getDrawerState(state),
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
)(DefaultPage);
