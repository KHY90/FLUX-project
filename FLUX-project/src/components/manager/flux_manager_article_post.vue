<template>
    <!-- 아티클 등록 페이지 시작 -->
    <div class="container">
      <div class="top">
        <h3>아티클 정보를 입력해 주세요.</h3>
      </div>
  
      <!-- 카테고리 입력창 시작 -->
      <p>분류</p>
      <select v-model="article.category" class="form-select" aria-label="Default select example">
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
          <input v-model="article.title" type="text" aria-label="subject" class="form-control" placeholder="제목을 입력해주세요.">
        </div>
      </div>
      <!-- 제목 입력창 종료 -->
  
      <!-- 작가 이름 입력창 시작 -->
      <div class="name">
        <p>작가 이름</p>
        <div class="input-group">
          <input v-model="article.author" type="text" aria-label="name" class="form-control" placeholder="작가 이름을 입력해주세요.">
        </div>
      </div>
      <!-- 작가 이름 입력창 종료 -->
  
      <!-- 이미지 등록창 시작 -->
      <div class="imgInsert">
        <p>이미지 등록</p>
        <div class="form-group">
          <div class="image-upload-container">
            <input type="file" id="image-upload" class="form-control" aria-label="Upload" accept="image/*"
              @change="handleImageUpload">
            <img id="upload-image-preview" :src="article.image" alt="이미지 업로드" class="upload-image"
              @click="triggerFileUpload">
          </div>
        </div>
      </div>
      <!-- 이미지 등록창 종료 -->
  
      <!-- 내용 등록창 시작 -->
      <p>내용</p>
      <div class="input-group">
        <textarea v-model="article.content" class="form-control" aria-label="With textarea"
          placeholder="내용을 작성해 주세요."></textarea>
      </div>
      <!-- 내용 등록창 종료 -->
  
      <!-- 등록 버튼 시작 -->
      <button @click="submitArticle" type="button" class="btn btn-primary btn-lg">등록 버튼</button>
      <!-- 등록 버튼 종료 -->
    </div>
    <!-- 아티클 등록 페이지 종료 -->
  </template>
    
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ManagerArticlePost',
    data() {
      return {
        article: {
          category: '',
          author: '',
          image: 'https://via.placeholder.com/150', // 기본 이미지 URL
          content: '',
          title: '' // 제목 입력 필드를 추가했습니다.
        }
      };
    },
    methods: {
      handleImageUpload(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.article.image = e.target.result;
          };
          reader.readAsDataURL(input.files[0]);
        }
      },
      triggerFileUpload() {
        document.getElementById('image-upload').click();
      },
      async submitArticle() {
        const newArticle = {
          article_id: Date.now().toString(), // 고유 ID 생성
          user_id: '1', // 예시로 사용자의 ID를 1로 설정했습니다. 실제 사용자 ID로 대체하세요.
          article_imgs: this.article.image,
          article_title: this.article.title,
          article_author: this.article.author,
          article_contents: this.article.content,
          article_createat: new Date().toISOString().split('T')[0],
          article_updateat: new Date().toISOString().split('T')[0],
          article_view: '0'
        };
  
        try {
          const response = await axios.post('http://localhost:8001/article', newArticle);
          console.log('Article submitted:', response.data);
          // 추가적인 작업을 수행할 수 있습니다 (예: 폼 초기화, 성공 메시지 표시 등)
        } catch (error) {
          console.error('Error submitting article:', error);
        }
      }
    }
  };
  </script>
    
  <style scoped>
  /* 전체 폼 컨테이너 */
  .container {
    border: 1px solid black;
    margin-top: 30px;
    width: 60%;
  }
  
  /* 폼 상단 제목 */
  .top {
    margin-bottom: 20px;
    text-align: center;
  }
  
  /* 제목 입력창 스타일 */
  .subject {
    margin-top: 20px; /* 제목 입력창 상단에 여백 추가 */
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
    background-color: #103a8a; /* 버튼 호버 색상 변경 */
  }
  </style>
    