import axios from 'axios'

const server = axios.create({
  baseURL: 'http://backend-api-02.newbee.ltd/manage-api/v1',
  timeout: 6000
})

server.interceptors.request.use(res => {

})

server.interceptors.response.use(res => {

})

export default server