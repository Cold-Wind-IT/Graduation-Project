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
                <el-menu-item index="1-1">图书信息</el-menu-item>
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
        <el-main
          ><el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column> </el-table
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
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
