<template>
    <div class="flux_mypage_activity">
      <h2>위시리스트</h2>
      <ul class="list-group">
        <li 
          class="list-group-item d-flex justify-content-between align-items-center" 
          v-for="wish in wishItems" 
          :key="wish.wishId"
        >
          <div class="item-info d-flex align-items-center">
            <img 
              :src="getImageSrc(wish)" 
              alt="상품 이미지" 
              class="product-image"
            >
            <div class="item-details">
              <h4>{{ wish.market.marketName || '상품명 없음' }}</h4>
            </div>
          </div>
          <div class="item-actions">
            <span class="heart-icon" 
                  :class="{'text-danger': isWished(wish.market.marketId)}"
                  @click="toggleWish(wish.market.marketId)"
            >
              ❤️
            </span>
            <button @click="removeWish(wish.wishId)" class="btn btn-danger">삭제</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth';
  import { useWishStore } from '@/stores/wish';
  
  const authStore = useAuthStore();
  const wishStore = useWishStore();
  const wishItems = ref([]);
  
  // Fetch the list of wish items
  const fetchWishItems = async () => {
    try {
      const token = authStore.token;
      const userId = authStore.userId;
  
      if (!token || !userId) {
        console.error('No JWT token or userId found');
        return;
      }
  
      const response = await axios.get('http://localhost:8080/api/v1/wish/user', {
        params: { userId },
        headers: { 'Authorization': `Bearer ${token}` }
      });
  
      if (response.status === 200) {
        wishItems.value = response.data;
      } else {
        console.error('Unexpected response status:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error fetching wish items:', error.message);
    }
  };
  
  // Get image source for wishlist item
  const getImageSrc = (wish) => {
    if (wish.market && wish.market.marketImgs && wish.market.marketImgs.length > 0) {
      return wish.market.marketImgs[0];
    }
    return 'default-image.jpg';
  };
  
  // Remove an item from the wishlist
  const removeWish = async (wishId) => {
    try {
      const token = authStore.token;
  
      if (!token) {
        console.error('No JWT token found');
        return;
      }
  
      const response = await axios.delete(`http://localhost:8080/api/v1/wish/${wishId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
  
      if (response.status === 200) {
        wishItems.value = wishItems.value.filter(wish => wish.wishId !== wishId);
        wishStore.removeWish(wishId); // Sync with the store
      } else {
        console.error('Unexpected response status:', response.status, response.data);
      }
    } catch (error) {
      console.error('Error removing wish item:', error.message);
    }
  };
  
  // Check if a market is wished
  const isWished = (marketId) => {
    return wishStore.isWished(marketId);
  };
  
  // Toggle wish status and sync with the server
  const toggleWish = async (marketId) => {
    const token = authStore.token;
    if (!token) {
      console.error('No JWT token found');
      return;
    }
  
    try {
      if (isWished(marketId)) {
        await axios.delete('http://localhost:8080/api/v1/wish', {
          headers: { 'Authorization': `Bearer ${token}` },
          data: { marketId, userId: authStore.userId }
        });
        wishStore.removeWish(marketId); // Sync with the store
      } else {
        await axios.post('http://localhost:8080/api/v1/wish', {
          marketId,
          userId: authStore.userId
        }, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        wishStore.addWish(marketId); // Sync with the store
      }
    } catch (error) {
      console.error('Error toggling wish status:', error);
    }
  };
  
  // On component mount
  onMounted(() => {
    fetchWishItems();
  });
  </script>
  
  
  <style scoped>
  .item-actions {
    display: flex;
    align-items: center;
  }
  
  .item-actions .btn {
    margin-right: 15px;
  }
  
  .flux_mypage_activity {
    padding: 20px;
    background-color: #ffffff;
    color: #333;
    border-radius: 10px;
    font-family: 'LINESeedKR-Bd';
  }
  
  .flux_mypage_activity h2 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
  }
  
  .list-group {
    max-height: 470px; /* 스크롤을 위해 최대 높이 설정 */
    overflow-y: auto;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  .list-group-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 15px;
    transition: background-color 0.3s;
  }
  
  .list-group-item:hover {
    background-color: #FFE9DD;
  }
  
  .item-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* 반응형으로 변경 */
  }
  
  .product-image {
    width: 100px; /* 이미지 크기 키움 */
    height: 100px;
    border-radius: 5px;
    margin-right: 15px;
    border: 2px solid #FD8E4C;
  }
  
  .item-details h4 {
    margin: 0;
    font-size: 24px; /* 텍스트 크기 키움 */
    color: #FD8E4C;
  }
  
  .heart-icon {
    font-size: 50px;
    color: #FD8E4C;
    padding-right: 30px;
    cursor: pointer;
  }
  
  .text-danger {
    color: red;
  }
  </style>
  