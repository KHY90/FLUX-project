<template>
    <div class="wrapper">
      <div class="border-right sidebar-con d-flex flex-column" id="sidebar-wrapper">
        <div class="sidebar-heading sidebar-title">DashBoard</div>
        <div class="list-group list-group-flush">
          <div class="sidebar-heading">
            <router-link class="list-group-item list-group-item-action pl-4 sidebar-text" to="/manager">홈화면</router-link>
            <hr>
            <a href="#" class="list-group-item list-group-item-action pl-4 sidebar-text">회원목록</a>
            <a href="#" class="list-group-item list-group-item-action pl-4 sidebar-text">회원권한설정</a>
            <hr>
            <router-link class="list-group-item list-group-item-action pl-4 sidebar-text" to="/manager/article/articlelist">아티클목록</router-link>
            <router-link class="list-group-item list-group-item-action pl-4 sidebar-text" to="/manager/article/articlepost">아티클등록</router-link>
            <hr>
            <a href="#" class="list-group-item list-group-item-action pl-4 sidebar-text">공지목록</a>
            <a href="#" class="list-group-item list-group-item-action pl-4 sidebar-text">공지등록</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ManagerSide',
  }
  </script>
  
  <style scoped>
  .wrapper {
    background-color: #000 !important;
    border-top-right-radius: 10px; /* 좌상단 곡률 */
    border-bottom-right-radius: 10px; /* 좌하단 곡률 */
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
    color: #1244AF;
    margin-top: 30px;
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
    background-color: #000 !important;
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
  