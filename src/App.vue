<template>
  <div id="app">
    <Header />
    <ArticleDetaile />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/header.vue'
import ArticleDetaile from './components/article/articleDetaile.vue'
// import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ArticleDetaile
    // Footer
  }
}
</script>

<style>
/* 추가 스타일이 필요하다면 여기에 작성 */
</style>
