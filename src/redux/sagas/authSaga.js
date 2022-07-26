import {all, fork, takeLatest, call, put} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as APIs from '../../services/api';
import * as AuthActions from '../actions/authActions';
import * as StorageUtils from '../../utils/StorageUtils';

import {appLoader} from '../actions/appLoaderActions';

function* loginUser({data, resolve, reject}) {
  yield put(appLoader(true));
  try {
    let token = yield call(APIs.mockAPI, data);
    yield call(StorageUtils.setUserToken, token);
    yield put(AuthActions.setToken(token));
    resolve(true);
  } catch (error) {
    reject(error);
  }
  yield put(appLoader(false));
}

function* registerUser({data, resolve, reject}) {
  try {
    let response = yield call(APIs.mockAPI, data);
    resolve(true);
  } catch (error) {
    reject(error);
  }
}
function* forgotPasswprd({data, resolve, reject}) {
  try {
    let response = yield call(APIs.mockAPI, data);
    resolve(true);
  } catch (error) {
    reject(error);
  }
}

export function* watchSagas() {
  yield takeLatest(actionTypes.AUTH_LOGIN, loginUser);
  yield takeLatest(actionTypes.AUTH_REGISTER, registerUser);
  yield takeLatest(actionTypes.AUTH_FORGOT_PASSWORD, forgotPasswprd);
}

export default function* authSaga() {
  yield all([fork(watchSagas)]);
}
