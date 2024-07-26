<script setup>
import Header from "@/components/header/flux_component_header.vue";
import Footer from "@/components/footer/flux_component_footer.vue";
import Section from "@/components/market/flux_market_sales_section.vue";
</script>
<template>
  <Header />
  <div class="section-align">
      <Section />
  </div>
  <Footer />
</template>
<style scoped>
.section {
  width: 100%;
}

.section-align {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
