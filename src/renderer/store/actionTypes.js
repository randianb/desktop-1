/**
 * store action 定义。
 */

// 应用
export const AppActions = {
  InitApp: 'InitApp',
};

// 黑名单
export const BlacklistActions = {
  GetBlacklist: 'GetBlacklist',
};

// DB
export const DbActions = {
  InitDb: 'InitDb',
  InitTable: 'InitTable',
};

// 联系人
export const ContactActions = {
  GetContactList: 'GetContactList',
  GetContactInfo: 'GetContactInfo',
};

// 群组
export const GroupActions = {
  GetGroupList: 'GetGroupList',
  GetGroupInfo: 'GetGroupInfo',
  GetGroupMemberInfo: 'GetGroupMemberInfo',
  GetGroupMemberList: 'GetGroupMemberList',

  MuteGroup: 'MuteGroup',
  UnmuteGroup: 'UnmuteGroup',
  UpdateGroupInfo: 'UpdateGroupInfo'
};

// 参数
export const ParamActions = {
  GetParamList: 'GetParamList',
};

// 融云客户端
export const RongCloudActions = {
  InitClient: 'InitClient',
};

// 会话
export const ConversationActions = {
  GetConversationList: 'GetConversationList',
  ClearConversationUnreadCount: 'ClearConversationUnreadCount',

  StartConversation: 'StartConversation',
  SendMessage: 'SendMessage',
};

// 消息
export const MessageActions = {
  GetMessageList: 'GetMessageList',
};

// 用户
export const UserActions = {
  Register: 'Register',
  Login: 'Login',
  Logout: 'Logout',
};
