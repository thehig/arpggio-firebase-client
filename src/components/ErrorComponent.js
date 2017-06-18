import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Snackbar from 'material-ui/Snackbar';
import { red900, grey50 } from 'material-ui/styles/colors';

// Source: https://github.com/corpix/material-ui-error-reporting
class ErrorReporting extends Component {
  static propTypes = {
    open: PropTypes.bool,
    action: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.instanceOf(Error),
      PropTypes.shape({
        code: PropTypes.string,
        message: PropTypes.string,
        source: PropTypes.string,
      }),
    ]),
    // error: PropTypes.instanceOf(Error),
    autoHideDuration: PropTypes.number,
    getMessage: PropTypes.func,
    style: PropTypes.object,
    contentStyle: PropTypes.object,
    onError: PropTypes.func,
    onClose: PropTypes.func
  };

  static defaultProps = {
    open: false,
    action: '',
    error: null,
    autoHideDuration: 0,
    getMessage: (props) => {
      if (!props.error) return '';

      if (props.error instanceof Error) {
        return (props.action ? `${props.action}: ` : '') + String(props.error);
      }

      // Alternate, longer format for error output
      // return `${props.error.source}: ${props.error.code}//${props.error.message}`;
      return `${props.error.message}`;
    },
    style: {
      backgroundColor: red900,
      color: grey50
    },
    contentStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    onError: (error, action = '') => undefined,
    onClose: (reason, error, action = '') => {
      // console.log('onClose', reason, error, action);
      if (Object.prototype.hasOwnProperty.call(error, 'dismiss')) {
        error.dismiss();
      }
    },
  };

  /* eslint-disable react/sort-comp */
  exclusiveProps = [
    'getMessage',
    'error',
    'action',
    'onError',
    'onClose'
  ];
  /* eslint-enable react/sort-comp */

  constructor(props) {
    super();

    if (props.error) {
      props.onError(props.error, props.action);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      nextProps.onError(nextProps.error, nextProps.action);
    }
  }

  // Takes this.props.keys
  //  removes anything in 'exclusiveProps' array
  //  returns the rest as an object
  getSnackbarProps() {
    return Object
            .keys(this.props)
            .filter(name => this.exclusiveProps.indexOf(name) === -1)
            .reduce((acc, name) => {
              acc[name] = this.props[name];
              return acc;
            }, {});
  }

  onClose = reason => this.props.onClose(
        reason,
        this.props.error,
        this.props.action
    );

  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.getMessage(this.props)}
        autoHideDuration={this.props.autoHideDuration}
        style={this.props.style}
        contentStyle={this.props.style}
        bodyStyle={this.props.style}
        onRequestClose={this.onClose}
        {...this.getSnackbarProps()}
      />
    );
  }
}

export default ErrorReporting;
