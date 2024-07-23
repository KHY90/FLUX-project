<template>
    <footer class="footer bg-dark text-light">
      <div class="container-fluid px-0">
        <div class="row no-gutters">
            <div class="col-md-2 text-center">
          <div class="text-uppercase1">FLUX</div>
          <div class="social-icons">
            <a href="https://github.com/Flux2024" class="text-light me-2">
              <img src="/src/assets/image/github.svg" alt="github" class="social-icon">
            </a>
          </div>
          </div>
          <div class="col-md-3 text-center">
            <h5 class="text-uppercase">이용안내</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light no-underline">아티스트센터</a></li>
              <li><a href="#" class="text-light no-underline">리셀문의</a></li>
            </ul>
          </div>
          <div class="col-md-3 text-center">
            <h5 class="text-uppercase">이용안내</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light no-underline">공지사항</a></li>
              <li><a href="#" class="text-light no-underline">자주묻는질문</a></li>
              <li><a href="#" class="text-light no-underline">뉴스룸</a></li>
              <li><a href="#" class="text-light no-underline">마케팅문의</a></li>
            </ul>
          </div>
          <div class="col-md-3 text-left">
            <h5 class="text-uppercase">고객센터 운영 안내</h5>
            <div class="text-light">운영시간 09:00 ~ 18:00(공휴일 휴무)</div>
            <div class="text-light">점심시간 평일 13:20~14:20</div>
            <div class="text-light">1:1 채팅 상담은 FLUX카카오채널에서 운영됩니다.</div>
            <div class="text-light">1:1 채팅상담</div>
          </div>
          <div class="row mt-3 w-100">
            <div class="col-12 text-center">
              <p class="mb-0">© 2024 FLUX. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #000 !important;
    color: #FEBE98;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
  .footer .container-fluid {
    padding: 0;
    margin: 0;
  }
  
  .footer .row.no-gutters {
    margin: 0;
    padding: 0;
  }
  
  .footer .col-md-2, .footer .col-md-3, .footer .col-md-4 {
    padding: 0.5rem;
  }
  
  .footer a {
    color: #FEBE98;
    text-decoration: none; /* 밑줄 제거 */
  }
  
  .footer a:hover {
    color: #e1a77c;
    text-decoration: underline; /* 호버 시 밑줄 추가 */
  }
  
  .footer .fab, .footer .fas {
    font-size: 1.25rem;
  }
  
  .footer p, .footer h5 {
    margin: 0.5rem 0;
  }
  
  .text-uppercase1 {
    font-family: 'PuradakGentleGothicR';
    color: #FEBE98;
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .text-uppercase {
    font-family: 'LINESeedKR-Bd';
    font-size: 18px;
    color: #FD8E4C;
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
  </style>
  