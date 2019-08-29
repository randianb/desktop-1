<template>
    <div>
        <div class="vChat-container flex1 flexbox flex__direction-column">
            <div class="vChat__header">
                <div class="inner flexbox"> <h2 class="barTit">动态圈</h2>
                    <div class="flex1 align-c pt-15"> <el-button-group>
                            <el-button type="warning" icon="el-icon-star-off" size="mini" plain>推荐</el-button> <el-button type="primary" icon="el-icon-plus" size="mini" @click="goToPage">记录生活，记录美</el-button>
                        </el-button-group> </div>
                </div>
            </div>
            <div class="vChat__main flex1 flexbox flex__direction-column">
                <geminiScrollbar autoshow class="geminiScrollbar flex1">
					<div class="wcim__friendZone"><ul class="clearfix" id="J__cmtList">
							<li><div class="wrap-avt fl"><img src="src/assets/img/uimg/u__chat-img11.jpg" /></div>
								<div class="wrap-cmt"><div class="cmt-hd">
										<h2 class="u-name">Alisa芷琳</h2><div class="post__cnt clearfix">
											<p>早安，世界。愿美好的一天开开心心哒！！！</p>
											<p>	<img src="http://simg2.bigbigwork.com/564x/e8/98/8c/e8988cc6fa5f3476adb0e630b5dc0d0a.jpg" preview="1" />
											</p>
										</div>	<div class="reply__box flexbox flex-alignc clearfix">
                                            <div class="time flex1 c-999">刚刚</div><a class="zan" href="javascript:;"><i class="iconfont icon-dianzan"></i> 点赞</a><a class="" href="javascript:;"><i class="iconfont icon-pinglun"></i> 评论</a>
											<a class="" href="javascript:;"><i class="iconfont icon-dots"></i></a>
										</div></div></div>
							</li>
							<li>
								<div class="wrap-avt fl"><img src="src/assets/img/uimg/u__chat-img13.jpg" /></div>
								<div class="wrap-cmt"><div class="cmt-hd">
										<h2 class="u-name">赵小帅</h2>
										<div class="post__cnt clearfix">
											<p>让美食来的更猛烈些吧。</p>
											<p>	<img class="list-img" src="http://simg2.bigbigwork.com/564x/9d/c1/8a/9dc18ab15806df32b57aa2cdebb5212c.jpg" preview="2" /><img class="list-img" src="http://simg2.bigbigwork.com/564x/61/61/42/616142cc7a6af48e9fb4f3d48c06e9d7.jpg" preview="2" />
												<img class="list-img" src="http://simg2.bigbigwork.com/originals/e8/bb/1a/e8bb1ae365f261fb5fa3765cf5072eb3.png" preview="2" />
											</p>
										</div>
										<div class="reply__box flexbox flex-alignc clearfix">
                                            <div class="time flex1 c-999">2分钟前</div><a class="zan on" href="javascript:;"><i class="iconfont icon-dianzan"></i> 点赞</a>
											<a class="" href="javascript:;"><i class="iconfont icon-pinglun"></i> 评论</a><a class="" href="javascript:;"><i class="iconfont icon-dots"></i></a>
										</div>
									</div>
									<div class="cmt-bd">
										<div class="like">	<i class="iconfont icon-aixin"></i>
											阿里卅，蓓蓓(beiL)，Bili，陈荣光，旋风小子，江惠美，Wqq_王巧巧...
										</div>
										<div class="reply-list"><p><span>蓓蓓(beiL)：</span>高端大气上档次！</p><p><span>陈荣光：</span>不错不错，优秀</p>
											<p><span>旋风小子</span>回复<span>陈荣光：</span>哈哈，有理</p>	</div>
									</div>
								</div>
							</li>
							<li><div class="wrap-avt fl"><img src="src/assets/img/uimg/u__chat-img15.jpg" /></div>
								<div class="wrap-cmt">
									<div class="cmt-hd"><h2 class="u-name">陈荣光</h2>
										<div class="post__cnt clearfix">
											<p>雄伟的摩天大楼！</p>
											<p><img class="list-img" src="http://simg2.bigbigwork.com/564x/48/52/a2/4852a2094f1d6c86d4e141c005bd5985.jpg" preview="3" />
												<img class="list-img" src="http://simg2.bigbigwork.com/564x/ba/25/68/ba2568af4556fd7153f66f6bd47ef5e0.jpg" preview="3" />
											</p>
										</div>
										<div class="reply__box flexbox flex-alignc clearfix"> <div class="time flex1 c-999">3小时前</div>
											<a class="zan" href="javascript:;"><i class="iconfont icon-dianzan"></i> 点赞</a><a class="" href="javascript:;"><i class="iconfont icon-pinglun"></i> 评论</a>
											<a class="" href="javascript:;"><i class="iconfont icon-dots"></i></a>
										</div></div>
									<div class="cmt-bd"><div class="like"><i class="iconfont icon-aixin"></i>
											龙哥，wuli凡凡，杨迪，江惠美
										</div>
										<div class="reply-list"><p><span>龙哥：</span>这是哪里拍的呀。</p>
											<p><span>江惠美：</span>嗯，拍的不错哇！</p><p><span>陈荣光</span>回复<span>江惠美：</span>哈哈，谢谢</p>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
                </geminiScrollbar>
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
        methods: {
            goToPage(){  this.$router.push({ path: '/qzone/write' })
            }
        },
    }
</script>

<style>

</style>
