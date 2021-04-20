<template>
  <div>
    <el-container class="home_container">
      <!-- 顶部标题 -->
      <el-header class="fs-xl">智慧图书自助服务系统管理端</el-header>
      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px"
          ><el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-notebook-2"></i>图书管理</template
              >
              <el-menu-item-group>
                <el-menu-item @click="getBook" index="1-1"
                  >图书信息</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-user"></i>用户管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">用户信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-tickets"></i>日志管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="3-1">日志信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu></el-aside
        >
        <!-- 主要内容 -->
        <el-main>
          <table-book :bookList="bookList" v-show="book"></table-book>
          <table-user :userList="userList" v-show="user"></table-user>
          <table-record :recordList="recordList" v-show="record"></table-record>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TableBook from "./components/tableBook";
import TableUser from "./components/tableUser";
import TableRecord from "./components/tableRecord";

export default {
  components: {
    TableBook,
    TableUser,
    TableRecord,
  },
  data() {
    return {
      userList: null,
      bookList: null,
      recordList: null,
      book: false,
      user: false,
      record: false,
    };
  },

  methods: {
    getUser() {},
    getBook() {
      this.$http.get(this.$api + "/findAll").then((res) => {
        console.log(res);
        if (res.data.lenght != 0) {
          this.bookList = res.data;
        } else {
          alert("数据获取失败");
        }
      });
      this.book = true;
      this.user = false;
      this.record = false;
    },
  },
};
</script>

<style lang="less" scoped>
.home_container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
