import {GroupActions} from "../actionTypes";
import {GroupMutations} from "../mutationTypes";

import request from '../../utils/request';

const group = {
  state: {
    groups: {
      count: 0,
      rows: []
    },

    groupMembers: {
      'G5d4260fb78f194b4630494f5': {
        count: 10,
        rows: [{
          nickname: 'Alison',
          portraitUri: 'src/assets/img/uimg/u__chat-img01.jpg'
        }, {
          nickname: '玛蓉 ▪ ☀☼㈱',
          portraitUri: 'src/assets/img/uimg/u__chat-img03.jpg'
        }, {
          nickname: '科比',
          portraitUri: 'src/assets/img/uimg/u__chat-img10.jpg'
        }, {
          nickname: 'Bear',
          portraitUri: 'src/assets/img/uimg/u__chat-img15.jpg'
        }, {
          nickname: 'Li_李嘉诚',
          portraitUri: 'src/assets/img/uimg/u__chat-img04.jpg'
        }, {
          nickname: '张小龙',
          portraitUri: 'src/assets/img/uimg/u__chat-img06.jpg'
        }, {
          nickname: '强东',
          portraitUri: 'src/assets/img/uimg/u__chat-img07.jpg'
        }, {
          nickname: '杨幂',
          portraitUri: 'src/assets/img/uimg/u__chat-img08.jpg'
        }]
      }
    }
  },

  getters: {
    groups(state) {
      return state.groups;
    },

    groupInfo(state) {
      return (groupId) => {
        for (let i = 0; i < state.groups.rows.length; ++i) {
          if (state.groups.rows[i].id === groupId) return state.groups.rows[i];
        }

        return {};
      }
    },

    groupMembers(state) {
      return (groupId) => {
        return state.groupMembers[groupId].rows;
      };
    }
  },

  mutations: {
    // 设置群组列表
    [GroupMutations.SetGroupList](state, payload) {
      state.groups = payload;
    },

    // 设置群组成员
    [GroupMutations.SetGroupMemberList](state, payload) {
      state.groupMembers[payload.groupId] = payload.members;
    }
  },

  actions: {
    // 群组列表
    async [GroupActions.GetGroupList]({getters, dispatch, commit}, payload) {
      if (getters.groups.length > 0) return;

      // 获取群组
      let groups = await request({url: `/im/groups/list`, method: 'get'});
      commit(GroupMutations.SetGroupList, groups);

      // 获取成员
      for (let i = 0; i < groups.rows.length; ++i) {
        try {
          const group = groups.rows[i];
          const members = await request({url: `/im/groups/members?groupId=${group.id}`, method: 'get'});
          if (members.count < 2) continue;

          commit(GroupMutations.SetGroupMemberList, {
            groupId: group.id,
            members: members
          });
        } catch (e) {
          console.error(e.message);
        }
      }
    },

    // 获取群组信息
    async [GroupActions.GetGroupInfo]({getters}, payload) {
      for (let i = 0; i < getters.groups.rows.length; ++i) {
        const group = getters.groups.rows[i];
        if (group.id === payload.id) return group;
      }

      return {}
    },

    // 获取成员信息
    async [GroupActions.GetGroupMemberInfo]({getters}, payload) {
      const groupMembers = getters.groupMembers(payload.id);
      for (let i = 0; i < groupMembers.length; ++i) {
        const member = groupMembers[i];
        if (payload.memberId === member.memberId) return member;
      }

      return {}
    },

    // 获取群组成员列表
    async [GroupActions.GetGroupMemberList]({getters, commit}, payload) {
      const members = await request({url: `/im/groups/members?groupId${payload.id}`, method: 'get'});
      commit(GroupMutations.SetGroupMemberList, {
        groupId: payload.id,
        members
      });
    },
  }
};

export default group;
