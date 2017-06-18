import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import { List, ListItem } from 'material-ui/List';

import * as actions from './redux/actions';

import * as packageJson from '../../../package.json';

export class AboutPage extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { version, name, description, homepage, author, repository, bugs } = packageJson;
    const authorName = author.name;
    const authorEmail = author.email;
    const repoUrl = repository.url;
    const bugsUrl = bugs.url;

    return (
      <List className="common-about-page">
        <ListItem primaryText="Version" secondaryText={version} />
        <ListItem primaryText="Name" secondaryText={name} />
        <ListItem primaryText="Description" secondaryText={description} secondaryTextLines={2} />
        <ListItem primaryText="Homepage" secondaryText={homepage} />
        <ListItem
          primaryText="Author"
          initiallyOpen
          nestedItems={[
            <ListItem key="authorName" primaryText="Name" secondaryText={authorName} />,
            <ListItem key="authorEmail" primaryText="Email" secondaryText={authorEmail} />
          ]}
        />
        <ListItem
          primaryText="GitHub"
          nestedItems={[
            <ListItem key="repoUrl" primaryText="Repo Url" secondaryText={repoUrl} />,
            <ListItem key="bugsUrl" primaryText="Bugs Url" secondaryText={bugsUrl} />,
          ]}
        />
      </List>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.get('common'),
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
)(AboutPage);
