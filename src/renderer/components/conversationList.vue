<template>
  <div class="vChat-middlebar flexbox flex__direction-column">
    <div class="vc-searArea">
      <div class="iptbox flexbox">
        <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="keyword"></el-input>
      </div>
    </div>

    <!--会话列表-->
    <div class="vc-recordList flex1 flexbox flex__direction-column">
      <geminiScrollbar autoshow class="geminiScrollbar flex1">
        <ul class="clearfix J__recordList">
          <li class="flexbox flex-alignc wc__material-cell"
              v-for="(s, idx) in conversations"
              :key="idx"
              @click="onConversationClicked(s)">
            <div class="img">
              <em class="wc__badge" v-if="s.unreadMessageCount">{{s.unreadMessageCount}}</em>
              <el-avatar fit="fill" shape="square" :size="40" :src="s.senderPortraitUri"/>
            </div>
            <div class="info flex1">
              <h2 class="title clamp1">{{s.conversationTitle}}</h2>
              <p class="desc clamp1">{{s.latestMessage.content.content || ""}}</p>
            </div>
            <!--<label class="time flex-selft">{{s.latestMessage.sentTime}}</label>-->
            <label class="time flex-selft">
              <i class="iconfont icon-pingbi" v-if="isConversationMuted(s)"></i>
            </label>
          </li>
        </ul>
      </geminiScrollbar>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {
      targetId: {
        type: String,
        default: () => undefined
      }
    },

    data() {
      return {
        keyword: '',
        loading: false,

        tmpList: [],
      }
    },

    computed: {
      ...mapGetters(['conversations']),
    },

    methods: {
      onConversationClicked(s) {
        this.$emit('conversationChanged', s);
      },

      isConversationMuted(conversation) {
        let isMuted = false;
        if (conversation.conversationType === RongIMLib.ConversationType.GROUP) {
          const groupInfo = this.$store.getters.groupInfo(conversation.targetId);
          isMuted = groupInfo.isMuted;
        }

        return isMuted;
      }
    },
  }
</script>

<style>

</style>
