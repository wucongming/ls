<template>
  <div class="courseContent">
    <course-item v-for="(item,index) in courses" :course="item" :key="index"></course-item>
  </div>
</template>
<script>
import CourseItem from '@/base/course-item/course-item'
export default {
  components: {
    CourseItem
  },
  watch: {
    keyword(val,oldVal) {
      console.log("关键词", val);
      this.axios.get(this.linkPrefix + "/course/search/" + this.keyword).then(res => {
        this.courses = res.data.content;
        console.log(this.courses)
      });
    },
    tag(val,oldVal) {
      if(val === "") return;
      else {
        this.axios.get(this.linkPrefix + "/course/search/" + val + "?type=1").then(res => {
          this.courses = res.data.content;
          console.log(this.courses)
        });
      }
    }
  },
  props: {
    keyword: {
      Type: String,
      default: ""
    },
    tag: {
      Type: String,
      default: ""
    }
  },
  data() {
    return {
      courses: [],
    }
  },
  created() {
    console.log("course-content   created")
    this.axios.get(this.linkPrefix + "/course/search/" + this.keyword).then(res => {
      this.courses = res.data.content;
      console.log(this.courses)
    });
  }
}
</script>
<style lang="stylus">
  .courseContent
    width 100%
    height 70vh
    background #F3F5F7
</style>
