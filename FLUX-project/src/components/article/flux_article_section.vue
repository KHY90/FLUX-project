<script setup>
import { useArticleStore } from "@/stores/rootstore";
import { computed } from "vue";
import ArticleMain from "@/components/article/flux_article_main.vue";
import ArticleDetail from "@/components/article/flux_article_detaile.vue";

// Pinia 스토어 사용
const store = useArticleStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>

<template>
  <div>
    <div v-if="root === 'main'">
      <ArticleMain />
    </div>
    <div v-if="root === 'detail'">
      <ArticleDetail />
    </div>
  </div>
</template>

<style scoped></style>
