import { createRouter, createWebHistory } from "vue-router";

const Main = () => import("../views/main.vue");
const Market = () => import("../views/market.vue");
const MarketMain = () => import("../components/market/flux_market_main.vue");
const MarketDetail = () =>
  import("../components/market/flux_market_detail.vue");
const MarketPaymentBefore = () =>
  import("../components/market/flux_market_payment_before.vue");
const MarketPaymentAfter = () =>
  import("../components/market/flux_market_payment_after.vue");
const Article = () => import("../views/article.vue");
const ArticleMain = () => import("../components/article/flux_article_main.vue");
const ArticleDetail = () =>
  import("../components/article/flux_article_detaile.vue");
const Ranking = () => import("../views/ranking.vue");
const Mypage = () => import("../views/mypage.vue");
const MypageWishList = () =>
  import("../components/mypage/flux_mypage_wish.vue");
const MypageActivity = () =>
  import("../components/mypage/flux_mypage_activity.vue");
const MypageWithdrawal = () =>
  import("../components/mypage/flux_mypage_withdrawal.vue");

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
