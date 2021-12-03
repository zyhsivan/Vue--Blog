<template>
  <el-empty
    description="功能维护,忙完再做。"
    :image-size="600"
    image="http://qqpublic.qpic.cn/qq_public/0/0-2473265440-18BCBF628B8C95A18CEB8C74C9682938/0?fmt=jpg&size=164&h=506&w=900&ppv=1.jpg"
  >
  </el-empty>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { ElMessageBox } from "element-plus";

export default defineComponent({
  setup() {
    onMounted(() => ElMessageBox.alert("时间和精力有限,等忙完再做。"));

    return {};
  },
});
</script>

<style scoped></style>
