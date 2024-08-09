import { createRouter, createWebHistory } from "vue-router";
import OAuth2RedirectHandler from "../components/Oauth2RedirectHandler.vue";
import {
  useMarketStore,
  useArticleStore,
  useSalesStore,
  useMypageStore,
  useManager,
  useManagerUser,
  useManagerNotice,
  useNotiStore,
} from "@/stores/rootstore.js";

import { useAuthStore } from "@/stores/auth";

const Main = () => import("../views/main.vue");
const Market = () => import("../views/market.vue");
const MarketMain = () => import("../components/market/flux_market_main.vue");
const MarketDetail = () => import("../components/market/flux_market_detail.vue");
const MarketPaymentBefore = () => import("../components/market/flux_market_payment_before.vue");
const MarketPaymentAfter = () => import("../components/market/flux_market_payment_after.vue");
const Article = () => import("../views/article.vue");
const ArticleMain = () => import("../components/article/flux_article_main.vue");
const ArticleDetail = () => import("../components/article/flux_article_detaile.vue");
const Ranking = () => import("../views/ranking.vue");
const Sales = () => import("../views/sales.vue");
const Registry = () => import("../components/market/flux_market_registration.vue");
const RegistryInfo = () => import("../components/market/flux_market_registration_info.vue");
const RegistryEdit = () => import("../components/market/flux_market_registration_edit.vue");
const Mypage = () => import("../views/mypage.vue");
const MypageWishList = () => import("../components/mypage/flux_mypage_wish.vue");
const MypageActivity = () => import("../components/mypage/flux_mypage_activity.vue");
const MypageWithdrawal = () => import("../components/mypage/flux_mypage_withdrawal.vue");
const Login = () => import("../components/login/flux_login.vue");
const UseNotiStore = () => import("../views/noti.vue");
const NoticeMain = () => import("../components/noti/flux_noti_main.vue");
const NoticeDetail = () => import("../components/noti/flux_noti_detail.vue");
const Manager = () => import("../views/manager_main.vue");
const ManagerMain = () => import("../components/manager/flux_manager_main.vue");
const ManagerArticleMain = () => import("../views/manager_article.vue");
const ManagerArticleUserList = () => import("../components/manager/flux_manager_article_userlist.vue");
const ManagerArticlePost = () => import("../components/manager/flux_manager_article_post.vue");
const ManagerArticleModify = () => import("../components/manager/flux_manager_article_modify.vue");
const ManagerArticleView = () => import("../components/manager/flux_manager_article_managerview.vue");
const ManagerUserMain = () => import("../views/manager_user.vue");
const ManagerUserList = () => import("../components/manager/flux_manager_userlist.vue");
const ManagerAdminList = () => import("../components/manager/flux_manager_adminlist.vue");
const UseManagerNotice = () => import("../views/manager_notice.vue");
const ManagerNoticeList = () => import("../components/manager/flux_manager_notice_list.vue");
const ManagerNoticePost = () => import("../components/manager/flux_manager_notice_post.vue");
const ManagerNoticeModify = () => import("../components/manager/flux_manager_notice_modify.vue");

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/market",
    component: Market,
    redirect: "/market/main",
    children: [
      {
        path: "main",
        component: MarketMain,
      },
      {
        path: "detail/:marketId",
        name: 'MarketDetail',
        component: MarketDetail,
      },
      {
        path: "paymentbefore",
        component: MarketPaymentBefore,
      },
      {
        path: "paymentafter",
        component: MarketPaymentAfter,
      },
    ],
  },
  {
    path: "/article",
    component: Article,
    redirect: "/article/main",
    children: [
      {
        path: "main",
        component: ArticleMain,
        name: 'ArticleMain'
      },
     {
        path: "detail/:id",
        component: ArticleDetail,
        name: 'ArticleDetail'
      },
    ],
  },
  {
    path: "/ranking",
    component: Ranking,
  },
  {
    path: "/sales",
    component: Sales,
    children: [
      {
        path: "registry",
        component: Registry,
      },
      {
        path: "registryinfo",
        component: RegistryInfo,
      },
      {
        path: "registryedit",
        component: RegistryEdit,
      },
    ],
  },
  {
    path: "/mypage",
    component: Mypage,
    children: [
      {
        path: "wishlist",
        component: MypageWishList,
      },
      {
        path: "activity",
        component: MypageActivity,
      },
      {
        path: "withdrawal",
        component: MypageWithdrawal,
      },
    ],
  },
  { path: "/login", component: Login },
  { path: "/login/oauth2/code/naver", component: OAuth2RedirectHandler },
  { path: "/login/oauth2/code/google", component: OAuth2RedirectHandler },
  {
    path: "/notice",
    component: UseNotiStore,
    children: [
      {
        path: "",
        component: NoticeMain,
      },
      {
        path: ":id",
        name: "NoticeDetail",
        component: NoticeDetail,
        props: true,
      },
    ],
  },
  {
    path: "/manager",
    component: Manager,
  },
  {
    path: "/manager/article",
    component: ManagerArticleMain,
    children: [
      {
        path: "articlelist",
        component: ManagerArticleUserList,
      },
      {
        path: "articleview",
        component: ManagerArticleView,
        name: "ArticleView",
      },
      {
        path: "articlemodify",
        component: ManagerArticleModify,
      },
      {
        path: "articlepost",
        component: ManagerArticlePost,
      },
    ],
  },
  {
    path: "/manager/admin",
    component: ManagerUserMain,
    children: [
      {
        path: "userlist",
        component: ManagerUserList,
      },
      {
        path: "adminlist",
        component: ManagerAdminList,
      },
    ],
  },
  {
    path: "/manager/notice",
    component: UseManagerNotice,
    children: [
      {
        path: "noticelist",
        component: ManagerNoticeList,
      },
      {
        path: "noticepost",
        component: ManagerNoticePost,
      },
      {
        path: "noticemodify",
        component: ManagerNoticeModify,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

function resetStores() {
  const marketStore = useMarketStore();
  const articleStore = useArticleStore();
  const salesStore = useSalesStore();
  const mypageStore = useMypageStore();
  const managerStore = useManager();
  const managerUser = useManagerUser();
  const managerNotice = useManagerNotice();
  const notiStore = useNotiStore();

  marketStore.setRoot("main");
  articleStore.setRoot("main");
  salesStore.setRoot("registry");
  mypageStore.setRoot("wishlist");
  managerStore.setRoot("main");
  managerUser.setRoot("userlist");
  managerNotice.setRoot("noticelist");
  notiStore.setNotifications("main");
}

router.beforeEach((to, from, next) => {
  const currentUrl = new URL(window.location.href);
  const googleCode = currentUrl.searchParams.get("code");
  const state = currentUrl.searchParams.get("state");

  if (
    (googleCode && to.path === "/login/oauth2/code/google") ||
    (state && to.path === "/login/oauth2/code/naver")
  ) {
    next();
  } else {
    if (to.path === "/login" || to.path === "/") {
      resetStores();
    }
    next();
  }
});

export default router;
