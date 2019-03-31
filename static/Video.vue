<template>
  <div class="container">
    <header class="head">
      <div class="left">
        <div class="back"><img src="../../assets/back.png" alt="" srcset=""></div>
        <p class="title">vue2.5入门</p>
        <p class="subtitle">2-1 创建第一个Vue实例</p>
      </div>
      <div class="right">
        <div class="shopCart"><img src="../../assets/cart.png" alt="" srcset="">购物车</div>
        <div class="notice"><img src="../../assets/notice.png" alt="" srcset=""></div>
        <img src="../../assets/logo.png" alt="" class="logo" >
      </div>
    </header>
    <div class="palyer-box">
        <videoPlayer class="vjs-custom-skin videoPlayer player" :options="playerOptions"></videoPlayer>
      <ul class="player-menu">
          <li>
            <img src="../../assets/article.png" alt="" srcset="">
            <p>章节</p>
            
          </li>
          <li>
              <img src="../../assets/biji.png" alt="" srcset="">
            <p>笔记</p>
          </li>
          <li>
              <img src="../../assets/ask.png" alt="" srcset="">
            <p>提问</p>
          </li>
          <li>
              <img src="../../assets/ques.png" alt="" srcset="">
            <p>Wiki</p>
          </li>
        </ul>
    </div>
    <div class="content">
      <div class="content-left">
          <el-tabs tab-position="top" style="height: 250px;">
              <el-tab-pane label="评论">
                  <div class="remark-box">
                      <img src="../../assets/logo.png" alt="" srcset="">
                      <textarea name="remark" id="remark" cols="30" rows="10" placeholder="扯淡、吐槽、表扬、鼓励……想说啥就说啥！"></textarea>
                      <div class="remark-btn">发表评论</div>
                  </div>
                  <ul class="remark-list">
                    <li class="remark-item" v-for='item in comments'>
                      <img src="../../assets/logo.png" alt="" class="logo">
                      <div class="remark-bd">
                        <p class="remark-name">橡树林</p>
                        <p class="remark-info">老师，我通过require加载vue，在require下创建vue实例，html写
                          无法调用vue实例下methods:{delete:function(alert(index)){}}</p>
                        <div class="remark-ft">
                          <div class="left">时间：2天前</div>
                          <div class="right">
                            <p class="report"><img src="../../assets/report.png" alt="" srcset="">举报</p>
                            <p class="remark-like"><img src="../../assets/like.png" alt="" srcset="">点赞</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
              </el-tab-pane>
              <el-tab-pane label="问卷">
                  <ul class="remark-list">
                      <li class="remark-item" v-for='item in papers'>
                        <img src="../../assets/logo.png" alt="" class="logo">
                        <div class="remark-bd">
                          <p class="remark-name">橡树林</p>
                          <p class="remark-info">老师，我通过require加载vue，在require下创建vue实例，html写
                            无法调用vue实例下methods:{delete:function(alert(index)){}}</p>
                          <div class="remark-ft">
                            <div class="left">时间：2天前</div>
                            <div class="right">
                              <p class="report"><img src="../../assets/report.png" alt="" srcset="">举报</p>
                              <p class="remark-like"><img src="../../assets/like.png" alt="" srcset="">点赞</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
              </el-tab-pane>
              <el-tab-pane label="笔记">
                  <ul class="remark-list">
                      <li class="remark-item" v-for='item in notices'>
                        <img src="../../assets/logo.png" alt="" class="logo">
                        <div class="remark-bd">
                          <p class="remark-name">橡树林</p>
                          <p class="remark-info">老师，我通过require加载vue，在require下创建vue实例，html写
                            无法调用vue实例下methods:{delete:function(alert(index)){}}</p>
                          <div class="remark-ft">
                            <div class="left">时间：2天前</div>
                            <div class="right">
                              <p class="report"><img src="../../assets/report.png" alt="" srcset="">举报</p>
                              <p class="remark-like"><img src="../../assets/like.png" alt="" srcset="">点赞</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
              </el-tab-pane>
          </el-tabs>
      </div>
      <div class="content-right">
        <h2 class="course-title">推荐课程<div class="view-more">查看更多</div></h2>
        <ul class="recommand-course">
          <li class="recommand-item" v-for='item in recommands'>
            <img src="../../assets/course.jpg" alt="" srcset="">
            <div class="recommand-info">
              <p class="recommand-desc"> Vue2.5开发去哪儿网App 从零基础入门到实战项目</p>
              <p class="recommand-number">804人在学习</p>
            </div>
          </li>
        </ul>
        <h2 class="course-title">手记推荐<div class="view-more">查看更多</div></h2>
        <ul class="recommand-course">
          <li class="recommand-item" v-for='item in recommands'>
            <img src="../../assets/course.jpg" alt="" srcset="">
            <div class="recommand-info">
              <p class="recommand-desc">入职第二天：使用koa搭建node server</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  
  import 'vue-video-player/src/custom-theme.css'
  // import 'video.js/dist/video-js.css'  
  import {videoPlayer} from 'vue-video-player'  
  import 'videojs-flash'  
  export default {  
      name: 'HelloWorld',
      components: {  
          videoPlayer,  
      },  
      data() {  
        return {  
          comments: 5,
          papers: 3,
          notices: 8,
          recommands: 4,
          playerOptions: {  
            height: '500',  
            sources: [{  
              type: "rtmp/flv",  
              src: "rtmp://172.20.25.37:5136/oflaDemo/123456",
              file: "123456"
            }],  
            techOrder: ['flash'],  
            autoplay: false,  
            controls: true  
          }  
        }  
    }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.head{
  background: #14191e;
  height: 70px;
  color: #b5b9bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head .left,.right{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.head .left .back{
  width: 80px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head .left .back img{
  width: 40%;
  height: 40%;
}
.head .left .back:hover{
  opacity: 0.8;
  background: #f20d0d;
  cursor: pointer;
}
.head .left .title{
  padding: 0 10px;
}
.head .left .subtitle{
  padding: 0 10px;
  font-size: 12px;
  opacity: 0.8;
  margin-top: 5px;
}
.head .right .shopCart{
  padding: 8px 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  margin: 0 20px;
  font-weight: 800;
  font-size: 14px;
}
.head .right div,img:hover{
  cursor: pointer;
}
.head .right .shopCart img{
  width: 20px;
  height: auto;
  margin-right: 5px;
  vertical-align: text-top;
}
.head .right .notice img{
  width: 30px;
  height: 30px;
}
.head .right .logo{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
  margin: 0 30px;
}
.palyer-box{
  width: 100%;
  min-height: 400px;
  position: relative;
  background: #363C40;
}
.palyer-box .player-menu{
  position: absolute;
  right: 0;
  bottom: 30px;
}
.palyer-box .player{
  width: 100%;
  height: auto;
  min-height: 500px;
  display:flex;
  justify-content: center;
}
.palyer-box .player-menu li{
  padding: 8px 15px;
  font-size: 12px;
  color: #B4BBBF;
  margin: 2px 0;
  background: #363C40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.palyer-box .player-menu li:hover{
  background: #f20d0d;
  color: #fff;
  cursor: pointer;
}
.palyer-box .player-menu li img{
  width: 25px;
  height: 25px;
  margin-bottom: 3px;
}
.content{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.content-left{
  flex:1;
  margin-left: 5%;
  margin-top: 20px;
}
.content .content-right{
  width: 35%;
}
.content-left .remark-box{
  text-align: left;
  margin-top: 20px;
  padding-bottom: 50px;
}
.content-left .remark-box img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
  margin: 0 30px;
  vertical-align: top;
}
.content-left .remark-box textarea{
  width: 83%;
  display: inline-block;
  padding: 10px;
}
.content-left .remark-box .remark-btn{
  float: right;
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  background-color: #00b33b;
  font: 14px/40px "Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft Yahei","微软雅黑",Tahoma,Arial,STHeiti,sans-serif;
  height: 40px;
  padding: 0 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
}
.remark-list{
  border-top: 1px solid #eee;
  margin: 30px 0;
  padding-top: 30px;
}
.remark-list .remark-item{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.remark-list .remark-item .logo{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
  margin-right:20px;
  vertical-align: top;
}
.remark-list .remark-item  .remark-bd{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.remark-list .remark-item .remark-bd .remark-name{
  font-size: 16px;
  color: #333;
  font-weight: 800;
}
.remark-list .remark-item .remark-bd .remark-info{
  text-align: left;
  font-size: 14px;
  color:#000;
  font-style:normal;
  line-height: 40px;
}
.remark-list .remark-item .remark-ft{
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.remark-list .remark-item .remark-ft img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 8px;
}
.remark-list .remark-item .remark-ft .right{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  width: 20%;
}
.remark-list .remark-item .remark-ft .right p:hover{
  cursor: pointer;
  color: #f20d0d;
}
.recommand-course{
  margin: 10px 20px;
  box-sizing: border-box;
}
.recommand-course .recommand-item{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5%;
  border-bottom: 1px solid #eee;
}
.content-right .course-title{
  text-align: left;
  font-size: 20px;
  color: #666;
  margin-top: 40px;
  margin-left: 8%;
}
.content-right .course-title .view-more{
  float: right;
  font-size: 14px;
  font-weight: 200;
  margin-right: 60px;
  color: #000;
  margin-top: 8px;
}
.content-right .course-title .view-more:hover{
  cursor: pointer;
  color: #f20d0d;
}
.recommand-course .recommand-item img{
  width: 30%;
  height: auto;
  margin-right: 5%;
}
.recommand-course .recommand-item .recommand-info .recommand-desc{
  text-align: left;
  margin-bottom: 8px;
  line-height: 20px;
  text-overflow: ellipsis;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #07111b;
}
.recommand-course .recommand-item .recommand-number{
  text-align: left;
  color: #999;
  font-size: 14px;
}
.video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
</style>
