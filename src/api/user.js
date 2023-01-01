import request from '@/utils/request'

const api_name = '/educenter/member'
export default {

  getUserListPage(current, limit) {
    return request({
      url: `${api_name}/current/${current}/size/${limit}`,
      method: 'get'
    })
  },
  ban(userId) {
    return request({
      url: `${api_name}/ban/${userId}`,
      method: 'put'
    })
  },
  release(userId) {
    return request({
      url: `${api_name}/release/${userId}`,
      method: 'put'
    })
  }
}
