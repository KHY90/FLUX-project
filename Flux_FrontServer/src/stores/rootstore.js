import { defineStore } from "pinia";
import axios from "axios";

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

export const useSalesStore = defineStore("useSalesStore", {
  state: () => ({
    root: "registry", // 초기값 설정
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

export const useManager = defineStore("useManager", {
  state: () => ({
    root: "main",
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useManagerArticle = defineStore("useManagerArticle", {
  state: () => ({
    root: "articlelist", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useManagerUser = defineStore("useManagerUser", {
  state: () => ({
    root: "userlist", // 초기값 설정
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});
export const useManagerNotice = defineStore("useManagerNotice", {
  state: () => ({
    root: "noticelist",
  }),
  actions: {
    setRoot(option) {
      this.root = option;
    },
  },
});

export const useNotiStore = defineStore("notiStore", {
  state: () => ({
    notifications: [],
  }),
  actions: {
    setNotifications(notifications) {
      this.notifications = notifications;
    },
    addNotification(notification) {
      this.notifications.push(notification);
    },
  },
});

export const useIdStore = defineStore("idStore", {
  state: () => ({
    id: null, // 전역적으로 관리할 id
  }),
  actions: {
    setId(newId) {
      this.id = newId;
    },
  },
});
