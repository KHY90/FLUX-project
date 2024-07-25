<script setup>
import { useMypageStore } from "@/stores/rootstore";
import { computed } from "vue";
import MypageWish from "@/components/mypage/flux_mypage_wish.vue";
import MypageActivity from "@/components/mypage/flux_mypage_activity.vue";
import MypageWithdrawal from "@/components/mypage/flux_mypage_withdrawal.vue";

// Pinia 스토어 사용
const store = useMypageStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>

<template>
  <div>
    <div v-if="root === 'wishlist'">
      <MypageWish />
    </div>
    <div v-if="root === 'activity'">
      <MypageActivity />
    </div>
    <div v-if="root === 'withdrawal'">
      <MypageWithdrawal />
    </div>
  </div>
</template>

<style scoped></style>
