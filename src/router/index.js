import { createRouter, createWebHistory } from "vue-router";

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
const Mypage = () => import("../views/mypage.vue");
const MypageWishList = () => import("../components/mypage/flux_mypage_wish.vue");
const MypageActivity = () => import("../components/mypage/flux_mypage_activity.vue");
const MypageWithdrawal = () => import("../components/mypage/flux_mypage_withdrawal.vue");
const Login = () => import("../components/login/flux_login.vue")
const Manager = () => import("../views/manager_main.vue");
const ManagerMain = () => import("../components/manager/flux_manager_main.vue");
const ManagerArticleMain = () => import("../views/manager_article.vue");
const ManagerArticleUserList = () => import("../components/manager/flux_manager_article_userlist.vue");
const ManagerArticlePost = () => import("../components/manager/flux_manager_article_post.vue");
const ManagerArticleModify = () => import("../components/manager/flux_manager_article_modify.vue");
const ManagerArticleView = () => import("../components/manager/flux_manager_article_managerview.vue");
const ManagerNoticeSection = () => import("../views/manager_notice.vue")
const ManagerNoticeList = () => import("../components/manager/flux_manager_notice_list.vue");
const ManagerNoticeEdit = () => import("../components/manager/flux_manager_notice_edit.vue");
const ManagerNoticeModify = () => import("../components/manager/flux_manager_notice_modify.vue");



const routes = [
  { path: "/", component: Main },
  {
    path: "/market",
    component: Market,
    redirect: "/market/main",
    children: [
      { path: "main", component: MarketMain },
      { path: "detail", component: MarketDetail },
      { path: "paymentbefore", component: MarketPaymentBefore },
      { path: "paymentafter", component: MarketPaymentAfter },
    ],
  },
  {
    path: "/article",
    component: Article,
    redirect: "/article/main",
    children: [
      { path: "main", component: ArticleMain },
      { path: "detail", component: ArticleDetail },
    ],
  },
  { path: "/ranking", component: Ranking },
  {
    path: "/mypage",
    component: Mypage,
    redirect: "/mypage/wishlist",
    children: [
      { path: "wishlist", component: MypageWishList },
      { path: "activity", component: MypageActivity },
      { path: "withdrawal", component: MypageWithdrawal },
    ],
  },
  { path:"/login", component: Login},
  { path: "/manager", component: Manager },
  {
    path: "/manager/article",
    component: ManagerArticleMain,
    redirect: "/manager/article/articlelist",
    children: [
      { path: "articlelist", component: ManagerArticleUserList },
      { path: "articleview", component: ManagerArticleView },
      { path: "articlemodify", component: ManagerArticleModify },
      { path: "articlepost", component: ManagerArticlePost },
    ] ,
  },
  {
    path: "/manager/notice",
    component: ManagerNoticeSection,
    redirect: "/manager/notice/noticelist",
    children: [
      { path: "noticelist", component: ManagerNoticeList },
      { path: "noticeedit", component: ManagerNoticeEdit },
      { path: "noticemodify", component: ManagerNoticeModify }
    ] ,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
