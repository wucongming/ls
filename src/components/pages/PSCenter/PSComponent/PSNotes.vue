<template>
  <div class="body">
    <div class="container">
      <div class="title">我的笔记</div>
      <div class="item">
        <div class="item-title">几何数学</div>
        <div class="item-info">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        <span class="item-view">浏览 2</span>
        <span class="item-comment">评论 1</span>
        <span class="item-stars">Stars 1</span>
      </div>
      <div class="item">
        <div class="item-title">三角函数</div>
        <div class="item-info">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        <span class="item-view">浏览 2</span>
        <span class="item-comment">评论 1</span>
        <span class="item-stars">Stars 1</span>
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
  .body {
    width: 100%;
    /* background: blueviolet; */
    position: relative;
    height: 100%;
  }
  .container {
    position: absolute;
    width: 90%;
    height: 90%;
    background: #fbfbfb;
    position: absolute;
    margin-left: 5%;
    margin-top: 3.3%;
  }
  .title {
    width: 100%;
    /* background: white; */
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid lightgray;
    text-indent: 50px;
    font-size: 20px;
    font-weight: 600;
  }
  .item {
    width: 100%;
    height: 180px;
    border-bottom: 1px solid lightgray;
  }
  .item-title {
    font-size: 20px;
    text-indent: 50px;
    padding-top: 35px;
  }
  .item-info {
    font-size: 14px;
    padding-top: 15px;
    margin-left: 50px;
    margin-bottom: 20px;
  }
  .item-view {
    margin-left: 650px;
    font-size: 14px;
  }
  .item-comment {
    font-size: 14px;
    margin-left: 10px;
  }
  .item-stars {
    font-size: 14px;
    margin-left: 10px;
  }
</style>
