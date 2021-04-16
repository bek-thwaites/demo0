import axios from 'axios';

// // 方式二 es6 语法
// axios.get('')
//   .then(response=>{
//     console.log(response)
//     console.log(response.data)
//     this.url = response.data.url
//   })
//   .catch(function(err){
//     console.log(err);
//   });

var baseapi = '/api';
export var base_get = () => {
  return axios.get(`${baseapi}/logo`)
};
export var login = (formData) => {
  return axios.post(`${baseapi}/login`,formData)
};
