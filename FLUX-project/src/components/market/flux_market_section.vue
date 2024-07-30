<script setup>
import { useMarketStore } from "@/stores/rootstore";
import { computed } from "vue";
import MarketMain from "@/components/market/flux_market_main.vue";
import MarketDetail from "@/components/market/flux_market_detail.vue";
import MarketPaymentBefore from "@/components/market/flux_market_payment_before.vue";
import MarketPaymentAfter from "@/components/market/flux_market_payment_after.vue";

// Pinia 스토어 사용
const store = useMarketStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>

<template>
  <div>
    <div v-if="root === 'main'">
      <MarketMain />
    </div>
    <div v-if="root === 'detail'">
      <MarketDetail />
    </div>
    <div v-if="root === 'paymentbefore'">
      <MarketPaymentBefore />
    </div>
    <div v-if="root === 'paymentafter'">
      <MarketPaymentAfter />
    </div>
  </div>
</template>

<style scoped></style>
