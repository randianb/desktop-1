<template>
  <div>
    <div class="vChat-container flex1 flexbox flex__direction-column">
      <div class="vChat__header">
        <div class="inner flexbox"><h2 class="barTit">设置</h2>
        </div>
      </div>
      <div class="vChat__main flex1 flexbox flex__direction-column">
        <geminiScrollbar autoshow class="geminiScrollbar flex1">
          <div class='wc__contextmenuUserInfo uinfo'>
            <ul class="clearfix" style="padding:0 60px;">
              <li style="padding:0;">
                <div class="item flexbox flex-alignc" style="padding:30px 0;">
                  <img class="uimg ml-10" :src="userInfo.portraitUri" style="border-radius: 4px;"/>
                  <span class="lbl flex1 ml-15">
                    <em style="font-size:20px;">{{userInfo.nickname}}</em>
                    <em class="iconfont icon-male ml-10"
                        style="color:#46b6ef;"></em><i>手机：+86 {{userInfo.phone}}</i></span>
                </div>
              </li>
              <li style="background:rgba(255,255,255,.5);border:1px solid #e9e9e9;border-radius:10px;padding:0;">
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;">
                  <label class="lbl flex1">清除缓存</label>
                  <span class="val c-999 fs-14 ff-ar">2.33M</span>
                  <i class="iconfont icon-arrR c-999 fs-14 ml-15"></i>
                </div>
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;">
                  <label class="lbl flex1">清空所有聊天记录</label>
                  <i class="iconfont icon-arrR c-999 fs-14 ml-15"></i>
                </div>
              </li>
              <li class="mt-15" style="background:rgba(255,255,255,.5);border:1px solid #e9e9e9;border-radius:10px;padding:0;">
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;">
                  <label class="lbl flex1">修改密码</label>
                  <i class="iconfont icon-arrR c-999 fs-14 ml-15"></i>
                </div>
              </li>
              <!--li class="mt-15"
                  style="background:rgba(255,255,255,.5);border:1px solid #e9e9e9;border-radius:10px;padding:0;">
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;">
                  <label class="lbl flex1">开启新消息通知</label>
                  <input class="cp__checkbox-switch" type="checkbox" checked/>
                </div>
              </li-->
              <li class="mt-15" style="background:rgba(255,255,255,.5);border:1px solid #e9e9e9;border-radius:10px;padding:0;">
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;">
                  <label class="lbl flex1">关于我们</label>
                  <span class="val c-999 fs-14 ff-ar">当前版本: {{app.version}}</span>
                  <!--<i class="iconfont icon-arrR c-999 fs-14 ml-15"></i>-->
                </div>
              </li>
              <li class="mt-15" style="background:rgba(255,255,255,.5);border:1px solid #e9e9e9;border-radius:10px;padding:0;">
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px;" @click="onAboutUsClicked">
                  <label class="lbl flex1">打开调试器</label>
                </div>
                <div class="item flexbox flex-alignc wc__material-cell" style="padding:15px; " @click="onReload">
                  <label class="lbl flex1">重新加载</label>
                </div>
              </li>

              <li class="mt-15" style="padding:0;">
                <a class="wc__btn-primary" href="javascript:;" style="background: #f25643;" @click="dialogVisible_logout = true">
                   退出当前账号
                </a>
              </li>
            </ul>
          </div>
        </geminiScrollbar>
      </div>
      <!-- //退出账号 -->
      <el-dialog :visible.sync="dialogVisible_logout" width="300px">
        <p slot="title" class="fs-18 ff-st">提示</p>
        <p class="ff-st c-999" style="margin:-20px 0 -10px;">确定要退出当前账号吗？退出后无法接收在线消息喔！</p>
        <span slot="footer" class="dialog-footer">
                    <el-button size="mini" @click="dialogVisible_logout = false">取消</el-button>
          <el-button type="danger"
                     size="mini"
                     @click="handleLogout">退出</el-button>
                </span></el-dialog>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {UserActions} from "../../store/actionTypes";

  export default {
    data() {
      return {
        dialogVisible_logout: false, //退出账号
      }
    },

    computed: {
      ...mapGetters(['userInfo', 'app'])
    },

    methods: {
      async handleLogout() {
        let self = this;
        this.dialogVisible_logout = false;
        this.$message({
          type: 'success',
          message: '退出成功!',
          center: true,
          time: 2,
          onClose: async function () {
            await self.$store.dispatch(UserActions.Logout);

            self.$router.push({path: '/login'})
          }
        });
      },

      onAboutUsClicked() {
        this.$electron.remote.getCurrentWindow().toggleDevTools();
      },

      onReload() {
        location.reload();
      }
    },
  }
</script>

<style>

</style>
