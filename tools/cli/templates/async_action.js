import Immutable from 'immutable';
import {
  ${BEGIN_ACTION_TYPE},
  ${SUCCESS_ACTION_TYPE},
  ${FAILURE_ACTION_TYPE},
  ${DISMISS_ERROR_ACTION_TYPE},
} from './constants';

export function ${CAMEL_ACTION_NAME}(args) {
  return (dispatch) => {
    dispatch({
      type: ${BEGIN_ACTION_TYPE},
    });
    const promise = new Promise((resolve, reject) => {
      window.setTimeout(() => {
        if (args && !args.error) { // NOTE: args.error is only used for demo purpose
          dispatch({
            type: ${SUCCESS_ACTION_TYPE},
            data: {},
          });
          resolve();
        } else {
          dispatch({
            type: ${FAILURE_ACTION_TYPE},
            data: {
              error: 'some error',
            },
          });
          reject();
        }
      }, 50);
    });

    return promise;
  };
}

export function dismiss${PASCAL_ACTION_NAME}Error() {
  return {
    type: ${DISMISS_ERROR_ACTION_TYPE},
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case ${BEGIN_ACTION_TYPE}:
      return state
        .set('${CAMEL_ACTION_NAME}Pending', true)
        .set('${CAMEL_ACTION_NAME}Error', null)
      ;

    case ${SUCCESS_ACTION_TYPE}:
      return state
        .set('${CAMEL_ACTION_NAME}Pending', false)
        .set('${CAMEL_ACTION_NAME}Error', null)
      ;

    case ${FAILURE_ACTION_TYPE}:
      return state
        .set('${CAMEL_ACTION_NAME}Pending', false)
        .set('${CAMEL_ACTION_NAME}Error', Immutable.fromJS(action.data.error || {}))
      ;

    case ${DISMISS_ERROR_ACTION_TYPE}:
      return state
        .set('${CAMEL_ACTION_NAME}Error', null)
      ;

    default:
      return state;
  }
}
