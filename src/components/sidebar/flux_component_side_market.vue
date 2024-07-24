<template>
    <div class="d-flex" id="wrapper">
      <!-- Sidebar -->
      <div class="bg-dark border-right sidebar-con d-flex flex-column" id="sidebar-wrapper">
        <div class="sidebar-heading sidebar-title">마켓</div>
        <div class="list-group list-group-flush">
          <div class="sidebar-heading">
            <div class="sidebar-title d-flex">카테고리</div>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">가죽공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">목공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">도자기공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">금속공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">종이공예</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">More</a>
          </div>
          <div class="sidebar-heading">
            <div class="sidebar-title d-flex">추천상품</div>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">
                <img src="/src/assets/image/img1.png" class="sidebar-img" />
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">
                <img src="/src/assets/image/img1.png" class="sidebar-img" />
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">
                <img src="/src/assets/image/img1.png" class="sidebar-img" />
            </a>
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
  #wrapper {
    height: 800px;
  }
  
  #sidebar-wrapper {
    width: 300px;
  }
  
  .sidebar-con {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-top-right-radius: 8px; /* 좌상단 곡률 */
    border-bottom-right-radius: 8px; /* 좌하단 곡률 */
  }
  
  .sidebar-heading {
    font-size: 1.5rem;
    padding: 1rem;
    color: white;
  }
  
  .sidebar-title {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: white;
  }
  
  .sidebar-text {
    color: white;
    width: 100%;
    text-align: left;
  }
  
  .sidebar-img {
    width: auto;
    height: 50px;
  }
  .sidebar-title{
    font-family: "LINESeedKR-Bd";
    font-size: 21px;
    color: #FD8E4C;
    margin-left: 10px;
  }
  .sidebar-text{
    font-family: "LINESeedKR-Bd";
    font-size: 16px;
    color: #FFFFFF;
  }
  
  .list-group-item {
    border: none !important;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }
  }
  </style>
  