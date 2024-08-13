<template>
  <div v-if="market">
    <div class="artwork-details" v-if="market.marketId">
      <div class="artwork-header">
        <h1>{{ market.marketTitle }}</h1>
        <p class="category">{{ market.marketCategory }}</p>
      </div>
      <div class="artwork-content">
        <div class="images">
          <!-- 마켓 이미지들을 반복하여 출력 -->
          <div v-for="(marketImg, index) in market.marketImgs" :key="index" class="image-container">
            <img :src="marketImg" alt="Artwork Image" />
          </div>
        </div>
        <div class="details">
          <!-- 찜 버튼 -->
          <div class="wish-icon" @click.stop="toggleWish(market.marketId)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              :class="{ 'text-danger': isWished(market.marketId) }" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
          </div>
          <h2>작가명: {{ market.userName }}</h2>
          <p>{{ market.marketContents }}</p>
          <div class="price-info">
            <div class="initialPrice">
              <p>최초가격: {{ formatPrice(market.marketPrice) }} 원</p>
            </div>
            <div class="immediatePurchase">
              <p>바로구매가격: {{ formatPrice(market.marketMaxPrice) }} 원</p>
            </div>
            <div class="bid-button">
              <Bid />
            </div>
          </div>
          <div class="auction-info">
            <p>경매 시작 시간: {{ formatDateTime(market.startDate) }}</p>
            <p>경매 종료 시간: {{ formatDateTime(market.endDate) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center mt-5">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useWishStore } from '@/stores/wish';
import { useAuthStore } from '@/stores/auth'; // 추가된 부분

import Bid from "@/components/bid/bid.vue";

const route = useRoute();
const router = useRouter();
const wishStore = useWishStore();
const authStore = useAuthStore(); // 추가된 부분
const market = ref(null);

// 라우트 매개변수를 기반으로 마켓 상세 정보를 가져오는 함수
const fetchMarket = async () => {
  const marketId = route.params.marketId;
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/market/${marketId}`);
    market.value = {
      ...response.data,
      marketImgs: response.data.marketImgs.map(img => `http://localhost:8080${img}`)
    };
  } catch (error) {
    console.error('Error fetching market:', error);
  }
};

// 마켓이 찜된 상태인지 확인
const isWished = (marketId) => {
  return wishStore.isWished(marketId);
};

// 찜 상태를 토글하고 서버와 동기화
const toggleWish = async (marketId) => {
  const token = authStore.token;
  if (!token) {
    console.error('No JWT token found');
    router.push('/login'); // 토큰이 없으면 로그인 페이지로 이동
    return;
  }

  try {
    if (isWished(marketId)) {
      // 찜 삭제
      await axios.delete('http://localhost:8080/api/v1/wish', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        data: {
          marketId: marketId,
          userId: authStore.userId,
        }
      });
      wishStore.removeWish(marketId);
    } else {
      // 찜 추가
      await axios.post('http://localhost:8080/api/v1/wish', {
        marketId: marketId,
        userId: authStore.userId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      wishStore.addWish(marketId);
    }
  } catch (error) {
    console.error('Error toggling wish status:', error);
  }
};

// 가격 형식을 천 단위로 변환
const formatPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

// 날짜 및 시간을 한국어로 포맷팅
const formatDateTime = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Seoul',
    hour12: false,
  };
  
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', options);
};

// 컴포넌트 마운트 시 마켓 상세 정보를 가져옴
onMounted(() => {
  fetchMarket();
});
</script>

<style scoped>
.artwork-details {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  /* Added to position the wish-icon correctly */
}

.artwork-header {
  text-align: center;
  margin-bottom: 20px;
}

.category {
  font-size: 1.2em;
  color: #666;
}

.artwork-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.images {
  flex: 1;
}

.image-container img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.details {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  /* Ensure the wish-icon is positioned relative to this container */
}

.price-info,
.auction-info {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.wish-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>