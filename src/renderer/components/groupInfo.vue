<template>
  <el-dialog :visible="visible" width="480px" center @close="onClosed">
    <p slot="title" class="fs-18 ff-st">群组详情({{groupMembers.length}})</p>
    <div class="wc__groupMemInfo-panel" style="margin:-20px 0; max-height: 420px; overflow-y: auto;">
      <div class="wc__ucinfo-qunMember">
        <ul class="clearfix">
          <li v-for="(member, idx) in groupMembers" :key="idx">
            <img class="uimg" :src="member.memberInfo.portraitUri">
            <span class="name">{{member.memberInfo.nickname}}</span>
          </li>
        </ul>
      </div>
      <div class="wc__groupMemInfo-setting">
        <ul class="clearfix">
          <li>
            <div class="item flexbox flex-alignc">
              <label class="lbl flex1">群聊名称</label>
              <input class="val" type="text" :value="groupInfo.name" readonly="true">
            </div>
            <div class="item flexbox flex-alignc">
              <label class="lbl flex1">我在本群的昵称</label>
              <input class="val" type="text" value="">
            </div>
          </li>
          <li>
            <div class="item flexbox flex-alignc">
              <label class="lbl flex1">允许私聊</label>
              <div class="cnt">
                <el-switch class="cp__checkbox-switch" v-model="groupInfo.allowPrivateChat" @change="onUpdateAllowPrivateChat"/>
              </div>
            </div>
            <div class="item flexbox flex-alignc">
              <label class="lbl flex1">入群验证</label>
              <div class="cnt">
                <el-switch class="cp__checkbox-switch" v-model="groupInfo.joinConfirm" @change="onUpdateJoinConfirm"/>
              </div>
            </div>
          </li>
          <!--li>
            <div class="item flexbox flex-alignc wc__material-cell"><label class="lbl flex1">设置当前聊天背景</label>
            </div>
          </li>
          <li>
            <div class="item flexbox flex-alignc wc__material-cell"><label class="lbl flex1">清空聊天记录</label></div>
          </li-->
        </ul>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogVisible_groupSetAlert = true" style="width:100%;">删除并退出</el-button>
        </span>
    <el-dialog :visible.sync="dialogVisible_groupSetAlert"
               :show-close="false"
               center
               title="退出群组"
               width="250px"
               append-to-body>
      <p class="ff-st c-999" style="margin:-30px 10px -10px;">删除并退出群聊后，将接收不到此群聊的信息！</p>
      <span slot="footer" class="dialog-footer">
            <el-button size="mini" @click="dialogVisible_groupSetAlert = false">取消</el-button>
            <el-button type="primary" size="mini" @click="onQuitGroup">确定</el-button>
          </span>
    </el-dialog>
  </el-dialog>
</template>

<script>
  import {GroupActions} from "../store/actionTypes";

  export default {
    props: {
      groupInfo: {
        type: Object,
        default: () => {
        }
      },

      visible: {
        type: Boolean,
        default: () => false,
      },
    },

    data() {
      return {
        dialogVisible_groupSetAlert: false
      }
    },

    computed: {
      groupMembers() {
        return this.$store.getters.groupMembers(this.groupInfo.id) || [];
      }
    },

    mounted() {
    },

    methods: {
      // 关闭
      onClosed() {
        this.$emit('close');
      },

      // 设置是否允许私聊
      async onUpdateAllowPrivateChat(v) {
        try {
          await this.$store.dispatch(GroupActions.SetAllowPrivateChat, {
            groupId: this.groupInfo.id,
            allowed: v ? 1 : 0
          });

          await this.$store.dispatch(GroupActions.SyncGroupInfo, {
            groupId: this.groupInfo.id,
          });
        } catch (e) {
          if (e.message) this.$message.error(e.message);
        }
      },

      // 设置入群是否需要验证
      async onUpdateJoinConfirm(v) {
        try {
          await this.$store.dispatch(GroupActions.SetNeedJoinConfirm, {
            groupId: this.groupInfo.id,
            need: v ? 1 : 0
          });

          await this.$store.dispatch(GroupActions.SyncGroupInfo, {
            groupId: this.groupInfo.id,
          });
        } catch (e) {
          if (e.message) this.$message.error(e.message);
        }
      },

      // 退出群组
      async onQuitGroup() {
        /*
        this.visible = false;
        this.dialogVisible_groupSetAlert = false;
        this.$message({type: 'success', center: true, message: '您已经退出群聊!'});
        */
      }
    }
  }
</script>

<style scoped>
</style>
