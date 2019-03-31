<template>
  <div class="body">
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
  .new-adress {
    width: 300px;
    height: 200px;
    border: 1px solid lightgray;
    margin-left: 20px;
    margin-top: 30px;
    text-align: center;
  }
  .puls-adress {
    width: 70px;
    height: 70px;
    background: gray;
    border-radius: 35px;
    margin-top: 45px;
    margin-left: 115px;
    position: relative;
  }
  .puls-adress::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 30px;
    background: white;
    margin-top: 20px;
    margin-left: -3px;
  }
  .puls-adress::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background: white;
    margin-top: 32px;
    margin-left: -15px;
  }
  .add-adress {
    margin-top: 10px;
  }
</style>
