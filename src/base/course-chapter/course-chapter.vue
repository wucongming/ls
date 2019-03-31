<template>
  <div class="course-chapter">
    <div class="chapter course-wrap">
      <h3 v-html="'第' + id + '章    ' + chapter.chapterName">1章 运用ReactRouter开发一个单页App</h3>
      <div class="chapter-description" v-html="chapter.chapterIntro">
        本章节主要运用ReactRouter开发一个单页App
      </div>
      <ul class="video">
        <div v-for="(item,index) in chapter.sections" :key="index" @click="toVideo(index)">
          <li >{{id + '-' + (index + 1) + '  ' + item.sectionName}} 
            <div v-if="!item.end" style="float: right">上课时间：{{formatTime(item.time)}}</div>
            <div v-else style="float: right; color: rgb(242,13,13);">已结束</div>
          </li>
          <!-- <li></li> -->
        </div>

      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: Number,
      default: 0
    },
    id: {
      type: Number,
      default: 0
    },
    cid: {
      type: Number,
      default: 0
    },
    chapter: {
      type: Object,
      default: {}
    },
  },
  data() {
    return {
      chapterDesc:['1-1 运用ReactRouter开发一个单页App','1-2 运用ReactRouter开发一个单页App','1-3 运用ReactRouter开发一个单页App']
    }
  },
  methods: {
    formatTime(time) {
      time = time.replace('T', ' ').replace('Z', ' ');
      return time;
    },
    toVideo(index) {
      if(this.status === 1) this.$router.push({path: '/video/' + this.cid + '/' + (this.id - 1) + '/' + index })
      else if(this.status === 0) this.$notify({title: "提示", message: "请登录"});
      else if(this.status === -1) this.$notify({title: "提示", message: "请加入课程"});
    }
  }
}
</script>
<style lang="stylus">
  .course-chapter
    width 100%
    .course-wrap
      margin-bottom 8px
      padding 24px 32px 32px
      box-shadow 0 8px 16px 0 rgba(7, 17, 27, .1)
      border-radius 12px
      background #fff
      h3
        color #1c1f21
        font-size 16px
        font-weight 700
        line-height 24px
      .chapter-description
        margin-top 2px
        font-size 12px
        color #545c63
        line-height 18px
      .video
        li
          padding-left 12px
          height 48px
          line-height 48px
          list-style none
        li:hover
          background rgb(254,243,243)
          cursor pointer
</style>

