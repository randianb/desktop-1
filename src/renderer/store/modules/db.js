import {DbActions} from "../actionTypes";

import request from '../../utils/request';

const db = {
  state: {

  },

  getters: {
  },

  mutations: {
  },

  actions: {
    // 初始化数据库
    async [DbActions.InitDb]({dispatch, commit}, payload) {
    },

    // 创建表
    async [DbActions.InitTable]({dispatch, commit}, payload) {
    },
  }
};

export default db;
