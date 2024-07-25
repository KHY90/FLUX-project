<script setup>
import { useManagerArticle } from "@/stores/rootstore";
import { computed, watch } from "vue";
import { useRoute } from 'vue-router';
import NoticeList from "@/components/manager/flux_manager_notice_list.vue";
import NoticeEdit from "@/components/manager/flux_manager_notice_edit.vue";
import NoticeModify from "@/components/manager/flux_manager_notice_modify.vue";

// Pinia 스토어 사용
const store = useManagerArticle();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수

// 라우트 변경 시 상태 변경
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/manager/notice/noticelist') {
      setRoot('noticelist');
    } else if (newPath === '/manager/notice/noticeedit') {
      setRoot('noticeedit');
    } else if (newPath === '/manager/notice/noticemodify') {
      setRoot('noticemodify');
    }
  },
  { immediate: true } // 컴포넌트가 처음 로드될 때도 상태를 설정하도록 함
);
</script>

<template>
  <div>
    <div v-if="root === 'noticelist'">
      <NoticeList />
    </div>
    <div v-if="root === 'noticeedit'">
      <NoticeEdit />
    </div>
    <div v-if="root === 'noticemodify'">
      <NoticeModify />
    </div>
  </div>
</template>

<style scoped></style>
