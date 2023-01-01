import request from '@/utils/request'

const api_name = '/staservice/sta'
export default {

  createStatistics(day) {
    return request({
      url: `${api_name}/${day}`,
      method: 'post'
    })
  },
  initChartData(searchObj) {
    return request({
      url: `${api_name}/showChart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
      method: 'get'
    })
  }
}
