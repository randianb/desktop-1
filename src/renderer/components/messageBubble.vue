<template>
  <div>
    <li class="time" v-if="message.type === 'time'"><span>{{message.content.text}}</span></li>
    <li class="notice" v-else-if="message.type === 'notice'"><span>{{message.content.text}}</span></li>
    <li class="others" v-else-if="message.direction === 'incoming'">
      <span class="avatar" @click="onGroupMemberClicked" @contextmenu="onShowGroupMemberContentMenu">
        <img :src="message.sender.portraitUri"/>
      </span>

      <div class="content" @contextmenu="onShowMsgContentMenu">
        <p class="author">{{message.sender.nickname}}</p>
        <div class="msg" v-if="message.type === 'msg-txt'">
          <span>{{message.content.text}}</span>
        </div>
        <div class="msg lgface" v-else-if="message.type === 'msg-emoji'">
          <img class="lg-face" :src="message.content.src"></div>
        <div class="msg picture" v-else-if="message.type === 'msg-img'" @dblclick="onImgDblClicked">
          <img class="img__pic" :src="message.content.src">
        </div>
        <div class="msg video" v-else-if="message.type === 'msg-video'" @click="onVideoDblClicked">
          <img class="img__video" :src="message.content.thumbnail" :videoUrl="message.content.src"/>
        </div>
        <div class="msg attachment" v-else-if="message.type === 'msg-attachment'">
          <div class="card flexbox flex-alignc">
            <i class="ico-bg"></i>
            <div class="file-info flex1" :title="message.content.title">
              <p class="name">{{message.content.name}}</p>
              <p class="size">{{message.content.size}}</p>
            </div>
            <a class="btn-down" href="#" target="_blank" :download="message.content.name"></a>
          </div>
        </div>
      </div>
    </li>
    <li class="me" v-else-if="message.direction === 'outgoing'">
      <div class="content">
        <p class="author">{{message.sender.nickname}}</p>
        <div class="msg" v-if="message.type === 'msg-txt'">
          <span>{{message.content.text}}</span>
        </div>
        <div class="msg lgface" v-else-if="message.type === 'msg-emoji'">
          <img class="lg-face" :src="message.content.src"></div>
        <div class="msg picture" v-else-if="message.type === 'msg-img'" @dblclick="onImgDblClicked">
          <img class="img__pic" :src="message.content.src">
        </div>
        <div class="msg video" v-else-if="message.type === 'msg-video'" @dblclick="onVideoDblClicked">
          <img class="img__video" :src="message.content.thumbnail" :videoUrl="message.content.src"/>
        </div>
        <div class="msg attachment" v-else-if="message.type === 'msg-attachment'">
          <div class="card flexbox flex-alignc">
            <i class="ico-bg"></i>
            <div class="file-info flex1" :title="message.content.title">
              <p class="name">{{message.content.name}}</p>
              <p class="size">{{message.content.size}}</p>
            </div>
            <a class="btn-down" href="#" target="_blank" :download="message.content.name"></a>
          </div>
        </div>
      </div>

      <span class="avatar" to="/contact/contact-info">
        <img :src="message.sender.portraitUri"/>
      </span>
    </li>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {
      message: {
        type: Object,
        default: function () {
          return {
            type: 'time',
            content: {
              text: ''
            }
          }
        }
      }
    },

    data() {
      return {}
    },

    computed: {
      ...mapGetters(['userInfo']),
    },
    
    methods: {
      // 用户被左键点击
      async onGroupMemberClicked($event) {
        console.log('会员被左键点击, 显示名片', $event)
      },

      async onShowGroupMemberContentMenu($event) {
        console.log('会员右键菜单', $event)
      },
      
      // 消息被右键点击
      async onShowMsgContentMenu($event) {
        console.log('消息右键菜单', $event)
      },
      
      // 图片双击
      async onImgDblClicked($event) {
        console.log('图片双击', $event)
      },
      
      // 视频双击
      async onVideoDblClicked($event) {
        console.log('视频双击', $event)
      }
    }
  }
</script>

<style>

</style>
