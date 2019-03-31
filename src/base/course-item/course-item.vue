<template>
  <div class="courseItem" @click="courseDetail">
    <div class="img">
      <img src="https://img1.mukewang.com/5ab8d27d00010ac006000338-240-135.jpg" alt="">
    </div>
    <div class="content">
      <h3 v-html="course.value" class="title">React知识点综合运用实例</h3>
      <div class="info">
        <div class="rank-count">
          <span class="rank">初级</span>
          <span class="count">348</span>
        </div>
        <p v-html="course.intro" class="desc">react综合案例操作，技能掌握更纯熟</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    course: {
      Type: Object,
      default: {}
    }
  },
  methods: {
    courseDetail() {
      this.$router.push({
        path: "/course/" + this.course.cid
      })
    }
  }
}
</script>
<style lang="stylus">
  .courseItem
    display inline-block
    padding 20px
    .img
      img
        border-radius 8px
    .content
      padding 12px 8px
      .title
        font-size: 16px;
        color: #07111B;
        line-height: 24px;
      .info
        .rank-count
          font-size: 12px;
          color: #93999F;
          line-height: 24px;
          font-weight: 400;
        .desc
          font-size: 12px;
          font-weight: 300;
          color: #93999F;
          line-height: 22px;
          margin-top: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
</style>
