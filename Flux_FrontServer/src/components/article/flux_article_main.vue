<template>
  <div class="main-container">
    <Sidebar @category-selected="handleCategorySelected" />
    <div class="articleContents">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="article in paginatedArticles" :key="article.articleId" @click="() => goToArticleDetail(article.articleId)">
          <div class="card">
            <div class="icon-container">
              <!-- 아이콘 내용 -->
            </div>
            <img :src="article.articleImgPath" class="card-img-top" :alt="article.articleTitle" />
            <div class="card-body">
              <h6 class="card-category">{{ article.articleCategory }}</h6>
              <h4 class="card-title">{{ article.articleTitle }}</h4>
              <p class="card-text">날짜 {{ article.articleCreateAt }}</p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="페이지 네비게이션 예시" class="d-flex justify-content-center">
        <!-- 페이지 네비게이션 -->
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const articles = ref([]);
const currentPage = ref(1);
const pageSize = ref(9);
const selectedCategory = ref(''); // 선택된 카테고리 상태
const router = useRouter();

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / pageSize.value);
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredArticles.value.slice(start, end);
});

const filteredArticles = computed(() => {
  return articles.value.filter(article => 
    article.articleStatus === true && 
    (selectedCategory.value === '' || article.articleCategory === selectedCategory.value)
  );
});

const fetchArticles = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/articles');
    if (Array.isArray(response.data)) {
      articles.value = response.data;
    } else {
      console.error('Fetched data is not an array:', response.data);
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

const handleCategorySelected = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1; // 카테고리 변경 시 페이지를 첫 페이지로 리셋
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

const goToArticleDetail = (articleId) => {
  router.push({ name: 'ArticleDetail', params: { id: articleId } });
};

onMounted(() => {
  fetchArticles();
});
</script>

<style>
/* 정렬 순서 셀렉트박스 시작 */
.selectbox-container {
  display: flex;
  justify-content: flex-end;
  margin: 5px 10px 0 0;
}

.selectbox .form-select {
  margin: 40px 30px 0 0;
  width: 150px;
}
/* 정렬 순서 셀렉트박스 종료 */

/* 아티클 박스 시작 */
.articleContents .card {
  display: flex;
  border: 1px solid #ffe9dd;
  flex-direction: column;
  height: 400px; /* 원하는 카드 높이 설정 */
  position: relative; /* 아이콘을 위치시키기 위해 relative로 설정 */
}

.articleContents .icon-container {
  position: absolute;
  top: 10px; /* 원하는 위치로 조정 가능 */
  right: 15px; /* 원하는 위치로 조정 가능 */
  z-index: 1; /* 이미지 위에 위치하도록 설정 */
}

.articleContents .card-img-top {
  border: 1px solid #ffe9dd;
  height: 70%; /* 이미지 높이를 카드 높이의 70%로 설정 */
  object-fit: cover; /* 이미지를 박스에 맞게 크기 조정 */
  width: 100%; /* 이미지를 박스에 맞게 크기 조정 */
}

.articleContents .card-body {
  height: 30%; /* 텍스트 높이를 카드 높이의 30%로 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 텍스트를 세로 중앙에 배치 */
}

.row {
  margin: 10px 10px 10px 20px;
}

.pagination.pagination-black .page-link {
  color: black; /* 페이지 링크 색상을 검정색으로 */
}

.pagination.pagination-black .page-link:hover {
  background-color: #000; /* 링크 호버시 배경색을 검정색으로 */
  color: #fff; /* 링크 호버시 글자색을 흰색으로 */
}

/* 페이지 네비게이션 */
.pagination .page-item.disabled .page-link {
  pointer-events: none; /* 비활성화된 페이지 링크 클릭 방지 */
}

.pagination .page-item.active .page-link {
  background-color: #000; /* 활성 페이지 링크 배경색 */
  color: #fff; /* 활성 페이지 링크 글자색 */
}
</style>
