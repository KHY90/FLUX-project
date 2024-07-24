<template>
    <div class="wrapper sticky-sm-top">
      <div class="bg-dark border-right sidebar-con d-flex flex-column" id="sidebar-wrapper">
        <div class="sidebar-heading sidebar-title">Article</div>
        <div class="list-group list-group-flush">
          <div class="sidebar-heading">
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">작가인터뷰</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">상품소개</a>
            <a href="#" class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text">More</a>
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
    font-size: 12px;
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
  