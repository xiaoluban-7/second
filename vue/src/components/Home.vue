<template>
  <body>
  <div class="tab">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统设置</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="button">
    <el-row>
      <el-input placeholder="请输入关键词" style="width: 20%"></el-input>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary"><i class="el-icon-plus">新增</i></el-button>
      <el-button type="danger" @click="batchDelete"><i class="el-icon-minus">删除</i></el-button>
      <el-button type="info"><i class="el-icon-delete">编辑</i></el-button>
    </el-row>
  </div>
  <div class="content">
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="id" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="90"></el-table-column>
        <el-table-column prop="address" label="现地址" :formatter="formatter"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="email" label="邮箱地址"></el-table-column>
        <el-table-column prop="dept" label="部门"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="date" label="入职日期" sortable width="180"></el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
  </body>
</template>
<style>
  body {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    background-color: #f9fde1;
  }

  .pagination {
    margin-top: 20px;
  }
  .el-table-column--selection .cell {
    padding-left: 10px;
  }
  .button {
    margin-bottom: 20px;
  }
  .tab {
    margin-bottom: 20px;
  }
</style>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: '1',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '2',
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '3',
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '4',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '5',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '6',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '7',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '8',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }, {
                    id: '9',
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                    phone: '16602901289',
                    email: 'z16602901289@163.com',
                    dept: '技术部',
                    role: 'java开发'
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            //删除或者批量删除
            batchDelete() {

                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>



