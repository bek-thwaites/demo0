<template>
  <div id='homepage' class="homepage">

    <div class="top">
      <div class="topleft">
        <el-radio-group v-model="isCollapse">
          <div>isCollapse{{isCollapse}}</div>
          <div class="btnbox" v-show="true">
              <el-radio-button :label="false" class="navigation_open" v-if="isCollapse === true">
                <i class="el-icon-arrow-right open" ></i>
              </el-radio-button>
              <el-radio-button :label="true" class="navigation_close" v-else>
                <i class="el-icon-arrow-left close"></i>
              </el-radio-button>
          </div>
        </el-radio-group>
        <!-- <el-radio-group v-model="isCollapse">
          <el-radio-button :label="true" class="navigation_close" >
            <i class="el-icon-arrow-left"></i>
          </el-radio-button>
          <el-radio-button :label="false" class="navigation_open">
            <i class="el-icon-arrow-right"></i>
          </el-radio-button>
          <el-switch 
            active-icon-class="el-icon-arrow-right"
            inactive-icon-class = "el-icon-arrow-left"
            v-model="isCollapse">
          </el-switch>

        </el-radio-group>
        <el-row>
          <el-button circle v-model="isCollapse">
            
          </el-button>
        </el-row> -->
      </div>
    </div>

    <div class="central">
      <div class="centralleft">
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user"></i>
              <span class="navigation" slot="title">AuthManage</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
              <el-menu-item index="1-3">选项3</el-menu-item>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
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

        </el-menu>
      </div>
      <div class="centralright">
          central
      {{msg}}
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
    // navigation_btn(b){
    //   if (b){
    //     b=false
    //     console.log(b);
    //   }else{
    //     b=true
    //     console.log(b);
    //   }
    // }
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
    margin-top: 5px;
    border: 1px solid blue;
  }
  .topleft{
    display: flex;
    border: 1px solid blue;
  }
  .btnbox{
    border: 1px solid red;
  }
  .el-switch__core{

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
  }
  .centralright{
    border: 1px solid blue;
  }
  .el-menu-vertical-demo{
    /* background-color: unset; */
    text-align: left;
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
    color:gray;
    font-style:oblique
  }
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
