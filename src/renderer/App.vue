<template>
  <div id="app">
    <div class="vChat-wrapper flexbox flex-alignc">
      <div class="vChat-panel" style="background-image: url(../../static/img/placeholder/vchat__panel-bg01.jpg);">
        <div class="vChat-inner flexbox">
          <win-bar></win-bar>

          <side-bar v-if="!$route.meta.hideSideBar"></side-bar>

          <keep-alive>
            <router-view class="flex1 flexbox"></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AppActions, ContactActions, GroupActions, RongCloudActions} from "./store/actionTypes";

  export default {
    name: 'App',

    data() {
      return {}
    },

    async mounted() {
      try {
        await this.$store.dispatch(AppActions.InitApp);

        this.$store.dispatch(ContactActions.GetContactList);
        this.$store.dispatch(GroupActions.GetGroupList);
        this.$store.dispatch(RongCloudActions.InitClient);
      } catch (e) {
        console.error(e);
      }
    }
  }
</script>
<style>
  @import './assets/fonts/iconfont.css';
  @import './assets/css/reset.css';
  @import './assets/css/layout.css';
</style>
