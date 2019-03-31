<template>
  <div class="body">
    <el-card shadow="always" class="box-card-sub">
      <div slot="header" class="clearfix" >
        <el-upload
          class="avatar-uploader"
          :action="linkPrefix + '/uploadfile/'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :with-credentials='true'>
          <img v-if="!user" :src="linkPrefix + '/head/default.jpg'" class="avatar">
          <img v-else title="点击上传图片修改头像" :src="linkPrefix + '/head/' + user.headImg" class="avatar">
      </el-upload>
      </div>
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo">
        <el-menu-item index="/pscenter">
          <i class="el-icon-menu"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
        <el-menu-item index="/pscenter/psnotes">
          <i class="el-icon-menu"></i>
          <span slot="title">笔记</span>
        </el-menu-item>
        <el-menu-item index="/pscenter/pscourse">
          <i class="el-icon-document"></i>
          <span slot="title">课程</span>
        </el-menu-item>
      </el-menu>
    </el-card>
    
    <el-card shadow="always" class="box-card-content">
      <router-view />
    </el-card>

  </div>
  
</template>

<script>

export default {
  data() {
    return {
      imageUrl: "",
      user: this.$store.getters.user
    }

  },
  methods: {
    updateHeadImg() {

    },
    handleAvatarSuccess(res, file) {
      console.log("user", this.user)
      if(file.response.status === 1) {
        console.log("修改图片")
        this.axios.post(this.linkPrefix + "/user/update/headImg", {headImg: file.response.content}).then(res => {
          this.user.headImg = file.response.content;
          this.$store.dispatch("initUser", this.user);
          if(res.data.status === 1) {
            this.$notify({
              title: "提示",
              message: "修改成功"
            })
          }
        })
      } else {

        this.$notify({
          title: "提示",
          message: file.response.msg
        })
      }
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  }
}
</script>

<style lang="stylus">
.body
  .box-card-sub
    .clearfix
      display flex
      justify-content center
      align-items center
      .avatar
        width 100px
    .clearfix:hover
      cursor pointer

  .box-card-sub
    width 300px
    height 600px
    float left

  .box-card-content
    width 850px
    height 600px
    float right
</style>
