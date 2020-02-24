import axios from '@/axios.js'
let api = {
  searchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getContainList () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  getGeoLocation () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  }
}

export default api
