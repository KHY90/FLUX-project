<script setup>
import { useArticleStore } from "@/stores/rootstore";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import ArticleMain from "@/components/article/flux_article_main.vue";
import ArticleDetail from "@/components/article/flux_article_detaile.vue";

const store = useArticleStore();
const route = useRoute();

const root = computed(() => store.root);

const setRoot = store.setRoot;

onMounted(() => {
  if (route.params.id) {
    setRoot(`detail/${route.params.id}`);
  } else {
    setRoot("main");
  }
});

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      setRoot(`detail/${newId}`);
    } else {
      setRoot("main");
    }
  }
);
</script>

<template>
  <div>
    <div v-if="root === 'main'">
      <ArticleMain />
    </div>
    <div v-if="root.includes('detail')">
      <ArticleDetail />
    </div>
  </div>
</template>
