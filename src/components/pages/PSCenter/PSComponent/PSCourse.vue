<template>
  <div class="body">
    <div class="container">
      <div class="title" style="display: flex; justify-content: space-around;">
        <span>我的课程</span>
        <div>
          <el-pagination
            style="margin-top: 10px;"
            small
            layout="prev, pager, next"
            :page-size="3"
            @current-change="handleCurrentChange"
            :total="total">
          </el-pagination>
        </div>
        <el-button v-show="user && user.role === 0" style="float:right; width: 100px; height: 35px; margin-right: 40px;"  @click="() => $router.push('/course/edit')"  type="primary">创建课程</el-button>
      </div>

      <div v-for="(item,index) in courses" :key="index" class="item">
        <div class="item-img">
          <img :src="linkPrefix + '/course/' + item.img" :alt="item.cname">
        </div>
        <p class="item-name" v-html="item.cname">几何数学</p>
        <p class="item-info">
          <span class="item-time" v-html="item.intro">用时 19分</span>
        </p>
        <div class="item-three">
          <div class="item-note" style="width: 100%;">
            <el-button type="primary" class="item-study" v-if="user.role == 0" @click="courseClick(item.cid)" >编辑课程</el-button>
            <el-button type="primary" class="item-study" v-if="user.role == 0" @click="delCourse(item.cid,index)" >删除课程</el-button>
            <el-button type="primary" class="item-study" @click="() => $router.push('/course/' + item.cid)" >进入课程</el-button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data() {
    return {
      user: this.$store.getters.user,
      courses: [],
      currentPage3: 1,
      total: 0
    }
  },
  created() {
    this.loadCourses(1);
  },
  methods: {
    delCourse(cid,index) {
      this.axios.get(this.linkPrefix + "/course/del/" + cid).then(res => {
        let msg = null;
        if(res.data.status === 1) {
          msg = "删除成功";
        } else {
          msg = "删除失败";
        }
        this.courses.splice(index,1);
        this.$notify({
          title: "提示",
          message: msg
        })
      })
    },
    courseClick(cid) {
      if(this.$store.getters.user.role === 0) {
        this.$router.push({
          name: 'editCourse',
          params: {cid: cid}
        })
      } else {

      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loadCourses(val);
    },
    loadCourses(nowPage) {
      this.axios.get(this.linkPrefix + "/course/my/create/" + nowPage).then(res => {
      this.courses = res.data.content;
      this.total = res.data.totalElements
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
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid lightgray;
    font-size: 20px;
    font-weight: 600;
  }
  .item {
    width: 600px;
    height: 120px;
    position: relative;
    margin-top: 30px;
  }
  .item:nth-child(2) {
    margin-top: 40px;
  }
  .item-img {
    overflow: hidden;
    width: 180px;
    height: 100%;
    line-height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 20px;
  }
  .item-img img{
    width: 100%;
  }
  .item-name {
    margin-left: 220px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 15px;
  }
  .item-info {
    margin-left: 220px;
    font-size: 14px;
    padding-top: 15px;
  }
  .item-finish {
    color: red;
  }
  .item-time {
    margin-left: 15px;
  }
  .item-three {
    position: absolute;
    margin-left: 220px;
    font-size: 14px;
    padding-top: 15px;
    /* float: left; */
  }
  .item-question, .item-homework {
    margin-left: 110px;
  }
  .item-study {
    width: 100px;
    height: 30px;
    font-size: 16px;
    border-radius: 5px;
  }
  
</style>
