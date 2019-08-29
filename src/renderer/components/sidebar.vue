<!--侧边栏模板-->
<template>
  <div class="vChat-sidebar flexbox flex__direction-column">
    <div class="avator">
      <el-popover
        placement="right-start"
        trigger="click">
        <div class='wc__contextmenuUserInfo menu'>
          <ul class="clearfix">
            <li>
              <div class="item flexbox flex-alignc"><span class="lbl flex1">
              <em>{{userInfo.nickname}}</em>
              <em class="iconfont icon-male ml-10" style="color:#46b6ef;"></em>
              <i>手机：+{{userInfo.region || '86'}} {{userInfo.phone}}</i>
              <i>昵称：{{userInfo.nickname}}</i></span>
                <el-avatar fit="fill" shape="square" :size="50" :src="userInfo.portraitUri"></el-avatar>
              </div>
            </li>
            <!--li>
              <div class="item flexbox flex-alignc">
                <label class="lbl flex1">设置备注和标签</label></div>
            </li-->
            <!--<li>-->
              <!--<div class="item flexbox flex-alignc">-->
                <!--<label class="lbl">地 区</label>-->
                <!--<div class="cnt flex1 c-999">广东 广州</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item align-r"><i class="iconfont icon-side__xiaoxi" title="发消息"></i></div>-->
            <!--</li>-->
          </ul>
        </div>
        <el-avatar slot="reference" fit="fill" shape="square" :size="35" :src="userInfo.portraitUri"></el-avatar>
      </el-popover>

    </div>

    <div class="list flex1">
      <ul class="clearfix">
        <router-link active-class="on" tag="li" :to="{name: 'ConversationList'}" exact>
          <span class="ico">
            <i class="iconfont icon-side__xiaoxi"></i>
            <!--em class="wc__badge">{{4}}</em-->
          </span>
        </router-link>
        <router-link active-class="on" tag="li" :to="{name: 'ContactList'}">
          <span class="ico">
            <i class="iconfont icon-side__tongxunlu"></i>
          </span>
        </router-link>
        <router-link active-class="on" tag="li" :to="{name: 'GroupList'}">
          <span class="ico">
            <i class="iconfont icon-side__group"></i>
          </span>
        </router-link>
        <!--router-link active-class="on" tag="li" to="/qzone">
          <span class="ico">
            <i class="iconfont icon-side__pyq"></i>
          </span>
        </router-link-->
      </ul>
    </div>

    <div class="list">
      <ul class="clearfix">
        <router-link active-class="on" tag="li" to="/my">
          <span class="ico">
            <i class="iconfont icon-shezhi"></i>
          </span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapGetters(['userInfo']),
    }
  }
</script>

<style>

</style>
