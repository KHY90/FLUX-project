<!-- src/views/PaymentComplete.vue -->
<template>
    <div class="payment-complete">
      <div class="message-box">
        <h1>결제가 완료되었습니다.</h1>
        <div class="button-container">
          <button class="btn btn-bid">확인</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  .payment-complete {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 화면 전체 높이 */
    background-color: #f8f9fa; /* 배경색 설정 */
    padding: 0 20px; /* 양쪽 여백 추가 */
    position: relative; /* .message-box를 절대 위치로 조정하기 위해 설정 */
  }
  
  .message-box {
    background-color: #fff; /* 박스 배경색 설정 */
    padding: 40px; /* 박스 내부 여백 설정 */
    border-radius: 10px; /* 박스 모서리 둥글게 설정 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 박스 그림자 설정 */
    position: absolute; /* 절대 위치 설정 */
    top: 30%; /* 상단에서 30% 떨어진 위치에 배치 */
    left: 50%; /* 좌측에서 중앙에 배치 */
    transform: translate(-50%, -30%); /* 중앙 정렬을 위해 X축과 Y축 모두 조정 */
    max-width: 500px; /* 박스 최대 너비 설정 (필요에 따라 조정) */
    width: 100%; /* 박스 너비를 100%로 설정 */
    overflow: visible; /* 박스 밖으로 나오는 내용 표시 */
  }
  
  .message-box h1 {
    color: #28a745; /* 텍스트 색상 설정 */
    font-size: 24px; /* 폰트 크기 설정 */
    margin: 0; /* 기본 마진 제거 */
    text-align: center; /* 텍스트 중앙 정렬 */
  }
  
  .button-container {
    position: absolute;
    bottom: -60px; /* 박스 아래쪽으로 이동 */
    right: 0; /* 박스 오른쪽에 정렬 */
    transform: translateX(100%); /* 박스 오른쪽 경계를 넘어서 이동 */
    margin-bottom: 20px; /* 버튼과 박스 사이의 간격 설정 */
  }
  
  .btn-bid {
    background-color: peachpuff; /* 버튼 배경색을 peach로 설정 */
    border: none; /* 기본 테두리 제거 */
    color: #000; /* 텍스트 색상 설정 */
    padding: 10px 20px; /* 버튼 내부 여백 설정 */
    border-radius: 5px; /* 버튼 모서리 둥글게 설정 */
    font-size: 16px; /* 폰트 크기 설정 */
    cursor: pointer; /* 커서 변경 */
    transition: background-color 0.3s; /* 배경색 변화에 대한 부드러운 전환 */
  }
  
  .btn-bid:hover {
    background-color: #f5c6aa; /* 호버 시 배경색 변경 */
  }
  </style>
  