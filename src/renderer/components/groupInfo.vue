<template>
  <el-dialog :visible="dialogGroupInfoVisible" width="480px" center>
    <p slot="title" class="fs-18 ff-st">群组详情({{groupMembers.length}})</p>
    <div class="wc__groupMemInfo-panel" style="margin:-20px 0; max-height: 420px; overflow-y: auto;">
      <div class="wc__ucinfo-qunMember">
        <ul class="clearfix">
          <li v-for="(member, idx) in groupMembers" :key="idx">
            <a href="#">
              <img class="uimg" :src="member.portraitUri">
              <span class="name">{{member.nickname}}</span>
            </a>
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
            <!--<div class="item flexbox flex-alignc"><label class="lbl flex1">我在本群的昵称</label>-->
            <!--<input class="val" type="text" value="Wqq_王巧巧">-->
            <!--</div>-->
          </li>
          <!--li>
            <div class="item flexbox flex-alignc"><label class="lbl flex1">置顶聊天</label>
              <div class="cnt"><input class="cp__checkbox-switch" type="checkbox"></div>
            </div>
            <div class="item flexbox flex-alignc"><label class="lbl flex1">显示群成员昵称</label>
              <div class="cnt"><input class="cp__checkbox-switch" type="checkbox" checked=""></div>
            </div>
          </li>
          <li>
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
  import {mapGetters} from 'vuex';

  export default {
    props: {
      groupInfo: {
        type: Object,
        default: () => {
        }
      },

      dialogGroupInfoVisible: {
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
      ...mapGetters(['groupMembers']),
    },

    mounted() {
    },

    methods: {
      onQuitGroup() {
        this.dialogGroupInfoVisible = false;
        this.dialogVisible_groupSetAlert = false;
        this.$message({type: 'success', center: true, message: '您已经退出群聊!'});
      }
    }
  }
</script>

<style scoped>
</style>
