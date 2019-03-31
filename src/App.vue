<template>
  <div class="app" id="app">
    <tab @showMask="() => maskWindow = true" @exit="exit()" ></tab>
    <router-view @sendMsg="websocketsend" />

    <div v-show="maskWindow" class="mask">
      <el-card class="login-card">
        <div slot="header" class="clearfix">
          <div @click="() => loginOrRegister = true" class="tab1">
            <span>登录</span>
            <span v-if="loginOrRegister"></span>
          </div>
          <div @click="() => loginOrRegister = false" class="tab2">
            <span>注册</span>

            <span v-if="!loginOrRegister"></span>
          </div>
          
          <el-button @click="() => maskWindow = false" style="float: right; padding: 3px 0; width:20px;height:20px;" type="danger" icon="el-icon-close" circle></el-button>

        </div>
        
        <div v-if="loginOrRegister">
          <el-input class="input" v-model="account"  placeholder="请输入账号"></el-input>
          <el-input class="input"  v-model="passwd"  placeholder="请输入密码"></el-input>
          <el-checkbox v-model="isRemenber"  style="margin-bottom:10px">记住密码</el-checkbox>
          <el-button @click="toLogin()" type="primary" style="width: 350px" round>登录</el-button>
        </div>
       <div v-else>
          <el-input class="input" v-model="name"  placeholder="用户名"></el-input>
         <el-input class="input" v-model="account"  placeholder="账号"></el-input>
          <el-input class="input" v-model="passwd"  placeholder="密码"></el-input>
          <el-switch
            style="margin-bottom: 10px"
            v-model="userType"
            active-text="学生"
            inactive-text="教师">
          </el-switch>
          <el-button type="primary" @click="toRegister()" style="width: 350px" round>注册</el-button>
       </div>
      </el-card>
    </div>
  </div>
</template>

<script>

