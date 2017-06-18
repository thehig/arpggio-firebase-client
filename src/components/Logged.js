import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Logged extends PureComponent {
  static propTypes = {
    onLogoutClick: PropTypes.func.isRequired,
  };

  render() {
    const { onLogoutClick } = this.props;

    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" onTouchTap={onLogoutClick} />
      </IconMenu>
    );
  }
}

export default Logged;
