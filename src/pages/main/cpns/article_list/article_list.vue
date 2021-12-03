<template>
  <el-table class="e-table" :data="tableData" height="450" style="width: 100%">
    <el-table-column prop="title" label="标题" width="250" />
    <el-table-column prop="type_id" label="类别" width="150" />
    <el-table-column prop="addTime" label="发布时间" width="150" />
    <el-table-column prop="view_count" label="浏览量" width="150" />
    <el-table-column label="操作" width="250">
      <template #default="scope">
        <el-button type="primary" @click="updateRow(scope.$index, tableData)">
          修改</el-button
        >
        <el-button
          type="danger"
          @click.prevent="deleteRow(scope.$index, tableData)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { ElMessageBox } from "element-plus";
import { timestampToTime } from "@/utils/timestamp_to_time";
import router from "@/router";
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    let tableData = ref([]);

    onMounted(async () => {
      await store.dispatch("article/fetchArticle");
      const dataBase = store.state.article.articleBase;
      dataBase.map((item: any) => {
        switch (item.type_id) {
          case 1:
            item.type_id = "HTML + CSS";
            break;
          case 2:
            item.type_id = "JavaScript";
            break;
          case 3:
            item.type_id = "React";
            break;
          case 4:
            item.type_id = "Vue";
            break;
          case 5:
            item.type_id = "Node";
            break;
          case 6:
            item.type_id = "Typescript";
            break;
          default:
            item.type_id = " Arithmetic";
            break;
        }
        item.addTime = timestampToTime(+item.addTime);
      });
      tableData.value = store.state.article.articleBase;
    });
    const updateRow = (index: number, rows: any[]) => {
      ElMessageBox.alert("注意：修改之后的文章，添加至列表末尾");
      router.push(`/main/article?id=${rows[index].id}`);
    };
    const deleteRow = async (index: number, rows: any[]) => {
      await ElMessageBox.confirm("确认要删除吗?");
      await store.dispatch("article/deletArticle", rows[index].id);
      ElMessageBox.alert("删除成功");
    };

    return {
      tableData,
      updateRow,
      deleteRow,
    };
  },
});
</script>
<style lang="less" scoped>
.e-table {
  margin-top: 20px;
}
</style>
