import { createStore } from "vuex";
import loginSlice from "./login/login_slice";
import articleSlice from "./article/article_slice";
const store = createStore({
  modules: {
    login: loginSlice,
    article: articleSlice,
  },
});

export default store;
