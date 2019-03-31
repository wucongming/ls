<template>
    
    <div class="section-item">
        <div class="text" v-bind:title="sectionName" v-html="sectionName"></div>
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
        data: {
            type: Array,
            default: []
        },
        sections: {
            type: Array,
            default: []
        },
        id: {
            type: Number,
            default: -1
        }
    },
    computed: {
        myContent() {
            console.log("修改节内容", this.sections, this.id);
            let index = 0;
            for(; index < this.sections.length; index++) {
                if(this.sections[index].id === this.id) {
                    console.log("找到了")
                    return this.sections[index].sectionName;
                } 
            }
            return "";
        }
    },
    watch: {
        myContent: function(val,oldVal) {
            console.log("发送修改")
            this.sectionName = val;
        }
    },
    created() {
        this.sectionName = this.content;
    },
    data() {
        return {
            sectionName: ""
        }
    },
    methods: {
        remove() {
            let index = 0;
            console.log(this.id,this.data)
            for(; index < this.data.length; index++) {
                if(this.data[index].id === this.id) break;
            }
            this.sections.splice(index, 1);
            this.data.splice(index,1);

        }
    }
}
</script>

<style lang="stylus">
.section-item
    height 100%
    width 100%
    display flex
    align-items center
    .text
        width 63%
        overflow hidden
        text-overflow: ellipsis
        float left
    .clazz-bt
        
        float right
        display block
    .el-button.is-circle
        padding 2px !important 
</style>
