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
          <span class="header-item">카테고리</span>
          <span class="header-item">작가 이름</span>
          <span class="header-item">내용</span>
        </div>
        <div class="list-items">
          <div class="list-item" v-for="(article, index) in paginatedArticles" :key="article.article_id">
            <span class="item">{{ article.article_category || '미분류' }}</span>
            <span class="item clickable" @click="goToDetail(article.article_id)">{{ article.article_author }}</span>
            <span class="item clickable" @click="goToDetail(article.article_id)">
              {{ getShortContent(article.article_contents) }}
              <!-- 추가적인 코드로 "더 보기" 링크를 추가할 수 있습니다 -->
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
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'ArticleList',
    data() {
      return {
        searchQuery: '',
        articles: [],  // 데이터 배열 초기화
        currentPage: 1,
        pageSize: 5, // 페이지당 항목 수를 5로 설정
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.filteredArticles.length / this.pageSize);
      },
      paginatedArticles() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.filteredArticles.slice(start, end);
      },
      filteredArticles() {
        if (!this.searchQuery) {
          return this.articles;
        }
        return this.articles.filter(article =>
          article.article_title.includes(this.searchQuery) ||  // 제목으로 검색
          article.article_author.includes(this.searchQuery)   // 작가 이름으로 검색
        );
      }
    },
    methods: {
      async fetchArticles() {
        try {
          const response = await axios.get('http://localhost:8001/article'); // API 엔드포인트를 적절히 수정하세요
          this.articles = response.data; // 서버에서 받아온 데이터를 설정
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      },
      searchArticles() {
        this.currentPage = 1; // 검색 시 페이지를 첫 페이지로 리셋
      },
      addNewArticle() {
        this.$router.push({ path: '/manager/article/articlepost' }); // 새 글 추가 페이지로 이동
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
      },
      goToDetail(id) {
        this.$router.push({ path: '/manager/article/articleview', query: { id: id } });
      },
      getShortContent(content) {
        return content.length > 20 ? content.substring(0, 20) + '...' : content;
      }
    },
    created() {
      this.fetchArticles(); // 컴포넌트가 생성될 때 아티클 데이터를 가져옴
    }
  };
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
  
  .list-header {
      display: flex;
      justify-content: space-between;
      background-color: #1244AF;
      padding: 10px;
      border-radius: 5px;
      font-weight: bold;
  }
  
  .header-item {
      flex: 1;
      text-align: center;
      color: white;
  }
  
  .list-items {
      margin-top: 10px;
  }
  
  .list-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-bottom: 1px solid #ccc;
  }
  
  .item {
      flex: 1;
      text-align: center;
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
  </style>
  