import request from '@/utils/request'
export default {

    //添加小节
    addOrUpdateVideo(video) {
        return request({
            url: '/eduservice/video/addOrUpdateVideo',
            method: 'post',
            data: video
          })
    },

    //删除小节
    deleteVideo(id) {
        return request({
            url: '/eduservice/video/'+id,
            method: 'delete'
          })
    },
}
