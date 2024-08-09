<template>
  <div class="modi-container" v-if="article">
    <div class="article-container">
      <!-- 기사 카테고리 및 제목 -->
      <div class="top">
        <div class="category">
          <h3>{{ article.articleCategory }}</h3>
        </div>
        <div class="subject">
          <h1>{{ article.articleTitle }}</h1>
        </div>
      </div>
      <!-- 기사 내용 및 이미지 -->
      <div class="card-container">
        <div class="card">
          <img :src="article.articleImgPath" class="card-img-top" alt="이미지">
          <div class="card-body">
            <p class="card-text">
              {{ article.articleContents }}<br>
              {{ article.articleCreateAt }}<br>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 버튼들: 확인, 수정, 삭제 -->
    <div class="modibutton">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <router-link class="btn btn-primary me-md-2" to="/manager">확인</router-link>
        <router-link 
          class="btn btn-primary me-md-2" 
          :to="{ path: '/manager/article/articlemodify', query: { id: article.articleId } }" 
          type="button">
          수정
        </router-link>
        <button @click="deleteArticle" class="btn btn-outline-danger" type="button">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Vue 3의 ref와 onMounted 훅을 임포트
import { useRoute, useRouter } from 'vue-router'; // Vue Router의 useRoute와 useRouter를 임포트
import axios from 'axios'; // Axios를 임포트하여 API 호출

// Composition API 사용
const route = useRoute(); // 현재 라우트 정보 가져오기
const router = useRouter(); // 라우터 인스턴스 가져오기
const articleId = ref(route.query.id); // URL 쿼리에서 기사 ID를 ref로 저장
const article = ref(null); // 기사 데이터 저장용 ref

// 기사 데이터 가져오기 함수
const fetchArticle = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/articles/${articleId.value}`);
    article.value = response.data; // API 응답에서 데이터 설정
  } catch (error) {
    console.error('Error fetching article:', error); // 에러 처리
  }
};

// 기사 삭제 함수
const deleteArticle = async () => {
  try {
    await axios.delete(`http://localhost:8080/api/v1/articles/${articleId.value}`);
    router.push('/manager/article/articlelist'); // 삭제 후 기사 목록으로 이동
  } catch (error) {
    console.error('Error deleting article:', error); // 에러 처리
  }
};

// 컴포넌트 마운트 후 기사 데이터 가져오기
onMounted(() => {
  fetchArticle();
});
</script>

<style>
.modi-container {
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.modibutton {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.btn {
  background-color: #FD8E4C;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.btn-outline-danger {
  border: 1px solid #dc3545;
  color: #dc3545;
  background-color: transparent;
}

.btn:hover {
  background-color: #e67e22;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}
</style>
