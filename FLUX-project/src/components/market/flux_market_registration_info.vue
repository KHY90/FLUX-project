<template>
  <div class="registration_info">
    <div class="information">
      <h1>
        <p>어떤 작품을</p> 
        <p>판매하고 싶으신가요?</p>
      </h1>
      <div class="benefit benefit_a">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-gift benefit-image" viewBox="0 0 16 16">
          <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
        </svg>
        <div class="benefit-text">
          <h3>쉬운 작품 위탁</h3>
          <h6>판매하고 싶은 작품정보를 간단하게 등록만 해주세요.</h6>
        </div>
      </div>
      <div class="benefit benefit_b">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-truck benefit-image" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
        </svg>
        <div class="benefit-text">
          <h3>배송은 FLUX가</h3>
          <h6>낙찰이 확정되면 FLUX에서 낙찰된 컬렉터에게 안전하게 배송해드립니다.</h6>
        </div>
      </div>
      <div class="benefit benefit_c">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-tags benefit-image" viewBox="0 0 16 16">
          <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
          <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
        </svg>
        <div class="benefit-text">
          <h3>작품 시세 검증</h3>
          <h6>나의 작품 시세를 옥션 지표로 검증해보세요.</h6>
        </div>
      </div>
    </div>
    <div class="start-button-container">
      <button class="start-button" @click="setRoot('registryedit')">시작하기</button>
    </div>
  </div>      
</template>
  
<script setup>
import { useSalesStore } from "@/stores/rootstore";
import { computed } from "vue";

const store = useSalesStore();
const root = computed(() => store.root); // 상태 값 가져오기
const setRoot = store.setRoot; // 상태 값 변경 함수
</script>
  
<style scoped>
/* 전체 바디의 스타일을 설정합니다 */
html, body {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f2f5; /* 배경색 추가 */
}

/* 주요 컨테이너 스타일 */
.registration_info {
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  justify-content: center; /* 세로 가운데 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  gap: 40px; /* 항목 간의 간격 증가 */
  max-width: 1200px;
  margin: 100px auto; /* 위아래 여백 추가 */
  padding: 60px; /* 전체 여백 추가 */
  background-color: #ffffff; /* 배경색 설정 */
  border-radius: 15px; /* 테두리 둥글게 */
  box-shadow: none; /* 음영 제거 */
}

/* 정보 섹션 스타일 */
.information {
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  gap: 30px; /* 항목 간의 간격 증가 */
  width: 100%;
}

h1 {
  text-align: center; /* 제목 가운데 정렬 */
  font-size: 2.5rem; /* 제목 크기 조정 */
  color: #333; /* 텍스트 색상 설정 */
}

.benefit {
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  gap: 30px; /* 항목 간의 간격 증가 */
  width: 100%;
  max-width: 900px; /* 최대 너비 설정 */
  margin: 0 auto; /* 가로 가운데 정렬 */
  padding: 25px; /* 위아래 여백을 늘리고 양옆 여백 추가 */
  border: 1px solid #e0e0e0; /* 테두리 색상 설정 */
  border-radius: 10px; /* 테두리 둥글게 */
  background-color: #ffffff; /* 배경색 설정 */
  box-shadow: none; /* 음영 제거 */
}

.benefit-image {
  width: 50px; /* 이미지 너비 설정 */
  height: 50px; /* 이미지 높이 설정 */
  object-fit: cover; /* 이미지 비율 유지 */
  border-radius: 5px; /* 둥근 모서리 */
}

.benefit-text {
  flex: 1; /* 텍스트 영역이 남은 공간을 차지하도록 설정 */
  text-align: left; /* 텍스트 왼쪽 정렬 */
}

.benefit h3 {
  font-size: 1.25rem; /* 제목 크기 조정 */
  color: #333; /* 텍스트 색상 설정 */
}

.benefit h6 {
  font-size: 1rem; /* 부제목 크기 조정 */
  color: #666; /* 부제목 색상 설정 */
}

.start-button-container {
  text-align: center; /* 버튼을 가운데 정렬 */
}

.start-button {
  padding: 14px 28px; /* 버튼 패딩 증가 */
  font-size: 18px; /* 버튼 텍스트 크기 조정 */
  color: #ffffff; /* 버튼 텍스트 색상 설정 */
  background-color: #FEBE98; /* 버튼 배경색 설정 */
  border: none;
  border-radius: 5px; /* 둥근 모서리 */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #FEBE98; /* 버튼 호버 색상 변경 */
}
</style>
