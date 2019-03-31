<template>
    <div class="chat-main">
        <div class="chat-friends">
            <el-tabs type="border-card" >
                <el-tab-pane>
                    <span slot="label"><i class="el-icon-date"></i> 我的好友</span>
                    <happyScroll resize size="8">
                        <div></div>
                        <friendCard  v-for="item in friendArray" @click.native="sendMsg(item.uid)" :id="item.uid" :account="item.account" :key="item.index" :name="item.name" url="" :intro="'Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）'" ></friendCard>
                    </happyScroll>
                </el-tab-pane>
                <el-tab-pane label="消息中心">
                    <el-card v-for="(item,index) in msgArray" :key="index" shadow="always">
                        <div v-if="item.type != -1">
                            <div slot="header" class="clearfix" style="height: 50px; display: flex; align-items: center; ">
                                <img style="height: 100%; display: block;" src="../../assets/notice.png" />
                                <div style="margin-left: 20px;" v-html="'《' + item.fromname + '》请求添加好友'"></div>
                            </div>
                            <div style=" display: flex; justify-content: space-around;">
                                <el-button @click="addFriend(item.id, index)" style="width: 40%;" type="primary">添加好友</el-button>
                                <el-button @click="ignoreFriend(item.id, index)" style="width: 40%;" type="danger">忽略</el-button>
                            </div>
                        </div>
                        <div v-if="item.type == -1">
                            <div slot="header" @click="sendMsg(item.friendId)" class="clearfix" style="height: 50px; display: flex; align-items: center; ">
                                <img style="height: 100%; display: block;" src="../../assets/notice.png" />
                                <div style="margin-left: 20px;" v-html="item.msgs[item.msgs.length - 1]"></div>
                            </div>
                        </div>
                    </el-card>

                
                </el-tab-pane>
                <el-tab-pane label="查找好友">
                    <el-input v-model="searchName" @keyup.enter.native="enter()" ></el-input>
                    <happyScroll resize size="8">
                        <div>

                        </div>
                        <friendCard v-for="item in searchArray" :type="true" :id="item.uid" :account="item.account" :key="item.index" :name="item.name" url="" :intro="'Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）'" ></friendCard>
                    </happyScroll>
                </el-tab-pane>
            </el-tabs>
            
        </div>
        <div class="chat-console">
            <div class="chat-console-title" style="text-align: center; line-height: 50px; font-size: 20px; display: flex; justify-content: space-between; align-items: center;">
                <div v-if="showChat != null" class="exit-chat" @click="() => showChat = null" style="float: left; width: 5%; color: red" v-html="'<'" > </div>
                <div v-if="showChat != null">
                    <div  v-html="'正在跟' + showChat.name + '聊天'"></div>
                </div>
                <el-button v-if="showChat != null" style="width: 80px;height: 30px; margin-right: 20px;" @click="delFriend" size="mini" type="danger">删除</el-button>
            </div>
            <div id="chatContainer" class="chat-console-content">
                <div v-if="showChat != null">
                    <div v-for="(item,index) in chatArray" :key="index" style="width: 100%; height: 60px; line-height: 40px;" >
                        <div style="magin: 10px 0;">
                            <div style="float: right; width: auto;">
                                <img style="width: 40px; margin: 0 20px" src="../../assets/head.jpg" alt="">
                            </div>
                            <div style="float: right; height: 40px; line-height: 40px; display: flex; align-items: center; width: auto; padding: 0 10px; background: rgb(0,122,204); color: white; border-radius: 10px;" v-html="item"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-console-bar">
                <el-popover
                    class="test"
                    placement="top-start"
                    width="500"
                    trigger="click">
                        <div class="chat-emojis">
                            <img v-for="item in 73" :key="item" :src='"../../assets/emoji/emoji" + initEmoji(item) + ".png" ' @click="test(item)"  alt="">
                        </div>
                    <el-button class="emoji-button" slot="reference">
                    </el-button>
                </el-popover>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed">
                    <el-button class="upload-button" size="small" type="primary"></el-button>
                </el-upload>
                <el-button @click="send()"  style="width: 10%; height: 30px; line-height: 6px; margin-left: 600px;" type="primary">发送</el-button>
            </div>
            <div class="chat-console-input">
                <textarea ref="text" v-model="inputMsg" @keyup.enter="send()"  class="chat-console-input-textarea" style="min-width: 840px; max-width: 840px; min-height: 160px; max-height: 160px;resize: none;" ></textarea>
            </div>

        </div>
    </div>
