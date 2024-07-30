<script setup>
import { useSalesStore } from "@/stores/rootstore";
import { computed } from "vue";

import Registry from "@/components/market/flux_market_registration.vue"
import RegistryInfo from "@/components/market/flux_market_registration_info.vue"
import RegistryEdit from "@/components/market/flux_market_registration_edit.vue"

const store = useSalesStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>

<template>
  <div>
    <div v-if="root === 'registry'">
      <Registry />
    </div>
    <div v-if="root === 'registryinfo'">
      <RegistryInfo />
    </div>
    <div v-if="root === 'registryedit'">
      <RegistryEdit />
    </div>
  </div>
</template>

<style scoped></style>
