<template>
  <!-- 베너 영역 시작 -->
  <section class="banner">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://cdn.newscj.com/news/photo/202012/675804_677333_0328.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://cdn.newscj.com/news/photo/202012/675804_677333_0328.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://cdn.newscj.com/news/photo/202012/675804_677333_0328.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
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
          <img :src="item.img" class="card-img-top fixed-size-img" :alt="`${index + 1}번`" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title"> {{ index + 1 }}번 상품 </h5>
            <p class="card-text"> {{ index + 1 }}번의 가격은 {{ item.price }}만원 </p>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="페이지 네비게이션 예시" class="d-flex justify-content-center">
      <ul class="pagination pagination-black">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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
.banner img {
  margin-top : 30px;
  margin-bottom: 30px;
  height: 70vh; /* 베너 높이 줄임 */
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

.pagination-black .page-link {
  color: black; /* 페이지 링크 색상을 검정색으로 */
}

.pagination-black .page-link:hover {
  background-color: #000; /* 링크 호버시 배경색을 검정색으로 */
  color: #fff; /* 링크 호버시 글자색을 흰색으로 */
}
/* 아이템들 끝 */
</style>
