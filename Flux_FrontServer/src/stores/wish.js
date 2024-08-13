// stores/wish.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './auth';

export const useWishStore = defineStore('wish', {
  state: () => ({
    wishedMarkets: new Set(),
  }),
  actions: {
    async fetchWishedMarkets() {
      const authStore = useAuthStore();
      try {
        const response = await axios.get('http://localhost:8080/api/v1/wish/user', {
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
          },
        });
        if (response.status === 200 && Array.isArray(response.data)) {
          this.wishedMarkets = new Set(response.data.map(item => item.marketId));
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching wished markets:', error);
      }
    },
    isWished(marketId) {
      return this.wishedMarkets.has(marketId);
    },
    addWish(marketId) {
      this.wishedMarkets.add(marketId);
    },
    removeWish(marketId) {
      this.wishedMarkets.delete(marketId);
    },
    async toggleWish(marketId) {
      const authStore = useAuthStore();
      const token = authStore.token;
      if (!token) {
        console.error('No JWT token found');
        return;
      }

      try {
        if (this.isWished(marketId)) {
          await axios.delete('http://localhost:8080/api/v1/wish', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
            data: {
              marketId: marketId,
              userId: authStore.userId,
            }
          });
          this.removeWish(marketId);
        } else {
          await axios.post('http://localhost:8080/api/v1/wish', {
            marketId: marketId,
            userId: authStore.userId,
          }, {
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          });
          this.addWish(marketId);
        }
        // Refetch wished markets to update state
        await this.fetchWishedMarkets();
      } catch (error) {
        console.error('Error toggling wish status:', error);
      }
    },
  },
});
