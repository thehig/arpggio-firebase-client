import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';

export default class AppShell extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Paper>
        { this.props.children }
      </Paper>
    );
  }
}
