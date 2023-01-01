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
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="mobile" label="手机号"/>
      <el-table-column prop="nickname" label="昵称"/>
      <el-table-column label="性别" width="80">
        <template slot-scope="scope">
          {{ scope.row.level === 1 ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="80"/>
      <el-table-column prop="openid" label="微信openId"/>

      <el-table-column prop="avatar" label="头像" width="100">
        <template slot-scope="scope">
          <el-image :src="scope.row.avatar" :preview-src-list="[scope.row.avatar]"/>
        </template>
      </el-table-column>

      <el-table-column prop="gmtCreate" label="添加时间" width="160"/>


      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.isDisabled"
            type="primary"
            icon="el-icon-edit"
            @click="release(scope.row.id)">解禁
          </el-button>
          <el-button v-else type="danger" icon="el-icon-delete" @click="ban(scope.row.id)">禁言
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />

  </div>
</template>
<script>
// 引入调用teacher.js文件
import user from '@/api/user'

export default {
  // 写核心代码位置
  // data:{
  // },
  data() { // 定义变量和初始值
    return {
      list: null, // 查询之后接口返回集合
      page: 1, // 当前页
      limit: 10, // 每页记录数
      total: 0, // 总记录数
      teacherQuery: {} // 条件封装对象
    }
  },
  created() { // 页面渲染之前执行，一般调用methods定义的方法
    // 调用
    this.getList()
  },
  methods: { // 创建具体的方法，调用teacher.js定义的方法
    // 讲师列表的方法
    getList(page = 1) {
      this.page = page
      user.getUserListPage(this.page, this.limit)
        .then(response => { // 请求成功
          // response接口返回的数据
          // console.log(response)
          this.list = response.data.records
          this.total = response.data.total
        })
    },
    ban(userId) {
      user.ban(userId)
        .then(res => {
          this.$message.success('禁言成功')
          this.getList()
        }).catch(error => {
        this.$message.error('禁言失败!')
      })
    }, release(userId) {
      user.release(userId)
        .then(res => {
          this.$message.success('解禁成功')
          this.getList()
        }).catch(error => {
        this.$message.error('解禁失败!')
      })
    },
    resetData() { // 清空的方法
      // 表单输入项数据清空
      // 查询所有讲师数据
      this.getList()
    }

  }
}
</script>
