<template>
  <div class="body">
    <div class="container">
      <div class="title">我的错题</div>
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
</style>
