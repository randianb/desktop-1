<!--新的朋友模板-->
<template>
    <div>
    <contact-list></contact-list>

    <div class="vChat-container flex1 flexbox flex__direction-column">
        <div class="vChat__header">
            <div class="inner flexbox">  <h2 class="barTit">新的朋友</h2> <div class="flex1 align-c pt-15"></div>
            </div>
        </div>
        <div class="vChat__main flex1 flexbox flex__direction-column">
            <geminiScrollbar autoshow class="geminiScrollbar flex1">
                <div class='wc__similarList'>
                    <ul class="clearfix">  <li> <div class="item flexbox flex-alignc">  <img class="uimg" src="src/assets/img/uimg/u__chat-img02.jpg" />
                           <span class="lbl flex1"><em>马丽 ▪ ☀☼㈱</em><i>hello world！</i></span>
                              <el-button type="success" size="mini" style="border-radius:0;padding:5px 10px;">接受</el-button>
                            </div>
                     </li>
                        <li>
                         <div class="item flexbox flex-alignc">  <img class="uimg" src="src/assets/img/uimg/u__chat-img15.jpg" />
                             <span class="lbl flex1"><em>贾斯汀-比伯</em><i>刚才已经打过招呼了，通过下哈~</i></span>
                           <el-button type="text" disabled size="mini" style="cursor:default;">已添加</el-button>
                         </div>
                        </li>
                        <li>
                         <div class="item flexbox flex-alignc">
                          <img class="uimg" src="src/assets/img/uimg/u__chat-img07.jpg" />
                         <span class="lbl flex1"><em>肖凤子</em><i>很高兴认识你~</i></span>
                        <el-button type="success" size="mini" style="border-radius:0;padding:5px 10px;">接受</el-button>
                         </div>
                        </li>
                        <li>
                            <div class="item flexbox flex-alignc"> <img class="uimg" src="src/assets/img/uimg/u__chat-img12.jpg" />
                              <span class="lbl flex1"><em>杨迪</em><i>向大佬学习VUE技术</i></span>
                             <el-button type="text" disabled size="mini" style="cursor:default;">已添加</el-button> </div>
                        </li>
                        <li> <div class="item flexbox flex-alignc"> <img class="uimg" src="src/assets/img/uimg/u__chat-img08.jpg" />
                            <span class="lbl flex1"><em>Lm杨幂幂</em><i>大神，您好</i></span>
                             <el-button type="text" disabled size="mini" style="cursor:default;">已添加</el-button> </div>
                        </li>
                        <li>
                        <div class="item flexbox flex-alignc"> <img class="uimg" src="src/assets/img/uimg/u__chat-img11.jpg" />  <span class="lbl flex1"><em>Wqq_王巧巧</em><i>一起交流学习</i></span>
                             <el-button type="text" disabled size="mini" style="cursor:default;">已添加</el-button> </div>
                        </li>
                    </ul>
                </div> </geminiScrollbar>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        },
        methods: {
        }
    }
</script>

<style>

</style>