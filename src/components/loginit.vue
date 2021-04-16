<template>
  <div id='loginpage' class="loginpage">
    {{datas}}
    <div class='loginbkg'>
      <div class='loginbase'>
        <div class="logintitle">throni0</div>
      </div>
      <div>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
          <el-form-item class="inputtext" label="账  号">
            <el-input  v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item class="inputtext" label="密  码">
            <el-input  v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>
          <div class="loginmsg">&nbsp;{{msg}}</div>
          <el-row>
            <el-button v-on:click="signup()" plain>signup</el-button>
            <el-button class="button" v-on:click="signin()" type="primary" plain>sign in</el-button>
          </el-row>
          <div class="loginfoot">
            <!-- <a class="signup" href="/">sign up</a> -->
            <a class="forgot" href="/">Forgot password?</a>
          </div>  
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

  import {login} from '../api/base_api';
export default {
  name: 'loginpage',
  data() {
    return {
      datas: 'Welcome to login',
      msg: '',
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        pwd: ''
      }
    }
  },
  mounted() {
  },
  methods: {
    signin() {
      var formData = this.formLabelAlign// 这里才是你的表单数据
      // var formData = JSON.stringify(this.formLabelAlign); // 这里才是你的表单数据
      login(formData)
      .then(response=>{
        console.log(response);
        console.log(response.data);
        this.url = response.data.url;
        this.msg = response.data.msg;
        this.$router.push('/home');

      })
      .catch(function(err){
        console.log(err);
        
      });
    },
  }
}
</script>

<style>
  .loginpage{
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    margin: -10px;
    background: url('../assets/bg.jpg');
    background-size: 100% 100%;
  }
  .loginpage:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(3px);
    z-index: 2;
  }
  .loginbkg{
    position: fixed;
    overflow: hidden;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    margin-top: -350px;
    width: 500px;
    min-height: 555px;
    z-index: 10;
    right: 140px;
    background: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 3px 16px -5px #070707;
    box-shadow: 0px 3px 16px -5px #070707
  }
  .loginbase{
    background: url(../assets/bg2.jpg);
    background-size: 100% 100%;
    width: 100%;
    height: 312px;
    overflow: hidden;
  }
  .logintitle{
    height: 80px;
    margin: 120px auto 25px;
    text-align: center;
    color: #71717c;
    font-weight: bold;
    font-size: 40px;
    font-style: italic;
    z-index: 2;
  }
  .el-input__inner{
    background-color: transparent;
  }
  .inputtext{
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
  .loginmsg{
    margin: -15px auto 5px auto;
    font-size: 14px;
    color: rgb(221, 13, 13);
  }
  .el-row{
    margin: auto;
    width: 430px;
    display: flex;
    justify-content: space-between;
  }
  .button{
    width: 280px;
  }
  .loginfoot{
    text-align:right;
    width: 400px;
    margin: 5px auto 0 auto;
  }
  .signup{
    color:  #c7b0b0;
    font-size: 12px;
    font-style: italic;
  }
  .forgot{
    color:  #a0a0ad;
    font-size: 12px;
    font-style: italic;
  }
  a{
    text-decoration:none;
  }

</style>
