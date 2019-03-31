<template>
  <div class="top">
    <div class="container">
      <div class="webinfo">
        <span class="web-name">网站首页</span>
        <span class="touch-us">联系我们</span>
        <span class="web-href">友情连接</span>
      </div>
      <div class="web-items">
        <div class="web-item"><i class="iconfont icon-weixin"></i></div>
        <div class="web-item"><i class="iconfont icon-weibo"></i></div>
        <div class="web-item"><i class="iconfont icon-qq"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  width: 100%;
  height: 70px;
}
.container {
  width: 1200px;
  height: 70px;
  background: black;
  margin: 0 auto;
  position: relative;
}
.webinfo {
  position: absolute;
  color: white;
  width: 500px;
  height: 70px;
  line-height: 70px;
  margin-left: 80px;
  float: left;
}
.touch-us,.web-href{
  margin-left: 50px;
}
.web-items {
  position: absolute;
  width: 280px;
  height: 70px;
  /* background: lightblue; */
  margin-left: 800px;
}
.web-item {
  width: 50px;
  height: 50px;
  background: gray;
  margin-top: 10px;
  margin-left: 40px;
  border-radius: 25px;
  line-height: 50px;
  text-align: center;
  float: left;
}
.iconfont {
  font-size: 30px;
  color: white;
}
</style>
