<template>
  <footer class="footer text-light py-3 bg-body-tertiary">
    <div class="container-fluid px-0">
      <div class="row no-gutters">
        <div class="col-md-1 text-center">
          <div class="text-uppercase1">FLUX</div>
          <div class="social-icons">
            <a href="https://github.com/Flux2024" class="text-light"></a>
            <img src="/src/assets/image/github.svg" alt="github" class="social-icon" />
          </div>
        </div>
        <div class="col-md-2 text-center other-content">
          <h5 class="text-uppercase">이용안내</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light no-underline">아티스트센터</a></li>
            <li><a href="#" class="text-light no-underline">리셀문의</a></li>
          </ul>
        </div>
        <div class="col-md-2 text-center other-content">
          <h5 class="text-uppercase">고객센터</h5>
          <ul class="list-unstyled">
            <li><div class="text-light no-underline" @click="aboutFlux">About FLUX</div></li>
            <li><router-link to="/notice" class="text-light no-underline">공지사항</router-link></li>
            <li><a href="#" class="text-light no-underline">자주묻는질문</a></li>
          </ul>
        </div>
        <div class="col-md-2 text-left other-content">
          <h5 class="text-uppercase">고객센터 운영 안내</h5>
          <p class="text-light">
            운영시간 09:00 ~ 18:00(공휴일 휴무)<br />
            점심시간 평일 13:20~14:20<br />
            1:1 채팅 상담은 FLUX카카오채널에서 운영됩니다.<br />
          </p>
          <button class="chat-button">1:1 채팅상담</button>
        </div>
        <div class="mt-3 w-100">
          <div class="col-12 text-center">
            <p class="mb-0">© 2024 FLUX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Swal from 'sweetalert2';

function aboutFlux() {
  Swal.fire({
    title: `기여자 : 강형석, 김화연,<br/> 주순태, 목진희`,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://steamuserimages-a.akamaihd.net/ugc/2055373930157017253/8363DAB489ECF4B57F27F7272969DEC8E0C4C920/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")
      left top
      no-repeat
    `
  });
}
</script>

<style scoped>
.footer {
  background-color: #000 !important;
  color: #febe98;
  width: 100%;
  padding: 0;
  margin-top: 50px;
}

.row {
  justify-content: space-evenly !important;
}

.footer .col-md-2,
.footer .col-md-3,
.footer .col-md-4 {
  padding: 0.5rem;
}

.footer a {
  color: #febe98;
  text-decoration: none; /* 밑줄 제거 */
}

.footer a:hover {
  color: #e1a77c;
  text-decoration: underline; /* 호버 시 밑줄 추가 */
}

.footer .fab,
.footer .fas {
  font-size: 1.25rem;
}

.footer p,
.footer h5 {
  margin: 0.5rem 0;
}

.text-uppercase1 {
  font-family: 'PuradakGentleGothicR';
  color: #febe98;
  font-size: 36px;
  margin: 0.5rem 0;
}

.text-uppercase {
  font-family: 'LINESeedKR-Bd';
  font-size: 18px;
  color: #fd8e4c;
}

.text-light {
  font-family: 'LINESeedKR-Bd';
  font-size: 14px;
}

.list-unstyled {
  font-family: 'LINESeedKR-Bd';
  font-size: 14px;
}

.mb-0 {
  font-family: 'LINESeedKR-Bd';
  font-size: 12px;
  color: #999;
}

.social-icon {
  width: 35px; /* 이미지 너비 설정 */
  height: 35px; /* 이미지 높이 설정 */
}
.chat-button {
  background-color: yellow; /* 노란색 배경 */
  color: black; /* 검은색 텍스트 */
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px; /* 모서리 둥글게 */
}

@media (max-width: 992px) {
  .footer .other-content {
    display: none;
  }
}
</style>
