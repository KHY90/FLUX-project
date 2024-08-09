<script setup>
import { useMarketStore } from "@/stores/rootstore";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import MarketMain from "@/components/market/flux_market_main.vue";
import MarketDetail from "@/components/market/flux_market_detail.vue";
import MarketPaymentBefore from "@/components/market/flux_market_payment_before.vue";
import MarketPaymentAfter from "@/components/market/flux_market_payment_after.vue";

// Pinia 스토어 사용
const store = useMarketStore();
const route = useRoute(); // vue-router에서 Route 객체 가져오기

// root 상태 값 가져오기 및 설정 함수
const root = computed(() => {
  const marketId = route.params.marketId;
  if (marketId) {
    return `detail/${marketId}`;
  } else {
    return store.root;
  }
});

// 라우터 경로에 따라 root 상태 설정
watch(() => route.params.marketId, (newId) => {
  if (!newId) {
    store.setRoot('main');
  }
});
</script>

<template>
  <div>
    <div v-if="root === 'main'">
      <MarketMain />
    </div>
    <div v-else-if="root.startsWith('detail')">
      <MarketDetail />
    </div>
    <div v-else-if="root === 'paymentbefore'">
      <MarketPaymentBefore />
    </div>
    <div v-else-if="root === 'paymentafter'">
      <MarketPaymentAfter />
    </div>
  </div>
</template>

<style scoped></style>

