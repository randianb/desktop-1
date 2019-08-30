/*
 *  页面地址路由js
 */
import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Router.prototype.back = function () {
  window.history.go(-1)
};

Vue.use(Router);
const router = new Router({
  routes: [
    // 登录、注册
    {
      path: '/login',
      name: 'Login',
      meta: {hideSideBar: true},
      component: resolve => require(['../views/auth/login'], resolve),
    },
    {
      path: '/register',
      meta: {hideSideBar: true},
      component: resolve => require(['../views/auth/register'], resolve),
    },

    // 首页
    {
      path: '/',
      redirect: '/conversations',
      meta: {requireAuth: true},
      component: resolve => require(['../views/index'], resolve),
    },

    // 通讯录
    {
      path: '/contacts',
      // redirect: '/contact/new-friends',
      name: 'ContactList',
      meta: {requireAuth: true},
      component: resolve => require(['../views/contact'], resolve),
    },
    {
      path: '/contact/new-friends',
      meta: {requireAuth: true},
      component: resolve => require(['../views/contact/new-friends'], resolve),
    },
    {
      path: '/contact/contact-info',
      name: 'ContactInfo',
      component: resolve => require(['../views/contact/contact-info'], resolve),
    },

    // 群组
    {
      path: '/groups',
      name: 'GroupList',
      meta: {requireAuth: true},
      component: resolve => require(['../views/group'], resolve),
    },
    {
      path: '/groups/group-info',
      name: 'GroupInfo',
      component: resolve => require(['../views/group/group-info'], resolve),
    },

    // 朋友圈
    {
      path: '/moments',
      name: 'Moments',
      component: resolve => require(['../views/moment'], resolve),
    },
    {
      path: '/moment/write',
      meta: {requireAuth: true},
      component: resolve => require(['../views/moment/write'], resolve),
    },

    // 会话
    {
      path: '/conversations',
      name: 'ConversationList',
      meta: {requireAuth: true},
      component: resolve => require(['../views/conversation/index'], resolve),
    },

    // 个人设置
    {
      path: '/my',
      meta: {requireAuth: true},
      component: resolve => require(['../views/my'], resolve),
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.getters.userInfo.accessToken) {
      next();
    } else {
      next();

      // 未登录授权
      wcPop({
        content: '还未登录授权！',
        anim: 'shake',
        style: 'background:#e03b30;color:#fff;',
        time: 2,
        end: function () {
          next({path: '/login'})
        }
      });
    }
  } else {
    next();
  }
});

export default router
