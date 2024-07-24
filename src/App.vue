<template>
  <div id="app">
    <Header />
    <div class="d-flex flex-direction-row">
      <Side />
      <div style="width: 100%;">
        <Active />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from './components/flux_component_header.vue'
import Footer from './components/flux_component_footer.vue'
import Side from './components/sidebar/flux_component_side_market.vue'
import Side2 from './components/sidebar/flux_component_side_article.vue'
import Side3 from './components/sidebar/flux_component_side_mypage.vue'
import Active from './components/mypage/flux_mypage_activity.vue'
export default {
  name: 'App',
  components: {
    Header,
    Side,
    Side2,
    Side3,
    Active,
    Footer
  }
}
</script>

<style>
/* 추가 스타일이 필요하다면 여기에 작성 */
</style>
