<script setup>
import { useManagerArticle } from "@/stores/rootstore";
import { computed, watch } from "vue";
import { useRoute } from 'vue-router';
import ArticleUserList from "@/components/manager/flux_manager_article_userlist.vue";
import ArticleView from "@/components/manager/flux_manager_article_managerview.vue";
import ArticleModify from "@/components/manager/flux_manager_article_modify.vue";
import ArticlePost from "@/components/manager/flux_manager_article_post.vue";

// Pinia 스토어 사용
const store = useManagerArticle();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수

// 라우트 변경 시 상태 변경
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/manager/article/articlelist') {
      setRoot('articlelist');
    } else if (newPath === '/manager/article/articlepost') {
      setRoot('articlepost');
    } else if (newPath === '/manager/article/articlemodify') {
      setRoot('articlemodify');
    } else if (newPath === '/manager/article/articleview') {
      setRoot('articleview');
    }
  },
  { immediate: true } // 컴포넌트가 처음 로드될 때도 상태를 설정하도록 함
);
</script>

<template>
  <div>
    <div v-if="root === 'articlelist'">
      <ArticleUserList />
    </div>
    <div v-if="root === 'articleview'">
      <ArticleView />
    </div>
    <div v-if="root === 'articlemodify'">
      <ArticleModify />
    </div>
    <div v-if="root === 'articlepost'">
      <ArticlePost />
    </div>
  </div>
</template>

<style scoped></style>
