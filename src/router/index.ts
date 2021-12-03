import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import localCache from "@/utils/local_cache";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/pages/main/main.vue"),
    children: [
      {
        path: "",
        redirect: "/main/article",
      },
      {
        path: "article",
        component: () =>
          import("@/pages/main/cpns/add_article/add_article.vue"),
      },
      {
        path: "articleList",
        component: () =>
          import("@/pages/main/cpns/article_list/article_list.vue"),
      },
      {
        path: "message",
        component: () =>
          import("@/pages/main/cpns/add_message/add_message.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
