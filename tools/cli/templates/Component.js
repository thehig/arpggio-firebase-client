import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ${COMPONENT_NAME} extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <div className="${CSS_PREFIX}-${KEBAB_COMPONENT_NAME}">
        Component content: ${KEBAB_FEATURE_NAME}/${COMPONENT_NAME}
      </div>
    );
  }
}
