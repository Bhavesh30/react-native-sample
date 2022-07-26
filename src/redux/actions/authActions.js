import * as actionTypes from './actionTypes';

export const login = (data, resolve, reject) => ({
  type: actionTypes.AUTH_LOGIN,
  data,
  resolve,
  reject,
});

export const setToken = data => {
  return {type: actionTypes.AUTH_SET_TOKEN, data};
};

export const logout = (data, resolve, reject) => ({
  type: actionTypes.AUTH_LOGOUT,
  data,
  resolve,
  reject,
});

export const forgotPasswrod = (data, resolve, reject) => ({
  type: actionTypes.AUTH_FORGOT_PASSWORD,
  data,
  resolve,
  reject,
});

export const register = (data, resolve, reject) => ({
  type: actionTypes.AUTH_REGISTER,
  data,
  resolve,
  reject,
});
