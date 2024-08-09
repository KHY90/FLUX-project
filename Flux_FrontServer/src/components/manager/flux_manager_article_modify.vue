<template>
  <!-- 아티클 수정 페이지 시작 -->
  <div class="container">
    <div class="top">
      <h3>아티클 정보를 수정해 주세요.</h3>
    </div>

    <!-- 카테고리 입력창 시작 -->
    <p>분류</p>
    <select v-model="article.articleCategory" class="form-select" aria-label="Default select example">
      <option disabled value="">카테고리</option>
      <option value="인터뷰">인터뷰</option>
      <option value="큐레이션">큐레이션</option>
      <option value="이벤트">이벤트</option>
    </select>
    <!-- 카테고리 입력창 종료 -->

    <!-- 제목 입력창 시작 -->
    <div class="subject">
      <p>제목</p>
      <div class="input-group">
        <input v-model="article.articleTitle" type="text" aria-label="subject" class="form-control" placeholder="제목을 입력해주세요.">
      </div>
    </div>
    <!-- 제목 입력창 종료 -->

    <!-- 작가 이름 입력창 시작 -->
    <div class="name">
      <p>작가 이름</p>
      <div class="input-group">
        <input v-model="article.articleAuthor" type="text" aria-label="name" class="form-control" placeholder="작가 이름을 입력해주세요.">
      </div>
    </div>
    <!-- 작가 이름 입력창 종료 -->

    <!-- 이미지 등록창 시작 -->
    <div class="imgInsert">
      <p>이미지 등록</p>
      <div class="form-group">
        <div class="image-upload-container">
          <input type="file" id="image-upload" class="form-control" aria-label="Upload" accept="image/*" @change="handleImageUpload">
          <img id="upload-image-preview" :src="article.articleImgPath" alt="이미지 업로드" class="upload-image" @click="triggerFileUpload">
        </div>
      </div>
    </div>
    <!-- 이미지 등록창 종료 -->

    <!-- 내용 등록창 시작 -->
    <p>내용</p>
    <div class="input-group">
      <textarea v-model="article.articleContents" class="form-control" aria-label="With textarea" placeholder="내용을 작성해 주세요."></textarea>
    </div>
    <!-- 내용 등록창 종료 -->

    <!-- 수정 버튼 시작 -->
    <button @click="updateArticle" type="button" class="btn btn-primary btn-lg">수정 버튼</button>
    <!-- 수정 버튼 종료 -->
  </div>
  <!-- 아티클 수정 페이지 종료 -->
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const articleId = ref(route.query.id);
const article = ref({
  articleCategory: '',
  articleTitle: '',
  articleAuthor: '',
  articleImgPath: null,
  articleContents: ''
});

// 아티클 정보 로드
const fetchArticle = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/articles/${articleId.value}`);
    article.value = response.data; // 응답에서 직접 article 데이터를 할당
  } catch (error) {
    console.error('Error fetching article:', error);
  }
};

// 이미지 업로드 핸들러
const handleImageUpload = (event) => {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      article.value.articleImgPath = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

// 파일 업로드 트리거
const triggerFileUpload = () => {
  document.getElementById('image-upload').click();
};

// 아티클 업데이트
const updateArticle = async () => {
  const formData = new FormData();
  formData.append('article', new Blob([JSON.stringify({
    articleTitle: article.value.articleTitle,
    articleAuthor: article.value.articleAuthor,
    articleContents: article.value.articleContents,
    articleCategory: article.value.articleCategory
  })], { type: 'application/json' }));

  if (article.value.articleImgPath) {
    const blob = dataURItoBlob(article.value.articleImgPath);
    formData.append('files', blob, 'image.jpg'); // 파일의 이름을 지정
  }

  try {
    await axios.put(`http://localhost:8080/api/v1/articles/${articleId.value}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    router.push('/manager/article/articlelist');
  } catch (error) {
    console.error('Error updating article:', error);
  }
};

// Data URI를 Blob으로 변환
const dataURItoBlob = (dataURI) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

// 페이지가 로드될 때 아티클 정보 로드
onMounted(() => {
  fetchArticle();
});
</script>

<style>
/* 전체 폼 컨테이너 */
.container {
  border: 1px solid black;
  margin-top: 30px;
  width: 60%;
}

.top {
  margin-top: 20px;
  text-align: center;
}

/* 폼 상단 제목 */
.top {
  margin-bottom: 20px;
  text-align: center;
}

/* 폼 그룹 */
.form-group {
  width: 100%;
  margin-bottom: 20px;
}

/* 레이블 스타일 */
.form-group label {
  display: block;
  margin-bottom: 5px;
}

.name {
  margin-top: 20px;
}

/* 입력 필드 스타일 */
.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* 텍스트 영역 스타일 */
.form-control[aria-label="With textarea"] {
  height: 200px;
  resize: none;
}

/* 이미지 업로드 컨테이너 */
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
  display: none; /* 파일 입력 필드를 숨김 */
}

.upload-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border: 2px dashed #ccc;
  border-radius: 4px;
}

/* 버튼 스타일 */
.btn {
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #FD8E4C;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

.btn:hover {
  background-color: #e67e22;
}
</style>
