<template>
  <div class="course-edit-container">
    <el-card shadow="always" style="border-radius: 15px;" class="box-card-sub">
      <el-upload
        class="avatar-uploader"
        :action="linkPrefix + '/upload/course/image' "
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="img" :src="linkPrefix + '/course/' + img" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <happyScroll resize size="8">
        
        <el-tree class="filter-tree" @node-click="handleNodeClick" :data="data2" ref="tree2"></el-tree>
      
      </happyScroll>
      <el-button @click="() => this.menuFlag = 2" style="width: 100%;" type="primary">添加章节</el-button>
      <el-button @click="submit()" style="width: 100%; margin: 20px 0 0 0;" type="primary">完成编辑</el-button>
    </el-card>

    <div class="content-card" style="position: relative;">
      <div class="content-title">
        课程内容编辑
      </div>
      <el-button
        style="position: absolute; top: 10px; left: 10px;"
        type="danger"
        @click="comeBack()"
        title="退回"
        icon="el-icon-d-arrow-left"
        circle
      ></el-button>

      <div class="content-body">
        <div style="width: 100%; height: 100%;">
          <div v-if="menuFlag === 1" class="class-content">
            <el-row type="flex" justify="space-around" style="margin-top: 40px;">
              <el-col :span="8">
                <el-select v-model="tags" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-input v-model="courseName" placeholder="请输入课程名称"></el-input>
              </el-col>
            </el-row>
            <el-row type="flex" justify="space-around" align="middle">
              <textarea v-model="intro" placeholder="课程介绍" style="margin-top: 30px;max-width: 80%; min-width: 80%; max-height: 100px; min-height: 100px;"></textarea>
      
            </el-row>
            <el-row style="margin-top: 30px" type="flex" justify="center">
              <el-button @click="nextToSecond()" style="width: 80%;" type="primary">下一步</el-button>
            </el-row>
          </div>
          <div v-if="menuFlag === 2" class="class-content">
            <el-row type="flex" justify="center" align="middle">
                <el-input class="chapter-name-input" style="width: 430px; margin-top: 30px;" v-model="chapterName" placeholder="请输入章节名称"></el-input>
            </el-row>
            <el-row type="flex" justify="center" align="middle">
                <textarea v-model="chapterIntro" placeholder="课程介绍" style="margin-top: 30px;max-width: 80%; min-width: 80%; max-height: 100px; min-height: 100px;"></textarea>
            </el-row>
            <el-row type="flex" justify="center" align="middle">
                <el-button @click="addChapter()" style="width: 430px; margin-top: 30px;" type="primary">添加章节</el-button>
            </el-row>
          </div>
          <div v-if="menuFlag === 3" class="section-content">
            <el-row style="margin: 10px 0 0 20px">
              <center
                style="height: 40px; line-height: 40px; color: rgb(117,173,255);font-size: 20px;"
                v-html="'你正在编辑《' + this.editChapterName + '》'"
              ></center>
            </el-row>
            <el-row type="flex" justify="space-around" align="middle">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-input v-model="sectionName" placeholder="请输入章节名称"></el-input>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <el-date-picker
                    v-model="value2"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions1"
                  ></el-date-picker>
                </div>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-button style="width: 60%;" @click="addSection()" type="primary">添加节</el-button>
            </el-row>
          </div>
          <div v-if="menuFlag === 4" class="section-content">
            <el-row style="margin: 10px 0 0 20px">
              <center
                style="height: 40px; line-height: 40px; color: rgb(117,173,255);font-size: 20px;"
                v-html="'你正在修改《' + this.modify + '》'"
              ></center>
            </el-row>
            <el-row type="flex" justify="center" align="middle">
                <el-input class="chapter-name-input" style="width: 430px;" v-model="modifyChapterData.chapterName" placeholder="请输入章节名称"></el-input>
            </el-row>
            <el-row type="flex" justify="center" align="middle">
                <textarea v-model="modifyChapterData.chapterIntro" placeholder="课程介绍" style="max-width: 80%; min-width: 80%; max-height: 100px; min-height: 100px;"></textarea>
            </el-row>
            <el-row type="flex" justify="center" align="middle">
                <el-button @click="modifyChapter()" style="width: 430px;" type="primary">修改章节</el-button>
            </el-row>
          </div>
          <div v-if="menuFlag === 5" class="section-content">
            <el-row style="margin: 10px 0 0 20px">
              <center
                style="height: 40px; line-height: 40px; color: rgb(117,173,255);font-size: 20px;"
                v-html="'你正在修改《' + this.modify + '》'"
              ></center>
            </el-row>
            <el-row type="flex" justify="space-around" align="middle">
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-input v-model="modifySectionData.sectionName" placeholder="请输入章节名称"></el-input>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple-light">
                  <el-date-picker
                    v-model="modifySectionData.time"
                    type="datetime"
                    placeholder="选择日期时间"
                    align="right"
                    :picker-options="pickerOptions1"
                  ></el-date-picker>
                </div>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center">
              <el-button style="width: 60%;" @click="modifySection()" type="primary">添加节</el-button>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HappyScroll } from "vue-happy-scroll";
