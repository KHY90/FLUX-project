<template>
  <div>
    <!-- 아티클 세부 페이지 시작 -->
    <div class="article-container" v-if="article">
      <div class="top">
        <div class="subject">
          <div>{{ article.articleTitle }}</div>
        </div>
        <div class="category">
          <div>{{ article.articleCategory }}</div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-author">작성자 : {{ article.articleAuthor }}</div>
          <div class="img-align">
            <!-- 이미지 URL을 구성하여 출력 -->
            <img :src="getImageUrl(article.articleImgPath)" class="card-img-top" :alt="article.articleImgDescription || '이미지를 불러올 수 없습니다.'" />
          </div>
          <div class="card-body">
            <div class="card-text">{{ article.articleContents }}</div>
            <div class="card-date">
              <span v-if="article.articleUpdateAt">수정일자 : {{ formatDateTime(article.articleUpdateAt) }}</span>
              <span v-else>작성일자 : {{ formatDateTime(article.articleCreateAt) }}</span>
            </div>
            <div class="card-count">조회수 : {{ article.articleView }}</div>
          </div>
        </div>
      </div>
      <!-- 댓글부분 시작 -->
      <Comment />
    </div>
    <!-- 아티클 세부 페이지 종료 -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

import Comment from "@/components/comment/comment.vue";

// 라우트 객체 가져오기
const route = useRoute();

// 아티클 데이터와 관련된 상태 변수 정의
const article = ref(null);

// 아티클 데이터를 가져오는 함수
const fetchArticle = async () => {
  const articleId = route.params.id;
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/articles/${articleId}`);
    console.log('API Response:', response.data); // 응답 데이터를 로그에 출력
    article.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error); // 에러를 로그에 출력
  }
};

// 날짜 함수
const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// 이미지 URL을 계산하는 함수
const getImageUrl = (imagePath) => {
  console.log(imagePath)
  return `http://localhost:8080/img/multi/${imagePath}`;
};

// 컴포넌트가 마운트될 때 아티클 데이터와 댓글을 세션에서 불러오기
onMounted(() => {
  fetchArticle();
  console.log(article.value); // article의 값 확인
});
</script>

<style scoped>
.article-container {
  border: 3px solid #ffe9dd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  /* 전체 너비를 제한 */
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
}

.article-container .top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
}

.article-container .top .category {
  margin-bottom: 10px;
}

.article-container .subject {
  margin-bottom: 30px;
}

.card-container {
  display: flex;
  justify-content: center;
  /* 카드 중앙 정렬 */
  margin-bottom: 20px;
  width: 100%;
}

.card {
  width: 100%;
  max-width: 1200px;
  /* 카드의 최대 너비 설정 */
  margin-bottom: 30px;
  border: none !important;
}

.card-body {
  margin-top: 10px;
}

.card-author {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
  text-align: right;
}

.card-text {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  text-align: center;
}

.card-date {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #999;
}

.card-count {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #999;
}

/* 댓글 입력창 스타일링 */
.input-container {
  display: flex;
  justify-content: center;
  /* 입력창 중앙 정렬 */
  margin-top: 20px;
}

.input-container .input-group {
  width: 100%;
  max-width: 600px;
  /* 카드와 동일한 최대 너비 설정 */
}

/* 댓글 목록 스타일링 */
.comment-list-container {
  display: flex;
  justify-content: center;
  /* 댓글 목록 중앙 정렬 */
  margin-top: 20px;
}

.comment-list-container ul {
  width: 100%;
  max-width: 600px;
  /* 카드와 동일한 최대 너비 설정 */
  padding-left: 0;
}

.comment-list-container li {
  list-style-type: none;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.top {
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.category {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
}

.subject {
  font-family: "LINESeedKR-Bd";
  font-size: 21px;
}

.img-align {
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 50%; /* 컨테이너 너비 */
  padding-top: 50%; /* 정사각형 비율 유지 */
  position: relative; /* 자식 요소의 위치 조정을 위한 기준 */
  margin: 0 auto; /* 컨테이너를 중앙에 배치 */
}

.card-img-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 컨테이너에 맞게 조정 */
  border: 1px solid #b3b3b3;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
}

</style>
