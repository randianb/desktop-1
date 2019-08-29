/**
 * IM工具。
 */

// 自定义消息注册
export function registerMessage(imClient){
  let messageName = 'GroupNotification';  // 消息名称
  let objectName = 'IM:GrpNt';            // 消息内置名称，请按照此格式命名
  let isCounted = false;                  // 消息计数
  let isPersisted = true;                 // 消息保存

  let prototypes = ['data', 'age'];       // 消息类中的属性名
  let msgTag = new RongIMLib.MessageTag(isCounted, isPersisted); // 消息是否保存是否计数，true true 计数且保存，false false 不计数不保存

  imClient.registerMessageType(messageName, objectName, msgTag, prototypes);
}
