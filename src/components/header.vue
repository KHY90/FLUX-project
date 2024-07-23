<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FLUX</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Market</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ranking</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Article</a>
          </li>
          <li class="nav-item">
            <a class="nav-link point-link" href="#">Sale</a>
          </li>
        </ul>
        <div class="d-flex align-items-center ms-auto position-relative">
          <div v-if="isLoggedIn" class="nav-item dropdown d-flex align-items-center">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/src/assets/image/fluxthumbnail.png" alt="Profile" class="img-thumbnail profile-icon">
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">위시리스트</a></li>
              <li><a class="dropdown-item" href="#">활동내역</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">내정보수정</a></li>
              <li><a class="dropdown-item" href="#">계정관리</a></li>
              <li><a class="dropdown-item" href="#">로그아웃</a></li>
            </ul>
          </div>
          <div v-else class="nav-item ms-3">
            <a class="nav-link point-link" href="#" @click="login">Login</a>
          </div>
          <form class="d-flex ms-3 search-form" role="search">
            <input class="form-control me-2 custom-search-input" type="search" placeholder="검색어를 입력해주세요" aria-label="Search">
            <button class="btn btn-outline-success custom-search-button" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isLoggedIn: false // 로그인 상태를 나타내는 변수
    };
  },
  methods: {
    login() {
      // 로그인 로직을 여기에 추가합니다
      this.isLoggedIn = true;
    }
  }
}
</script>

<style scoped>
.navbar {
  padding-top: 1em !important;
  padding-bottom: 1em !important;
}

.bg-body-tertiary {
  background-color: #000 !important;
}

.navbar-brand {
  font-family: 'PuradakGentleGothicR';
  color: #FEBE98;
  font-size: 36px;
  margin-left: 20px;
}

.nav-link {
  color: #fff;
  font-family: 'LINESeedKR-Bd';
  font-size: 16px;
  margin-left: 5px;
}

.point-link {
  color: #FD8E4C !important;
}


.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.profile-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover; /* This ensures the image covers the entire container without distortion */
}

.img-thumbnail {
  padding: 0 !important;
  border: none !important;
}

.search-form {
  max-width: 300px; /* Set the maximum width for the search form */
}

.custom-search-input {
  background-color: #222; /* 어두운 배경 색상 */
  color: #FEBE98; /* 밝은 텍스트 색상 */
  border: 1px solid #FEBE98; /* 경계 색상 */
  border-radius: 0.25rem; /* 약간의 둥근 모서리 */
  padding: 0.5rem 1rem; /* 패딩 조정 */
}

.custom-search-input::placeholder {
  font-family: 'LINESeedKR-Bd';
  font-size: 12px;
  color: #FEBE98; /* 플레이스홀더 색상 */
}

.custom-search-button {
  background-color: #FEBE98; /* 버튼 배경 색상 */
  color: #000; /* 버튼 텍스트 색상 */
  border: 1px solid #FEBE98; /* 버튼 경계 색상 */
  border-radius: 0.25rem; /* 약간의 둥근 모서리 */
  padding: 0.5rem 1rem; /* 패딩 조정 */
  font-family: 'LINESeedKR-Bd';
  color: #fff;
}

.custom-search-button:hover {
  background-color: #e1a77c; /* 호버 상태 배경 색상 */
  border-color: #e1a77c; /* 호버 상태 경계 색상 */
}

.dropdown-menu {
  position: absolute;
  top: 40px; /* 부모 요소 아래에 위치 */
  left: 0; /* 부모 요소 왼쪽 정렬 */
  right: auto; /* 기본 값 */
  z-index: 1000; /* 헤더 아래에 뜨도록 z-index 설정 */
}

@media (max-width: 992px) {
  .navbar-nav .nav-item,
  .navbar-nav form {
    display: flex !important; /* Ensure the items are displayed in smaller screens */
    flex-direction: column;
    align-items: center;
  }
  .navbar-nav form {
    margin-top: 10px; /* Adjust margin as needed */
  }
}
</style>
