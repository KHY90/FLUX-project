<template>
  <div class="bidding">
    <div class="current-bid">
      <span>현재 최고 입찰가 : {{ (currentHighestBid || 0).toLocaleString() }}원 입니다.</span>
    </div>
    <div class="bid-status">
      <span v-if="bidStatus === 'NONE'">입찰 전입니다.</span>
      <span v-else-if="bidStatus === 'ACTIVE'">입찰 중입니다.</span>
      <span v-else-if="bidStatus === 'COMPLETED'">입찰이 완료되었습니다.</span>
      <span v-else-if="bidStatus === 'CANCELLED'">입찰이 취소되었습니다.</span>
    </div>
    <div class="input-and-button">
      <input
        v-model.number="bidAmount"
        type="number"
        placeholder="입찰 금액"
        class="bid-input"
        step="1000"
        min="0"
      />
      <button @click="placeBid" class="bid-button" :disabled="!canBidOrBuy">
        입찰
      </button>
      <button @click="buyNow" class="buy-now-button" :disabled="!canBidOrBuy">
        즉시구매
      </button>
    </div>
    <div class="auto-sum-button">
      <button @click="autoSum(1000)" :disabled="!canBidOrBuy">+천원</button>
      <button @click="autoSum(10000)" :disabled="!canBidOrBuy">+만원</button>
      <button @click="autoSum(50000)" :disabled="!canBidOrBuy">+5만원</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const marketId = route.params.marketId;

const authStore = useAuthStore();
const userId = ref(authStore.userId);

const userRole = authStore.user?.role;
const canBidOrBuy = computed(() => ['USER', 'ADMIN'].includes(userRole));

const bidAmount = ref(0);
const currentHighestBid = ref(0); // 기본값을 0으로 설정
const bidStatus = ref('NONE');
const marketMaxPrice = ref(Infinity);

onMounted(async () => {
  try {
    // 현재 최고 입찰 가격 가져오기
    const bidResponse = await axios.get(`http://localhost:8080/api/v1/bids/market/${marketId}/current-bid`);
    console.log('현재 최고 입찰 응답 데이터:', bidResponse.data);

    currentHighestBid.value = bidResponse.data ?? 0;

    // 마켓 정보에서 최대 가격 가져오기
    const marketResponse = await axios.get(`http://localhost:8080/api/v1/market/${marketId}`);
    console.log('마켓 응답 데이터:', marketResponse.data);

    marketMaxPrice.value = marketResponse.data.marketMaxPrice;

    // 현재 입찰 상태 가져오기
    const statusResponse = await axios.get(`http://localhost:8080/api/v1/bids/market/${marketId}/status`);
    console.log('현재 입찰 상태 응답 데이터:', statusResponse.data);

    bidStatus.value = statusResponse.data ?? 'NONE';
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn('해당 마켓이 판매 완료 상태입니다.');
      bidStatus.value = 'COMPLETED';
      currentHighestBid.value = 0;
    } else {
      console.error('데이터 가져오기 실패:', error);
    }
  }
});

const validateBidAmount = () => {
  if (bidAmount.value > marketMaxPrice.value) {
    bidAmount.value = marketMaxPrice.value;
    console.warn(`입찰 금액이 최대 가격을 초과했습니다. 최대 가격은 ${marketMaxPrice.value.toLocaleString()} 원입니다.`);
  }
};

const placeBid = async () => {
  if (!canBidOrBuy.value) {
    alert('권한이 없습니다.');
    return;
  }

  validateBidAmount();

  const confirmation = confirm(`입찰 금액 : ${bidAmount.value.toLocaleString()} 원\n정말 입찰하시겠습니까?`);
  if (!confirmation) return;

  const bidTime = new Date().toISOString();

  try {
    const response = await axios.post('http://localhost:8080/api/v1/bids/register', {
      marketId: marketId,
      userId: userId.value,
      bidAmount: bidAmount.value,
      bidTime: bidTime
    });
    console.log('입찰 성공:', response.data);
    currentHighestBid.value = bidAmount.value;
    alert('입찰 되었습니다.');
  } catch (error) {
    console.error('입찰 실패:', error.response ? error.response.data : error.message);
    alert(`입찰이 실패하였습니다. ${error.response ? error.response.data : error.message}`);
  }
};

const buyNow = async () => {
  if (!canBidOrBuy.value) {
    alert('권한이 없습니다.');
    return;
  }

  const confirmation = confirm('정말 즉시 구매하시겠습니까?');
  if (!confirmation) return;

  try {
    const response = await axios.post('http://localhost:8080/api/v1/bids/buy-now', {
      marketId: marketId,
      userId: userId.value
    });
    console.log('즉시구매 완료');
    currentHighestBid.value = marketMaxPrice.value; // 즉시 구매가 완료되면 최고 입찰가를 최대 가격으로 설정
    bidStatus.value = 'COMPLETED'; // 입찰 상태를 완료로 변경
    alert('즉시구매가 완료되었습니다.');
  } catch (error) {
    console.error('즉시 구매 실패:', error);
    alert(`즉시구매가 실패하였습니다. ${error.response ? error.response.data : error.message}`);
  }
};

const autoSum = (amount) => {
  if (!canBidOrBuy.value) {
    alert('권한이 없습니다.');
    return;
  }

  bidAmount.value = Math.min(Number(bidAmount.value) + amount, marketMaxPrice.value);
  validateBidAmount();
};
</script>

<style scoped>
.bidding {
  display: flex;
  flex-direction: column;
}

.input-and-button {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  align-items: center;
}

.current-bid,
.bid-status {
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.bid-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.bid-button,
.buy-now-button {
  background-color: #FEBE98;
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100px;
}

.bid-button:hover,
.buy-now-button:hover {
  background-color: #FD8E4C;
}

.auto-sum-button {
  display: flex;
  gap: 10px; /* 버튼 사이 여백 */
  margin: 20px 0; /* 위아래 여백 */
}

.auto-sum-button button {
  background-color: #FEBE98;
  border: none;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100px;
}

.auto-sum-button button:hover {
  background-color: #FD8E4C;
}
</style>
