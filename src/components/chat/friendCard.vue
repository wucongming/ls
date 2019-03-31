<template> 
        <el-card style="width: 100%; margin-top: 20px;" shadow="always">
            <div  style="display: flex; justify: center; align-items: center;">
                <div  class="friendcard-head">
                    <img src="../../assets/head.jpg" alt="">
                </div>
                <div :title="intro">
                    <p v-html="'用户名:' + name">name</p>
                    <p v-html="'账号:' + account"></p>
                    <p v-html="intro" style="width: 120px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">我就是我</p>
                </div>
            </div>
            <el-button v-show="type" @click="add()" style="margin-top: 20px; width: 100%;" type="primary">添加好友</el-button>
        </el-card>
        
</template>

<script>
    export default {
        props: {
            url: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            intro: {
                type: String,
                default: ""
            },
            account: {
                type: String,
                default: ""
            },
            id: {
                type: Number,
                default: -1
            },
            type: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            }
        },
        created: function() {
        },
        methods: {
            
            add() {
                // this.$refs.bt.parentNode.doShow();
                this.axios.post(this.linkPrefix + "/user/add/friend/" + this.id).then(res => {
                    console.log(res.data);
                    this.$notify({
                        title: "提示",
                        message: res.data.msg
                    });
                });
            },
            haha() {
                console.log("哈哈")
            }
        }

    }
</script>

<style>
.friendcard-head {
    width: 50%;
    height: 50px;
}

.friendcard-head img {
    width: 50px;
    height: 50px;
    border-radius: 100px;}
</style>