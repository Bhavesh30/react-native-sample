import * as actionTypes from './actionTypes';

export const appLoader = loading => {
  return {type: actionTypes.APP_LOADING, loading};
};
