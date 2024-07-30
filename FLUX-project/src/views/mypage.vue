<script setup>
import Header from "@/components/header/flux_component_header.vue";
import Footer from "@/components/footer/flux_component_footer.vue";
import Sidebar from "@/components/sidebar/flux_component_side_mypage.vue";
import Section from "@/components/mypage/flux_mypage_section.vue";
</script>
<template>
  <Header />
  <div class="section-align">
    <Sidebar />
    <div class="section">
      <Section />
    </div>
  </div>
  <Footer />
</template>
<style scoped>
.section {
  width: 100%;
  margin-top: 40px;
}
.section-align {
  height: 90%;
  display: flex;
  flex-direction: row;
}
</style>
