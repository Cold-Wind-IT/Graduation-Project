<template>
  <div class="borrow-container">
    <p class="text-aligin text-text1 fs-xl title">图书借阅</p>
    <book-table>
      <ul class="d-flex list-header">
        <li style="width: 60px; text-align: center">序号</li>
        <li style="width: 100px; text-align: center">图书编号</li>
        <li style="width: 160px; text-align: center">图书名称</li>
        <li style="width: 120px; text-align: center">图书作者</li>
        <li style="width: 80px; text-align: center">图书价格</li>
        <li style="width: 140px; text-align: center">图书出版社</li>
        <li style="width: 80px; text-align: center">出版年份</li>
        <li style="width: 90px; text-align: center">剩余图书</li>
        <li style="width: 80px; text-align: center">操作</li>
      </ul>
      <ul
        class="d-flex list-content"
        v-for="data in datalist"
        :key="data.idBook"
      >
        <li style="width: 60px; text-align: center">{{ data.idBook }}</li>
        <li style="width: 100px" :title="data.bookCode">
          {{
            data.bookCode.length > 10
              ? data.bookCode.substring(0, 8) + "..."
              : data.bookCode
          }}
        </li>
        <li style="width: 160px" :title="data.bookName">
          {{
            data.bookName.length > 8
              ? data.bookName.substring(0, 7) + "..."
              : data.bookName
          }}
        </li>
        <li style="width: 120px; text-align: center" :title="data.Author">
          {{
            data.bookAuthor.length > 6
              ? data.bookAuthor.substring(0, 5) + "..."
              : data.bookAuthor
          }}
        </li>
        <li style="width: 80px; text-align: right">{{ data.bookPrice }}</li>
        <li
          style="width: 140px; text-align: center"
          :title="data.bookPublishName"
        >
          {{
            data.bookPublishName.length > 6
              ? data.bookPublishName.substring(0, 5) + "..."
              : data.bookPublishName
          }}
        </li>
        <li style="width: 80px; text-align: right">
          {{ data.bookPublishYear === 0 ? "不祥" : data.bookPublishYear }}
        </li>
        <li style="width: 90px; text-align: center">
          {{ data.bookBorrowed - data.bookNum }}
        </li>
        <li
          style="width: 80px; text-align: center"
          v-if="data.bookBorrowed - data.bookNum > 0"
        >
          <button class="have-book">借阅</button>
        </li>
        <li style="width: 80px; text-align: center" v-else>
          <button class="no-book">借阅</button>
        </li>
      </ul>
    </book-table>

    <turn-page
      :currentPage="currentPage"
      :totalPages="totalPages"
      @turnPage="turnPage"
    >
    </turn-page>
  </div>
</template>

<script>
import { paging } from "../../utils/paging";
import BookTable from "./components/bookTable";
import TurnPage from "../../components/paging/turnPage";

export default {
  components: {
    BookTable,
    TurnPage,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      pageSize: 10,
      allData: [],
      datalist: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get(this.$api + "/findAll").then((res) => {
        console.log(res);
        if (res != null) {
          this.allData = res.data;
          this.totalPages = Math.ceil(this.allData.length / 10);
          this.currentPage = 1;
          this.datalist = paging(this.pageSize, this.currentPage, this.allData);
          this.totalPages =
            Math.ceil(this.allData.length / this.pageSize) === 0
              ? 1
              : Math.ceil(this.allData.length / this.pageSize);
        } else {
          alert("数据获取失败");
        }
      });
    },

    /**
     * params  1 为上一页  2  为下一页
     *
     */
    turnPage(params) {
      if (params === 1) {
        this.currentPage--;
        this.datalist = paging(this.pageSize, this.currentPage, this.allData);
      } else {
        this.currentPage++;
        this.datalist = paging(this.pageSize, this.currentPage, this.allData);
      }
    },
  },
};
</script>

<style lang="less" scope>
.borrow-container {
  .title {
    padding-top: 24px;
    line-height: 36px;
  }
}
</style>
