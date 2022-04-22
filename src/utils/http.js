//axios封装

import axios from "axios"

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})
//请求拦截器
http.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
//响应拦截器
http.interceptors.response.use(response => {
  return response.data
}, error => {
  console.log(error)
  return Promise.reject(error)
})
export default http