import md5 from 'js-md5'
import Tab from '@/components/tab/tab'
import Courses from '@/components/courses/courses'
import CourseDetail from '@/components/courseDetail/course-detail'
import {register} from '@/api'
export default {
  name: 'App',
  components: {
    Courses,
    Tab,
    CourseDetail
  },

  data() {
    return {
      maskWindow: false,
      loginOrRegister: true,
      userType: false,
      isRemenber: false,
      websock: null,
      uid: null,
      name: "",
      account: "",
      passwd: "",
      role: 0
    }
  },
  computed: {
    userInfo: function() {
      return this.$store.getters.user;
    }
  },
  watch: {
    userType: function(value,oldValue) {
      if(value) this.role = 1;
      else this.role = 0;
    },
    isRemenber: function(value,oldValue) {
      if(value && !oldValue) sessionStorage.setItem("isRemenber","true")
      else if(!value && oldValue) sessionStorage.setItem("isRemenber","false")
    }
  },
  created() {
    console.log("---------------App.created()---------------")
    /*
     *初始化的时候从storage中取出是否记录密码标志flag
     *如果flag = true则取出用户信息放到this.user
     */
    
    var getRemenberFromStorage = sessionStorage.getItem("isRemenber");
    console.log(getRemenberFromStorage)
    if(getRemenberFromStorage === "true") {
      this.isRemenber = true;
      let userInfo = JSON.parse(sessionStorage.getItem("userStore"))
      let user = JSON.parse(sessionStorage.getItem("user"));
      console.log(userInfo, user);
      if(user != null) {
        this.account = user.account;
        this.passwd = user.passwd;
      }
      if(userInfo != null) {
        this.toLogin();
      }
    } else this.isRemenber = false; 
    console.log(this.account, this.passwd);
  },
  methods: {

    exit() {
      /*
       * 退出清空store,session中的userStore信息
       *
       */
      this.$store.dispatch("clearUser");

      sessionStorage.removeItem("userStore");
      this.$router.push("/")
    },
    //记住密码
    remember() {
      sessionStorage.setItem("user",JSON.stringify({
        account: this.account,
        passwd: this.passwd,
        uid: this.uid,
        name: this.name
      }));
    },
    toLogin() {
      console.log(this.$store.getters.user)
      //是否记住密码
      // console.log("存储前，",this.user.passwd);
      if(this.isRemenber) this.remember();  
      // console.log("存储后",this.user.passwd);

      //将用户密码加密
      let passwd = this.CalcuMD5(this.passwd);

      this.axios.post(this.linkPrefix + "/user/login",{account: this.account, passwd: passwd}).then(res => {
        var warn = ""
        //登录成功
        if(res.data.status === 1) {
          warn = "登录成功";
          this.maskWindow = false;
          //将用户信息存到store中
          //因为刷新后vuex中的user信息也会丢失
          //所以要保存到sessionStorage中.
          this.uid = res.data.content.uid;
          this.name = res.data.content.name;
          this.role = res.data.content.role;
          this.initWebSocket();
          let userInfo = res.data.content;
          userInfo.passwd = this.passwd;
          this.$store.dispatch("initUser", userInfo);
          sessionStorage.setItem("userStore",JSON.stringify(userInfo));
          this.loadOffLineMsg(userInfo.uid);
        } else if(res.data.status === -1) {

        } else {

        }
     })
    },
    loadOffLineMsg(uid) {

      this.axios.get(this.linkPrefix + "/message/off/" + uid).then(res1 => {
            console.log("加载所有离线消息", res1.data.content)
            this.$notify({
              title: "未读消息",
              message: "您有" + res1.data.content.length + "条消息未读"
            })
            this.$store.dispatch("putMsgQueues",res1.data.content)
      });
    },
    toRegister() {
      console.log("注册")
      var user = {
        name: this.name,
        account: this.account,
        role: this.role,
        passwd: this.CalcuMD5(this.passwd)
      };
      this.axios.put(this.linkPrefix + "/user/register",user).then((res) => {
        
        var notify = "";
        if(res.data.status === 1) {
          notify = "注册成功,请登录";
          this.loginOrRegister = true;
        } else if(res.data.status === -1) {
          notify = "账号已存在"
        } else {
          notify = "注册失败，请稍后再试"
        }
        this.$notify({
          title: '提示',
          message: notify
        });
    })
    },
    CalcuMD5(pwd) {
      pwd = pwd.toUpperCase();
      pwd = md5(pwd);
      return pwd;
    },
    initWebSocket(){ //初始化weosocket
        if(this.uid == null || this.uid < 0) {
          console.log("未登录")
          return;
        }
        const wsuri = "ws://localhost:8082/ws/school/" + this.uid;
        if ('WebSocket' in window) {
                this.websock = new WebSocket(wsuri);
        } else if ('MozWebSocket' in window) {
                this.websock = new MozWebSocket(wsuri);
        }
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
        console.log("连接完毕",this.websock)
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        // let actions = {"test":"12345"};
        // this.websocketsend(JSON.stringify(actions));
      },
      websocketonerror(){//连接建立失败重连
        console.log("onerror")
        // this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        const redata = JSON.parse(e.data);
        console.log("数据接收",e);
        if(redata.type != 5) {
          this.$notify({
            title: "未接消息",
            message: "你有一条未接消息"
          })
        }
        this.$store.dispatch("putMsgQueues", JSON.parse(e.data));
        
      },
      websocketsend(Data) {//数据发送
      console.log("websocket发送消息",Data,this.websock)
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
        // this.initWebSocket();
      },
      warn() {

      }
  }
}
</script>

<style lang="stylus">
.app
  width 100%
  float left
  background rgb(217,233,255)
  position relative
  
  .mask
    position absolute
    top 0px;
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    z-index 9
    display flex
    justify-content center

    .login-card
      position fixed
      top 300px
      width 400px
    
      .input
        margin 10px 0

      .tab1
        margin-right 20px
        float left
        width 30px
        text-align center
      
        span:nth-child(2)
          height 3px
          width 30px
          background red
          border-radius 5px
          display block
      
      .tab1:hover,.tab2:hover
        cursor pointer  
      .tab2
        float left
        width 30px
        text-align center
        span:nth-child(2)
          height 3px
          width 30px
          background red
          border-radius 5px
          display block
</style>
