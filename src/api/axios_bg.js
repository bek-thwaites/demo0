// import axios from 'axios';
// // import Cookies from 'js-cookie';

// axios.defaults.timeout = 9999999;
// // axios.defaults.baseURL ='';


// //http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // let token = Cookies.get('token'); //注意使用的时候需要引入cookie方法，推荐js-cookie
//     let token = "atokin"

//     if(config.method=='post'){ // 如果是post请求 请求体自动加上token
//       config.data = config.data;
//       if(token){
//         config.data.token = token
//       }
// // else {
// // console.log('token失效')
// // }
//       config.headers = {
//         'Content-Type':'application/x-www-form-urlencoded',
//       }
//     } else if(config.method=='get'){ // 如果是get请求 url中拼接上
//       config.params.token = token
//       config.headers = {
//         'Content-Type':'application/x-www-form-urlencoded',
//       }
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(err);
//   }
// );


// //http response 拦截器
// axios.interceptors.response.use(
// // token 可以判断已过期，重定向到登录页面
//   response => {
//     if(response.data.errCode == 2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function get(url,params={}){
//   return new Promise((resolve,reject) => {
//     axios({
//       url: url,
//       method: 'GET',
//       params: params,
//       transformRequest: [function (data) {
//         let ret = ''
//         for (let it in data) {
//           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//         }
//         return ret
//       }],
//     })
//       .then(res => {
//         if(res.data.code == 1001){
//           this.$Message.warning('登录超时,' + res.data.message);
//           this.$router.push({path:'/'})
//           return
//         }
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */
// export function post(url,data = {}){
//   return new Promise((resolve,reject) => {
//     axios({
//       url: url,
//       method: 'POST',
//       data: data,
//       transformRequest: [function (data) {
//         let ret = ''
//         for (let it in data) {
//           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//         }
//         return ret
//       }],
//     })
//       .then(res => {
//         if(res.data.code == 1001){
//           this.$Message.warning('用户超时' + res.data.message);
//           this.$router.push({path:'/'})
//           return
//         }
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// /**
//  * from 表单
//  */
// export function get_from(URL, PARAMS) {
//   var p = new Promise((resolve, reject) =>{ //做一些异步操作
//     var temp = document.createElement("form");
//     temp.action = URL;
//     temp.method = "get";
//     temp.style.display = "none";
//     for (var x in PARAMS) {
//       var opt = document.createElement("textarea");
//       opt.name = x;
//       opt.value = PARAMS[x];
//       temp.appendChild(opt);
//     }
//     document.body.appendChild(temp);
//     temp.submit();
//     this.$Loading.finish();
//     resolve(temp)
//   });
//   return p;
// }

// /**
//  * 上传 excel
//  */

// export function up_excel(URL, PARAMS) {
//   return new Promise((resolve,reject) => {
//     let token = this.$Cookies.get('token')
//     let config = {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     }
//     PARAMS.append('token', token)

//     axios.post(URL, PARAMS, config)
//       .then( res => {
//         resolve(res.data)
//       })
//       .catch(err=>{
//         reject(err)
//       })
//   })
// }
