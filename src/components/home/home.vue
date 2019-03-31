<template>

    <div class="main-container">
        <div class="main">
            <div class="banner-box">
                <div class="banner-menu">
                    <ul>
                        <li v-for="menu in menus" v-bind:key=menu.id>
                            {{menu.name}}
                            <span class="banner-menu-pointer">></span>
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <el-carousel height="315px"  >
                        <el-carousel-item v-for="item in 4" :key="item">
                            <img style="width: 100%; heiht: 315px;" :src="menuImg[item - 1]" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="content-recommend">
                <!--<div class="content-recommend-card">
                    <div class="card-img"></div>
                    <div class="card-titles">
                        <div class="card-title">算法</div>
                    </div>
                    <div class="card-name">Python3入门机器学习 经典算法与应用</div>
                    <div class="card-detail">
                        <div class="card-detail-pepolenum">120</div>
                        <div class="card-detail-star">
                            <i class="card-icon-star"></i>
                        </div>
                    </div>
                </div>-->
                <div class="conent-recommend-text">
                    <span class="icon-l"></span>
                    <span>课</span>/<span>程</span>/<span>推</span>/<span>荐</span>
                    <span class="icon-r"></span>
                </div>
                    
                <el-row>
                    <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/card.jpg" class="image">
                        <div class="card-titles">
                            <el-tag v-for="item in titles" :key="item.id" >{{item.name }}</el-tag>
                        </div>
                        <div style="padding: 14px;">
                            <span>好吃的汉堡好吃的汉堡好吃的汉堡</span>
                            <div class="card-details">
                                <div class="card-detail-num">
                                    <i class="icon-set_sns"></i>
                                    <span>858</span>
                                </div>
                                <div class="card-detail-star">
                                    <i class="el-icon-star-on"></i>
                                </div>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                
                
                <div class="conent-recommend-text">
                    <span class="icon-l"></span>
                    <span>课</span>/<span>程</span>/<span>推</span>/<span>荐</span>
                    <span class="icon-r"></span>
                </div>
                    
                <el-row>
                    <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/card.jpg" class="image">
                        <div class="card-titles">
                            <el-tag v-for="item in titles" :key="item.id" >{{item.name }}</el-tag>
                        </div>
                        <div style="padding: 14px;">
                            <span>好吃的汉堡好吃的汉堡好吃的汉堡</span>
                            <div class="card-details">
                                <div class="card-detail-num">
                                    <i class="icon-set_sns"></i>
                                    <span>858</span>
                                </div>
                                <div class="card-detail-star">
                                    <i class="el-icon-star-on"></i>
                                </div>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components:{
        },
        data (){
            return {
                currentDate: new Date(),
                menuImg: [require('../../assets/menu1.jpg' ), 
                        require('../../assets/menu2.jpg' ), 
                        require('../../assets/menu3.jpg' ),
                        require('../../assets/menu4.jpg' )],
                menus: [
                    {name: "前端开发"},
                    {name: "后端开发"},
                    {name: "人工智能"},
                    {name: "算法&数学"},
                    {name: "计算机视觉"},
                    {name: "自然语言处理"},
                    {name: "微服务"}
                ] ,
                titles: [
                    {name: "有理数计算算法"},
                    {name: "java"},
                    {name: "爬虫"}
                ]
            }
        }
    }
</script>
<style lang="stylus">
body, html {
    font: 14px/1.5 "PingFang SC","微软雅黑","Microsoft YaHei",Helvetica,"Helvetica Neue",Tahoma,Arial,sans-serif;
}

.main-container {
    width: 100%;
    height: fit-content;
    float: left;
    
}
.icon-l,.icon-r {
    display: inline-block;
    width: 50px;
    height: 25px;
    background: url("../../assets/icon.png");
    background-size: 100%;
}

.icon-r {
    background-position: center -32px;
}

.el-card__body {
    position: relative;
}
.el-tag {
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    font-size: 8px;
    margin-left: 10px;
    background: rgba(7,17,27,.4);
    color: white;
}
.card-titles {
    position: absolute;
    top: 90px;
}
.card-details {
    display: flex;
    justify-content: space-between;
}
.el-icon-star-on {
    color: yellow;
}
.icon-set_sns:before {
    content: "\e923";
}
.conent-recommend-text {
    margin-top: 10px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.conent-recommend-text span{
    font-size: 20px;
    font-weight: 600;
    color: #4D555D;
    margin: 0 3px;
}
.el-carousel
    overflow-x: visible;

.el-carousel__item
    display: flex;
    align-items:center;

.el-carousel__item h3
    width:100%;
    color: #475669;
    font-size: 14px;
    text-align: center;
    
.el-carousel__item:nth-child(2n)
     background-color: #99a9bf;
  
.el-carousel__item:nth-child(2n+1)
     background-color: #d3dce6;

.main
    margin:0 auto;
    max-width:1200px;
.banner-box
    margin:0 auto;
    display:flex;
    margin-top:20px;
    border-radius: 10px;
    overflow :hidden;
    box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);

    .banner-menu
        background: #2b333b;
        flex: 0 0 20%;
        height: 315px;
        color:rgba(255,255,255,.6);
    
        li
            height:32px;
            line-height:32px;
            padding: 0 16px
            margin: 11px 0;
            margin-left:11px;
            border-radius:5px;
        li:hover
            background:rgb(106,112,117);
            cursor pointer;

.recommend 
    flex: 1;
    height:315px;
    overflow:hidden;

.banner-menu-pointer
    float:right;
    margin-right: 10px;

.content-recommend-card
    width: 200px;
    height: 120px;
    overflow: hidden;
    border-radius: 10;
    background: black;

.el_card {
    display: flex;
    align-items: stretch;
}

.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
.clearfix:after {
      clear: both
 }

.el-col-4 {
    width: 19%;
}

.el-col-offset-1 {
    margin-left: 0;
}
.el-row {
    display:flex;
    justify-content: space-between;
    align-items: center;
}


</style>