</template>

<script>
    import FriendCard from '@/components/chat/friendCard'
    import { HappyScroll } from 'vue-happy-scroll'
    import {faceMap} from '@/api'
    // 引入css，推荐将css放入main入口中引入一次即可。
    import 'vue-happy-scroll/docs/happy-scroll.css'
    export default {
        components: {
            FriendCard,
            HappyScroll
        },
        computed: {
            receiveMsgFlag() {
                return this.$store.getters.flag;
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            },
            receiveMsgFlag(val) {
                this.loadMsg();
            }
        },
        created: function() {
            console.log("chat界面触发created")
            this.initEmoji();
            this.loadMsg();
            this.loadFriend();
        },
        updated: function() {
            console.log("更新画面")
            this.$nextTick(() => {
                var container = this.$el.querySelector(".chat-console-content");
                container.scrollTop = container.scrollHeight;
            })
        },
        methods: {
            delFriend() {
                this.axios.delete(this.linkPrefix + "/user/del/friend/" + this.showChat.uid).then(res => {
                    if(res.data.status === 1) {
                        this.showChat = null;
                        this.$notify({
                            title: "提示",
                            message: "删除成功"
                        })
                        this.loadFriend();
                    }
                });
            },
            replacer(match,p1,offset,string) {
                let str = this.linkPrefix + '/emoji/' + faceMap[p1];
                return "<img src='" + str + "' />";
            },
            test(item) {
                console.log(faceMap)
                let key = Object.keys(faceMap)[item];
                this.inputMsg += key;
                this.$refs.text.click();
            },
            send() {
                console.log("发送消息")
                
                this.chatArray.push(this.inputMsg.replace(/(<[\u4e00-\u9fa5]*>)/g,this.replacer));
                console.log(this.chatArray)
                var user = this.$store.getters.user;
                console.log(this.showChat)
                var message = {
                    id: -1,
                    fromid: user.uid,
                    fromname: user.name,
                    toid: this.showChat.uid,
                    toname: this.showChat.name,
                    type: 4,
                    message: this.inputMsg
                }
                this.$emit("sendMsg",JSON.stringify(message))
                this.inputMsg = ""

            },
            sendMsg(id) {
                console.log("发送消息--------->", id)
                this.axios.get(this.linkPrefix + "/user/detail/" + id).then(res => {
                    this.showChat = res.data.content;
                    this.loadMsg();
                });

            },
            loadFriend() {
                this.axios.get(this.linkPrefix + "/user/friend/all").then(res => {
                    this.friendArray = res.data.content;
                });
            },
            addFriend(mid, index) {
                this.axios.put(this.linkPrefix + "/user/argue/" + mid).then(res => {
                    console.log("同意添加好友   ",res.data);
                    this.$notify({
                        title: "系统提示",
                        message: res.data.msg
                    });
                    this.msgArray.splice(index,1);
                });
            },
            ignoreFriend(mid, index) {
                this.axios.put(this.linkPrefix + "/user/ignore/" + mid).then(res => {
                    this.$notify({
                        title: "系统提示",
                        message: "忽略成功"
                    });
                    this.msgArray.splice(index,1);
                });
            },
            //从消息缓存队列中取消息
            loadMsg() {
                
                var queues = this.$store.getters.msgQueues;
                if(this.showChat != null) {
                    var index = -1;
                    console.log("queues",queues)
                    for(let index in queues.friendMsgs) {
                        if(queues.friendMsgs[index].friendId === this.showChat.uid) {
                            for(let msg in queues.friendMsgs[index].msgs)
                                this.chatArray.push(queues.friendMsgs[index].msgs[msg].replace(/(<[\u4e00-\u9fa5]*>)/g,this.replacer));
                            queues.friendMsgs.splice(index, 1);
                            break;
                        }
                    }
                }
                this.msgArray = [];
                this.msgArray = this.msgArray.concat(queues.systemMsgs,queues.friendMsgs);
                console.log("取消息", queues, this.msgArray)
                console.log("当前的对话框列", this.chatArray)
                
            },
            initEmoji(value) {
                let val = value;
                for(let i = 1; i < 3; i++) {
                    if((val - val % 10) / 10 == 0) {
                        val = (val - val % 10) / 10;
                        value = "0" + value;
                    } else {
                         val = (val - val % 10) / 10;
                        continue;
                    }
                }
                return value;
            },
            filterNode(value,data) {
                if(!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            enter() {
                this.axios.get(this.linkPrefix + "/user/search/" + this.searchName).then(res => {
                    if(res.data.status === 0) {
                        this.$notify({
                            title: "提示",
                            message: "用户不存在"
                        })
                    } else {
                        this.searchArray = res.data.content;
                    }
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        },
        data() {
            return {
                inputMsg: "哈哈",
                showChat: null,
                friendArray: [],
                msgArray: [], 
                chatArray: ["1"], 
                filterText: '',
                name: 'nihao',
                searchName: "",
                searchArray: [],
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }] 
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }, {
                        id: 6,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }, {
                        id: 8,
                        label: <friendCard name="babyQ" url="" intro="Hi，我是babyQ，你的智能小伙伴~ （注意认证标识，可别认错人哦\(^o^)/）" ></friendCard>
                    }]
                    }],
                    defaultProps: {
                    children: 'children',
                    label: 'label'
                  }
            }
        }
    }
