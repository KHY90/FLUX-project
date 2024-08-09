<template>
  <div>
    <!-- 아티클 세부 페이지 시작 -->
    <div class="article-container" v-if="article">
      <div class="top">
        <div class="category">
          <h3>{{ article.articleCategory }}</h3>
        </div>
        <div class="subject">
          <h1>{{ article.articleTitle }}</h1>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <img :src="article.articleImgPath" class="card-img-top" :alt="article.articleTitle">
          <div class="card-body">
            <p class="card-text" v-html="formattedContent"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 아티클 세부 페이지 종료 -->

    <!-- 댓글 등록 부분 시작 -->
    <div class="input-container">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="댓글을 입력하세요" v-model="comment" />
        <button class="btn btn-outline-secondary" type="button" @click="submitComment">댓글 등록</button>
      </div>
    </div>
    <!-- 댓글 등록 부분 종료 -->

    <!-- 댓글 목록 부분 시작 -->
    <div v-if="commentList.length > 0" class="comment-list-container">
      <ul>
        <li v-for="(comment, index) in commentList" :key="index">
          {{ comment }}
        </li>
      </ul>
    </div>
    <!-- 댓글 목록 부분 종료 -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

// 라우트 객체 가져오기
const route = useRoute();

// 아티클 데이터와 관련된 상태 변수 정의
const article = ref(null);
const comment = ref('');
const commentList = ref([]); // 댓글 목록을 저장할 배열

// 아티클 내용을 HTML로 포맷팅하는 계산 속성
const formattedContent = computed(() => {
  return article.value ? article.value.articleContents.replace(/\n/g, '<br>') : '';
});

// 아티클 데이터를 가져오는 함수
const fetchArticle = async () => {
  const articleId = route.params.id;

  console.log('Article ID:', articleId);

  try {
    const response = await axios.get(`http://localhost:8080/api/v1/articles/${articleId}`);
    article.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// 댓글을 세션 스토리지에 저장하는 함수
const saveCommentsToSession = () => {
  sessionStorage.setItem(`comments_${route.params.id}`, JSON.stringify(commentList.value));
};

// 세션 스토리지에서 댓글을 불러오는 함수
const loadCommentsFromSession = () => {
  const savedComments = sessionStorage.getItem(`comments_${route.params.id}`);
  if (savedComments) {
    commentList.value = JSON.parse(savedComments);
  }
};

// 댓글을 등록하는 함수
const submitComment = () => {
  if (comment.value.trim() !== '') {
    commentList.value.push(comment.value); // 댓글 목록에 새로운 댓글 추가
    comment.value = ''; // 댓글 입력 필드 초기화
    saveCommentsToSession(); // 댓글을 세션 스토리지에 저장
  }
};

// 컴포넌트가 마운트될 때 아티클 데이터와 댓글을 세션에서 불러오기
onMounted(() => {
  fetchArticle();
  loadCommentsFromSession();
});

// 댓글 리스트가 변경될 때마다 세션 스토리지에 저장
watch(commentList, saveCommentsToSession, { deep: true });
</script>

<style>
.article-container {
  width: 100%;
  max-width: 1200px; /* 전체 너비를 제한 */
  margin: 20px auto;
  padding: 20px;
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
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: center; /* 카드 중앙 정렬 */
}

.card {
  width: 100%;
  max-width: 600px; /* 카드의 최대 너비 설정 */
}

.card-body {
  margin-top: 10px;
  border : 1px solid #ddd;
}

/* 댓글 입력창 스타일링 */
.input-container {
  display: flex;
  justify-content: center; /* 입력창 중앙 정렬 */
  margin-top: 20px;
}

.input-container .input-group {
  width: 100%;
  max-width: 600px; /* 카드와 동일한 최대 너비 설정 */
}

/* 댓글 목록 스타일링 */
.comment-list-container {
  display: flex;
  justify-content: center; /* 댓글 목록 중앙 정렬 */
  margin-top: 20px;
}

.comment-list-container ul {
  width: 100%;
  max-width: 600px; /* 카드와 동일한 최대 너비 설정 */
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
</style>
