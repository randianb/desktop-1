<template>
  <div>
    <conversation-list :targetId.sync="targetId" @conversationChanged="onConversationChanged"></conversation-list>

    <group-conversation :conversation="currentConversation" v-if="isGroupConversation"></group-conversation>
    <private-conversation :conversation="currentConversation" v-if="isPrivateConversation"></private-conversation>
  </div>
</template>

<script>
  import {ConversationActions} from "../../store/actionTypes";
  import {MessageMutations} from "../../store/mutationTypes";

  export default {
    data() {
      return {
        targetId: undefined,
        currentConversation: undefined
      }
    },

    computed: {
      isPrivateConversation() {
        return this.currentConversation &&
          this.currentConversation.conversationType === RongIMLib.ConversationType.PRIVATE;
      },

      isGroupConversation() {
        return this.currentConversation &&
          this.currentConversation.conversationType === RongIMLib.ConversationType.GROUP;
      },
    },

    mounted() {
      if (this.$route.targetId) {
        this.targetId = this.$route.targetId;
      }

      this.getConversationList();
    },

    methods: {
      async getConversationList() {
        try {
        } catch (e) {
          console.error(e.message);
        }
      },

      async onConversationChanged(s) {
        if (this.currentConversation === s) return;

        this.$store.commit(MessageMutations.ClearMessageList, {});

        this.currentConversation = s;
        await this.$store.dispatch(ConversationActions.ClearConversationUnreadCount, {
          conversationType: s.conversationType,
          targetId: s.targetId,
          count: 0
        });
      }
    },
  }
</script>

<style scoped>
</style>
