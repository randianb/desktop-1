import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import contact from './modules/contact';
import db from './modules/db';
import group from './modules/group';
import conversation from './modules/conversation';
import message from './modules/message';
import param from './modules/param';
import imClient from './modules/imClient';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},

  modules: {
    app,
    contact,
    db,
    group,
    conversation,
    message,
    param,
    imClient,
    user,
  }
});
