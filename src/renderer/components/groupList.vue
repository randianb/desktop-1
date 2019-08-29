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
          <!--群组列表-->
          <li id="A">
            <!--h2 class="initial wc__borT">A</h2>
            <router-link :to="{name: 'GroupInfo', query: {id: g.id}}"
                         class="row flexbox flex-alignc wc__material-cell"
                         v-for="(g, idx) in groups.rows"
                         :key="idx">
              <img class="uimg" :src="g.portraitUri"/>
              <span class="name flex1">{{g.name}}</span>
            </router-link-->
            <router-link class="row flexbox flex-alignc wc__material-cell"
                 v-for="(g, idx) in groups.rows" :key="idx"
                 :to="{name: 'GroupInfo', query: {id: g.id}}">
              <img class="uimg" :src="g.portraitUri" style="border-radius: 4px;"/>
              <span class="name flex1">{{g.name}}</span>
            </router-link>
          </li>
        </ul>
        <div class="vc_addrTotal">共{{groups.count}}个群</div>
      </geminiScrollbar>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {GroupActions} from "../store/actionTypes";

  export default {
    data() {
      return {
        keyword: '',
      }
    },

    computed: {
      ...mapGetters(['groups']),
    },

    mounted() {
      this.getGroups();
    },

    methods: {
      async getGroups() {
        try {
          await this.$store.dispatch(GroupActions.GetGroupList, {});
        } catch (e) {
          this.$message.error(e.message);
        }
      }
    }
  }
</script>

<style>

</style>
