function createFriendMsg() {
    this.friendId = new Number();
    this.friendName = new String();
    this.msgs = new Array();
    this.type = -1;
}

function createQueue() {

    this.systemMsgs = new Array();
    this.friendMsgs = new Array();
    this.clazzMsgs = new Array();
    this.count = 0;

    this.push = function(data) {
        console.log("消息类型", data)
        if(data.type === 0) {
            console.log("接收到申请添加好友信息", data)
            this.systemMsgs.push(data);
        } else if(data.type === 1) {
        } else if(data.type === 2) {
        } else if(data.type === 4) {
            console.log("消息为4")
            var friendMsg = null;
            for(let index in this.friendMsgs) {
                if(this.friendMsgs[index].friendId === data.fromid) {
                    friendMsg = this.friendMsgs[index];
                    break;
                } 
            }
            
            console.log("为空插入",friendMsg === null)
            if(friendMsg === null) {
                friendMsg = new createFriendMsg();
                friendMsg.friendId = data.fromid;
                this.friendMsgs.push(friendMsg)
            }
            friendMsg.msgs.push(data.message)
        } else if(data.type === 5) {
            this.clazzMsgs.push(data);
        }
    }
    this.pushAll = function(datas) {
        for(var index in datas) {
            this.push(datas[index]);
        }
    }
}



const state = {
    user: JSON.parse(sessionStorage.getItem("userStore")),
    msgQueues: new createQueue(),
    flag: 0
}

const actions = {
    putMsgQueues(context, msg) {
        setTimeout(() => {
            
            context.commit('putMsgQueues', msg);
            context.commit("increment");
        }, 200);
    },
    initUser(context,user) {
        setTimeout(() => {
            context.commit('initUser',user);
        },200);
    },
    clearUser(context) {
        setTimeout(() => {
            context.commit("clearUser");
        },200)
    }
}

const mutations = {
    initUser(state,user) {
        state.user = user;
    },
    clearUser(state) {
        state.user = null;
        state.msgQueues = new createQueue();
    },
    putMsgQueues(state, msg) {
        
        console.log("消息队列塞消息", msg)

        if(msg instanceof Array) state.msgQueues.pushAll(msg)
        else state.msgQueues.push(msg);
    },
    increment(state) {
        state.flag = state.flag + 1;
    }
}

const getters = {
    user: state => state.user,
    msgQueues: state => state.msgQueues,
    flag: state => state.flag
}

export default {
    state,
    actions,
    mutations,
    getters
}