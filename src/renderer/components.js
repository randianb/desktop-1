/**
 * 引入公共及全局组件配置
 */
import contactList from './components/contactList'
import groupInfo from './components/groupInfo'
import groupList from './components/groupList'
import messageBubble from './components/messageBubble'
import messageSendBox from './components/messageSendBox'
import conversationList from './components/conversationList'
import groupConversation from './components/groupConversation'
import privateConversation from './components/privateConversation'
import winBar from './components/winbar'
import sideBar from './components/sidebar'

import $ from 'jquery';

// 引入wcPop弹窗插件
import './assets/js/wcPop/skin/wcPop.css';
import wcPop from './assets/js/wcPop/wcPop';

// 引入饿了么pc端UI库
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入图片预览插件
import photoPreview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';

// 引入自定义滚动条插件
import geminiScrollbar from 'vue-gemini-scrollbar';

// 引入加载更多插件
import infiniteLoading from 'vue-infinite-scroll';

// 引入高德地图
import vueAMap from 'vue-amap';

const install = Vue => {
  Vue.component('contact-list', contactList);
  Vue.component('group-info', groupInfo);
  Vue.component('group-list', groupList);
  Vue.component('message-bubble', messageBubble);
  Vue.component('message-send-box', messageSendBox);
  Vue.component('conversation-list', conversationList);
  Vue.component('group-conversation', groupConversation);
  Vue.component('private-conversation', privateConversation);
  Vue.component('win-bar', winBar);
  Vue.component('side-bar', sideBar);

  Vue.use(elementUI);
  Vue.use(photoPreview, {
    loop: false,
    fullscreenEl: true,
    arrowEl: true,
  });
  Vue.use(geminiScrollbar);
  Vue.use(infiniteLoading);
  Vue.use(vueAMap);

  vueAMap.initAMapApiLoader({
    key: "e1dedc6bdd765d46693986ff7ff969f4",
    plugin: [
      "AMap.Autocomplete",    // 输入提示插件
      "AMap.PlaceSearch",     // POI搜索插件
      "AMap.Scale",           // 右下角缩略图插件 比例尺
      "AMap.OverView",        // 地图鹰眼插件
      "AMap.ToolBar",         // 地图工具条
      "AMap.MapType",         // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      "AMap.PolyEditor",      // 编辑 折线多，边形
      "AMap.CircleEditor",    // 圆形编辑器插件
      "AMap.Geolocation"      // 定位控件，用来获取和展示用户主机所在的经纬度位置
    ], uiVersion: "1.0"
  });

};

export default install;