</script>

<style lang="stylus">
.el-popover img:hover 
    cursor pointer
.chat-main 
    max-width 60%
    min-width 1000px
    margin 60px auto
    display flex
    justify-content space-between

    .chat-friends
        width 25%

    .el-tab-pane 
        height 90%

    .happy-scroll-container 
        width 100% !important
        height 100% !important
    

    .el-tabs__content 
        height 600px
        padding 0 !important
    

    .el-tree-node__label 
        width 90%
    


    .el-tree-node__content 
        padding-left 0px
    
    .el-tree-node__children .el-tree-node[role="treeitem"] 
        height 100px
    
    .el-tree-node__children .el-tree-node[role="treeitem"] .el-tree-node__content 
        height 100%
    
    .el-tree-node__children .el-tree-node[role="treeitem"] .el-tree-node__expand-icon 
        display none
    
    .chat-console 
        margin-left 40px
        flex-grow 1
        height 641px
        background white
        display flex
        flex-direction column
        align-items center
    
    .chat-console-title 
        width 100%
        height 40px
        background rgb(245,247,250)
    
        flex-grow 1
        .exit-chat:hover
            cursor pointer
    
    .chat-console-content 
        width 95%
        height 100px
        flex-grow 50
        border-bottom 1px solid rgb(228,231,237)
        overflow auto
    .chat-console-content img
        width 30px
        height 30px
        display block
    
    .chat-console-input 
        width 95%
        height 100px
        flex-grow 10
        margin-bottom 20px
    
    .coolscrollbar
        scrollbar-arrow-color yellow
        scrollbar-base-color lightsalmon 


    .chat-console-bar 
        width 100%
        flex-grow 1
        display flex
        align-items center

        .chat-console-input-textarea 
            width 100%
            height 160px
            resize none
            border 1px solid rgb(217,233,255)

        
        

        .emoji-hover
            width 20px

        .emoji-button 
            border 0
            height 30px
            display flex
            align-items center
            background url("../../assets/emoji/emoji.png") no-repeat
            background-position-x center
            background-position-y center
            background-size 20px 20px
            margin-left 40px

        .emoji-button:hover 
            background white

        .chat-console-bar 
            display flex
            align-items center

        .upload-button 
            border 0
            background url("../../assets/file.png") no-repeat
            background-position-x center
            background-position-y center
            background-size 25px 25px
            margin-bottom 5px
</style>