/**
 *IM客户端。
 */
import Vue from 'vue';
import router from '../../router';
import packageInfo from '../../../../package';
import {
  ContactActions,
  ConversationActions,
  GroupActions,
  RongCloudActions, UserActions
} from "../actionTypes";
import {registerMessage} from '../../utils/im';
import {MessageMutations} from "../mutationTypes";

require('../../../../static/js/RongIMLib-2.5.0.js');
require('../../../../static/js/protobuf-2.3.5.min.js');
require('../../../../static/js/RongEmoji-2.2.7.js');

const imClient = {
  state: {
    imClient: null
  },

  getters: {
    imClient(state) {
      return state.imClient;
    }
  },

  mutations: {},

  actions: {
    // 初始化客户端
    async [RongCloudActions.InitClient]({state, getters, dispatch, commit}, payload) {
      RongIMLib.RongIMClient.init(packageInfo.imAppKey);

      state.imClient = RongIMLib.RongIMClient;

      // 连接状态监听器
      state.imClient.setConnectionStatusListener({
        onChanged: function (status) {
          // status 标识当前连接状态
          switch (status) {
            case RongIMLib.ConnectionStatus.CONNECTING: {
              console.info('正在连接IM服务器...');
              break;
            }

            case RongIMLib.ConnectionStatus.CONNECTED: {
              console.log('IM服务器连接成功!');
              break;
            }

            case RongIMLib.ConnectionStatus.DISCONNECTED: {
              console.warn('从IM服务器断开连接.');
              break;
            }

            case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT: {
              Vue.prototype.$message.error('账号在其他设备上登录');
              dispatch(UserActions.Logout, {});

              router.push({name: 'Login'});
              break;
            }

            case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT: {
              console.error('IM服务器域名错误.');
              break;
            }

            case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE: {
              console.error('当前网络不可用.');
              break;
            }
          }
        }
      });

      // 消息监听器
      state.imClient.setOnReceiveMessageListener({
        // 接收到的消息
        onReceived: async function (message) {
          // 判断消息类型
          switch (message.messageType) {
            case RongIMClient.MessageType.TextMessage:
              // console.log('收到消息: ', message);
              let sender = null;
              if (message.conversationType === 1) {
                // 私聊，获取用户信息
                let contact = await dispatch(ContactActions.GetContactInfo, {
                  id: item.targetId
                });
                sender = {
                  nickname: contact.nickname,
                  portraitUri: contact.portraitUri,
                }
              } else if (message.conversationType === 3) {
                // 群聊，获取成员信息
                let member = await dispatch(GroupActions.GetGroupMemberInfo, {
                  id: message.targetId,
                  memberId: message.senderUserId
                });
                sender = {
                  nickname: member.memberInfo.nickname,
                  portraitUri: member.memberInfo.portraitUri,
                };
              }

              payload = {
                type: 'msg-txt',
                direction: message.messageDirection ? 'incoming' : 'outgoing',
                sender: sender,
                content: {
                  text: message.content.content
                }
              };
              commit(MessageMutations.AppendMessageList, {
                targetId: message.targetId,
                messages: [payload]
              });
              break;

            case RongIMClient.MessageType.VoiceMessage:
              // message.content.content => 格式为 AMR 的音频 base64
              console.log('收到语音消息');
              break;

            case RongIMClient.MessageType.ImageMessage:
              // message.content.content => 图片缩略图 base64
              // message.content.imageUri => 原图 URL
              console.log('收到图片消息', message);
              break;

            case RongIMClient.MessageType.LocationMessage:
              // message.content.latiude => 纬度
              // message.content.longitude => 经度
              // message.content.content => 位置图片 base64
              console.log('收到位置消息');
              break;

            case RongIMClient.MessageType.RichContentMessage:
              // message.content.content => 文本消息内容
              // message.content.imageUri => 图片 base64
              // message.content.url => 原图 URL
              console.log('收到富文本消息');
              break;

            case RongIMClient.MessageType.InformationNotificationMessage:
              console.log('收到通知消息');
              break;

            case RongIMClient.MessageType.ContactNotificationMessage:
              console.log('收到好友请求消息');
              break;

            case RongIMClient.MessageType.ProfileNotificationMessage:
              console.log('收到好友更新消息');
              break;

            case RongIMClient.MessageType.CommandNotificationMessage:
              console.log('收到命令通知消息');
              break;

            case RongIMClient.MessageType.CommandMessage:
              console.log('收到命令消息');
              break;

            case RongIMClient.MessageType.RegisterMessage:
              console.log('RegisterMessage', message);
              break;

            case RongIMClient.MessageType.UnknownMessage:
              payload = {
                type: 'notice',
                direction: undefined,
                sender: null,
                content: {
                  text: message.content.message.content.message
                }
              };
              commit(MessageMutations.AppendMessageList, {
                targetId: message.targetId,
                messages: [payload]
              });
              break;
            default:
            // do something
          }
        }
      });

      // 注册消息
      registerMessage(RongIMClient);

      // 连接IM服务器
      state.imClient.connect(getters.userInfo.rongCloudToken, {
        onSuccess: function (userId) {
          console.log('IM服务器连接成功，用户ID：' + userId);

          // 获取会话
          dispatch(ConversationActions.GetConversationList);
        },

        onTokenIncorrect: function () {
          console.error('IM Token 无效');
        },

        onError: function (errorCode) {
          let info = '';
          switch (errorCode) {
            case RongIMLib.ErrorCode.TIMEOUT:
              info = '超时';
              break;
            case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
              info = '不可接受的协议版本';
              break;
            case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
              info = 'appkey不正确';
              break;
            case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
              info = '服务器不可用';
              break;
            default:
              info = '未知的错误代码：' + errorCode;
              break;
          }

          console.error(info);
        }
      });
    },
  }
};

export default imClient;
