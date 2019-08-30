import {ContactActions, GroupActions, MessageActions, UserActions} from "../actionTypes";
import {MessageMutations} from "../mutationTypes";

const conversation = {
  state: {
    messages: {
    },
    /*[{
      type: 'time',
      direction: undefined,
      sender: undefined,
      content: {
        text: '2019年04月01日 晚上19:15'
      }
    }, {
      type: 'notice',
      direction: undefined,
      sender: undefined,
      content: {
        text: '当前群聊人数较多，已显示群成员昵称，同时为了信息安全，请注意聊天隐私'
      }
    }, {
      type: 'msg-txt',
      direction: undefined,
      sender: undefined,
      content: {
        text: '2019年04月03日 晚上19:15'
      }
    }, {
      type: 'msg-txt',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        text: '大家晚上好呀！'
      }
    }, {
      type: 'msg-txt',
      direction: 'incoming',
      sender: {
        nickname: 'Miss（孙莉 ▪ ㈱）',
        portraitUri: 'static/img/uimg/u__chat-img02.jpg'
      },
      content: {
        text: '大家晚上好呀！'
      }
    }, {
      type: 'msg-attachment',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        title: '数字经济：经济转型、创新发展的未来方向',
        name: '数字经济：经济转型、创新发展的未来方向.txt',
        size: '546.00 B',
        src: ''
      }
    }, {
      type: 'msg-img',
      direction: 'incoming',
      sender: {
        nickname: 'Miss（孙莉 ▪ ㈱）',
        portraitUri: 'static/img/uimg/u__chat-img02.jpg'
      },
      content: {
        src: 'static/img/placeholder/wchat__img03.jpg'
      }
    }, {
      type: 'msg-txt',
      direction: 'incoming',
      sender: {
        nickname: 'Flowers（杨迪）',
        portraitUri: 'static/img/uimg/u__chat-img12.jpg'
      },
      content: {
        text: '群主，来个红包雨呗。活跃一下群里的气氛！'
      }
    }, {
      type: 'time',
      direction: undefined,
      sender: undefined,
      content: {
        text: '4月02日 早上08:00'
      }
    }, {
      type: 'msg-txt',
      direction: 'incoming',
      sender: {
        nickname: '张小龙（龙巡天下）',
        portraitUri: 'static/img/uimg/u__chat-img04.jpg'
      },
      content: {
        text: '4月02日 早上08:00'
      }
    }, {
      type: 'msg-txt',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        text: '小龙哥，好棒棒~~ 就应该向我们这些小白多推荐下。'
      }
    }, {
      type: 'msg-video',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        thumbnail: 'static/img/placeholder/wchat__video01-poster.jpg',
        src: 'static/img/placeholder/wchat__video01-Y7qk5uVcNcFJIY8O4mKzDw.mp4'
      }
    }, {
      type: 'msg-img',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        src: 'static/img/placeholder/wchat__video01-poster.jpg',
      }
    }, {
      type: 'time',
      direction: undefined,
      sender: undefined,
      content: {
        text: '"BBQ（王晓丽）" 撤回了一条消息'
      }
    }, {
      type: 'msg-emoji',
      direction: 'incoming',
      sender: {
        nickname: '布鲁斯-科比',
        portraitUri: 'static/img/uimg/u__chat-img03.jpg'
      },
      content: {
        src: 'static/img/emotion/face02/6.gif'
      }
    }, {
      type: 'msg-img',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        src: 'static/img/placeholder/wchat__img02.jpg'
      }
    }, {
      type: 'msg-txt',
      direction: 'outgoing',
      sender: {
        nickname: '王梅（Fine）',
        portraitUri: 'static/img/uimg/u__chat-img11.jpg'
      },
      content: {
        text: '有需要一起押注的@我哈~~'
      }
    }]*/
  },

  getters: {
    messages(state) {
      return (targetId) => {
        return state.messages[targetId] || [];
      }
    }
  },

  mutations: {
    // 清空消息列表
    [MessageMutations.ClearMessageList](state, payload) {
      if (!payload.targetId) return;

      state.messages[payload.targetId] = [];
    },

    // 前部插入
    [MessageMutations.PrependMessageList](state, payload) {
      let messages = state.messages[payload.targetId] || [];
      messages.unshift(...payload.messages);

      state.messages = {
        ...state.messages,
        [payload.targetId]: messages
      };
    },

    // 后部插入
    [MessageMutations.AppendMessageList](state, payload) {
      let messages = state.messages[payload.targetId] || [];
      messages.push(...payload.messages);

      state.messages = {
        ...state.messages,
        [payload.targetId]: messages
      };
    },
  },

  actions: {
    async [MessageActions.GetMessageList]({dispatch, commit, getters}, payload) {
      let conversationType = payload.conversationType;
      let targetId = payload.targetId;
      let timestrap = payload.timestrap;     // 默认传 null，若从头开始获取历史消息，请赋值为 0, timestrap = 0;
      let count = 20;                        // 每次获取的历史消息条数，范围 0-20 条，可以多次获取
      getters.imClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
        onSuccess: async function (list, hasMsg) {
          // console.log(`获取历史消息：`, hasMsg);
          // console.log(`获取历史消息：`, list);

          let messages = [];
          for (let i = 0; i < list.length; ++i) {
            let message = null;
            const item = list[i];
            if (item.objectName === 'RC:TxtMsg') {
              let sender = null;
              if (item.conversationType === RongIMLib.ConversationType.PRIVATE) {
                // 私聊，获取用户信息
                let contact = await dispatch(ContactActions.GetContactInfo, {id: item.targetId})
                sender = {
                  nickname: contact.nickname,
                  portraitUri: contact.portraitUri,
                }
              } else if (item.conversationType === RongIMLib.ConversationType.GROUP) {
                // 群聊，获取成员信息
                let member = await dispatch(GroupActions.GetGroupMemberInfo, {
                  id: item.targetId,
                  memberId: item.senderUserId
                });
                sender = {
                  nickname: member.memberInfo.nickname,
                  portraitUri: member.memberInfo.portraitUri,
                };
              }
              message = {
                type: 'msg-txt',
                direction: item.messageDirection === 1 ? 'outgoing' : 'incoming',
                sender: sender,
                content: {
                  text: item.content.content
                }
              };
            } else if (item.objectName === 'IM:GrpNtf') {
              message = {
                type: 'notice',
                direction: undefined,
                sender: undefined,
                content: {
                  text: item.content.message.content.message
                }
              };
            }

            if (message) messages.push(message);
          }

          // console.log(messages);

          if (!timestrap) {
            commit(MessageMutations.PrependMessageList, {
              targetId: targetId,
              messages: messages
            });
          } else {
            commit(MessageMutations.PrependMessageList, {
              targetId: targetId,
              messages: messages
            });
          }

          if (hasMsg && !payload.singleShot) {
            dispatch(MessageActions.GetMessageList, {
              conversationType: payload.conversationType,
              targetId: payload.targetId,
              timestrap: payload.timestrap,
              singleShot: true
            });
          }
        },
        onError: function (error) {
          console.error('获取历史消息失败：' + error);
        }
      });
    }
  }
};

export default conversation;
