import Vue from 'vue';
import {ContactActions, ConversationActions, GroupActions} from "../actionTypes";
import {ConversationMutations, MessageMutations} from "../mutationTypes";

const conversation = {
  state: {
    conversations: [],
  },

  getters: {
    conversations(state) {
      return state.conversations;
    },
  },

  mutations: {
    // 设置会话列表
    [ConversationMutations.SetConversationList](state, payload) {
      state.conversations = payload;
    },

    // 添加会话，在前部插入
    [ConversationMutations.PrependConversation](state, payload) {
      state.conversations.unshift(payload);
    }
  },

  actions: {
    // 获取会话列表
    async [ConversationActions.GetConversationList]({dispatch, commit, getters}, payload) {
      getters.imClient.getInstance().getConversationList({
        onSuccess: async function (list) {
          try {
            for (let i = 0; i < list.length; ++i) {
              let item = list[i];
              if (item.conversationType === RongIMLib.ConversationType.PRIVATE) {
                let contact = await dispatch(ContactActions.GetContactInfo, {id: item.targetId});
                item.conversationTitle = contact.nickname;
                item.senderPortraitUri = contact.portraitUri;
              } else if (item.conversationType === RongIMLib.ConversationType.GROUP) {
                let group = await dispatch(GroupActions.GetGroupInfo, {id: item.targetId});
                item.conversationTitle = group.name;
                item.senderPortraitUri = group.portraitUri;
              }
            }

            commit(ConversationMutations.SetConversationList, list);
          } catch (e) {
            console.error(e);
          }
        },
        onError: function (error) {
          console.error(error);
        }
      }, null);
    },

    // 更新未读消息数
    async [ConversationActions.ClearConversationUnreadCount]({getters}, payload) {
      let conversationType = payload.conversationType;
      let targetId = payload.targetId;
      getters.imClient.getInstance().getConversation(conversationType, targetId, {
        onSuccess: function (conversation) {
          if (!conversation || conversation.unreadMessageCount === 0) return;

          // 清除未读消息
          getters.imClient.getInstance().clearUnreadCount(conversationType, targetId, {
            onSuccess: function () {
              // 清除未读消息成功
              conversation.unreadMessageCount = payload.count;
              getters.imClient.getInstance().updateConversation(conversation);
              // console.log("清除未读消息成功: ", conversation);
            },
            onError: function (e) {
              console.error('清除未读消息失败：', e);
            }
          })
        },
        onError: function (e) {
          console.error(e);
        }
      });
    },

    // 发送消息
    async [ConversationActions.SendMessage]({getters, commit}, payload) {
      let conversationType = payload.conversationType;
      let targetId = payload.targetId;
      let msg = null;
      if (payload.messageType === 1) {
        msg = new RongIMLib.TextMessage({
          content: payload.content,
          extra: ''
        });
      } else if (payload.messageType === 2) {
        new RongIMLib.ImageMessage({
          base64Str: payload.content,
          imageUri: payload.imageUri
        });
      } else {
        return Vue.prototype.$message.warning('暂不支持的消息类型');
      }

      getters.imClient.getInstance().sendMessage(conversationType, targetId, msg, {
        onSuccess: function (message) {
          // Vue.prototype.$message.success('消息发送成功');

          const sender = getters.userInfo;
          payload = {
            type: 'msg-txt',
            direction: 'outgoing',
            sender: {
              nickname: sender.nickname,
              portraitUri: sender.portraitUri
            },
            content: {
              text: message.content.content
            }
          };
          commit(MessageMutations.AppendMessageList, {
            targetId,
            messages: [payload]
          });
        },
        onError: function (errorCode, message) {
          let info = '';
          switch (errorCode) {
            case RongIMLib.ErrorCode.TIMEOUT:
              info = '超时';
              break;
            case RongIMLib.ErrorCode.UNKNOWN:
              info = '未知错误';
              break;
            case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
              info = '对方已将你拉入黑名单，无法向对方发送消息';
              break;
            case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
              info = '不在讨论组中';
              break;
            case RongIMLib.ErrorCode.NOT_IN_GROUP:
              info = '不在群组中';
              break;
            case RongIMLib.ErrorCode.FORBIDDEN_IN_GROUP:
              info = '当前群组已被禁言';
              break;
            case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
              info = '不在聊天室中';
              break;
          }

          Vue.prototype.$message.error(info);
        }
      });
    },

    // 启动新的会话
    async [ConversationActions.StartConversation]({dispatch, commit}, payload) {
      /*let conversationTitle = undefined,
        conversationType = payload.conversationType,
        draft = undefined,
        isTop = false,
        latestMessage = {
          content: {
            content: undefined,
          },
          conversationType: payload.conversationType
        },
        latestMessageId = undefined,
        notificationStatus = undefined,
        objectName = undefined,
        receivedStatus = undefined,
        receivedTime = undefined,
        senderUserId = undefined,
        senderUserName = undefined,
        sentStatus = undefined,
        sentTime = undefined,
        targetId = payload.targetId,
        unreadMessageCount = 0,
        senderPortraitUri = undefined,
        isHidden = false,
        mentionedMsg = false,
        hasUnreadMention = false,
        _readTime = undefined;

      if (payload.conversationType === RongIMLib.ConversationType.PRIVATE) {
        let contact = await dispatch(ContactActions.GetContactInfo, {id: payload.targetId});
        conversationTitle = contact.nickname;
        senderPortraitUri = contact.portraitUri;
      } else if (payload.conversationType === RongIMLib.ConversationType.GROUP) {
        let group = await dispatch(GroupActions.GetGroupInfo, {id: payload.targetId});
        conversationTitle = group.name;
        senderPortraitUri = group.portraitUri;
      }

      let conversation = new RongIMLib.Conversation(
        conversationTitle,
        conversationType,
        draft,
        isTop,
        latestMessage,
        latestMessageId,
        notificationStatus,
        objectName,
        receivedStatus,
        receivedTime,
        senderUserId,
        senderUserName,
        sentStatus,
        sentTime,
        targetId,
        unreadMessageCount,
        senderPortraitUri,
        isHidden,
        mentionedMsg,
        hasUnreadMention,
        _readTime);
      commit(ConversationMutations.PrependConversation, conversation);*/
      dispatch(ConversationActions.SendMessage, {
        conversationType: payload.conversationType,
        targetId: payload.targetId,
        content: '',
        messageType: 1
      });
    }
  }
};

export default conversation;
