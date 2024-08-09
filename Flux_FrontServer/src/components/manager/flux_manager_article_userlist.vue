<template>
  <div class="articlelist">
    <div class="article_list">
      <h3>아티클 관리</h3>

      <div class="button-container">
        <button class="btn" @click="addNewArticle">새 글</button>
        <!-- 조회 기능 추가 -->
        <div class="search">
          <input type="text" placeholder="검색어를 입력하세요" v-model="searchQuery" />
          <button class="btn search-btn" @click="searchArticles">조회</button>
        </div>
      </div>
    </div>

    <!-- 리스트 섹션 -->
    <div class="list-section">
      <div class="list-header">
        <span class="header-item">이미지</span>
        <span class="header-item">카테고리</span>
        <span class="header-item">작가 이름</span>
        <span class="header-item">내용</span>
      </div>
      <div class="list-items">
        <div class="list-item" v-for="article in paginatedArticles" :key="article.articleId">
          <img v-if="article.articleImgPath" :src="article.articleImgPath" class="item-img" alt="기사 이미지">
          <span class="item">{{ article.articleCategory || '미분류' }}</span>
          <span class="item clickable" @click="goToDetail(article.articleId)">{{ article.articleAuthor }}</span>
          <span class="item clickable" @click="goToDetail(article.articleId)">
            {{ getShortContent(article.articleContents) }}
            <a v-if="article.articleContents && article.articleContents.length > 20" @click.stop="goToDetail(article.articleId)" class="more-link">더 보기</a>
          </span>
        </div>
      </div>

      <!-- 페이지네이션 -->
      <nav aria-label="Page navigation" class="pagination-container">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
          </li>
          <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const searchQuery = ref('');
const articles = ref([]);
const currentPage = ref(1);
const pageSize = 5;

const fetchArticles = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/articles');
    articles.value = response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

const searchArticles = () => {
  currentPage.value = 1; // 검색 시 페이지를 첫 페이지로 리셋
};

const addNewArticle = () => {
  router.push({ path: '/manager/article/articlepost' });
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

const goToDetail = (id) => {
  router.push({ path: '/manager/article/articleview', query: { id } });
};

const getShortContent = (content) => {
  if (!content) return '';
  return content.length > 20 ? content.substring(0, 20) + '...' : content;
};

const filteredArticles = computed(() => {
  if (!searchQuery.value) return articles.value;
  return articles.value.filter(article =>
    article.articleTitle.includes(searchQuery.value) ||
    article.articleAuthor.includes(searchQuery.value)
  );
});

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredArticles.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(filteredArticles.value.length / pageSize);
});

onMounted(() => {
  fetchArticles();
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #FEBE98;
}

.articlelist {
  width: 80%;
  margin: 20px auto;
  background-color: #fffefd;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.article_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.button-container {
  display: flex;
  align-items: center;
}

.btn {
  background-color: #1244AF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  height: 40px; /* 버튼 높이 지정 */
  line-height: 20px; /* 버튼 안의 텍스트 높이 조정 */
}

.search-btn {
  width: 80px;
  height: 40px; /* 조회 버튼 높이 지정 */
}

.btn:hover {
  background-color: #1244AF;
}

.search input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 40px; /* 입력창 높이 지정 */
  line-height: 20px; /* 입력창 안의 텍스트 높이 조정 */
}

.search button {
  margin-left: 10px;
  background-color: #1244AF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  height: 40px; /* 버튼 높이 지정 */
  line-height: 20px; /* 버튼 안의 텍스트 높이 조정 */
}

.search button:hover {
  background-color: #1244AF;
}

.search {
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 40px; /* 검색 영역 전체 높이 지정 */
}

.list-section {
  margin-top: 20px;
}

.list-header, .list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.header-item, .item {
  flex: 1;
  text-align: center;
  overflow: hidden; /* 긴 텍스트가 넘치지 않도록 설정 */
  text-overflow: ellipsis; /* 긴 텍스트를 생략 (...) 처리 */
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
}

.list-header {
  background-color: #1244AF;
  border-radius: 5px;
  font-weight: bold;
  color: white;
}

.list-item {
  border-bottom: 1px solid #ccc;
}

.item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.pagination-container {
  margin-top: 20px;
}

.pagination .page-link {
  color: black;
}

.pagination .page-link:hover {
  background-color: #1244AF;
  color: white;
}

.pagination .active .page-link {
  background-color: #1244AF;
  border-color: #1244AF;
  color: white;
}

.clickable {
  cursor: pointer;
  color: blue;
}

.clickable:hover {
  text-decoration: underline;
}

.more-link {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
</style>
