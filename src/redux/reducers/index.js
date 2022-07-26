import {combineReducers} from 'redux';

import authReducer from './authReducer';
import appLoaderReducer from './appLoaderReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  appLoader: appLoaderReducer,
});
