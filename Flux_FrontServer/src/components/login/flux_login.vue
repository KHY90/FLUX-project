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
          <div class="login-title mb-5">FLUX | LOGIN</div>
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
          <!-- <a :href="googleLoginUrl" class="mb-3 btn-google">
            <img src="@/assets/image/google.png" alt="Google Login" />
          </a> -->
          <div id="naver_id_login"></div>
          <div class="login-button mt-3">
            <button type="button" class="btn btn-light">
              <router-link to="/" class="no-underline">홈으로</router-link>
            </button>
          </div>
          <div class="login-right text-center mt-5">
            <p class="mb-0">© 2024 FLUX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const googleLoginUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?scope=email&response_type=code&client_id=1009714069325-ktbie6b6ipt0m71dkdgv21gnqsnk11l4.apps.googleusercontent.com&redirect_uri=http://localhost:8000/login/oauth2/code/google";
const images = [
  "/src/assets/image/loginpage/login01.webp",
  "/src/assets/image/loginpage/login02.webp",
  "/src/assets/image/loginpage/login03.webp",
  "/src/assets/image/loginpage/login04.webp",
  "/src/assets/image/loginpage/login05.webp",
  "/src/assets/image/loginpage/login06.webp",
];
const randomImage = ref("");

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

onMounted(() => {
  randomImage.value = getRandomImage();
  const naver_id_login = new window.naver_id_login(
    "teR1JDcGa4Dv2AAhrfpv",
    "http://localhost:8000/login/oauth2/code/naver"
  );
  const state = naver_id_login.getUniqState();
  naver_id_login.setButton("white", 2, 40); // 버튼 설정
  naver_id_login.setState(state);
  naver_id_login.init_naver_id_login();
});
</script>

<style scoped>
.page-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
}

.login-container {
  height: 85%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  border-radius: 35px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.row.no-gutters.h-100 {
  height: 100%;
  margin-right: 0;
  margin-left: 0;
}

.login-image {
  padding: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.login-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.login-form {
  background-color: #ffe9dd;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.btn-google img {
  width: 150px;
}

.login-title {
  font-family: "PuradakGentleGothicR";
  background: linear-gradient(to right, #febe98, #fd8e4c);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 46px;
  margin-bottom: 30px;
  letter-spacing: 3px;
}

.login-text {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  background: linear-gradient(to right, #febe98, #fd8e4c);
  color: transparent;
  -webkit-background-clip: text;
  letter-spacing: 1px;
}

.login-button {
  display: flex;
  gap: 20px;
}

.no-underline {
  text-decoration: none;
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  color: #000;
}

.login-right {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  background: linear-gradient(to right, #febe98, #fd8e4c);
  color: transparent;
  -webkit-background-clip: text;
  letter-spacing: 3px;
}
</style>
