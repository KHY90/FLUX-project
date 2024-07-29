<script setup>
import { useNotiStore } from "@/stores/rootstore";
import { computed } from "vue";
import Header from "@/components/header/flux_component_header.vue";
import Footer from "@/components/footer/flux_component_footer.vue";

// Pinia 스토어 사용
const store = useNotiStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
