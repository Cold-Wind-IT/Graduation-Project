<template>
  <div>
    <div class="controll"></div>
    <el-table :data="bookList">
      <el-table-column prop="idBook" label="序号" width="80"> </el-table-column>
      <el-table-column prop="bookCode" label="图书编号" width="150">
      </el-table-column>
      <el-table-column prop="bookName" label="图书名称"> </el-table-column>
      <el-table-column prop="bookAuthor" label="图书作者" width="200">
      </el-table-column>
      <el-table-column prop="bookPrice" label="图书价格" width="100">
      </el-table-column>
      <el-table-column prop="address" label="图书类型" width="100">
      </el-table-column>
      <el-table-column prop="bookPublishName" label="图书出版社" width="200">
      </el-table-column>
      <el-table-column prop="bookPublishYear" label="图书出版年份" width="120">
      </el-table-column>
      <el-table-column prop="bookNum" label="已借数量" width="80">
      </el-table-column>
      <el-table-column prop="bookBorrowed" label="图书总数" width="80">
      </el-table-column>
      <el-table-column label="修改" width="80"
        ><button>修改</button>
      </el-table-column>
      <el-table-column label="删除" width="80"
        ><button>删除</button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["bookList"],
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
}
</style>
