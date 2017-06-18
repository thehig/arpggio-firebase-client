import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';

import { List, ListItem } from 'material-ui/List';

import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { globalSelectors } from '../common/rootReducer';

@firebaseConnect()
@connect(
  state => ({
    logged: globalSelectors.logged(state),
    username: globalSelectors.username(state),
  })
)
export default class AppDrawer extends PureComponent {
  static propTypes = {
    open: PropTypes.bool,
    onRequestChange: PropTypes.func,
    setDrawer: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
    logged: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    open: false,
    onRequestChange: () => { console.log('AppDrawer.onRequestChange is unset'); },
  }


  constructor(props) {
    super(props);
    this.renderLinks = ::this.renderLinks;
    this.excludeRoutes = ::this.excludeRoutes;
  }

  getPath = (item, basePath) => {
    let path;
    if (/^\//.test(item.path)) {
      path = item.path;
    } else if (basePath === '/') {
      path = `/${item.path}`;
    } else {
      path = `${basePath}/${item.path}`;
    }
    return path;
  }

  excludeRoutes = (route) => {
    // Remove any routes that start with *
    if (/^\*/.test(route.path)) return false;

    // If not removed by any other rule, show
    return true;
  }

  // Sort the routes by the length of their paths
  sortRoutes = (a, b) => a.path.length > b.path.length;

  handleClose = () => this.props.setDrawer(false);

  renderLinks(items, basePath = '') {
    return items
      .filter(this.excludeRoutes)
      .sort(this.sortRoutes)
      .map((route) => {
        const fullPath = this.getPath(route, basePath);
        const listProps = {
          key: `${fullPath}_wrapper`,
          primaryText: route.name,
          secondaryText: fullPath,
          onTouchTap: () => this.props.onNavigate(fullPath)
        };
        if (route.childRoutes && route.childRoutes.length) {
          listProps.nestedItems = this.renderLinks(route.childRoutes, route.fullPath);
        }

        return <ListItem {...listProps} />;
      });
  }

  render() {
    const { open, onRequestChange } = this.props;
    const routes = this.props.routes[0].childRoutes;
    return (
      <Drawer
        open={open}
        docked={false}
        onRequestChange={onRequestChange}
      >
        <List>
          <ListItem
            primaryText="Navigation"
            nestedItems={this.renderLinks(routes)}
            initiallyOpen
            primaryTogglesNestedList
          />
        </List>
      </Drawer>
    );
  }
}
