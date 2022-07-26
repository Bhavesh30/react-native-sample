import AsyncStorage from '@react-native-async-storage/async-storage';

/* USER TOKEN  */
export const setUserToken = token => {
  AsyncStorage.setItem('@authToken', `${token}`);
};
export const getUserToken = () => AsyncStorage.getItem('@authToken');
export const unsetUserToken = () => {
  AsyncStorage.removeItem('@authToken');
};
