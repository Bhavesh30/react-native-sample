import axios from 'axios';
import * as StorageUtils from '../utils/StorageUtils';
import * as CommonUtils from '../utils/CommonUtils';

const baseURL = 'https://mocki.io/v1';
//GetUser : https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export const mockAPI = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.get(
        '/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',
      );
      resolve(true);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const login = data => {
  return new Promise(async (resolve, reject) => {
    try {
      var bodyFormData = CommonUtils.jsonToQueryString(data);
      const response = await axiosInstance.post('/Login', bodyFormData);
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const logout = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.post('/Logout');
      resolve(response.data);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
