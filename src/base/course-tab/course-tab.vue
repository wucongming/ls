<template>
  <div class="courseTab">
    <span class="title">{{data.title}}</span>
    <ul>
      <li class="tab-item" v-for="(item, index) in data.content" :key="index" @click="selectItem(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    selectItem(item) {
      console.log("点击",item)
      if(item === "全部") item = "default"
      this.$emit('select',item)
    }
  }
}
</script>
<style lang="stylus">
  .courseTab
    width 100%
    .title
      float left 
      width 52px
      height 20px
      font-weight 700
      font-size 14px
      text-align center
    .tab-item
      display inline-block
      margin: 0 20px
    .tab-item:hover
      cursor pointer
</style>
