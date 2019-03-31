<template>
  <div class="top">
    z
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
  height: 80px;
}
.container {
  width: 1200px;
  height: 80px;
  background: black;
  margin: 0 auto;
  position: relative;
}
.logo {
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  margin-top: 15px;
  margin-left: 25px;
}
.toplists {
  position: absolute;
  width: 800px;
  height: 30px;
  margin-left: 180px;
  /* margin-top: 30px; */
  line-height: 80px;
}
.toplist {
  width: 400px;
  height: 40px;
}
.top-list {
  list-style: none;  
}
.top-item,.top2-item{
  float: left;
  margin-left: 30px;
}
ul li:first-child {
  margin-left: 0;
}
.top-item a, .top2-item a{
  text-decoration: none;
  color: white;
}
.iconfont {
  color: white;
}
.toplist2 {
  width: 250px;
  height: 40px;
  position: absolute;
  margin-left: 750px;
  margin-top: -20px;
  line-height: 40px;
}
.top-list2 {
  list-style: none;
}
</style>
