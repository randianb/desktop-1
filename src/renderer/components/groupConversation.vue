<template>
  <div class="vChat-container flex1 flexbox flex__direction-column">
    <div class="vChat__header">
      <!--群头部控件-->
      <div class="inner flexbox">
        <h2 class="barTit flex1">{{conversation.conversationTitle}}</h2>
        <el-tooltip content="群公告" placement="bottom">
          <a class="lk" @click="dlgBulletinVisible = true"><i class="iconfont icon-gonggao"></i></a>
        </el-tooltip>
        <el-tooltip :content="groupInfo.isMuted ? '解除禁言' : '群组禁言'" placement="bottom">
          <a class="lk" @click="dlgMuteGroupVisible = true">
            <i class="iconfont icon-pingbi" v-if="groupInfo.isMuted"></i>
            <i class="iconfont icon-unmuted" v-else></i>
          </a>
        </el-tooltip>
        <el-tooltip content="群设置" placement="bottom">
          <a class="lk" @click="dlgGroupInfoVisible = true">
            <i class="iconfont icon-dots"></i>
          </a>
        </el-tooltip>
      </div>

      <!--群公告-->
      <el-dialog :visible.sync="dlgBulletinVisible" width="400px">
        <p slot="title" class="fs-18 ff-st">群公告</p>
        <p class="ff-st" style="margin:-20px 0 -10px;">
          <span v-if="groupInfo.bulletin">{{groupInfo.bulletin}}</span>
          <span v-else class="el-upload__tip">暂无群公告</span>
        </p>

        <div slot="footer">
          <el-button type="success" size="mini" @click="onEditBulletin">编辑</el-button>
          <el-button type="primary" size="mini" @click="dlgBulletinVisible = false">关闭</el-button>
        </div>
      </el-dialog>

      <!--禁言-->
      <el-dialog :visible.sync="dlgMuteGroupVisible" width="300px">
        <p slot="title" class="fs-18 ff-st">提示</p>
        <p class="ff-st c-999" style="margin:-20px 0 -10px;">
          {{groupInfo.isMuted ? '确定要解除群禁？' : '确定要执行群禁言？'}}
        </p>
        <div slot="footer">
          <el-button size="mini" @click="dlgMuteGroupVisible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="onMuteGroupClicked">确定</el-button>
        </div>
      </el-dialog>

      <!--群组详情-->
      <group-info :groupInfo="groupInfo"
                  :visible="dlgGroupInfoVisible"
                  @close="dlgGroupInfoVisible = false">
      </group-info>
    </div>

    <!--被禁言提示-->
    <el-alert type="error" center show-icon v-if="memberInfo.isMuted">
      <div slot="title" class="vChat__locker" style="line-height:16px;">
        <span>你已经被禁言，如需回复请联系管理员</span>
        <!--请求恢复-->
        <el-popover v-model="dialogVisibleMuted" placement="bottom" width="280" trigger="click">
          <p class="fs-12 ff-st c-999"><b class="db fs-14 pb-10">解除屏蔽</b>
            <el-input placeholder="请输入留言" size="small"></el-input>
          </p>
          <div style="margin-top:10px;text-align: center;">
            <el-button size="mini" @click="dialogVisibleMuted = false">取消</el-button>
            <el-button type="primary" size="mini">发送</el-button>
          </div>
          <a slot="reference" class="J__vChatUnlocker" href="javascript:;">解除屏蔽</a></el-popover>
      </div>
    </el-alert>

    <!--新消息数量提示-->
    <!--<div class="vChat__notice J__vChatNotice">18条新消息</div>-->

    <div class="fixGeminiscrollHeight" v-show="fixGeminiscrollHeight" style="font-size: 0;height: 1px;"></div>

    <!--消息历史-->
    <div class="vChat__main flex1 flexbox flex__direction-column">
      <div class="flex1" id="J__geminiScrollbar">
        <div class="vChat__loading J__vChatLoading" v-if="messageLoading">
          <img src="../../../static/img/deng.gif"/>
          <span>数据载入中...</span>
        </div>

        <div class="vChatMsg-cnt">
          <ul class="clearfix" id="J__chatMsgList" v-infinite-scroll>
            <message-bubble v-for="(msg, idx) in messages" :key="idx"
                            :message="msg"
                            @groupMemberClicked="onGroupMemberClicked"
                            @groupMemberContentMenu="onGroupMemberContentMenu"
                            @messageContentMenu="onMessageContentMenu"></message-bubble>
          </ul>
        </div>
      </div>
    </div>

    <!--会员点击-->

    <!--会员右键菜单-->

    <!--消息右键菜单-->

    <!--消息发送框-->
    <message-send-box @sendMessage="onSendMessage"></message-send-box>
  </div>
