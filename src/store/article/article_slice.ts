import {
  getArticle,
  getOneArticle,
  postArticle,
  removeArticle,
} from "@/service/article/article";

const loginSlice = {
  namespaced: true,
  state: {
    articleBase: [],
    oneArticle: {},
  },
  mutations: {
    changeArticle(state: { articleBase: any[] }, data: any[]) {
      state.articleBase = data;
    },
    changeOneArticle(state: { oneArticle: any[] }, data: any[]) {
      state.oneArticle = data;
    },
  },
  actions: {
    async addArticle(_ctx: any, dataProps: any) {
      await postArticle(dataProps);
      alert("发送成功 ");
    },
    async fetchArticle(ctx: any) {
      const result: any = await getArticle();
      ctx.commit("changeArticle", result.data);
    },
    async deletArticle(ctx: any, id: number) {
      const result: any = await removeArticle(id);

      // ctx.commit("changeArticle", result.data);
    },
    async fetchOneArticle(ctx: any, id: number) {
      const result: any = await getOneArticle(id);
      ctx.commit("changeOneArticle", result.data[0]);
    },
  },
};

export default loginSlice;
