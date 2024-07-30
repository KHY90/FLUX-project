import { defineStore } from 'pinia';

export const useBannerStore = defineStore('bannerStore', {
  state: () => ({
    isBannerVisible: true, // 초기값 설정
    lastClosedTime: null,  // 배너를 마지막으로 닫은 시간
    notifications: [] // 공지사항 데이터를 저장할 배열
  }),
  actions: {
    toggleBanner() {
      this.isBannerVisible = !this.isBannerVisible;
      if (!this.isBannerVisible) {
        this.lastClosedTime = Date.now();
      }
    },
    resetBanner() {
      const oneHour = 60 * 60 * 1000;
      if (this.lastClosedTime && (Date.now() - this.lastClosedTime) > oneHour) {
        this.isBannerVisible = true;
      }
    },
    setNotifications(notifications) {
      this.notifications = notifications;
    }
  },
  persist: {
    key: 'bannerStore',
    storage: localStorage,
    paths: ['isBannerVisible', 'lastClosedTime', 'notifications'],
  },
});
