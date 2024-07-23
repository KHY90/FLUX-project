<template>
    <!-- 아티클 세부 페이지 시작 -->
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
    <!-- 아티클 세부 페이지 종료 -->

    <!-- 연관 작품 시작 -->
    <div class="related-products-container">
        <div class="relatedProducts">
            <h3> 연관 상품 </h3>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeIU9TJooa6UAa5sQPlXI2ldOean8XEScPg&s"
                        class="card-img-top" alt="예시">
                    <div class="card-body">
                        <h5 class="card-title">작가 이름</h5>
                        <h6 class="card-title">작품 이름</h6>
                        <p class="card-text">판매 상태 Y/N</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeIU9TJooa6UAa5sQPlXI2ldOean8XEScPg&s"
                        class="card-img-top" alt="예시">
                    <div class="card-body">
                        <h5 class="card-title">작가 이름</h5>
                        <h6 class="card-title">작품 이름</h6>
                        <p class="card-text">판매 상태 Y/N</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeIU9TJooa6UAa5sQPlXI2ldOean8XEScPg&s"
                        class="card-img-top" alt="예시">
                    <div class="card-body">
                        <h5 class="card-title">작가 이름</h5>
                        <h6 class="card-title">작품 이름</h6>
                        <p class="card-text">판매 상태 Y/N</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 연관 작품 종료 -->
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .article-container .top {
      display: flex;
  flex-direction: column;
  align-items: center;
text-align: center;
  }

  .article-container .top .category{
    margin-bottom: 10px;
  }
  
  .article-container, .related-products-container {
    width: 100%;
    max-width: 1200px; /* 전체 너비를 제한 */
  }
  
  .article-container {
    margin-top: 20px;
    padding: 20px;
  }
  
  .related-products-container {
    margin-top: 20px;
    padding: 20px;
  }
  
  .card-container {
    display: flex;
    justify-content: center; /* 카드 중앙 정렬 */
  }
  
  .card {
    max-width: 100%;
    width: 100%;
    max-width: 600px; /* 카드의 최대 너비 설정 */
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .col {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
</style>
  