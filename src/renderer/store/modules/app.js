/**
 * 应用程序。
 */
import packageInfo from '../../../../package';
import {AppActions} from "../actionTypes";
import {AppMutations} from "../mutationTypes";

const app = {
  state: {
    app: {
    }
  },

  getters: {
    app(state) {
      return state.app;
    }
  },

  mutations: {
    [AppMutations.SetAppInfo](state, payload) {
      state.app = payload;
    }
  },

  actions: {
    // 初始化应用
    async [AppActions.InitApp]({commit}) {
      const payload = {
        name: packageInfo.build.productName,
        version: packageInfo.version
      };
      commit(AppMutations.SetAppInfo, payload);

      window.document.title = payload.name;
    }
  }
};

export default app;
