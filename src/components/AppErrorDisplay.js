import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ErrorComponent } from './';

export default class AppErrorDisplay extends PureComponent {
  static propTypes = {
    errors: PropTypes.array.isRequired,
  };


  render() {
    const { errors } = this.props;
    let errorIndex = 0;
    if (errors && errors.length && errors.length >= 1) {
      return (
        <div>
          { errors.map(error => (
            <ErrorComponent
              key={`AppError_${errorIndex++}`}
              error={error}
              open={error !== null}
            />
          ))}
        </div>
      );
    }
    // No errors
    return <div />;
  }
}
