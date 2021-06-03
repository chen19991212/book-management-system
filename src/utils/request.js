import axios from 'axios';
import store from '../store';
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'


const service = axios.create({
  //baseURL: 'http://localhost:5000',
  baseURL: '121.41.178.240:5000',
  timeout: 50000
})
//请求拦截器
service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers['Authorization'] = `Bearer ${getToken()}`
    }
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
)
//响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    if(res.code !== 0){
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5*1000
      })

      if(res.code === 50008 || res.code === 50012 || res.code === 50014){
        MessageBox.confirm('Token已失效，是否重新登录', '确认登出',{
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    }else{
      return res
    }
  },
  error => {
    const { msg } = error.response.data
    Message({
      message: msg || '请求失败',
      type: 'error',
      duration: 5*1000
    })
    return Promise.reject(error)
  }
)

export default service
