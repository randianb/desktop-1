import {RongCloudActions, UserActions} from "../actionTypes";
import {UserMutations} from "../mutationTypes";

import request from '../../utils/request';

const user = {
  state: {
    user: window.sessionStorage.getItem('user'),
    accessToken: window.sessionStorage.getItem('accessToken'),                    // 登录标识
    rongCloudToken: window.sessionStorage.getItem('rongCloudToken'),  // 融云标识
    onlineStatus: {status: 'online', text: '在线'},
  },

  getters: {
    userInfo(state) {
      try {
        state.user = JSON.parse(window.sessionStorage.getItem('user'));
      } catch (e) {
        console.error(e.message);
      }

      return state.user || {};
    }
  },

  mutations: {
    // 将token存储到sessionStorage
    [UserMutations.SetUserInfo](state, payload) {
      state.accessToken = payload.accessToken;
      window.sessionStorage.setItem('accessToken', payload.accessToken);

      state.rongCloudToken = payload.rongCloudToken;
      window.sessionStorage.setItem('rongCloudToken', payload.rongCloudToken);

      state.user = payload;
      window.sessionStorage.setItem('user', JSON.stringify(payload));
    },
  },

  actions: {
    async [UserActions.Register]({dispatch, commit}, payload) {
      const userInfo = await request({url: `/users/register`, method: 'post', data: payload});
      commit(UserMutations.SetUserInfo, userInfo);

      dispatch(RongCloudActions.InitClient);
    },

    // 登录
    async [UserActions.Login]({dispatch, commit}, payload) {
      const userInfo = await request({url: `/users/login`, method: 'post', data: payload});
      commit(UserMutations.SetUserInfo, userInfo);

      dispatch(RongCloudActions.InitClient);
    },

    // 退出
    [UserActions.Logout]({state}) {
      state.user = null;
      window.sessionStorage.removeItem('user');

      state.accessToken = null;
      window.sessionStorage.removeItem('accessToken');

      state.rongCloudToken = null;
      window.sessionStorage.removeItem('rongCloudToken');
    }
  }
};

export default user;
