<template>
  <div>
    <div class="vChat__footTool">
      <!--输入框-->
      <div class="wc__editor-panel wc__borT flexbox flex__direction-column">
        <div class="wrap-toolbar">
          <div class="flexbox">
            <div class="flex1">
              <!--i class="iconfont icon-face btn btn-face" title="选择表情"></i-->
              <!--i class="iconfont icon-tupian btn btn-image" title="发送图片">
                <input type="file" accept="image/*" id="J__chooseImg"/>
              </i-->
              <!--<i class="iconfont icon-fujian btn btn-attachment" title="发送文件">
                <input type="file" accept="*" id="J__chooseFile"/>
              </i>-->
              <!--<i class="iconfont icon-zhendong btn btn-shake" title="向好友发送抖动窗口"></i>-->
            </div>
            <el-popover title="操作提示" placement="top" width="200" trigger="hover" content="截屏、截图可直接粘贴至文本框进行发送！">
              <i slot="reference" class="iconfont icon-wenhao btn btn-help"></i>
            </el-popover>
          </div>
        </div>
        <div class="wrap-editor flex1">
          <!--<div class="editor J__wcEditor" id="J__wcEditor" contenteditable="true"-->
          <!--style="user-select:text;-webkit-user-select:text;"></div>-->
          <el-input
              id="J__wcEditor"
              type="textarea"
              rows="5"
              placeholder="在此输入聊天内容..."
              style="margin: 5px 0"
              v-model="content">
          </el-input>
        </div>
        <el-button size="mini" type="success" @click="onSendMessage(1)">发送</el-button>
      </div>

      <!-- 表情区域 -->
      <div class="wc__choose-panel" style="display: none;">
        <div class="wrap-emotion">
          <div class="emotion__cells flexbox flex__direction-column">
            <div class="emotion__cells-swiper flex1" id="J__swiperEmotion">
              <div class="swiper-container">
                <div class="swiper-wrapper"></div>
                <div class="pagination-emotion"></div>
              </div>
            </div>
            <div class="emotion__cells-footer" id="J__emotionFootTab">
              <ul class="clearfix">
                <li class="swiperTmpl cur" tmpl="swiper__tmpl-emotion01"><img
                    src="../../../static/img/emotion/face01/face-lbl.png" alt=""></li>
                <li class="swiperTmpl" tmpl="swiper__tmpl-emotion02"><img
                    src="../../../static/img/emotion/face02/face-lbl.gif" alt=""></li>
                <li class="swiperTmpl" tmpl="swiper__tmpl-emotion03"><img
                    src="../../../static/img/emotion/face03/face-lbl.gif" alt=""></li>
                <li class="swiperTmpl" tmpl="swiper__tmpl-emotion04"><img
                    src="../../../static/img/emotion/face04/face-lbl.gif" alt=""></li>
                <li class="swiperTmpl" tmpl="swiper__tmpl-emotion05"><img
                    src="../../../static/img/emotion/face05/face-lbl.gif" alt=""></li>
                <li class="swiperTmpl" tmpl="swiper__tmpl-emotion06"><img
                    src="../../../static/img/emotion/face06/face-lbl.gif" alt=""></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- //表情1 -->
    <div class="swiper__tmpl-emotion01" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__sm-list">
          <span><img class="face" src="../../../static/img/emotion/face01/0.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/1.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/2.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/3.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/4.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/5.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/6.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/7.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/8.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/9.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/10.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/11.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/12.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/13.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/14.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/15.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/16.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/17.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/18.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/19.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/20.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/21.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/22.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/23.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/24.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/25.png"/></span>
          <span><img class="del" src="../../../static/img/icon__emotion-del.png"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__sm-list">
          <span><img class="face" src="../../../static/img/emotion/face01/26.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/27.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/28.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/29.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/30.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/31.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/32.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/33.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/34.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/35.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/36.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/37.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/38.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/39.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/40.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/41.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/42.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/43.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/44.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/45.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/46.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/47.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/48.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/49.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/50.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/51.png"/></span>
          <span><img class="del" src="../../../static/img/icon__emotion-del.png"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__sm-list">
          <span><img class="face" src="../../../static/img/emotion/face01/52.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/53.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/54.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/55.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/56.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/57.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/58.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/59.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/60.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/61.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/62.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/63.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/64.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/65.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/66.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/67.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/68.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/69.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/70.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/71.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/72.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/73.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/74.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/75.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/76.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/77.png"/></span>
          <span><img class="del" src="../../../static/img/icon__emotion-del.png"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__sm-list">
          <span><img class="face" src="../../../static/img/emotion/face01/78.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/79.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/80.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/81.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/82.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/83.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/84.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/85.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/86.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/87.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/88.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/89.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/90.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/91.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/92.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/93.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/94.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/95.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/96.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/97.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/98.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/99.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/100.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/101.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/102.png"/></span>
          <span><img class="face" src="../../../static/img/emotion/face01/103.png"/></span>
          <span><img class="del" src="../../../static/img/icon__emotion-del.png"/></span>
        </div>
      </div>
    </div>

    <!-- //动图2 -->
    <div class="swiper__tmpl-emotion02" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face02/0.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face02/1.gif"/></span> <span><img class="lg-face"
                                                                                                 src="../../../static/img/emotion/face02/2.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/3.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/4.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face02/5.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/6.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face02/7.gif"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face02/8.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face02/9.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/10.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face02/11.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/12.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face02/13.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face02/14.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face02/15.gif"/></span>
        </div>
      </div>
    </div>
    <!-- //动图3 -->
    <div class="swiper__tmpl-emotion03" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face03/0.gif"/></span><span><img
            class="lg-face" src="../../../static/img/emotion/face03/1.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/2.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face03/3.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/4.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face03/5.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/6.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face03/7.gif"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face03/8.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/9.gif"/></span><span><img class="lg-face"
                                                                                                       src="../../../static/img/emotion/face03/10.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/11.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/12.gif"/></span><span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face03/13.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face03/14.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face03/15.gif"/></span>
        </div>
      </div>
    </div>

    <!-- //动图4 -->
    <div class="swiper__tmpl-emotion04" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face04/0.gif"/></span><span><img
            class="lg-face" src="../../../static/img/emotion/face04/1.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/2.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/3.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face04/4.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/5.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face04/6.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/7.gif"/></span></div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face04/8.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face04/9.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/10.gif"/></span><span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face04/11.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/12.gif"/></span><span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face04/13.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/14.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face04/15.gif"/></span></div>
      </div>
    </div>

    <!-- //动图5 -->
    <div class="swiper__tmpl-emotion05" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face05/0.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face05/1.gif"/></span> <span><img class="lg-face"
                                                                                                 src="../../../static/img/emotion/face05/2.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/3.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/4.gif"/></span><span><img class="lg-face"
                                                                                                       src="../../../static/img/emotion/face05/5.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/6.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face05/7.gif"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face05/8.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face05/9.gif"/></span> <span><img class="lg-face"
                                                                                                 src="../../../static/img/emotion/face05/10.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/11.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face05/12.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/13.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face05/14.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face05/15.gif"/></span>
        </div>
      </div>
    </div>
    <!-- //动图6 -->
    <div class="swiper__tmpl-emotion06" style="display: none;">
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face06/0.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/1.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/2.gif"/></span><span><img class="lg-face"
                                                                                                       src="../../../static/img/emotion/face06/3.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/4.gif"/></span><span><img class="lg-face"
                                                                                                       src="../../../static/img/emotion/face06/5.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/6.gif"/></span> <span><img class="lg-face"
                                                                                                        src="../../../static/img/emotion/face06/7.gif"/></span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="face-list face__lg-list"><span><img class="lg-face"
                                                        src="../../../static/img/emotion/face06/8.gif"/></span>
          <span><img
              class="lg-face" src="../../../static/img/emotion/face06/9.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/10.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face06/11.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/12.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face06/13.gif"/></span>
          <span><img class="lg-face" src="../../../static/img/emotion/face06/14.gif"/></span> <span><img class="lg-face"
                                                                                                         src="../../../static/img/emotion/face06/15.gif"/></span>
        </div>
      </div>
    </div>
    <!--表情模板.End -->
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    data() {
      return {
        content: ''
      }
    },

    mounted() {
      let emotionSwiper;

      function isEmpty() {
        var html = $(".J__wcEditor").html();
        html = html.replace(/<br[\s\/]{0,2}>/ig, "\r\n");
        html = html.replace(/<[^img].*?>/ig, "");
        html = html.replace(/&nbsp;/ig, "");
        return html.replace(/\r\n|\n|\r/, "").replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g, "") == "";
      }

      function wchat_ToBottom() {
        $("#J__geminiScrollbar .gm-scroll-view").animate({scrollTop: $("#J__chatMsgList").height()}, 0);
        $(".fixGeminiscrollHeight").show();
        setTimeout(() => {
          $(".fixGeminiscrollHeight").hide();
        }, 300);
      }

      $("body").on("click", ".wc__editor-panel .btn-face", function () {
        $(".wc__choose-panel").show();
        // 初始化swiper表情
        !emotionSwiper && $("#J__emotionFootTab ul li.cur").trigger("click");
        wchat_ToBottom();
      });

      function setEmotionSwiper(tmpl) {
        var _tmpl = tmpl ? tmpl : $("#J__emotionFootTab ul li.cur").attr("tmpl");
        $("#J__swiperEmotion .swiper-container").attr("id", _tmpl);
        $("#J__swiperEmotion .swiper-wrapper").html($("." + _tmpl).html());
        emotionSwiper = new Swiper('#' + _tmpl, {
          pagination: {
            el: '.pagination-emotion', clickable: true,
          },
        });
      }

      $("body").on("click", "#J__emotionFootTab ul li.swiperTmpl", function () {
        // 先销毁swiper
        emotionSwiper && emotionSwiper.destroy(true, true);
        var _tmpl = $(this).attr("tmpl");
        $(this).addClass("cur").siblings().removeClass("cur");
        setEmotionSwiper(_tmpl);
      });

      // ...处理编辑器信息
      function surrounds() {
        setTimeout(function () {
          var sel = window.getSelection();
          var anchorNode = sel.anchorNode;
          if (!anchorNode) return;
          if (sel.anchorNode === $(".J__wcEditor")[0] ||
            (sel.anchorNode.nodeType === 3 && sel.anchorNode.parentNode === $(".J__wcEditor")[0])) {
            var range = sel.getRangeAt(0);
            var p = document.createElement("p");
            range.surroundContents(p);
            range.selectNodeContents(p);
            range.insertNode(document.createElement("br")); //chrome
            sel.collapse(p, 0);
            (function clearBr() {
              var elems = [].slice.call($(".J__wcEditor")[0].children);
              for (var i = 0, len = elems.length; i < len; i++) {
                var el = elems[i];
                if (el.tagName.toLowerCase() == "br") {
                  $(".J__wcEditor")[0].removeChild(el);
                }
              }
              elems.length = 0;
            })();
          }
        }, 10);
      }

      // 定义最后光标位置
      var _lastRange = null, _sel = window.getSelection && window.getSelection();
      var _rng = {
        getRange: function () {
          if (_sel && _sel.rangeCount > 0) {
            return _sel.getRangeAt(0);
          }
        }, addRange: function () {
          if (_lastRange) {
            _sel.removeAllRanges();
            _sel.addRange(_lastRange);
          }
        }
      }

      $("body").on("click", ".J__wcEditor", function () {
        $(".wc__choose-panel").hide();
        _lastRange = _rng.getRange();
      });
      $("body").on("focus", ".J__wcEditor", function () {
        surrounds();
        _lastRange = _rng.getRange();
      });
      $("body").on("input", ".J__wcEditor", function () {
        surrounds();
        _lastRange = _rng.getRange();
      });

      $("body").on("click", "#J__swiperEmotion .face-list span img", function () {
        var that = $(this), range;
        if (that.hasClass("face")) { //小表情
          var img = that[0].cloneNode(true);
          if (!$(".J__wcEditor")[0].childNodes.length) {
            $(".J__wcEditor")[0].focus();
          }
          $(".J__wcEditor")[0].blur(); //输入表情时禁止输入法
          setTimeout(function () {
            if (document.selection && document.selection.createRange) {
              document.selection.createRange().pasteHTML(img);
            } else if (window.getSelection && window.getSelection().getRangeAt) {
              _rng.addRange();
              range = _rng.getRange();
              range.insertNode(img);
              range.collapse(false);
            }
          }, 10);
        } else if (that.hasClass("del")) {
          $(".J__wcEditor")[0].blur(); //输入表情时禁止输入法
          setTimeout(function () {
            _rng.addRange();
            range = _rng.getRange();
            range.collapse(false);
            document.execCommand("delete");
          }, 10);
        } else if (that.hasClass("lg-face")) { //
          var _img = that.parent().html();
          var _tpl = ['<li class="me">\
                        <div class="content">\
                         <p class="author">王梅（Fine）</p>\
                       <div class="msg lgface">' + _img + '</div>\
                    </div>\
                     <a class="avatar" href="/contact/uinfo"><img src="../../../static/img/uimg/u__chat-img11.jpg" /></a>\
                 </li>'
          ].join("");
          $("#J__chatMsgList").append(_tpl);
          wchat_ToBottom();
        }
      });

      $("body").on("click", ".J__wchatSubmit", function () {
        if (isEmpty()) return;
        var _html = $(".J__wcEditor").html();
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        _html = _html.replace(reg, "<a href='$1$2' target='_blank'>$1$2</a>");
        var msgTpl = ['<li class="me">\
                    <div class="content"> <p class="author">王梅（Fine）</p>\
                        <div class="msg">' + _html + '</div>\
                    </div>\
                    <a class="avatar" href="/contact/uinfo"><img src="../../../static/img/uimg/u__chat-img11.jpg" /></a>\
                </li>'
        ].join("");
        $("#J__chatMsgList").append(msgTpl);
        $(".wc__choose-panel").hide();
        if (!$(".wcim__choose-panel").is(":hidden")) {
          $(".J__wcEditor").html("");
        } else {
          $(".J__wcEditor").html("").focus().trigger("click");
        }
        wchat_ToBottom();
      });

      $("body").on("change", "#J__chooseImg", function () {
        $(".wcim__choose-panel").hide();
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          var _img = this.result;
          var _tpl = [
            '<li class="me">\
                <div class="content">\
                    <p class="author">王梅（Fine）</p>\
                    <div class="msg picture"><img class="img__pic" src="' + _img + '" preview="1" /></div>\
                        </div>\
                        <a class="avatar" href="/contact/uinfo"><img src="../../../static/img/uimg/u__chat-img11.jpg" /></a>\
                    </li>'
          ].join("");
          $("#J__chatMsgList").append(_tpl);
          setTimeout(function () {
            wchat_ToBottom();
          }, 17);
        }
      });
      $("body").on("change", "#J__chooseFile", function () {
        $(".wc__choose-panel").hide();
        var file = this.files[0], fileSuffix = /\.[^\.]+/.exec(file.name).toString(),
          fileExt = fileSuffix.substr(fileSuffix.indexOf('.') + 1, fileSuffix.length).toLowerCase();
        var fileTypeArr = ['jpg', 'jpeg', 'png', 'gif', 'txt', 'rar', 'zip', 'pdf', 'docx', 'xls'];
        if ($.inArray(fileExt, fileTypeArr) < 0) {
          wcPop({content: '附件只支持jpg、jpeg、png、gif、txt、rar、zip、pdf、docx、xls格式的文件', time: 2});
          return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          var _file = this.result;
          var _tpl = [
            '<li class="me">\
                <div class="content">\
                  <p class="author">王梅（Fine）</p>\
                  <div class="msg attachment">\
                     <div class="card flexbox flex-alignc">\
                        <i class="ico-bg"></i>\
                          <div class="file-info flex1" title="' + file.name + '">\
                                       <p class="name">' + file.name + '</p><p class="size">' + formateSize(file.size) + '</p>\
                                  </div>\
                                 <a class="btn-down" href="' + _file + '" target="_blank" download="' + file.name + '"></a>\
                             </div>\
                        </div>\
                     </div>\
                     <a class="avatar" href="/contact/uinfo"><img src="../../../static/img/uimg/u__chat-img11.jpg" /></a>\
                    </li>'
          ].join("");
          $("#J__chatMsgList").append(_tpl);
          wchat_ToBottom();
        }

        function formateSize(value) {
          if (null == value || value == '') {
            return "0 Bytes";
          }
          var unitArr = new Array("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB");
          var index = 0;
          var srcsize = parseFloat(value);
          index = Math.floor(Math.log(srcsize) / Math.log(1024));
          var size = srcsize / Math.pow(1024, index);
          size = size.toFixed(2);		//保留的小数位数
          return size + unitArr[index];
        }
      });

      document.getElementById('J__wcEditor').addEventListener('paste', function (e) {
        var cbd = e.clipboardData;
        var ua = window.navigator.userAgent;
        // 没有数据
        if (!(e.clipboardData && e.clipboardData.items)) {
          return;
        }
        // Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
        if (cbd.items && cbd.items.length === 2 && cbd.items[0].kind === "string" && cbd.items[1].kind === "file" &&
          cbd.types && cbd.types.length === 2 && cbd.types[0] === "text/plain" && cbd.types[1] === "Files" &&
          ua.match(/Macintosh/i) && Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49) {
          return;
        }
        for (var i = 0; i < cbd.items.length; i++) {
          var item = cbd.items[i];
          if (item.kind == "file") {
            var blob = item.getAsFile();
            if (blob.size === 0) {
              return;
            }
            // 插入图片记录
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = function () {
              var _img = this.result;
              var _tpl = [
                '<li class="me">\
                 <div class="content">\
                     <p class="author">王梅（Fine）</p>\
                 <div class="msg picture"><img class="img__pic" src="' + _img + '" preview="1" /></div>\
                                 </div>\
                             <a class="avatar" href="/contact/uinfo"><img src="../../../static/img/uimg/u__chat-img11.jpg" /></a>\
                                </li>'
              ].join("");
              $("#J__chatMsgList").append(_tpl);
              setTimeout(() => {
                $("#J__geminiScrollbar .gm-scroll-view").animate({scrollTop: $("#J__chatMsgList").height()}, 0);
                $(".fixGeminiscrollHeight").show();
                setTimeout(() => {
                  $(".fixGeminiscrollHeight").hide();
                }, 300);
              }, 17);
            }
          }
        }
      });
    },

    methods: {
      onSendMessage(type) {
        if (!this.content) return this.$message.info('消息不能为空');

        this.$emit('sendMessage', {
          content: this.content,
          messageType: type,
        });

        this.content = '';
      }
    },

    watch: {}
  }
</script>

<style>

</style>
