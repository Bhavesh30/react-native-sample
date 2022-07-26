import * as actionTypes from '../actions/actionTypes';

const initialState = {
  appLoading: false,
};

const appLoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_LOADING:
      return {
        ...state,
        appLoading: action.loading,
      };
    default:
      return state;
  }
};
export default appLoaderReducer;
