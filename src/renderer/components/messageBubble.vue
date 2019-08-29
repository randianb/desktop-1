<!--侧边栏模板-->
<template>
  <div>
    <li class="time" v-if="message.type === 'time'"><span>{{message.content.text}}</span></li>
    <li class="notice" v-else-if="message.type === 'notice'"><span>{{message.content.text}}</span></li>
    <li class="others" v-else-if="message.direction === 'incoming'">
      <router-link class="avatar" to="/contact/contact-info">
        <img :src="message.sender.portraitUri"/>
      </router-link>

      <div class="content">
        <p class="author">{{message.sender.nickname}}</p>
        <div class="msg" v-if="message.type === 'msg-txt'">
          <span>{{message.content.text}}</span>
        </div>
        <div class="msg lgface" v-else-if="message.type === 'msg-emoji'">
          <img class="lg-face" :src="message.content.src"></div>
        <div class="msg picture" v-else-if="message.type === 'msg-img'">
          <img class="img__pic" :src="message.content.src">
        </div>
        <div class="msg video" v-else-if="message.type === 'msg-video'">
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
        <div class="msg picture" v-else-if="message.type === 'msg-img'">
          <img class="img__pic" :src="message.content.src">
        </div>
        <div class="msg video" v-else-if="message.type === 'msg-video'">
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

      <router-link class="avatar" to="/contact/contact-info">
        <img :src="message.sender.portraitUri"/>
      </router-link>
    </li>
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img02.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content">-->
    <!--<p class="author">Miss（孙莉 ▪ ㈱）</p>-->
    <!--<div class="msg picture"><img class="img__pic" src="src/assets/img/placeholder/wchat__img03.jpg"-->
    <!--preview="1"/>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img12.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content"><p class="author">Flowers（杨迪）</p>-->
    <!--<div class="msg"> 群主，来个红包雨呗。活跃一下群里的气氛！ <img class="face" src="src/assets/img/emotion/face01/63.png">-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="time"><span>4月02日 早上08:00</span></li>-->
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img04.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content"><p class="author">张小龙（龙巡天下）</p>-->
    <!--<div class="msg">-->
    <!--“江苏快3走势图-快3开奖走势图”<br> <a href="http://k3.icaile.com/">http://k3.icaile.com/</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="me">-->
    <!--<div class="content"><p class="author">王梅（Fine）</p>-->
    <!--<div class="msg">-->
    <!--小龙哥，好棒棒~~ 就应该向我们这些小白多推荐下。<img class="face" src="src/assets/img/emotion/face01/79.png">-->
    <!--</div>-->
    <!--</div>-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img11.jpg"/>-->
    <!--</router-link>-->
    <!--</li>-->
    <!--<li class="me">-->
    <!--<div class="content"><p class="author">王梅（Fine）</p>-->
    <!--<div class="msg video">-->
    <!--<img class="img__video" src="src/assets/img/placeholder/wchat__video01-poster.jpg"-->
    <!--videoUrl="src/assets/img/placeholder/wchat__video01-Y7qk5uVcNcFJIY8O4mKzDw.mp4"/>-->
    <!--</div>-->
    <!--</div>-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img11.jpg"/>-->
    <!--</router-link>-->
    <!--</li>-->
    <!--<li class="me">-->
    <!--<div class="content"><p class="author">王梅（Fine）</p>-->
    <!--<div class="msg attachment">-->
    <!--<div class="card flexbox flex-alignc"><i class="ico-bg"></i>-->
    <!--<div class="file-info flex1" title="数字经济：经济转型、创新发展的未来方向">-->
    <!--<p class="name">数字经济：经济转型、创新发展的未来方向.txt</p>-->
    <!--<p class="size">546.00 B</p>-->
    <!--</div>-->
    <!--<a class="btn-down" href="#" target="_blank" download="数字经济：经济转型、创新发展的未来方向.txt"></a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img11.jpg"/>-->
    <!--</router-link>-->
    <!--</li>-->
    <!--<li class="time"><span>4月03日 早上09:30</span></li>-->
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img12.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content"><p class="author">Flowers（杨迪）</p>-->
    <!--<div class="msg video">-->
    <!--<img class="img__video" src="src/assets/img/placeholder/wchat__video02-poster.jpg"-->
    <!--videoUrl="src/assets/img/placeholder/wchat__video02-Y7qk5uVcNcFJIY8O4mKzDw.mp4"/>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img07.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content"><p class="author">BBQ（王晓丽）</p>-->
    <!--<div class="msg picture"><img class="img__pic" src="src/assets/img/placeholder/wchat__img01.jpg"-->
    <!--preview="1"/>-->
    <!--</div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="time"><span>"BBQ（王晓丽）" 撤回了一条消息</span></li>-->
    <!--<li class="others">-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img03.jpg"/>-->
    <!--</router-link>-->
    <!--<div class="content"><p class="author">布鲁斯-科比</p>-->
    <!--<div class="msg lgface">-->
    <!--<img class="lg-face" src="src/assets/img/emotion/face02/6.gif"></div>-->
    <!--</div>-->
    <!--</li>-->
    <!--<li class="me">-->
    <!--<div class="content"><p class="author">王梅（Fine）</p>-->
    <!--<div class="msg picture">-->
    <!--<img class="img__pic" src="src/assets/img/placeholder/wchat__img02.jpg" preview="1"/>-->
    <!--</div>-->
    <!--</div>-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img11.jpg"/>-->
    <!--</router-link>-->
    <!--</li>-->
    <!--<li class="me">-->
    <!--<div class="content"><p class="author">王梅（Fine）</p>-->
    <!--<div class="msg">-->
    <!--有需要一起押注的@我哈~~-->
    <!--</div>-->
    <!--</div>-->
    <!--<router-link class="avatar" to="/contact/uinfo"><img src="src/assets/img/uimg/u__chat-img11.jpg"/>-->
    <!--</router-link>-->
    <!--</li>-->
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
    }
  }
</script>

<style>

</style>
