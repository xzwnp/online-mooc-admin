<template>
  <div class="app-container">
    <!-- 表格 -->
    <el-table
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="subjectId" label="分类编号"/>
      <el-table-column prop="title" label="课程分类"/>
      <el-table-column prop="courseCount" label="课程数"/>

    </el-table>

  </div>
</template>
<script>
// 引入调用teacher.js文件
import subject from '@/api/edu/subject'

export default {
  // 写核心代码位置
  // data:{
  // },
  data() { // 定义变量和初始值
    return {
      list: null // 查询之后接口返回集合
    }
  },
  created() { // 页面渲染之前执行，一般调用methods定义的方法
    // 调用
    this.getList()
  },
  methods: { // 创建具体的方法，调用teacher.js定义的方法
    // 讲师列表的方法
    getList() {
      subject.getSubjectCourseStatistics()
        .then(response => { // 请求成功
          // response接口返回的数据
          // console.log(response)
          this.list = response.data.statistics
          console.log(this.list)
        })
    },

  }
}
</script>
