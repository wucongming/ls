<template>
  <div class="tab">
    <router-link to="/home">首页</router-link>
    <router-link to="/courses/default">实战课程</router-link>
    <router-link to="/courese">猿问</router-link>
    <el-autocomplete
      @keyup.enter.native="searchCourse"
      suffix-icon="el-icon-search"
      :fetch-suggestions="querySearchAsync"
      v-model="search"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
    <div class="tap-right">
      <router-link class="head-message" to="/chat">
      消息
      </router-link>
      <div v-if="isLoginFlag">
        <el-button type="primary" size="medium" @click="() => $emit('exit') " style="width: 100px; height: 30px; float: left; margin: 15px 10px 0 0;" plain>退出</el-button>
        <router-link  class="head-img" to="/pscenter">
          <img :src="linkPrefix + '/head/' + user.headImg" />
        </router-link>
        
      </div>

      <el-button v-if="!isLoginFlag" type="primary" size="medium" @click="() => $emit('showMask')" style="width: 100px" plain>登录</el-button>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    
  },
  computed: {
    isLoginComputed() {
      return this.$store.getters.user;
    }
  },
  created() {
    console.log("user" , this.user)
  },
  data() {
    return {
      isLoginFlag: this.$store.getters.user === null ? false : true,
      search: "",
      user: this.$store.getters.user
    }
  },
  watch: {
    isLoginComputed: function(val,oldVal) {
      this.user = this.$store.getters.user;
      console.log("吴丛明测试", this.user)
      this.isLoginFlag = val === null ? false : true;
    }
  },
  methods: {
      searchCourse() {
        this.$router.push({
          path: "/courses/" + this.search
        })
      },
      loadTop50() {
        this.axios.get(this.linkPrefix + "/course/search/default").then(res => {
          this.restaurants = res.data.content;
        })

      },
      querySearchAsync(queryString, cb) {
        if(this.search === "") {
          var restaurants = this.restaurants;

          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(restaurants);
          }, 100 * Math.random());
          return;
        }
        this.axios.get(this.linkPrefix + "/course/search/" + this.search).then(res => {
          var restaurants = res.data.content;
         

          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(restaurants);
          }, 100 * Math.random());
          })
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item)
        this.$router.push({
          path: "/course/" + item.cid
        })
      }
    },
    mounted() {
      console.log("mound")
      this.loadTop50();
    }
}
</script>
<style lang="stylus">
  .tab
    height 72px
    background white 
    padding 0 90px
    line-height 72px
    filter drop-shadow(5px 5px 10px rgba(0,0,0,0.2))
    a 
      padding 0 30px
      float left
    .el-input
      padding-left 30px
      width 250px
    .tap-right
      float right
      display flex
      height 72px
      align-items center
      .head-message

        margin 0 30px
        width 50px
        height 30px
        text-align center
        line-height 30px
        border 1px solid rgb(231,234,237) 
        border-radius 5px
      .head-message:hover
        background rgb(248,250,252)
      
      .head-img
        padding 0
        display block
        width 60px
        height 60px
        border-radius 30px
        overflow hidden
        img 
          width 100%
          height 100%
</style>
