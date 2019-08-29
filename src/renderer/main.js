import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import 'babel-polyfill';

import './common.js'
import components from './components.js'

// 全局组件
Vue.use(components);

// 非Web环境，启用electron
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app');

new Vue({
  el: '#app', router, store, render: h => h(App)
});
