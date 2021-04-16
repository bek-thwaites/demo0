//登录

<template>
	<div class="login" id="login">
    <div class="loginbkg" id="loginbkg">
      <div class="log-bg">
        <div class="log-logo">throni0</div>
      </div>
      <div class="log-email">
        <input type="text" placeholder="username" :class="'log-input' + (username==''?' log-input-empty':'')" v-model="username">
        <input type="password" placeholder="password" :class="'log-input' + (password==''?' log-input-empty':'')" v-model="password">
        <a href="javascript:;" class="log-btn" @click="Signin">Sign in</a>
      </div>
      <div class="log-other">
        <a class="signup" href="/">sign up</a>
        <a class="forgot" href="/">Forgot password?</a>
      </div>  
    </div>
	</div>
</template>

<script>
  import {login} from '../api/base_api';
	export default {
		name: 'Login',
		data() {
			return {
				isLoging: false,
				account: '',
				password: ''
			}
		},
		components: {
		},
		methods: {

			//登录逻辑
			Signin() {
				if (this.username != '' && this.password != '') {
					this.toLogin();
				}
			},

			//登录请求
			toLogin(){
        var formData = {
          'username':username,
          'password':password,
        }// 这里才是你的表单数据
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
		}
	}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    margin: -10px;
    /* background: url('../assets/bg.jpg') no-repeat right top; */
    /* background-size: 100% 100%; */
  }
  .login:after{
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
	.loginbkg {
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

	.log-bg {
		background: url(../assets/bg2.jpg);
		background-size: 100% 100%;
		width: 100%;
		height: 312px;
		overflow: hidden;
	}

	.log-logo {
		height: 80px;
		margin: 120px auto 25px;
		text-align: center;
		color: #71717c;
		font-weight: bold;
		font-size: 40px;
    font-style: italic;
    z-index: 2;
    
	}

	.login-email {
		height: 17px;
		width: 29px;
		background-position: -117px 0;
	}

	.log-btn {
		width: 402px;
		display: block;
		text-align: left;
		line-height: 50px;
		margin: 0 auto 15px;
		height: 50px;
		color: #fff;
		font-size: 16px;
		-webkit-border-radius: 5px;
		background-color: #3B5999;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border-radius: 5px;
		position: relative;
	}

	.log-btn.tw {
		background-color: #13B4E9
	}

	.log-btn.email {
		background-color: #50E3CE
	}

	.log-btn:hover,
	.log-btn:focus {
		color: #fff;
		opacity: .8;
	}

	.log-email {
		text-align: center;
		margin-top: 20px;
	}

	.log-email .log-btn {
		background-color: #50E3CE;
		text-align: center;
	}

	.log-input-empty {
		border: 1px solid #f37474 !important;
	}

	.log-btn .text {
		left: 95px;
		line-height: 50px;
		text-align: left;
		position: absolute;
	}

	.log-input {
		width: 370px;
		overflow: hidden;
		padding: 0 15px;
		font-size: 13px;
		border: 1px solid #EBEBEB;
		margin: 0 auto 15px;
		height: 48px;
		line-height: 48px;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		-ms-border-radius: 5px;
		-o-border-radius: 5px;
		border-radius: 5px;
	}

	.log-input.warn {
		border: 1px solid #f88787
	}
  .log-other{
    width: 402px;
    margin: auto;
  }
  .signup{
    color:  #c7b0b0;
    font-size: 12px;
    float: left;
    font-style: italic;
  }
  .forgot{
    color:  #a0a0ad;
    font-size: 12px;
    float: right;
    font-style: italic;
  }
  a{
    text-decoration:none;
  }
	@-webkit-keyframes cloud1 {
		0% {
			left: 200px
		}

		100% {
			left: -130px;
		}
	}

	@keyframes cloud1 {
		0% {
			left: 200px
		}

		100% {
			left: -130px;
		}
	}

	@-webkit-keyframes cloud2 {
		0% {
			left: 500px;
		}

		100% {
			left: -90px;
		}
	}

	@keyframes cloud2 {
		0% {
			left: 500px;
		}

		100% {
			left: -90px;
		}
	}

	@-webkit-keyframes cloud3 {
		0% {
			left: 620px;
		}

		100% {
			left: -70px;
		}
	}

	@keyframes cloud3 {
		0% {
			left: 620px;
		}

		100% {
			left: -70px;
		}
	}

	@-webkit-keyframes cloud4 {
		0% {
			left: 100px;
		}

		100% {
			left: -70px;
		}
	}

	@keyframes cloud4 {
		0% {
			left: 100px;
		}

		100% {
			left: -70px;
		}
	} 
</style>