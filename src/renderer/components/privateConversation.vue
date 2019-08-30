<template>
  <div class="vChat-container flex1 flexbox flex__direction-column">
    <div class="vChat__header">
      <!--群头部控件-->
      <div class="inner flexbox">
        <h2 class="barTit flex1">{{conversation.conversationTitle}}</h2>
        <!--el-tooltip content="好友信息" placement="bottom">
          <a class="lk" @click="dialogGroupInfoVisible = true"><i class="iconfont icon-dots"></i></a>
        </el-tooltip-->
      </div>
    </div>

    <!--消息历史-->
    <div class="vChat__main flex1 flexbox flex__direction-column">
      <div class="flex1" id="J__geminiScrollbar">
        <div class="vChat__loading J__vChatLoading" v-if="messageLoading">
          <img src="../../../static/img/deng.gif"/>
          <span>数据载入中...</span>
        </div>

        <div class="vChatMsg-cnt">
          <ul class="clearfix" id="J__chatMsgList" v-infinite-scroll>
            <message-bubble v-for="(msg, idx) in messages" :key="idx" :message="msg"></message-bubble>
          </ul>
        </div>
      </div>
    </div>

    <!--消息发送框-->
    <message-send-box @sendMessage="onSendMessage"></message-send-box>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {ConversationActions} from "../store/actionTypes";

  export default {
    props: {
      conversation: {
        type: Object
      }
    },

    data() {
      return {
        messageLoading: false,

        fixGeminiscrollHeight: true,        // 解决含有图片资源（高度没及时更新）

        dialogVisibleMuted: false,          // 显示禁言提示
        dlgBulletinVisible: false,          // 显示公告对话框
        dialogMuteVisible: false,           // 消息屏蔽对话框
        dialogGroupInfoVisible: true,      // 群设置对话框
      }
    },

    computed: {
      groupInfo() {
        return this.$store.getters.groupInfo(this.conversation.targetId);
      },

      memberInfo() {
        return {
          isMuted: false,
        }
      },

      messages() {
        return this.$store.getters.messages(this.conversation.targetId);
      }
    },

    mounted() {
      setTimeout(() => {
        this.fixGeminiscrollHeight = false
      }, 300);
    },

    methods: {
      async onSendMessage(payload) {
        try {
          await this.$store.dispatch(ConversationActions.SendMessage, {
            conversationType: this.conversation.conversationType,
            targetId: this.conversation.targetId,
            content: payload.content,
            messageType: payload.messageType,
          });

          // todo: 滚动会话消息列表
        } catch (e) {
          console.error(`私聊消息发送失败: `, e);
        }
      }
    },
  }

  // 播放视频
  $(function () {
    $("body").on("click", "#J__chatMsgList li .video", function () {
      var _src = $(this).find("img").attr("videoUrl"), _video;
      var videoIdx = wcPop({
        id: 'wc__previewVideo',
        skin: 'fullscreen',
        content: '<video id="J__videoPreview" width="100%" height="100%" controls="controls" preload="auto"></video>',
        shade: false,
        xclose: true,
        style: 'background: #000;padding-top:48px;',
        anim: 'scaleIn',
        show: function () {
          _video = document.getElementById("J__videoPreview");
          _video.src = _src;
          if (_video.paused) {
            _video.play();
          } else {
            _video.pause();
          }
          _video.addEventListener("ended", function () {
            _video.currentTime = 0;
          });
          _video.addEventListener("x5videoexitfullscreen", function () {
            wcPop.close(videoIdx);
          })
        }
      });
    });
  });
</script>

<style scoped>
</style>
