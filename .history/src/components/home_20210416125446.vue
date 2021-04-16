<template>
  <div id='homepage' class="homepage">

    <div class="top">
      <div class="homelogo">
        <!-- <a href="#" class="hometitle">TestArt</a> -->
        <h6 class="hometitle">TestArt</h6>
      </div>
      <div class="navigation_btn">
        <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false" class="navigation_open" v-show="isCollapse">
            <i class="el-icon-caret-right navigation_ico" ></i>
          </el-radio-button>
          <el-radio-button :label="true" class="navigation_close" v-show="isCollapse == false">
            <i class="el-icon-caret-left navigation_ico"></i>
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="homeright">
        <!-- <div class="username1 titleright">个人中心</div> -->
        <div class="titleleft">
          <p class="titlerightuser">throni0</p> 
        </div>
        <div class=" titleright">
          <el-row class="block-col-2">
            <el-col :span="12">
              <span class="demonstration"></span>
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-setting">个人中心</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check">修改密码</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-warning-outline">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>

      </div>
    </div>

    <div class="central">
      <div class="centralleft">
        <el-menu default-active="1-3" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" @close="handleClose" 
        :collapse="isCollapse" unique-opened=true 
        router=true 
        >
          
          
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span class="navigation" slot="title">AuthManage</span>
            </template>
            <el-menu-item-group>
              <span slot="title">User related</span>
              <el-menu-item style="padding-left: 50px;" index="1-1">Auth</el-menu-item>
              <el-menu-item style="padding-left: 50px;" index="1-2">purview</el-menu-item>
            </el-menu-item-group>
            <el-menu-item index="1-3">catalog</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">documents</template>
              <el-menu-item index="1-4-1">1 Front</el-menu-item>
              <el-menu-item index="1-4-2">2 Rear</el-menu-item>
              <el-menu-item index="1-4-3">3 Testarts</el-menu-item>
              <el-menu-item index="1-4-4">4 CICD</el-menu-item>
              <el-menu-item index="1-4-5">5 others</el-menu-item>
              <el-menu-item index="1-4-6">6 Safty</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-monitor"></i>
              <span class="navigation" slot="title">WebUiDemo</span>
            </template>
            <el-menu-item-group>
              <span slot="title">WebUiTest</span>
              <el-submenu index="2-1">
              <template slot="title">WebUiTest</template>
                <el-submenu index="2-1-1">
                  <template slot="title">Locate 定位</template>
                  <el-menu-item index="2-1-1-1">List</el-menu-item>
                </el-submenu>
                <el-menu-item index="2-1-2">Send 发送</el-menu-item>
                <el-menu-item index="2-1-3">Slide 滑动</el-menu-item>
                <el-menu-item index="2-1-4">drag 拖动</el-menu-item>
                <el-menu-item index="2-1-5">display 隐藏</el-menu-item>
                <el-menu-item index="2-1-6">Pop-ups 弹窗</el-menu-item>
                <el-menu-item index="2-1-7">drawer 抽屉</el-menu-item>
              </el-submenu>
            </el-menu-item-group>

            <el-menu-item-group>
              <span slot="title">WebUidemo</span>
              <el-submenu index="2-2">
                <template slot="title">WebUidemo</template>
                <el-submenu index="2-2-1">
                  <template slot="title">Basic 基础</template>
                  <el-menu-item index="2-2-1-1">Radio 单选框</el-menu-item>

                </el-submenu>                
                <el-submenu index="2-2-2">
                  <template slot="title">From 表单</template>
                  <el-menu-item index="2-2-2-1">Radio 单选框</el-menu-item>
                  <el-menu-item index="2-2-2-2">Checkbox 多选框</el-menu-item>
                  <el-menu-item index="2-2-2-3">Input 输入框</el-menu-item>
                  <el-menu-item index="2-2-2-4">InputNumber 计数器</el-menu-item>
                  <el-menu-item index="2-2-2-5">Select 选择器</el-menu-item>
                  <el-menu-item index="2-2-2-6">Cascader 级联选择器</el-menu-item>
                  <el-menu-item index="2-2-2-7">Switch 开关</el-menu-item>
                </el-submenu>                
                <el-submenu index="2-2-3">
                  <template slot="title">Data 数据</template>
                  <el-menu-item index="2-2-3-">Radio 单选框</el-menu-item>
                  <el-menu-item index="2-2-3-">Checkbox 多选框</el-menu-item>
                  <el-menu-item index="2-2-3-">Input 输入框</el-menu-item>
                  <el-menu-item index="2-2-3-">InputNumber 计数器</el-menu-item>
                  <el-menu-item index="2-2-3-">Select 选择器</el-menu-item>
                  <el-menu-item index="2-2-3-">Cascader 级联选择器</el-menu-item>
                  <el-menu-item index="2-2-3-">Switch 开关</el-menu-item>
                </el-submenu>                
                <el-submenu index="2-2-4">
                  <template slot="title">Notice 消息</template>
                  <el-menu-item index="2-2-4-">Radio 单选框</el-menu-item>

                </el-submenu>                
                <el-submenu index="2-2-5">
                  <template slot="title">Navigation 导航</template>
                  <el-menu-item index="2-2-5-">Radio 单选框</el-menu-item>
                </el-submenu>                
                <el-submenu index="2-2-6">
                  <template slot="title">Others 其他</template>
                  <el-menu-item index="2-2-6-">Radio 单选框</el-menu-item>
                </el-submenu>                
              </el-submenu>
            </el-menu-item-group>

            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-files"></i>
              <span class="navigation" slot="title">Interface</span>
            </template>
            <el-menu-item index="3-1">接口管理</el-menu-item>
            <!-- interface -->
            <el-menu-item index="3-2">用例管理</el-menu-item>
            <!-- Example -->
            <el-menu-item index="3-3">项目管理</el-menu-item>
            <!-- projects -->
            <el-menu-item index="3-4">计划管理</el-menu-item>
            <!-- plan -->
            <el-menu-item index="3-5">环境管理</el-menu-item>
            <!-- milieu -->
          </el-submenu>

          <!-- //单导航按钮不可点击 -->
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item> -->
          <!-- 单导航按钮可点击 -->
          <!-- <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item> -->

          <el-submenu index="10">
            <template slot="title">
              <i class="el-icon-monitor"></i>
              <span class="navigation" slot="title">Demo</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Base</span>
              <el-menu-item index="/login">文本</el-menu-item>
              <el-menu-item index="10-2">列表</el-menu-item>
              <el-menu-item index="10-3">Radio 单选框</el-menu-item>
              <el-submenu index="10-4">
                <template slot="title">From</template>
              <el-menu-item index="10-4-1">Radio 单选框</el-menu-item>
              <el-menu-item index="10-4-2">Checkbox 多选框</el-menu-item>
            </el-submenu>
            </el-menu-item-group>
            <el-menu-item index="/index">选项3</el-menu-item>
            <el-menu-item index="10-6">选项4</el-menu-item>
          </el-submenu>


        </el-menu>
      </div>
      <div class="centralright">
        central
        {{msg}}

          <router-view></router-view>

      </div>
    </div>
    <div class="foot">foot</div>
    
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      isCollapse: true,
      msg: 'Welcome to Your home'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path){
      this.$router.replace(path);
    }
  }
}

