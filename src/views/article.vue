<script setup>
import Header from "@/components/header/flux_component_header.vue";
import Footer from "@/components/footer/flux_component_footer.vue";
import Sidebar from "@/components/sidebar/flux_component_side_article.vue";
import Section from "@/components/article/flux_article_section.vue";
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
}
.section-align {
  display: flex;
  flex-direction: row;
  height: 100%;
}
</style>
