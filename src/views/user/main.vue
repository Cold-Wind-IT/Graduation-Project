<template>
  <div>
    <!-- 搜索框 -->
    <div class="seach">
      <v-search
        :placeholder="'请输入要查询的图书名称首字母'"
        :width="'674'"
        @sendSearchVal="sendSearchVal"
        ref="childSearch"
      ></v-search>
    </div>

    <book-table :tableHeight="400" class="content">
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
        <li style="width: 120px; text-align: center" :title="data.bookAuthor">
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
import VSearch from "@/components/search/main";
import BookTable from "../borrow/components/bookTable";
import TurnPage from "../../components/paging/turnPage";
import { paging } from "../../utils/paging";
export default {
  components: {
    VSearch,
    BookTable,
    TurnPage,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 1,
      pageSize: 9,
      allData: [],
      datalist: null,
    };
  },
  methods: {
    /**
     * 检索
     */
    selectedVal(obj) {
      this.allData = [];
      this.datalist = [];
      this.currentPage = 1;
      this.totalPages = 1;
      this.type = obj.type;
      this.$refs.childSearch.searchVal = "";
      if (obj.type === 1) {
        this.isScanningShow =
          true &&
          JSON.parse(localStorage.getItem("configureInfo")).isBarCode === 1;
      } else {
        this.isScanningShow = false;
      }
    },
    /**
     * 查询
     * @type  1  为退出   2 为  搜索
     */
    // 确认查询
    sendSearchVal(obj) {
      this.allData = [];
      this.datalist = [];
      if (obj.type === 1) {
        this.currentPage = 1;
        this.totalPages = 1;
        this.$refs.childSearch.searchVal = "";
      } else {
        this.getData(obj.searchVal);
      }
    },

    getData(val) {
      this.$http.get(this.$api + "/findByQuery/" + val).then((res) => {
        console.log(res);
        if (res.data.length != 0) {
          this.allData = res.data;
          this.totalPages = Math.ceil(this.allData.length / 10);
          this.currentPage = 1;
          this.datalist = paging(this.pageSize, this.currentPage, this.allData);
          this.totalPages =
            Math.ceil(this.allData.length / this.pageSize) === 0
              ? 1
              : Math.ceil(this.allData.length / this.pageSize);
        } else {
          alert("未找到该图书");
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

<style lang="scss" scope>
.seach {
  padding-top: 30px;
  margin-left: 90px;
}
</style>
