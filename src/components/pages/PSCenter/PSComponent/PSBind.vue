<template>
  <div class="body">
    <div class="container">
      <div class="title">账号绑定</div>
      <div class="item">
        <i class="iconfont icon-Email"></i>
        <p class="item-fir">
          <span class="item-title">邮箱</span>
          <span>  未绑定（绑定邮箱可得一积分）</span>
        </p>
        <p class="item-sec">
          可用邮箱加密码登录慕课网，可用邮箱找回密码
        </p>
        <button class="item-bind">立即绑定</button>
      </div>
      <div class="item">
        <i class="iconfont icon-shouji"></i>
        <p class="item-fir">
          <span class="item-title">手机</span>
          <span>  133******43</span>
        </p>
        <p class="item-sec">
          可用手机号加密码登录慕课网，可通过手机号找回密码 无法绑定
        </p>
        <button class="item-bind item-change">更改</button>
      </div>
      <div class="item">
        <i class="iconfont icon-anquan"></i>
        <p class="item-fir">
          <span class="item-title">密码</span>
          <span>  已设置</span>
        </p>
        <p class="item-sec">
          用于保护账号信息和登录安全
        </p>
        <button class="item-bind item-change">修改</button>
      </div>
      <div class="item item-social">
        <i class="iconfont icon-diqiu"></i>
        <p class="item-fir">
          <span class="item-title">社交账号</span>
        </p>
        <p class="item-sec">
          绑定第三方帐号，可以直接登录，还可以将内容同步到以下平台，与更多好友分享
        </p>
      </div>
      <div class="social">
        <div class="social-item">
          <div class="social-item-img"><i class="iconfont icon-weixin"></i></div>
          <p class="social-item-title">微信</p>
          <p class="social-item-state">未绑定</p>
          <button class="social-item-button">添加绑定</button>
        </div>
        <div class="social-item">
          <div class="social-item-img"><i class="iconfont icon-weibo"></i></div>
          <p class="social-item-title">微博</p>
          <p class="social-item-state">未绑定</p>
          <button class="social-item-button">添加绑定</button>
        </div>
        <div class="social-item">
          <div class="social-item-img"><i class="iconfont icon-qq"></i></div>
          <p class="social-item-title">QQ</p>
          <p class="social-item-state">未绑定</p>
          <button class="social-item-button">添加绑定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    width: 100%;
    /* background: blueviolet; */
    position: relative;
    height: 100%;
  }
  .container {
    position: absolute;
    width: 90%;
    height: 90%;
    background: #fbfbfb;
    position: absolute;
    margin-left: 5%;
    margin-top: 3.3%;
  }
  .title {
    width: 100%;
    /* background: white; */
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid lightgray;
    text-indent: 50px;
    font-size: 20px;
    font-weight: 600;
  }
  .item {
    width: 100%;
    height: 80px;
    position: relative;
    /* background: lightblue; */
    border-bottom: 1px solid lightgray;
    line-height: 80px;
  }
  .iconfont{
    position: absolute;
    font-size: 34px;
    margin-left: 50px;
  }
  .item-fir {
    position: absolute;
    margin-left: 50px;
    font-size: 13px;
    margin-top: -10px;
    margin-left: 130px;
  }
  .item-sec {
    position: absolute;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 130px;
  }
  .item-title {
    font-size: 18px;
    font-weight: 500;
  }
  .item-bind {
    position: absolute;
    margin-left: 700px;
    margin-top: 25px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    font-size: 14px;
    border: 1px solid lightgray;
  }
  .item-change {
    width: 60px;
    margin-left: 730px;
  }
  .item-social {
    margin-top: 10px;
    border: none;
  }
  .social {
    width: 640px;
    height: 150px;
    /* background: lightblue; */
    margin-left: 100px;
    margin-top: 10px;
  }
  .social-item {
    width: 200px;
    height: 100px;
    position: relative;
    float: left;
    /* background: lightblue; */
  }
  .icon-weixin, .icon-qq, .icon-weibo {
    position: absolute;
    width: 80px;
    height: 80px;
    background: lightgray;
    font-size: 50px;
    text-align: center;
    line-height: 80px;
    /* margin-left: 0; */
    color: black;
    border-radius: 40px;
  }
  .social-item-title {
    margin-left: 150px;
    font-size: 20px;
    font-weight: 500;
  }
  .social-item-state {
    margin-left: 150px;
    font-size: 14px;
    margin-top: 2px;
  }
  .social-item-button {
    margin-left: 142px;
    width: 60px;
    height: 26px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 6px;
  }
</style>
