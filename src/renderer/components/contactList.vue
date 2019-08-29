<template>
  <div class="vChat-middlebar flexbox flex__direction-column">
    <!--搜索框-->
    <div class="vc-searArea">
      <div class="iptbox flexbox">
        <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="keyword"></el-input>
      </div>
    </div>

    <div class="vc-addrFriendList flex1 flexbox flex__direction-column">
      <geminiScrollbar autoshow class="geminiScrollbar flex1">
        <ul class="clearfix J__addrFriendList">
          <!--好友请求-->
          <!--li>
            <h2 class="initial wc__borT">新的朋友</h2>
            <router-link to="/contact/new-friends" class="row flexbox flex-alignc wc__material-cell unCTX on">
              <img class="uimg" src="src/assets/img/icon__newfriend.jpg"/>
              <span class="name flex1">好友请求</span>
            </router-link>
          </li-->

          <!--好友列表-->
          <li id="A">
            <h2 class="initial wc__borT">我的好友</h2>
            <router-link class="row flexbox flex-alignc wc__material-cell"
                         v-for="(c, idx) in contacts.rows" :key="idx"
                         v-if="c.user"
                         :to="{name: 'ContactInfo', query: {id: c.user.id}}">
              <img class="uimg" :src="c.user.portraitUri"/>
              <span class="name flex1">{{c.user.nickname}}</span>
            </router-link>
          </li>
        </ul>

        <div class="vc_addrTotal">共{{contacts.count}}位联系人</div>
      </geminiScrollbar>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {ContactActions} from "../store/actionTypes";

  export default {
    data() {
      return {
        keyword: '',
      }
    },

    computed: {
      ...mapGetters(['contacts']),
    },

    mounted() {
      this.getContacts();
    },

    methods: {
      async getContacts() {
        try {
          await this.$store.dispatch(ContactActions.GetContactList, {});
        } catch (e) {
          this.$message.error(e.message);
        }
      }
    }
  }
</script>

<style>

</style>