import CourseChapter from "./courseChapter/CourseChapter";
import CourseSection from "./courseSection/CourseSection";
// 引入css，推荐将css放入main入口中引入一次即可。
import "vue-happy-scroll/docs/happy-scroll.css";
export default {
  components: {
    HappyScroll
  },
  computed: {
    add() {
      return this.$store.getters.addFlag;
    },
    editChapterName() {
      return this.courseData[this.addId].chapterName;
    }
  },
  watch: {
    add: function(val, oldVal) {
      this.addId = this.$store.getters.addId;
      console.log(this.addId)
      this.menuFlag = 3;
    }
  },
  created() {
    let id = this.$route.params.cid;
    if(id) {
      this.axios.get(this.linkPrefix + "/course/detail/" + id).then(res => {
        this.courseData = JSON.parse(res.data.content.content);
        this.courseName = res.data.content.cname;
        this.type = res.data.content.type;
        this.tags = JSON.parse(res.data.content.tags);
        this.intro = res.data.content.intro;
        this.img = res.data.content.img;
        this.cid = res.data.content.cid;
        for(let i = 0; i < this.courseData.length; i++) {
          let children = [];
          this.data2.push({
            id: this.courseData[i].id,
            label: (
              <CourseChapter
              id={this.courseData[i].id}
              data={this.data2}
              courseData={this.courseData}
              content={this.courseData[i].chapterName}/>
            ),
            children: children
          })
          for(let l = 0; l < this.courseData[i].sections.length; l++) {
            console.log("测试")
            children.push({
              id: this.courseData[i].sections[l].id,
              label: (
                <CourseSection
                id={this.courseData[i].sections[l].id}
                data={children}
                sections={this.courseData[i].sections}
                content={this.courseData[i].sections[l].sectionName}/>
              )
            })
          }
        }
      })
    }
  },
  methods: {
    comeBack() {
      if(this.menuFlag == 1) {
        this.$notify({
          title: "提示",
          message: "无法回退"
        })
      } else {
        this.menuFlag--;
      }
    },
    modifyChapter() {
      for(let i = 0; i < this.courseData.length; i++) {
          if(this.courseData[i].id === this.modifyChapterData.id) {
            this.courseData[i].chapterName = this.modifyChapterData.chapterName;
            this.courseData[i].chapterIntro = this.modifyChapterData.chapterIntro;
            break;
          }
      }
      this.$notify({
        title: "提示",
        message: "修改成功"
      });
      this.menuFlag = 2;
    },
    modifySection() {
      for(let i = 0; i < this.courseData.length; i++) {
        for(let l = 0; l < this.courseData[i].sections.length; l++) {
          if(this.courseData[i].sections[l].id === this.modifySectionData.id) {
            this.courseData[i].sections[l].sectionName = this.modifySectionData.sectionName;
            // this.modify = this.modifySectionData.sectionName;
            break;
          }
        }
        
      }
      this.$notify({
        title: "提示",
        message: "修改成功"
      });
      this.menuFlag = 2;
    },
    handleNodeClick(data) {
      if(data.children) {
        this.menuFlag = 4;
        for(let i = 0; i < this.courseData.length; i++) {
          if(this.courseData[i].id === data.id) {
            this.modifyChapterData = this.courseData[i];
            this.modify = this.modifyChapterData.chapterName;
            break;
          }
        }
      } else {
        this.menuFlag = 5;
        for(let i = 0; i < this.courseData.length; i++) {
          for(let l = 0; l < this.courseData[i].sections.length; l++) {
            if(this.courseData[i].sections[l].id === data.id) {
              this.modifySectionData = this.courseData[i].sections[l];
              this.modify = this.modifySectionData.sectionName;
              break;
            }
          }
        }
      }
      console.log(this.modifyChapterData,this.modifySectionData)
      // console.log(data);
    },
    submit() {
        if(this.courseName != "" && this.tags.length != 0 
            && this.courseData.length != 0 ) {
                var course = {
                    cid: this.cid,
                    cname: this.courseName,
                    img: this.img,
                    type: 1,
                    tags: JSON.stringify(this.tags),
                    content: JSON.stringify(this.courseData),
                    intro: this.intro
                }
                this.axios.put(this.linkPrefix + "/course/add",course).then((res) => {
                    console.log(res.data)
                    var warn = ""
                    if(res.data.status === 1) {
                        warn = "保存成功"
                    } else {
                        warn = "保存失败，请稍后重试。"
                    }
                    this.$notify({
                        title: "提示",
                        message: warn
                    })
                })

        } else {
            
            this.$notify({
                title: "提示",
                message: "请填完整，再点击提交!"
            })
        }
    },
    nextToSecond() {
        if(this.courseName !="" && this.tags.length != 0) {
            this.menuFlag = 2;
        } else {
            this.$notify({
                title: "提示",
                message: "请填完整，再点击下一步!"
            })
        }
    },
    addChapter() {
      let id = 0;
      if(this.courseData.length == 0) id = 0;
      else id = this.courseData[this.courseData.length - 1].id;
      this.courseData.push({
        id: ++id,
        chapterName: this.chapterName,
        chapterIntro: this.chapterIntro,
        sections: []
      });
      this.data2.push({
        id: id,
        label: (
          <CourseChapter
            
            id={id}
            data={this.data2}
            courseData={this.courseData}
            content={this.chapterName}
          />
        ),
        children: []
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(file)
      this.img = file.response.content;
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
    addSection() {
      if (this.addId >= 0 && this.addId < this.data2.length) {
        if (this.data2[this.addId].children == undefined)
          this.data2[this.addId].children = [];
        let child = this.data2[this.addId].children;
        let sections = this.courseData[this.addId].sections;
        let id = 0;
        console.log(sections)
        if(sections.length == 0) id = 0;
        else id = sections[sections.length - 1].id;
        sections.push({
          id: ++id,
          sectionName: this.sectionName,
          time: this.value2
        })
        child.push({
          id: id,
          label: (
            <CourseSection
              id={id}
              data={child}
              sections={sections}
              content={this.sectionName}
            />
          )
        });
        this.$notify({
          title: "提示",
          message: "添加成功"
        })
      }
    }
  },
  data() {
    return {
      // {
      //         id: 1,
      //         label:  <CourseChapter content="哈哈😄"></CourseChapter>,
      //         children: [{
      //             id: 1,
      //             label: <CourseSection></CourseSection>
      //         }]
      // }
      chapterIntro: "",
      cid: 0,
      type: 1,
      img: "",
      modify: "",
      modifyChapterData: {},
      modifySectionData: {},
      addId: -1,
      data2: [],
      /**
       * [{
       *      id: 1,
       *      label: 接口,
       *      section: [
       *          id: 1,
       *          label:  哈哈,
       *      ]
       * }
       */
      courseData: [],
      menuFlag: 1,
      intro: "",
      chapterName: "",
      sectionName: "",
      imageUrl: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value2: "",
      tags: [],
      courseName: "",
      options: [
        {
          value: "前端开发",
          label: "前端开发"
        },
        {
          value: "后端开发",
          label: "后端开发"
        },
        {
          value: "移动开发",
          label: "移动开发"
        },
        {
          value: "算法&数学",
          label: "算法&数学"
        },
        {
          value: "前沿技术",
          label: "前沿技术"
        },
        {
          value: "云计算&大数据",
          label: "云计算&大数据"
        }, {
          value: "运维&测试",
          label: "运维&测试"
        },
        {
          value: "数据库",
          label: "数据库"
        },
        {
          value: "UI设计&多媒体",
          label: "UI设计&多媒体"
        },
        {
          value: "游戏",
          label: "游戏"
        },
        {
          value: "微服务",
          label: "微服务"
        },
        {
          value: "区块链",
          label: "区块链"
        },
        {
          value: "以太坊",
          label: "以太坊"
        },
        {
          value: "人工智能",
          label: "人工智能"
        },
        {
          value: "机器学习",
          label: "机器学习"
        },
        {
          value: "深度学习",
          label: "深度学习"
        },
        {
          value: "计算机视觉",
          label: "计算机视觉"
        },
        {
          value: "自然语言处理",
          label: "自然语言处理"
        },
        {
          value: "数据分析&挖掘",
          label: "数据分析&挖掘"
        },
        {
          value: "小程序",
          label: "小程序"
        },
        {
          value: "爬虫",
          label: "爬虫"
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
.course-edit-container {
  min-width: 100%;
  height: 100vh;

  .box-card-sub {
    width: 20%;
    height: 550px;
    margin-left: 20%;
    margin-top: 50px;
    float: left;

    .el-card__body {
      height: 100%;

      .happy-scroll {
        width: 100%;
        height: 55%;
      }

      .happy-scroll-container {
        width: 100% !important;
        height: 100% !important;
      }

      .el-tree-node__label {
        height: 50px;
        width: 100%;
      }

      .el-tree-node__content {
        height: 50px;
      }

      .avatar-uploader {
        width: 100%;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        border-bottom: 1px dashed rgb(64, 158, 255);

        .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .el-upload:hover {
          border-color: #409EFF;
        }

        .el-upload:hover:after {
          position: absolute;
          left: 0px;
          content: '上传课程图片';
        }

        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 100px;
          height: 100px;
          line-height: 100px;
          text-align: center;
        }

        .avatar {
          width: 100px;
          height: 100px;
          display: block;
        }
      }
    }
  }

  .content-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
    width: 35%;
    height: 550px;
    float: right;
    margin-top: 50px;
    margin-right: 20%;
    overflow: hidden;

    .content-title {
      width: 100%;
      height: 60px;
      background: rgb(117, 173, 255);
      text-align: center;
      line-height: 60px;
      color: white;
      font-size: 20px;
      font-weight: normal;
    }

    .content-body {
      width: 100%;
      height: 490px;

      .el-tag + .el-tag {
        margin-left: 10px;
      }

      .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }

      .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
      }

      .class-content, .chapter-content, .section-content {
        width: 100%;
        height: 100%;
        float: left;
      }

      .chapter-content {

        .chapter-name-input {
          width: 400px;
        }
      }

      .section-content {
        .el-row {
          margin-top: 50px;

          &:last-child {
            margin-bottom: 0;
          }

          .el-col {
            border-radius: 4px;
          }

          .grid-content {
            border-radius: 4px;
            min-height: 36px;
          }

          .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }
        }
      }
    }
  }
}
</style>
