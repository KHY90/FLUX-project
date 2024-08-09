<script setup>
import { useManagerNotice } from "@/stores/rootstore";
import { computed, watch } from "vue";
import { useRoute } from 'vue-router';
import ManagerNoticePost from "@/components/manager/flux_manager_notice_post.vue";
import ManagerNoticeList from "@/components/manager/flux_manager_notice_list.vue";
import ManagerNoticeModify from "@/components/manager/flux_manager_notice_modify.vue";


// Pinia 스토어 사용
const store = useManagerNotice();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수

// 라우트 변경 시 상태 변경
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/manager/notice/noticelist') {
      setRoot('noticelist');
    } else if (newPath === '/manager/notice/noticepost') {
      setRoot('noticepost');
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
      <ManagerNoticeList />
    </div>
    <div v-if="root === 'noticepost'">
      <ManagerNoticePost />
    </div>
    <div v-if="root === 'noticemodify'">
      <ManagerNoticeModify/>
    </div>
  </div>
</template>

<style scoped></style>
