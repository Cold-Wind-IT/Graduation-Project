<template>
  <div>
    <div class="controll"></div>
    <el-table
      :data="boolList.slice((currentPage - 1) * page, currentPage * page)"
    >
      <el-table-column prop="idUser" label="id" width="80"> </el-table-column>
      <el-table-column prop="userCode" label="学号" width="300">
      </el-table-column>
      <el-table-column prop="userName" label="姓名"> </el-table-column>
      <el-table-column prop="userNum" label="电话号码">
      </el-table-column>
      <el-table-column prop="userPwd" label="密码">
      </el-table-column>
      <el-table-column label="操作" width="160" align="center"
        ><button style="margin-right:10px">修改</button><button>删除</button>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="page"
        layout="total, prev, pager, next, jumper"
        :total="totalList"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import bookjs from "../../../assets/book";

export default {
  // props: ["bookList"],
  data() {
    return {
      page: 10, //每页数据
      totalList: 1,
      currentPage: 1,
      List: [],
      boolList: bookjs,
    };
  },
  methods: {
    getData() {
      this.List = this.boolList;
      this.totalList = this.boolList.length;
    },
    handleSizeChange(val) {
      this.page = val;
      yhis.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.controll {
  height: 60px;
}
el-table-column {
  line-height: 36px;
}
.el-table--fit {
  line-height: 40px;
  font-size: 16px;
  height: 550px;
}
/deep/ .el-table .cell {
  height: 24px !important;
  white-space: nowrap;
}

.page {
  padding-top: 20px;
  /deep/ .el-pager li,
  /deep/ .el-pagination .btn-next .el-icon,
  /deep/ .el-pagination .btn-prev .el-icon,
  /deep/.el-pagination__editor.el-input .el-input__inner {
    font-size: 20px;
  }
}
</style>