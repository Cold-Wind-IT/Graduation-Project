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
  </div>
</template>

<script>
import VSearch from "@/components/search/main";
export default {
  components: {
    VSearch,
  },
  methods: {
    /**
     * 检索
     */
    selectedVal(obj) {
      this.allData = [];
      this.data = [];
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
      this.data = [];
      if (obj.type === 1) {
        this.currentPage = 1;
        this.totalPages = 1;
        this.$refs.childSearch.searchVal = "";
      } else {
        this.getData(obj.searchVal);
      }
    },
  },
};
</script>

<style lang="scss" scope>
.seach {
  margin-top: 60px;
  margin-left: 90px;
}
</style>
