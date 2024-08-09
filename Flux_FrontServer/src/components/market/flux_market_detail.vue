<template>
  <div v-if="market">
    <div class="artwork-details" v-if="market.marketId">
      <div class="artwork-header">
        <h1>{{ market.marketTitle }}</h1>
        <p class="category">{{ market.marketCategory }}</p>
      </div>
      <div class="artwork-content">
        <div class="images">
          <div v-for="(marketImg, index) in market.marketImgs" :key="index" class="image-container">
            <img :src="marketImg" alt="Artwork Image" />
          </div>
        </div>
        <div class="details">
          <h2>작가명: {{ market.userName }}</h2>
          <p>{{ market.marketContents }}</p>
          <div class="price-info">
            <div class="initialPrice">
            <p>최초가격: {{ formatPrice(market.marketPrice) }} 원</p>
            <button>입찰하기</button>
          </div>
          <div class="immediatePurchase">
            <p>바로구매가격: {{ formatPrice(market.marketMaxPrice) }} 원</p>
            <button>즉시구매하기</button>
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
  <div v-else class="text-center mt-5">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const marketId = ref(route.params.marketId);
const market = ref(null);

const fetchMarketDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/market/${marketId.value}`);
    market.value = response.data;
  } catch (error) {
    console.error('Error fetching market details:', error);
  }
};

onMounted(fetchMarketDetails);

function formatPrice(price) {
  return price.toLocaleString();
}

function formatDateTime(dateTime) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateTime).toLocaleDateString('ko-KR', options);
}
</script>

<style scoped>
.artwork-details {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.details {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
} 

.price-info,
.auction-info {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
</style>
