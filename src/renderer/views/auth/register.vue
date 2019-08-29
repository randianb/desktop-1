<!--登录/注册模板-->
<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <div class="wcim__lgregHeader flex1">
        <div class="slogan">
          <div class="logo"><img src="src/assets/img/common/logo.png"/></div>
          <h2>{{desktopAppName}}</h2>
        </div>
        <div class="forms">
          <form @submit.prevent="onRegister">
            <ul class="clearfix">
              <li class="flexbox flex-alignc"><i class="iconfont icon-shouji"></i>
                <input class="iptxt flex1" type="tel"
                       v-model="registerForm.phone"
                       name="verificationToken"
                       placeholder="手机号码"
                       autocomplete="off"
                       maxlength="11"/><em
                  class="borLine"></em></li>
              <li class="flexbox flex-alignc"><i class="iconfont icon-pass"></i>
                <input class="iptxt flex1" type="password"
                       v-model="registerForm.password"
                       name="password"
                       placeholder="登录密码"
                       autocomplete="off"/><em
                  class="borLine"></em></li>
              <li class="flexbox flex-alignc"><i class="iconfont icon-vcode"></i>
                <input class="iptxt flex1"
                       type="text"
                       v-model="registerForm.verificationToken"
                       name="verificationToken"
                       placeholder="验证码"
                       autocomplete="off"/>
                <em class="borLine"></em>
                <button class="btn-getcode" @click.prevent="onSendVerificationCode" :disabled="disabled">
                  {{verificationTip}}
                </button>
              </li>
            </ul>
            <div class="btns">
              <button class="wc__btn-primary btn__login" type="submit">注册</button>
            </div>
            <div class="lgregLink align-c clearfix">
              <router-link to="/login" tag="a">已有账号，去登录</router-link>
            </div>
          </form>
        </div>
      </div>

      <div class="wcim__lgregFooter"><p class="version">{{desktopAppName}} v{{desktopAppVersion}}</p></div>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {checkTel} from '../../utils/filters'
  import {UserActions} from "../../store/actionTypes";

  export default {
    data() {
      return {
        registerForm: {
          region: '86',
          phone: '18650015710',
          password: 'KVSIORI2',
          verificationToken: undefined
        },
        verificationTip: '获取验证码',
        disabled: false,
        time: 0,
      }
    },

    computed: {
      ...mapGetters(['desktopAppName', 'desktopAppVersion'])
    },

    methods: {
      async onRegister() {
        try {
          if (!this.registerForm.phone) {
            wcPop({content: '手机号不能为空！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else if (!checkTel(this.registerForm.phone)) {
            wcPop({content: '手机号格式不正确！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else if (!this.registerForm.password) {
            wcPop({content: '密码不能为空！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else if (!this.registerForm.verificationToken) {
            wcPop({content: '验证码不能为空！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else {
            await this.$store.dispatch(UserActions.Register, this.registerForm);

            this.$message.success('注册成功.');
            this.$router.push('/');
          }
        } catch (e) {
          this.$message.error(e.message);
        }
      },

      onSendVerificationCode() {
        if (!this.registerForm.phone) {
          wcPop({
            content: '手机号不能为空！',
            style: 'background:#e03b30;color:#fff;',
            time: 2
          });
        } else if (!checkTel(this.registerForm.phone)) {
          wcPop({
            content: '手机号格式不正确！',
            style: 'background:#e03b30;color:#fff;',
            time: 2
          });
        } else {
          this.time = 60;
          this.disabled = true;
          this.countDown();
        }
      },

      // 倒计时
      countDown() {
        if (this.time > 0) {
          this.time--;
          this.verificationTip = '获取验证码(' + this.time + ')';
          setTimeout(this.countDown, 1000);
        } else {
          this.time = 0;
          this.verificationTip = '获取验证码';
          this.disabled = false;
        }
      }
    }
  }
</script>

<style>
</style>
