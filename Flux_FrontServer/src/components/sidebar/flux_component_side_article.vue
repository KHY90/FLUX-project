<template>
  <div class="wrapper sticky-sm-top">
    <div class="bg-dark border-right sidebar-con d-flex flex-column" id="sidebar-wrapper">
      <div class="sidebar-heading sidebar-title">Article</div>
      <div class="list-group list-group-flush">
        <div class="sidebar-heading">
          <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text" @click="() => emitCategory('인터뷰')">작가인터뷰</a>
          <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text" @click="() => emitCategory('큐레이션')">큐레이션</a>
          <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text" @click="() => emitCategory('이벤트')">이벤트</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['category-selected']);

const emitCategory = (category) => {
  emit('category-selected', category);
}
</script>


<style scoped>
.wrapper {
  height: 100%;
}

#sidebar-wrapper {
  width: 250px;
}

.sidebar-con {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.sidebar-heading {
  font-size: 1.5rem;
  padding: 1rem;
  color: white;
}

.sidebar-img {
  width: auto;
  height: 50px;
}

.sidebar-title {
  font-family: "LINESeedKR-Bd";
  font-size: 28px;
  color: #FD8E4C;
}

.sidebar-subtitle {
  font-family: "LINESeedKR-Bd";
  font-size: 21px;
  color: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sidebar-text {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  color: #FFFFFF;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}

.title-link {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #FFFFFF;
}

.title-link2 {
  font-family: "LINESeedKR-Bd";
  font-size: 10px;
  color: #FFFFFF;
}

.list-group-item {
  border: none !important;
}

@media (max-width: 992px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
  .wrapper {
    display: none !important;
  }
}
</style>
