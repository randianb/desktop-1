import {ParamActions} from "../actionTypes";

import request from '../../utils/request';
import {ParamMutations} from "../mutationTypes";

const param = {
  state: {},

  getters: {
    desktopAppName(state) {
      return state['app_name'] || '集聊';
    },

    desktopAppVersion(state) {
      return state['app_version'] || '1.1';
    }
  },

  mutations: {
    [ParamMutations.SetParamList](state, payload) {
      this.state.params = payload;
    },
  },

  actions: {
    async [ParamActions.GetParamList]({dispatch, commit}, payload) {
    },
  }
};

export default param;
