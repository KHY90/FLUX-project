<template>
    <!-- 아티클 세부 페이지 (관리자용) 시작 -->
    <div class="modi-container">
        <div class="article-container">
            <div class="top">
                <div class="category">
                    <h3> Interview</h3>
                </div>
                <div class="subject">
                    <h1> 제목 </h1>
                </div>
            </div>
            <div class="card-container">
                <div class="card">
                    <img src="https://www.learningman.co/static/2491830007c24cf2555bc0333ead8fbf/a2510/interview.jpg"
                        class="card-img-top" alt="예시">
                    <div class="card-body">
                        <p class="card-text">
                            동화같은 숲 속 세상을 그리는 김지연 작가 <br>
                            2024.06.12<br>
                            유년시절 기억 속 자연은 신비로운 놀이터였다는 김지연 작가.<br>
                            모두의 동심을 불러일으키는 토끼가 뛰노는 오묘한 숲 속,<br>
                            가장 보통의 순간에서 발견할 수 있는 아름다움의 가치를 작품 속에서 찾아보세요.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 수정 버튼 -->
        <div class="modibutton">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button">수정</button>
                <button class="btn btn-outline-danger" type="button">삭제</button>
            </div>
        </div>
    </div>
    <!-- 아티클 세부 페이지 (관리자용) 종료 -->
</template>

<script>
export default {
    
}
</script>

<style>
.modi-container {
    width: 60%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 여백 추가 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    background-color: #fff; /* 배경색 추가 */
    position: relative; /* 버튼 위치를 절대 위치로 설정하기 위한 부모 컨테이너 설정 */
}

/* 제목과 카테고리 정렬 */
.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

/* 카드 컨테이너 */
.card-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

/* 버튼 컨테이너 */
.modibutton {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

/* 버튼 스타일 */
.btn {
    background-color: #FD8E4C;
    border: none;
    padding: 5px 10px; /* 버튼 크기 조정 */
    font-size: 14px; /* 버튼 폰트 크기 조정 */
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
