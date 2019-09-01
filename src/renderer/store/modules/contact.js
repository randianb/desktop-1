import {ContactActions} from "../actionTypes";
import {ContactMutations} from "../mutationTypes";
import {Constants} from "../../utils/constants";

import request from '../../utils/request';

const contact = {
  state: {
    contacts: {
      count: 0,
      rows: []
    }
  },

  getters: {
    contacts(state) {
      return state.contacts;
    }
  },

  mutations: {
    // 设置联系人列表
    [ContactMutations.SetContactList](state, payload) {
      state.contacts.count = payload.length;
      state.contacts.rows = payload;
    }
  },

  actions: {
    // 联系人列表
    async [ContactActions.GetContactList]({dispatch, commit}, payload) {
      const userInfo = await request({url: `/im/friendships/all`, method: 'get'});
      commit(ContactMutations.SetContactList, userInfo);
    },

    // 获取联系人信息
    async [ContactActions.GetContactInfo]({getters}, payload) {
      for(let i = 0; i < getters.contacts.rows.length; ++i) {
        const contact = getters.contacts.rows[i];
        if (contact.user.id === payload.id) return contact.user;
      }

      return {
        portraitUri: Constants.DefaultPortraitUri
      };
    },
  }
};

export default contact;
