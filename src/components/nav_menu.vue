<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <router-link to="/main/article">
        <el-menu-item index="1">
          <el-icon></el-icon>
          添加文章
        </el-menu-item>
      </router-link>
      <router-link to="/main/articleList">
        <el-menu-item index="2">
          <el-icon></el-icon>
          文章管理
        </el-menu-item></router-link
      >
      <router-link to="/main/message">
        <el-menu-item index="3">
          <el-icon></el-icon>
          <span>留言管理</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
