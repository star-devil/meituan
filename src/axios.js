import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,
    appkey: 'wangqiaoling_1582252570592'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
