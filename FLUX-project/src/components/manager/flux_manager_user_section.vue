<script setup>
import { useManagerUser } from "@/stores/rootstore";
import { computed, watch } from "vue";
import { useRoute } from 'vue-router';
import UserList from "@/components/manager/flux_manager_userlist.vue";
import AdminList from "@/components/manager/flux_manager_adminlist.vue";

// Pinia 스토어 사용
const store = useManagerUser();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수

// 라우트 변경 시 상태 변경
const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/manager/admin/userlist') {
      setRoot('userlist');
    } else if (newPath === '/manager/admin/adminlist') {
      setRoot('adminlist');
    }
  },
  { immediate: true } // 컴포넌트가 처음 로드될 때도 상태를 설정하도록 함
);
</script>

<template>
  <div>
    <div v-if="root === 'userlist'">
      <UserList/>
    </div>
    <div v-if="root === 'adminlist'">
      <AdminList />
    </div>
  </div>
</template>

<style scoped></style>