</template>

<script>
  import {ConversationActions, GroupActions, MessageActions} from "../store/actionTypes";

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
        dlgMuteGroupVisible: false,         // 消息屏蔽对话框
        dlgGroupInfoVisible: false,         // 群设置对话框
      }
    },

    watch: {
      async conversation(newVal) {
        try {
          await this.$store.dispatch(MessageActions.GetMessageList, {
            conversationType: newVal.conversationType,
            targetId: newVal.targetId,
            timestrap: null,
            singleShot: true,
          });
        } catch (e) {
          this.$message.error(`加载历史消息出错: ${e.messsage}`);
        }
      }
    },

    computed: {
      groupInfo() {
        const group = this.$store.getters.groupInfo(this.conversation.targetId);
        return group;
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

    async mounted() {
      try {
        await this.$store.dispatch(MessageActions.GetMessageList, {
          conversationType: this.conversation.conversationType,
          targetId: this.conversation.targetId,
          timestrap: null,
          singleShot: true,
        });
      } catch (e) {
        this.$message.error(`加载历史消息出错: ${e.messsage}`);
      }
    },

    methods: {
      /**
       * 群组禁言。
       */
      async onMuteGroupClicked() {
        try {
          if (this.groupInfo.isMuted) {
            await this.$store.dispatch(GroupActions.UnmuteGroup, {
              groupId: this.conversation.targetId
            });
          } else {
            await this.$store.dispatch(GroupActions.MuteGroup, {
              groupId: this.conversation.targetId
            });
          }

          await this.$store.dispatch(GroupActions.SyncGroupInfo, {
            groupId: this.conversation.targetId
          });

          this.dlgMuteGroupVisible = false;
          this.$message({type: 'success', center: true, message: '操作成功!'});
        } catch (e) {
          this.$message.error(e.message);
        }
      },

      /**
       * 发送消息。
       *
       * @param payload
       */
      async onSendMessage(payload) {
        try {
          await this.$store.dispatch(ConversationActions.SendMessage, {
            conversationType: this.conversation.conversationType,
            targetId: this.conversation.targetId,
            content: payload.content,
            messageType: payload.messageType
          });

          // todo: 滚动会话消息列表
        } catch (e) {
          console.error(`群组消息发送失败: `, e);
        }
      },

      /**
       * 会员点击事件。
       */
      async onGroupMemberClicked({event}) {
        console.log('会员被左键点击, 显示名片', event);
      },

      /**
       * 会员右键菜单。
       */
      async onGroupMemberContentMenu({event}) {
        console.log('会员右键菜单', event)
      },

      /**
       * 消息右键菜单。
       */
      async onMessageContentMenu({event}) {
        console.log('消息右键菜单', event)
      },

      /**
       * 编辑群公告。
       */
      async onEditBulletin() {
        try {
          const res = await this.$prompt('输入公告内容', '编辑群公告');
          if (res.action !== 'confirm') return;

          await this.$store.dispatch(GroupActions.SetBulletin, {
            groupId: this.groupInfo.id,
            bulletin: res.value
          });

          this.dlgBulletinVisible = false;

          await this.$store.dispatch(GroupActions.SyncGroupInfo, {
            groupId: this.groupInfo.id,
          });
        } catch (e) {
          if (e.message) this.$message.error(e.message);
        }
      }
    },
  }

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
