<template>
    <div class="wrapper sticky-sm-top">
      <div class="bg-dark border-right sidebar-con d-flex flex-column" id="sidebar-wrapper">
        <div class="sidebar-heading sidebar-title">Market</div>
        <div class="list-group list-group-flush">
          <div class="sidebar-heading">
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">가죽공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">목공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">도자기공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">금속공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">종이공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">More</a>
          </div>
          <div class="sidebar-heading">
            <div class="d-flex position-relative mb-1">
                <img src="/src/assets/image/img1.png" class="flex-shrink-0 me-3" alt="추천상품1">
                <div>
                    <div class="mt-0 title-link">상품제목</div>
                    <a href="#" class="stretched-link title-link2">상세보기</a>
                </div>
            </div>
            <div class="d-flex position-relative mb-1">
                <img src="/src/assets/image/img1.png" class="flex-shrink-0 me-3" alt="추천상품2">
                <div>
                    <div class="mt-0 title-link">상품제목2</div>
                    <a href="#" class="stretched-link title-link2">상세보기</a>
                </div>
            </div>
            <div class="d-flex position-relative mb-3">
                <img src="/src/assets/image/img1.png" class="flex-shrink-0 me-3" alt="추천상품3">
                <div>
                    <div class="mt-0 title-link">상품제목3</div>
                    <a href="#" class="stretched-link title-link2">상세보기</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  }
  </script>
  
  <style scoped>
  .wrapper {
    height: 100%;
  }
  
  #sidebar-wrapper {
    width: 250px;
  }
  
  .sidebar-con {
    width: 250px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-top-right-radius: 10px; /* 좌상단 곡률 */
    border-bottom-right-radius: 10px; /* 좌하단 곡률 */
  }
  
  .sidebar-heading {
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
  }
  
  .sidebar-img {
    width: auto;
    height: 50px;
  }
  
  .sidebar-title {
    font-family: "LINESeedKR-Bd";
    font-size: 28px;
    color: #FD8E4C;
  }
  
  .sidebar-subtitle {
    font-family: "LINESeedKR-Bd";
    font-size: 21px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  .sidebar-text {
    font-family: "LINESeedKR-Bd";
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
  }
  .title-link{
    font-family: "LINESeedKR-Bd";
    font-size: 14px;
    color: #FFFFFF;
  }
  .title-link2{
    font-family: "LINESeedKR-Bd";
    font-size: 10px;
    color: #FFFFFF;
  }
  
  .list-group-item {
    border: none !important;
  }
  
  @media (max-width: 992px) {
    #sidebar-wrapper {
      margin-left: 0;
    }
    .wrapper{
        display: none !important;
    }
  }
  </style>
  