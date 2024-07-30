<script setup>
import Header from "@/components/manager/flux_manager_header.vue";
import Footer from "@/components/manager/flux_manager_footer.vue";
import Sidebar from "@/components/manager/flux_manager_sidebar.vue";
import Section from "@/components/manager/flux_manager_notice_section.vue";
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
  height: 90dvh;
}
.section-align {
  display: flex;
  flex-direction: row;
}
</style>
