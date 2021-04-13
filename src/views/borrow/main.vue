<template>
  <div>
    <p>图书借阅</p>
    <table>
      <tr>
        <td>序号</td>
        <td>图书编号</td>
        <td>图书名称</td>
        <td>图书作者</td>
        <td>图书价格</td>
        <td>图书出版社</td>
        <td>出版年份</td>
        <td>剩余图书</td>
        <td>操作</td>
      </tr>
      <tr v-for="data in datalist" :key="data.idBook">
        <td>{{ data.idBook }}</td>
        <td>{{ data.bookCode }}</td>
        <td>{{ data.bookName }}</td>
        <td>{{ data.bookAuthor }}</td>
        <td>{{ data.bookPrice }}</td>
        <td>{{ data.bookPublishName }}</td>
        <td>{{ data.bookPublishYear }}</td>
        <td>{{ data.bookNum - data.bookBorrowed }}</td>
        <td v-if="data.bookNum - data.bookBorrowed > 0">
          <button>可借阅</button>
        </td>
        <td v-else><button>不可借阅</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { paging } from "../../utils/paging";
export default {
  data() {
    return {
      datalist: null,
    };
  },
  created() {
    this.$http.get(this.$api + "/findAll").then((res) => {
      console.log(res);
      this.datalist = res.data;
    });
  },
};
</script>

<style lang="less" scope>
table {
  width: 880px;
  height: 670px;
  border-collapse: collapse;
  margin: 50px auto 0;
  td {
    border: solid 1px #000;
    padding: 7px;
  }
  tr:nth-of-type(1) {
    text-align: center;
  }
  td:nth-of-type(1),
  td:nth-of-type(7),
  td:nth-of-type(8) {
    text-align: center;
  }
}
</style>
