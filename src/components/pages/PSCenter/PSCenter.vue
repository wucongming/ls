<template>
  <div class="container">
    <div class="body">
      <pc-body></pc-body>
    </div>
    <div class="footer">
      <pc-footer></pc-footer>
    </div>
  </div>
  
  
</template>
<script>
import pcTop from './PSComponent/PCtop'
import pcBody from './PSComponent/PCBody'
import pcFooter from './PSComponent/PCFooter'
export default {
  components: {
    pcTop,
    pcBody,
    pcFooter
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.top {
  /* position: absolute; */
  width: 100%;
  background: black;
  height: 80px;
}
.body {
  position: relative;
  width: 1200px;
  height: 620px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>


