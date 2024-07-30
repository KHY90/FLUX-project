<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FLUX</a>
            <div class="d-flex align-items-center ms-auto mr-20">
                <div class="nav-item dropdown d-flex align-items-center">
                    <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <img
                        src="/src/assets/image/fluxthumbnail.png"
                        alt="Profile"
                        class="img-thumbnail profile-icon"
                    />
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">위시리스트</a></li>
                    <li><a class="dropdown-item" href="#">활동내역</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">내정보수정</a></li>
                    <li><a class="dropdown-item" href="#">계정관리</a></li>
                    <li><a class="dropdown-item" href="#">로그아웃</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "ManagerHeader",
  };
  </script>
  
  <style scoped>
  .navbar {
    padding-top: 1em !important;
    padding-bottom: 1em !important;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .navbar-collapse {
    flex-grow: 0 !important;
  }
  
  .mr-20 {
    margin-right: 20px;
  }
  
  .bg-body-tertiary {
    background-color: #189AED !important;
  }
  
  .navbar-brand {
    font-family: "PuradakGentleGothicR";
    color: #fff;
    font-size: 36px;
    margin-left: 20px;
  }
  
  .nav-link {
    color: #fff;
    font-family: "LINESeedKR-Bd";
    font-size: 16px;
    margin-left: 5px;
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
  
  .dropdown-menu {
    position: absolute;
    top: 40px; /* 부모 요소 아래에 위치 */
    left: auto; /* 부모 요소 왼쪽 정렬 */
    right: 0; /* 기본 값 */
    z-index: 1000; /* 헤더 아래에 뜨도록 z-index 설정 */
  }
  
  @media (max-width: 992px) {
    .navbar-nav .nav-item,
    .mr-20 {
      margin-right: 5px;
    }
    .dropdown-menu {
      right: 0 !important;
      left: auto !important;
    }
  }
  </style>
  