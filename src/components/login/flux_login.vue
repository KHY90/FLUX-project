<template>
  <div class="page-container">
    <div class="login-container">
      <div class="row no-gutters h-100">
        <div class="col-md-6 login-image">
          <img :src="randomImage" alt="Login Image" class="img-fluid" />
        </div>
        <div
          class="col-md-6 login-form d-flex flex-column justify-content-center align-items-center"
        >
          <div class="login-subtitle mb-3">LOGIN</div>
          <div class="login-title mb-5">FLUX</div>
          <div class="login-text">
            FLUX는 시장의 유동성과 역동적인 본질을 담아내며 디지털 상거래의
          </div>
          <div class="login-text mb-2">
            끊임없이 변화하는 풍경을 독보적인 정밀성과 민첩성으로 포착합니다
          </div>
          <div class="login-text">
            "FLUX"라는 이름은 지속적인 움직임과 변화를 의미하며
          </div>
          <div class="login-text mb-5">
            경매 경험을 혁신하고 변화에 신속히 대응하는 우리의 의지를
            반영합니다.
          </div>
          <a href="" class="mb-3"><img src="/src/assets/image/google.png" /></a>
          <a href="" class="mb-3"><img src="/src/assets/image/kakao.png" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      images: [
        "/src/assets/image/loginpage/login01.webp",
        "/src/assets/image/loginpage/login02.webp",
        "/src/assets/image/loginpage/login03.webp",
        "/src/assets/image/loginpage/login04.webp",
        "/src/assets/image/loginpage/login05.webp",
        "/src/assets/image/loginpage/login06.webp",
      ],
      randomImage: "",
    };
  },
  methods: {
    getRandomImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      return this.images[randomIndex];
    },
  },
  mounted() {
    this.randomImage = this.getRandomImage();
  },
};
</script>

<style scoped>
.page-container {
  height: 100vh; /* 페이지 높이를 화면의 100%로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
}

.login-container {
  height: 85%;
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
  display: flex;
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.row.no-gutters.h-100 {
  height: 100%;
  margin-right: 0;
  margin-left: 0;
}

.login-image {
  padding: 0;
  border-top-left-radius: 30px; /* 좌상단 곡률 */
  border-bottom-left-radius: 30px; /* 좌하단 곡률 */
}

.login-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 30px; /* 좌상단 곡률 */
  border-bottom-left-radius: 30px; /* 좌하단 곡률 */
}

.login-form {
  background-color: #ffe9dd;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 30px; /* 좌상단 곡률 */
  border-bottom-right-radius: 30px; /* 좌하단 곡률 */
}

.btn-social {
  width: 80%;
  color: #fff;
  font-family: "LINESeedKR-Bd";
}

.btn-facebook {
  background-color: #3b5998;
}

.btn-google {
  background-color: #db4437;
}

.btn-twitter {
  background-color: #1da1f2;
}

.btn-social i {
  margin-right: 8px;
}

.login-title {
  font-family: "PuradakGentleGothicR";
  color: #febe98;
  font-size: 46px;
  margin-bottom: 30px;
  letter-spacing: 10px;
}

.login-subtitle {
  font-family: "PuradakGentleGothicR";
  color: #fd8e4c;
  font-size: 36px;
  margin-bottom: 30px;
  letter-spacing: 10px;
}

.login-text {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  background: linear-gradient(to right top, #febe98, #fd8e4c);
  color: transparent;
  -webkit-background-clip: text;
  letter-spacing: 1px;
}
</style>
