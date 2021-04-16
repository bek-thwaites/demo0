<template>
  <div id='login' class="login">
    {{msg}}
    <div id='login_center' class='login_center'>
      <div id='login_images' class='login_images'>
        <img class='images_logo' src="../assets/bg.jpg" >
      </div>
      <div id='login_block'>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item class="inputtext" label="账号">
            <el-input  v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item class="inputtext" label="密码">
            <el-input  v-model="formLabelAlign.pwd"></el-input>
          </el-form-item>
          <button class="login_button" v-on:click="login00()" >login</button>
          <button class="login_button" v-on:click="submit" >login01</button>
          <button class="login_button" v-on:click="login02()" >login02</button>
          <button class="login_button" v-on:click="login03()" >login03</button>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {login} from '../api/base_api';
  export default {
    name: 'loginit',
    data() {
      return {
        msg: 'Welcome to login',
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
      login00() {
        var formData = this.formLabelAlign// 这里才是你的表单数据
        // var formData = JSON.stringify(this.formLabelAlign); // 这里才是你的表单数据
        login(formData)
          .then(response=>{
            console.log(response)
            console.log(response.data)
            this.url = response.data.url
          })
          .catch(function(err){
            console.log(err);
          });
      },

      submit() {
        var formData = this.formLabelAlign; // 这里才是你的表单数据
        // var formData = JSON.stringify(this.formLabelAlign); // 这里才是你的表单数据
        this.$axios.post('/api/login', formData)
          .then((response) => {
            // success callback
            console.log(response.data);
          }, (response) => {
            console.log("error");
            // error callback
          });
      } ,
      login02() {
        // `methods` 内部的 `this` 指向当前活动实例
        alert('Hello2 '+ '!')
        // `event` 是原生 DOM event
      },
      login03() {
        var data = this.formLabelAlign// 这里才是你的表单数据
        this.$post(this.$linkurl.login, data) // this.$linkurl.login就是指的你的那个接口js文件
          .then(res=>{
            if(res.code == 200){
              alert("a")
// 成功
            } else {
              alert("b")
// 失败
            }
          })
      }
    }
  }
</script>

<style>

  .login{
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    margin: -10px;
    background: url('../assets/bg.jpg') no-repeat right top;
    background-size: 100% 100%;
  }
  .login_center{
    margin: 60px auto;
    width: 600px;
    border: 1px solid red;
    /*background-color: white;*/
  }
  .images_logo{
    border-radius: 50%;
    height: 228px;
    margin-left: 80px;
    margin-top: 60px;
    border: 1px solid #ffffff;
  }
  #login_block{
    border: 1px solid green;

  }

  /*/deep/.el-input{*/
  /*  background-color: transparent;*/
  /*}*/

  .el-input__inner{
    background-color: transparent;
  }
  .inputtext{
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
  .login_button{

  }

</style>
