<!--登录/注册模板-->
<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <div class="wcim__lgregWrapper flexbox flex__direction-column">
        <div class="wcim__lgregHeader flex1">
          <div class="slogan">
            <div class="logo"><img src="src/assets/img/common/logo.png"/></div>
            <h2>{{desktopAppName}}</h2>
          </div>

          <div class="forms">
            <form @submit.prevent="onLogin">
              <ul class="clearfix">
                <li class="flexbox flex-alignc">
                  <i class="iconfont icon-shouji"></i>
                  <input class="iptxt flex1" type="tel"
                         v-model="signInForm.phone" name="phone"
                         placeholder="请输入手机号"
                         autocomplete="off"
                         maxlength="11"/><em
                  class="borLine"></em></li>
                <li class="flexbox flex-alignc">
                  <i class="iconfont icon-pass"></i>
                  <input class="iptxt flex1" type="password"
                         v-model="signInForm.password" name="pwd"
                         placeholder="请输入密码"
                         autocomplete="off"/><em
                  class="borLine"></em></li>
              </ul>

              <div class="btns">
                <button class="wc__btn-primary btn__login" type="submit">登录</button>
              </div>

              <div class="lgregLink align-c clearfix">
                <!--router-link to="#" tag="a">忘记密码</router-link-->
                <router-link to="/register" tag="a">注册用户</router-link>
              </div>
            </form>
          </div>
        </div>
        <div class="wcim__lgregFooter"><p class="version">{{desktopAppName}} v{{desktopAppVersion}}</p></div>
      </div>
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
        signInForm: {
          region: '86',
          phone: undefined,
          password: undefined
        }
      }
    },

    computed: {
      ...mapGetters(['desktopAppName', 'desktopAppVersion'])
    },

    mounted() {
      if (process.env.NODE_ENV === 'development') {
        this.signInForm = {
          region: '86',
          phone: '13777777777',
          password: '123456'
        };
      }
    },

    methods: {
      async onLogin() {
        try {
          if (!this.signInForm.phone) {
            wcPop({content: '手机号不能为空！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else if (!checkTel(this.signInForm.phone)) {
            wcPop({content: '手机号格式不正确！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else if (!this.signInForm.password) {
            wcPop({content: '密码不能为空！', style: 'background:#e03b30;color:#fff;', time: 2});
          } else {
            await this.$store.dispatch(UserActions.Login, this.signInForm);

            let self = this;
            wcPop({
              content: '登录成功，跳转中...',
              style: 'background:#41b883;color:#fff;',
              time: 2,
              shadeClose: false,
              end: function () {
                self.$router.push('/');
              }
            });
          }
        } catch (e) {
          this.$message.error(`登录失败: ${e.message}`);
        }
      }
    }
  }
</script>

<style scoped>
</style>
