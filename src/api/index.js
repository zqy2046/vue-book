import axios from 'axios'
// 设置默认请求路径;
axios.defaults.baseURL = 'http://192.168.1.102:3000'
// 获取轮播图数据;返回的是一个promise
axios.interceptors.response.use(function (res) {
  // 对响应数据做点什么
  return res.data
})
export const getSlidersData = () => {
  return axios.get('/sliders')
}
export const getHotBookData = () => {
  return axios.get('/hot')
}
export const getBooks = () => {
  return axios.get('/books')
}
export const removeBook = (id) => {
  return axios.delete(`/books?id=${id}`)
}
export const findOneBook = (id) => {
  return axios.get(`/books?id=${id}`)
}
export const changeSomeBook = (data) => {
  let id = data.bookId;
  return axios.put(`/books?id=${id}`, data)
}
export const addBook = (data) => {
  return axios.post('/books',data)
}
export const getAll = () => {
  return axios.all([getSlidersData(),getHotBookData()])
}
