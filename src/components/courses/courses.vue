<template>
  <div class="course">
    <div class="nav-box">
      <div class="courseTab-wrapper">
        <course-tab :data="classify" @select="(item) => this.select = item"></course-tab>
      </div>
      <div class="courseTab-wrapper">
        <course-tab :data="type"></course-tab>
      </div>
    </div>

    <CourseContent :keyword="$route.params.keyword" :tag="select"></CourseContent>
  </div>
</template>
<script>
import CourseTab from '@/base/course-tab/course-tab'
import CourseContent from '@/base/course-content/course-content'
export default {
  data() {
    return {
      classify: {
        title: '分类 :',
        content: ['全部','前端开发','后端开发','移动开发','算法&数学','前沿技术','云计算&大数据','运维&测试','数据库','UI设计&多媒体','游戏'
        , '微服务', '区块链', '以太坊', '人工智能', '机器学习', '深度学习', '计算机视觉', '自然语言处理', '数据分析&挖掘', '小程序', '爬虫']
      },
      type: {
        title: '类型 :',
        content: ['全部','视频','直播']
      },
      select: ""
    }
  },
  methods: {
  
  },
  components: {
    CourseTab,
    CourseContent
  }
}
</script>
<style lang="stylus">
  .course
    width 100%
    .nav-box
      width 90%
      margin 0 auto
      .courseTab-wrapper
        width 100%
        line-height 50px
        padding 32px 0 15px
        border-bottom 1px solid #edf1f2
</style>
