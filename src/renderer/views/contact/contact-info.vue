<!--好友信息模板-->
<template>
  <div>
    <contact-list></contact-list>

    <!-- 内容区 -->
    <div class="vChat-container flex1 flexbox flex__direction-column">
      <div class="vChat__header">
        <div class="inner flexbox"><h2 class="barTit flex1">详细资料</h2></div>
      </div>
      <div class="vChat__main flex1 flexbox flex__direction-column">
        <geminiScrollbar autoshow class="geminiScrollbar flex1">
          <div class='wc__contextmenuUserInfo uinfo'>
            <ul class="clearfix">
              <li>
                <div class="item flexbox flex-alignc" style="padding:30px 0;">
                  <span class="lbl flex1"><em style="font-size:20px;">{{userInfo.nickname}}</em>
                    <em class="iconfont icon-male ml-10" style="color:#46b6ef;"></em>
                    <i>{{userInfo.whatsUp}}</i></span>
                  <img class="uimg" :src="userInfo.portraitUri" style="border-radius: 4px;"/>
                </div>
              </li>
              <!--li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl flex1">设置备注</label>
                </div>
              </li-->
              <li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl">地 区</label>
                  <div class="cnt flex1 c-999">未设置</div>
                </div>
              </li>
              <li>
                <div class="item flexbox flex-alignc">
                  <label class="lbl">手 机</label>
                  <div class="cnt flex1 c-999">+86 {{userInfo.phone}}</div>
                </div>
              </li>
              <li>
                <div class="item align-c">
                  <el-button type="success" size="medium" style="border-radius:0;padding:10px 50px;">发消息</el-button>
                </div>
              </li>
            </ul>
          </div>
        </geminiScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
  import {ContactActions} from "../../store/actionTypes";

  export default {
    data() {
      return {
        userInfo: {}
      }
    },

    watch: {
      async $route() {
        this.userInfo = await this.$store.dispatch(ContactActions.GetContactInfo, {
          id: this.$route.query.id
        });
      }
    },
  }
</script>

<style scoped>
</style>
