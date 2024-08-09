<template>
  <div class="container">
    <div class="top">
      <h3>아티클 정보를 입력해 주세요.</h3>
    </div>

    <p>분류</p>
    <select v-model="article.articleCategory" class="form-select" aria-label="Default select example">
      <option disabled value="">카테고리</option>
      <option value="인터뷰">인터뷰</option>
      <option value="큐레이션">큐레이션</option>
      <option value="이벤트">이벤트</option>
    </select>

    <div class="subject">
      <p>제목</p>
      <div class="input-group">
        <input v-model="article.articleTitle" type="text" aria-label="subject" class="form-control" placeholder="제목을 입력해주세요.">
      </div>
    </div>

    <div class="name">
      <p>작가 이름</p>
      <div class="input-group">
        <input v-model="article.articleAuthor" type="text" aria-label="name" class="form-control" placeholder="작가 이름을 입력해주세요.">
      </div>
    </div>

    <div class="imgInsert">
      <p>이미지 등록</p>
      <div class="form-group">
        <div class="image-upload-container">
          <input type="file" id="image-upload" ref="imageUpload" class="form-control" aria-label="Upload" accept="image/*" @change="handleImageUpload">
          <img id="upload-image-preview" :src="article.imagePreview" alt="이미지 업로드" class="upload-image" @click="triggerFileUpload">
        </div>
      </div>
    </div>

    <p>내용</p>
    <div class="input-group">
      <textarea v-model="article.articleContents" class="form-control" aria-label="With textarea" placeholder="내용을 작성해 주세요."></textarea>
    </div>

    <button @click="submitArticle" type="button" class="btn btn-primary btn-lg">등록 버튼</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

// Define reactive state
const article = ref({
  articleCategory: '',
  articleAuthor: '',
  articleContents: '',
  articleTitle: '',
  imagePreview: ''
});

const imageUpload = ref(null);
const authStore = useAuthStore();
const router = useRouter();

// Handle image file upload
function handleImageUpload(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      article.value.imagePreview = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Trigger file upload dialog
function triggerFileUpload() {
  imageUpload.value.click();
}

// Submit article
async function submitArticle() {
  console.log('Auth Store:', authStore.$state);

  if (!authStore.isAuthenticated) {
    console.error('허가되지 않은 유저');
    router.push({ name: 'LoginPage' });
    return;
  }

  const userId = authStore.getUserId;

  if (!userId) {
    console.error('유저 ID가 정의되지 않았습니다.');
    return;
  }

  const formData = new FormData();
  formData.append('articleCategory', article.value.articleCategory);
  formData.append('articleTitle', article.value.articleTitle);
  formData.append('articleAuthor', article.value.articleAuthor);
  formData.append('articleContents', article.value.articleContents);
  formData.append('userId', userId);

  if (imageUpload.value.files.length > 0) {
    formData.append('files', imageUpload.value.files[0]);
  }

  try {
    const response = await axios.post('http://localhost:8080/api/v1/articles/articlepost', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.token}`
      }
    });
    console.log('Article 등록 성공:', response.data);
    router.push({ name: 'ArticleView', query: { id: response.data.article.articleId } });
  } catch (error) {
    console.error('아티클 등록 실패:', error.response ? error.response.data : error.message);
  }
}
</script>

<style scoped>
/* 스타일 */
.container {
  border: 1px solid black;
  margin-top: 30px;
  width: 60%;
}

.top {
  margin-bottom: 20px;
  text-align: center;
}

.subject {
  margin-top: 20px;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-control[aria-label="With textarea"] {
  height: 200px;
  resize: none;
}

.imgInsert {
  margin-top: 10px;
}

.imgInsert p {
  margin-top: 10px;
}

.image-upload-container {
  position: relative;
  width: 150px;
  height: 150px;
}

#image-upload {
  display: none;
}

.upload-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border: 2px dashed #ccc;
  border-radius: 4px;
}

.btn {
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #1244AF;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

.btn:hover {
  background-color: #103a8a;
}
</style>
