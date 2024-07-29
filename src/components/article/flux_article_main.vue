<template>
  <!-- 화연 담당 -->
  <!-- 아티클 메인페이지 시작 -->
  <!-- 정렬순서 시작 -->
  <div class="selectbox-container">
    <div class="selectbox">
      <select class="form-select" aria-label="정렬 순서" v-model="sortOrder">
        <option value="" disabled>정렬 순서</option>
        <option value="1">최신 등록순</option>
        <option value="2">인기순</option>
      </select>
    </div>
  </div>
  <!-- 정렬순서 종료 -->

  <!-- 아티클 메인 컨텐츠 시작 -->
  <div class="articleContents">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <!-- 반복되는 카드 아이템 -->
      <div class="col" v-for="(article, index) in paginatedArticles" :key="index">
        <div class="card">
          <div class="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
              />
            </svg>
          </div>
          <img
            :src="article.article_imgs"
            class="card-img-top"
            :alt="article.article_title"
          />
          <div class="card-body">
            <h6 class="card-category">{{ article.article_category }}</h6>
            <h4 class="card-title">{{ article.article_title }}</h4>
            <p class="card-text">날짜 {{ article.article_createat }}</p>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="페이지 네비게이션 예시" class="d-flex justify-content-center">
      <ul class="pagination pagination-black">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- 아티클 메인 컨텐츠 종료 -->
</template>

<script>
import axios from 'axios';

export default {
  name: "ArticleMain",
  data() {
    return {
      articles: [], // 데이터 저장용 배열
      currentPage: 1,
      pageSize: 9,
      sortOrder: '', // 정렬 순서
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.pageSize);
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.articles.slice(start, end);
    }
  },
  methods: {
    async fetchArticles() {
      try {
        // db.json에서 데이터 가져오기
        const response = await axios.get('http://localhost:8001/article');
        console.log('Response data:', response.data); // 전체 응답 데이터 로그

        // 응답 데이터가 배열 형태이므로 직접 할당
        this.articles = response.data;

        console.log('Fetched articles:', this.articles); // 데이터 확인
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    }
  },
  async created() {
    await this.fetchArticles();
  }
};
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
