<template>
    
    <div class="chapter-item">
        <div class="text" :title="content" v-html="chapterName" ></div>
        <el-button class="clazz-bt"  type="primary" @click.stop="add()" size="mini" icon="el-icon-circle-plus" circle></el-button>
        <el-button class="clazz-bt"  type="primary" @click.stop="remove()" size="mini" icon="el-icon-remove" circle></el-button>
    </div>

</template>

<script>
export default {
    props: {
        content: {
            type: String,
            default: ""
        },
        id: {
            type: Number,
            default: 0
        },
        data: {
            type: Array,
            default: []
        },
        courseData: {
            type: Array,
            default: []
        }
    },
    computed: {
        myChapterName() {

            let index = 0;
            for(; index < this.courseData.length; index++) {
                if(this.courseData[index].id === this.id) return this.courseData[index].chapterName;
            }
            return "";
        }
    },
    watch: {
        myChapterName: function(val,oldVal) {
            console.log(val);
            // this.content = val;
            this.chapterName = val;
        }
    },
    data() {
        return {
            chapterName:""
        }
    },
    created() {
        this.chapterName = this.content;
    },
    methods: {
        remove() {
            let i = 0;
            for(;i < this.data.length; i++) {
                if(this.data[i].id === this.id) break;
            }
            this.data.splice(i,1);
            this.courseData.splice(i,1);
        },
        add() {
            let index = 0;
            for(; index < this.data.length; index++) {
                console.log("寻找")
                console.log(this.id, this.data)
                if(this.data[index].id === this.id) break;
            }
            this.$store.dispatch("setAddId",index);
        }
    }
}
</script>

<style lang="stylus">
.chapter-item
    height 100%
    width 100%
    display flex
    align-items center
    .text
        width 60%
        overflow hidden
        text-overflow: ellipsis
        float left
    .clazz-bt
        
        float right
        display block
    .el-button.is-circle
        padding 2px !important 
</style>
