// stores/rootstore.js
import { defineStore } from "pinia";

// 네비게이션 경로 설정관련 로직
export const useMarketStore = defineStore("useMarketStore", {
  state: () => ({
    root: "main", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useArticleStore = defineStore("useArticleStore", {
  state: () => ({
    root: "main", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useMypageStore = defineStore("useMypageStore", {
  state: () => ({
    root: "wishlist", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});
