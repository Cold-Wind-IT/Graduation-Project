<template>
  <div>
    <el-container>
      <!-- 顶部标题 -->
      <el-header class="fs-xl">智慧图书自助服务系统后台管理</el-header>

      <el-container>
        <!-- 侧边导航栏 -->
        <el-aside width="200px"
          ><el-menu :default-openeds="['1', '3']">
            <!-- 图书管理 -->
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>图书管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1">图书列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 用户管理 -->
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>用户管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">用户列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 日志管理 -->
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>日志管理</template
              >
              <el-menu-item-group>
                <el-menu-item index="3-1">日志信息</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu></el-aside
        >
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
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

body > .el-container {
  margin-bottom: 40px;
}
</style>
