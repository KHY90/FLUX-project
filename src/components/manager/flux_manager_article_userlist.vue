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
                <span class="header-item">이미지</span>
            </div>
            <div class="list-items">
                <div class="list-item" v-for="(article, index) in paginatedArticles" :key="index">
                    <span class="item">{{ article.category }}</span>
                    <span class="item clickable" @click="goToDetail(article.id)">{{ article.author }}</span>
                    <img :src="article.img" alt="Article Image" class="item-img">
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
import { useRouter } from 'vue-router';

export default {
    name: 'articlelist',
    data() {
        return {
            searchQuery: '',
            articles: [
                { id: 1, category: '카테고리1', author: '작가1', img: 'https://via.placeholder.com/150' },
                { id: 2, category: '카테고리2', author: '작가2', img: 'https://via.placeholder.com/150' },
                { id: 3, category: '카테고리3', author: '작가3', img: 'https://via.placeholder.com/150' },
                { id: 4, category: '카테고리4', author: '작가4', img: 'https://via.placeholder.com/150' },
                { id: 5, category: '카테고리5', author: '작가5', img: 'https://via.placeholder.com/150' },
                { id: 6, category: '카테고리6', author: '작가6', img: 'https://via.placeholder.com/150' },
                { id: 7, category: '카테고리7', author: '작가7', img: 'https://via.placeholder.com/150' },
            ],
            currentPage: 1,
            pageSize: 5,
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
        searchArticles() {
            console.log('Searching for:', this.searchQuery);
            // 검색 로직을 여기에 추가할 수 있습니다.
        },
        addNewArticle() {
            // 새 글 추가 로직을 여기에 추가할 수 있습니다.
            alert('새 글 추가 기능');
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
        }
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
