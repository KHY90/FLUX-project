<script setup>
import Header from "@/components/header/flux_component_header.vue";
import Footer from "@/components/footer/flux_component_footer.vue";
import Ranking from "@/components/rank/flux_rank_main.vue";
</script>
<template>
  <Header />
  <Ranking />
  <Footer />
</template>
<style scoped>
.section-align {
  display: flex;
  flex-direction: row;
}
</style>
