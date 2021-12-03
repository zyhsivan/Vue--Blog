import router from "@/router";
import { postLogin } from "@/service/login/login";
import localCache from "@/utils/local_cache";
import { ElMessage } from "element-plus";
interface A {
  username: string;
  password: string;
}

const loginSlice = {
  namespaced: true,
  state() {
    return { token: "" };
  },

  mutations: {
    changeToken(state: { token: string }, token: string) {
      state.token = token;
    },
  },

  actions: {
    async loginUser(ctx: any, account: A) {
      const { username, password } = account;
      try {
        const res: any = await postLogin(username, password);
        ctx.commit("changeToken", res.data.token);
        localCache.setCache("token", res.data.token);
        alert("登录成功，1小时内自动登录");
        router.push("/main");
      } catch (error) {
        ElMessage.error("输入错误,重新输入");
      }
    },
  },
};

export default loginSlice;
