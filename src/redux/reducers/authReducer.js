import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return state;
    case actionTypes.AUTH_SET_TOKEN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.data,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      };
    case actionTypes.AUTH_REGISTER:
      return {
        ...state,
      };
    case actionTypes.AUTH_FORGOT_PASSWORD:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default authReducer;
