<template>
  <div class="top">
    <div class="top-info">博客工作台</div>
    <div class="top-table">
      <el-row>
        <el-col :span="12">
          <el-input v-model="input" placeholder="博客标题"
        /></el-col>
        <el-col :span="4">
          <el-select v-model="select" placeholder="请选择文章类型">
            <el-option
              v-for="item in articleType"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option> </el-select
        ></el-col>
        <el-col :span="8">
          <el-button>暂存文章</el-button>
          <el-button type="primary" @click="saveArticle">发布文章</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="main">
    <el-row>
      <el-col :span="8">
        <el-input
          class="m-text"
          v-model="textareaHtml"
          :rows="35"
          type="textarea"
          placeholder="文章内容"
          @input="changeContent"
      /></el-col>
      <el-col :span="8"
        ><div class="show-html" v-html="markdownContent"></div
      ></el-col>
      <el-col :span="8">
        <el-input
          v-model="textareaIntro"
          :rows="6"
          type="textarea"
          placeholder="文章简介"
          @input="changeIntroduce"
        />
        <div class="introduce-html" v-html="introducehtml"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// @ts-ignore
import marked from "marked";
import { ElMessage } from "element-plus";
import { articleType } from "@/common/article_type";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    //配置marked
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
    });
    let isNew = ref(true);
    let input = ref("");
    let select = ref("");
    let textareaHtml = ref("");
    let textareaIntro = ref("");
    let markdownContent = ref("预览内容");
    let introducehtml = ref("文章简介");

    //处理文章内容
    const changeContent = () => {
      let html = marked(textareaHtml.value);
      markdownContent.value = html;
    };
    //处理文章简介
    const changeIntroduce = () => {
      let html = marked(textareaIntro.value);
      introducehtml.value = html;
    };
    //发表文章
    const saveArticle = () => {
      //验证能否发布
      if (!select.value) {
        ElMessage.error("必须选择文章类别");
        return false;
      } else if (!input.value) {
        ElMessage.error("文章名称不能为空");
        return false;
      } else if (!textareaHtml.value) {
        ElMessage.error("文章内容不能为空");
        return false;
      } else if (!textareaIntro.value) {
        ElMessage.error("简介不能为空");
        return false;
      }

      const dataProps = {
        type_id: select.value,
        title: input.value,
        article_content: textareaHtml.value,
        introduce: textareaIntro.value,
        addTime: Date.now(),
      };
      store.dispatch("article/addArticle", dataProps);
    };
    //更新时获取一篇文章信息
    const getArticleById = async (id: number) => {
      await store.dispatch("article/fetchOneArticle", +id);
      input.value = store.state.article.oneArticle.title;
      select.value = store.state.article.oneArticle.type_id;
      textareaHtml.value = store.state.article.oneArticle.article_content;
      textareaIntro.value = store.state.article.oneArticle.introduce;
      markdownContent.value = marked(textareaHtml.value);
      introducehtml.value = marked(textareaIntro.value);
    };

    onMounted(() => {
      const tempId = route.query.id;
      if (tempId) {
        getArticleById(+tempId);
      }
    });

    return {
      isNew,
      articleType,
      input,
      select,
      textareaHtml,
      textareaIntro,
      markdownContent,
      introducehtml,
      changeContent,
      changeIntroduce,
      saveArticle,
      getArticleById,
    };
  },
});
</script>

<style scoped lang="less">
.top {
  .top-info {
    margin-top: 25px;
    text-align: start;
    line-height: 25px;
    height: 25px;
  }
}

.main {
  margin-top: 20px;
  height: 745px;

  .m-text {
    height: 740px;
  }
  .show-html {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    height: 715px;
    background-color: #f0f0f0;
    overflow: auto;
    text-align: start;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .introduce-html {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: #f0f0f0;
  }
}
</style>
