import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/educenter/member/login',
    method: 'post',
    data: {
      mobile: username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/educenter/member/adminInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
