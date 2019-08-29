/**
 * store mutation 定义。
 */
// App
export const AppMutations = {
  SetAppInfo: 'SetAppInfo',
};

// 黑名单
export const BlacklistMutations = {
  SetBlacklist: 'SetBlacklist',
};


// 会话
export const ConversationMutations = {
  SetConversationList: 'SetConversationList',
  PrependConversation: 'PrependConversation',
};

// 消息
export const MessageMutations = {
  ClearMessageList: 'ClearMessageList',
  PrependMessageList: 'PrependMessageList',
  AppendMessageList: 'AppendMessageList',
};

// 联系人
export const ContactMutations = {
  SetContactList: 'SetContactList',
};

// 群组
export const GroupMutations = {
  SetGroupList: 'SetGroupList',

  SetGroupMemberList: 'SetGroupMemberList',
};

// 参数
export const ParamMutations = {
  SetParamList: 'SetParamList',
};

// 用户
export const UserMutations = {
  SetAccessToken: 'SetAccessToken',
  SetRongCloudToken: 'SetRongCloudToken',
  SetUserInfo: 'SetUserInfo',
};
