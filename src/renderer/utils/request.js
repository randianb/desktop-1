import Qs from 'qs';
import axios from 'axios';
import store from '../store';

import {UserActions} from "../store/actionTypes";
import {UserMutations} from "../store/mutationTypes";

const service = axios.create({
  baseURL: 'http://im.paymoneyplayer.com:8585/v1',
  timeout: 8000,
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }]
});

// HTTP请求拦截器
service.interceptors.request.use(
  config => {
    // 添加token头
    if (store.getters.userInfo) {
      config.headers['token'] = store.getters.userInfo.accessToken;
    }

    return config;
  },

  error => {
    // 错误处理
    console.error('API请求出错: ', error);
    Promise.reject(error);
  }
);

// HTTP响应拦截器
service.interceptors.response.use(
  async (response) => {

    if (response.status === 200) {
      // 若有更新，保存token
      if(response.headers.token) {
        store.commit(UserMutations.SetAccessToken, response.headers.token);
      }

      return response.data;
    }

    throw new Error(response.data.message);
  },

  async (error, response) => {
    if (error.response.status === 403) {  // 重新登录
      store.dispatch(UserActions.Logout);
    } else {
      let message = error.response.data;
      if (typeof message === 'object') {
        throw new Error(message.message);
      }

      try {
        message = JSON.parse(error.response.data).message;
      } catch (err) {
      }

      throw new Error(message);
    }
  }
);

export default service;
