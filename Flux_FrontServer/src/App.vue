<script setup>
import { useVisitorStore } from '@/stores/visitor';
import { resetVisitCountAtMidnight } from '@/stores/resetVisitCount';

const visitorStore = useVisitorStore();

// 페이지 로드 시 한 번만 방문자 수를 증가시키도록 수정
visitorStore.trackVisitor();

// 00시에 방문자 기록 초기화 함수 호출
resetVisitCountAtMidnight();
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
/* 추가 스타일이 필요하다면 여기에 작성 */
</style>
