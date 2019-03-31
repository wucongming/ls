<template>
  <div class="body">
    <div class="container">
      <div class="title">个人信息
        <el-button type="primary" @click="updateUser" size="medium" style="width: 100px;height: 30px; margin-left: 400px;"  plain>修改</el-button>
      </div>
      
      <div class="item">
        <div class="item-title">昵称</div>
        <input type="text" class="item-input" v-model="user.name" placeholder="昵称">
      </div>
      <div class="item">
        <div class="item-title">职位</div>
        <el-select class="item-select"  v-model="role" placeholder="请选择">
          <el-option
            v-for="item in [{ label:'教师', value: 0}, {label:'学生', value: 1}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <div class="item-title">城市</div>
        <input type="text" class="item-input" v-model="user.addr" placeholder="未设置">
      </div>
      <div class="item">
        <div class="item-title">性别</div>
        <el-select class="item-select"  v-model="user.sex" placeholder="请选择">
          <el-option
            v-for="item in [{ label:'男', value: 0}, {label:'女', value: 1}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <div class="item-title">个性签名</div>
        <input type="text" class="item-input" v-model="user.intro" placeholder="未设置">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    role: function() {
      var role = this.user.role;
      if(role === 0) return "学生";
      else return "教师";
    } 
  },
  data() {
    return {
      user: this.$store.getters.user
    };
  },
  watch: {
    role: function(val,oldVal) {
      if(val === "教师") this.user.role = 1;
      else this.user.role = 0;
    }
  },
  mounted() {
    console.log("mounted" ,this.userInfo)
  },
  methods: {
    updateUser() {
      // console.log(this.user);
      this.axios.post(this.linkPrefix + "/user/update",this.user).then((res) => {
        var warn = "";
        if(res.data.status === 1) {
          warn = "修改成功";
          this.user = res.data.content;
          sessionStorage.removeItem("userStore");
        } else {
          warn = "修改失败，请稍后再试！";
        }
        this.$notify({
          title: "提示",
          message: warn
        })
      })
    }
  }
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
    width: 94%;
    height: 50px;
    margin: 0 auto;
    margin-top: 30px;
    position: relative;
  }
  .item:nth-child(2){
    margin-top: 40px;
  }
 
  .item-title {
    width: 120px;
    height: 50px;
    color: #7e8c8d;
    background: rgb(217, 233, 255);
    border: 1px solid rgb(117,173,255);
    border-radius: 15px;
    line-height: 50px;
    text-align: center;
    position: absolute;
  }
  .item-select {
    width: 530px;
    margin-left: 135px;
  }
  .item-input {
    float: left;
    position: absolute;
    width: 530px;
    height: 50px;
    margin-left: 135px;
    box-sizing: border-box;
    font-size: 14px;
    border: none;
    color: black;
    border-bottom: 1px solid lightgray;
    text-indent: 20px;
    background: #fbfbfb;
  }
</style>
