<template>
  <div class="login-panel">
    <h1 class="title">博客后台管理</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
    <div>账号:zxc,密码：123</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";

export default defineComponent({
  components: {
    LoginAccount,
  },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>();

    const handleLoginClick = () => {
      accountRef.value?.loginAction();
    };

    return {
      handleLoginClick,
      accountRef,
    };
  },
});
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