</script>
<style>
  .homepage{
    border: 1px solid blue;
    width: 100%;
    height: 100%;
    /* background: url('../assets/bg.jpg'); */
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  /* .homepage:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(3px);
    z-index: 2;
  } */
  /* 顶栏 */
  .top{
    display: flex;
    margin-top: 5px;
  }
  /* left logo */
  .homelogo{
    margin: 5px 10px;
    text-align: center;
    /* background: url('../assets/throni.png');
    background-size: 100% 100%; */
    /* border: 1px solid red; */
  }
  /* button */
  .hometitle{
    text-align: center;
    font-size: 30px;
    font-style: italic;
    margin: auto;
    color: rgb(95, 106, 114);
    /* text-decoration: none;
    outline: none; */
  }
  .navigation_btn{
    /* margin-left: -25px; */
    margin-left: -20px;
    display: flex;
  }
  .el-radio-group{
    margin: auto 0px auto 15px;
  }
  .el-radio-button .el-radio-button__inner{
    background: transparent;
  }
  .el-radio-button:last-child .el-radio-button__inner{
    border: none;
    border-radius: 0px;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border: none;
    border-radius: 0px;
  }
  .el-radio-button__inner{
    padding: 0px;
    font-size: 20px;
  }
/* right */
  .homeright{
    margin: auto;
    margin-right: 20px;
    display: flex;
  }
  .titleleft{
    min-width: 105px;
    text-align: right;
    padding-left: 5px;
  }
  .titleright{
    text-align: right;
  }
  .titlerightuser{
    margin: 2px 0px 0px 0px;
    font-style: italic;
    color: rgb(78, 76, 76);
    font-weight: bold;
  }
  /* userbtn */
  .el-dropdown-link{
    cursor: pointer;
    color: #409EFF;
  }
  .el-col-12 {
    /* padding-left: 40px; */
    width: 100%;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 12px;
  }
  .el-dropdown-menu__item {
    font-size: 12px;
    line-height: 26px;
  }
  .el-dropdown {
    display: inline;
  }



/* 中部 */
  .central{
    height: 90%;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .centralleft{
    border: 1px solid blue;
    overflow-y: auto;
  }
  .centralleft::-webkit-scrollbar {
    width: 0px;
  }/* 滚动槽 */
  .centralright{
    border: 1px solid blue;
  }
  .el-menu-vertical-demo{
    /* background-color: unset; */
    text-align: left;
  }
  .centralleft .el-menu{
    background: transparent;
    border: none;
  }
 
  .el-submenu{


  }
  .el-menu{
    /* background-color: unset; */
    /* background-color: rgb(187, 187, 192); */
  }
  .navigation{
    color:lightslategrey;
  }

  .el-menu-item-group__title{
    /* margin-left: -10px; */
    color:gray;
    font-style:oblique
  }
  /* .is-active{
    margin-left: -10px;
  }
  .el-submenu__title{
    margin-left: -10px;
  } */

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }
  .el-menu-item{
  }

/* 脚注 */
  .foot{
    margin-block: 5px;
    border: 1px solid blue;
  }

</style>
