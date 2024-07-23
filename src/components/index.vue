<template>
    <!-- 베너 영역 시작 -->
    <section class="banner">
      <div class="card text-bg-dark">
        <img
          src="https://cdn.newscj.com/news/photo/202012/675804_677333_0328.jpg"
          class="card-img"
          alt="나주 자미공방의 섬유공예 작품"
        />
        <div class="card-img-overlay">
          <h5 class="card-title">베너 영역</h5>
          <p class="card-text">나주 자미공방</p>
          <p class="card-text"><small>섬유공예</small></p>
        </div>
      </div>
    </section>
    <!-- 베너 영역 종료 -->
  
    <!-- 경매 진행 중 상품들 영역 시작 -->
    <section class="items">
      <p>
        <h1>
          경매 진행 중인 상품들
        </h1>
      </p>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(item, index) in items" :key="index">
          <div class="card fixed-size-card">
            <img
              :src="item.img"
              class="card-img-top fixed-size-img"
              :alt="`${index + 1}번`"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title"> {{ index + 1 }}번 상품 </h5>
              <p class="card-text"> {{ index + 1 }}번의 가격은 {{ item.price }}만원 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 경매 진행 중 상품들 영역 종료 -->
  </template>
  
  <script>
  export default {
    name: 'Index',
    data() {
      return {
        items: [
          {
            img: "https://image.dongascience.com/Photo/2019/09/1568191092998.jpg",
            price: 5000
          },
          {
            img: "https://image.dongascience.com/Photo/2016/09/14750510356152.png",
            price: 15000
          },
          {
            img: "https://cafe24.poxo.com/ec01/tcupdog/UVTjSep0dwP4/wX7AtHyXJfVN/zRj7+5Idx1s+3zzFtjK4obRM8LODiYxO6isSo7aHOe3gIiEOM8PzqvdSWGVQ==/_/_dj/img/main_section_1_img2.jpg",
            price: 5000
          },
          {
            img: "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_270/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg",
            price: 5000
          }
        ]
      }
    }
  };
  </script>
  
  <style>
  /* 베너 css */
  .banner .card {
    margin-top: 20px;
  }
  
  .banner .card img {
    height: 60vh; /* 원하는 높이로 설정하세요 */
    object-fit: cover; /* 이미지가 왜곡되지 않도록 함 */
  }
  /* 베너 끝 */
  
  /* 아이템들 시작 */
  .items p {
    margin: 20px 0 0 20px;
  }
  .items .card {
    height: 500px; /* 카드 전체 높이 고정 */
    display: flex;
    flex-direction: column;
  }
  
  .items .card img {
    width: 100%; /* 부모 요소의 너비에 맞춤 */
    height: 400px; /* 고정된 높이 */
    object-fit: cover; /* 이미지가 왜곡되지 않도록 함 */
  }
  
  .items .card .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .row {
    margin: 10px 50px 10px 50px;
  }
  /* 아이템들 끝 */
  
  </style>
  