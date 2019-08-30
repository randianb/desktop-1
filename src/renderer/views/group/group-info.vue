<template>
  <div>
    <group-list></group-list>

    <div class="vChat-container flex1 flexbox flex__direction-column" v-if="groupInfo.id">
      <div class="vChat__header">
        <div class="inner flexbox">
          <h2 class="barTit flex1">群组详情</h2>
        </div>
      </div>
      <div class="vChat__main flex1 flexbox flex__direction-column">
        <geminiScrollbar autoshow class="geminiScrollbar flex1">
          <div class='wc__contextmenuUserInfo uinfo'>
            <ul class="clearfix">
              <li>
                <div class="item flexbox flex-alignc" style="padding:30px 0;">
                  <span class="lbl flex1">
                    <em style="font-size:20px;">{{groupInfo.name}}</em>
                    <i>共{{groupInfo.memberCount}}人</i>
                  </span>
                  <el-avatar :size="50" shape="square" :src="groupInfo.portraitUri"/>
                </div>
              </li>
              <li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl">群&nbsp;&nbsp;主</label>
                  <div class="cnt flex1 c-999">
                    {{groupInfo.creator.nickname}}
                    <em class="iconfont icon-male ml-10" style="color:#46b6ef;"></em>
                  </div>
                </div>
              </li>
              <li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl">上&nbsp;&nbsp;限</label>
                  <div class="cnt flex1 c-999">{{groupInfo.maxMemberCount}}人</div>
                </div>
              </li>
              <li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl">群禁言</label>
                  <div class="cnt flex1 c-999">{{groupInfo.isMuted ? '已禁言' : '未禁言'}}</div>
                </div>
              </li>
              <li>
                <div class="item align-c">
                  <el-button type="success" size="medium" style="border-radius:0;padding:10px 50px;"
                             @click="onStartConversation">
                    <span>发消息</span>
                  </el-button>
                </div>
              </li>
            </ul>
          </div>
        </geminiScrollbar>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
  import {ConversationActions, GroupActions} from "../../store/actionTypes";

  export default {
    data() {
      return {
        groupInfo: {
          creator: {}
        }
      }
    },

    watch: {
      async $route() {
        this.groupInfo = await this.$store.dispatch(GroupActions.GetGroupInfo, {
          id: this.$route.query.id
        });
      }
    },

    methods: {
      // 启动会话
      async onStartConversation() {
        await this.$store.dispatch(ConversationActions.StartConversation, {
          conversationType: RongIMLib.ConversationType.GROUP,
          targetId: this.groupInfo.id
        });

        this.$router.push({name: 'ConversationList'query: {targetId: this.groupInfo.id}});
      }
    }
  }
</script>

<style scoped>

</style>
