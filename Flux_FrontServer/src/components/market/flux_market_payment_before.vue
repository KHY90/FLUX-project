<!-- src/views/InfoPage.vue -->
<template>
  <div class="page-container">
    <div class="info-wrapper">
      <div class="info-container">
        <!-- 상품 이미지 박스 -->
        <div class="info-box image-box">
          <h4>상품이미지</h4>
          <div class="hover-card">
            <a :href="post.link" class="text-decoration-none">
              <img :src="post.coverImg" class="img-fluid" />
            </a>
          </div>
        </div>

        <!-- 작가 정보 박스 -->
        <div class="info-box author-box">
          <h4>작가 정보</h4>
          <p>작가에 대한 자세한 설명이 여기에 들어갑니다. 작가의 배경, 다른 작품, 이력 등 다양한 정보를 포함할 수 있습니다.</p>
        </div>
      </div>

      <!-- 결제하기 버튼 -->
      <div class="button-container">
        <button class="btn btn-bid">결제하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        coverImg: 'https://via.placeholder.com/300',
        link: '#',
        title: '상품 제목'
      }
    };
  }
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 전체 화면 높이 설정 */
  background-color: #fff; /* 페이지 배경색을 하얀색으로 설정 */
  justify-content: center; /* 컨텐츠를 수직 중앙 정렬 */
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬 */
}

.info-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px; /* 최대 너비 설정 */
  padding: 20px; /* 내부 여백 추가 */
  flex-wrap: wrap; /* 요소가 여러 줄로 나누어지도록 설정 */
}

.info-box {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center; /* 수직 정렬을 가운데로 설정 */
  align-items: center; /* 수평 정렬을 가운데로 설정 */
  max-width: 500px; /* 최대 너비 설정 */
  width: 100%; /* 너비를 100%로 설정 */
  box-sizing: border-box; /* 패딩을 포함하여 너비 조정 */
}

.image-box {
  flex: 1;
}

.author-box {
  flex: 1;
}

.info-box img {
  max-width: 100%; /* 이미지가 박스를 넘지 않도록 설정 */
  height: auto; /* 높이를 자동으로 설정하여 비율 유지 */
  border-radius: 8px; /* 이미지의 모서리를 둥글게 설정 */
  object-fit: cover; /* 이미지가 박스에 맞게 조정되도록 설정 */
}

.info-box h4 {
  margin-bottom: 1rem;
}

.info-box p {
  margin: 0;
}

/* 결제하기 버튼 스타일링 */
.button-container {
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽 정렬 */
  margin-top: 40px; /* 버튼과 박스 사이의 간격 설정 */
  width: 100%; /* 버튼 컨테이너 너비를 100%로 설정 */
  max-width: 1200px; /* 버튼 컨테이너 너비를 info-container의 너비와 같게 설정 */
  padding-right: 20px; /* 오른쪽 패딩 추가하여 버튼이 경계를 넘지 않도록 설정 */
  box-sizing: border-box; /* 패딩을 포함하여 너비 조정 */
}

.btn-bid {
  background-color: #FEBE98; /* 버튼 배경색을 peach로 설정 */
  border: none; /* 기본 테두리 제거 */
  color: #000; /* 텍스트 색상 설정 */
  padding: 15px 30px; /* 버튼 내부 여백 설정 */
  border-radius: 5px; /* 버튼 모서리 둥글게 설정 */
  font-size: 18px; /* 폰트 크기 설정 */
  cursor: pointer; /* 커서 변경 */
  transition: background-color 0.3s; /* 배경색 변화에 대한 부드러운 전환 */
}

.btn-bid:hover {
  background-color: #fda98b; /* 호버 시 배경색 변경 */
}
</style>
