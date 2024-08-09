<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { useBannerStore } from "@/stores/bannerstore.js";
import { addAnimation, removeAnimation } from "@/assets/js/animation.js";
import { useAuthStore } from "@/stores/auth";

const notifications = ref([]);

const latestNotification = computed(() => {
  return notifications.value.length > 0 ? notifications.value[0] : null;
});

const bannerStore = useBannerStore();
const authStore = useAuthStore();

const closeBanner = () => {
  bannerStore.toggleBanner();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
async function fetchNotifications() {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/notification');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// 컴포넌트가 마운트될 때 공지사항을 가져옵니다.
onMounted(fetchNotifications);
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          to="/"
          @mouseover="addAnimation"
          @mouseleave="removeAnimation"
          >FLUX
        </router-link>
        <div class="d-flex align-items-center ms-auto mr-20">
          <div class="nav-item ms-3">
            <div v-if="authStore.isAuthenticated">
              <router-link to="/mypage" class="nav-link point-link">{{
                authStore.user ? authStore.user.name : "Profile"
              }}</router-link>
            </div>
            <div v-else>
              <router-link to="/login" class="nav-link point-link"
                >Login</router-link
              >
            </div>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/market">Market</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/article">Article</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ranking">Ranking</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link point-link" to="/sales"
                >Sales</router-link
              >
            </li>
            <li class="nav-item">
              <form class="d-flex ms-2 search-form" role="search">
                <input
                  class="form-control me-2 custom-search-input"
                  type="search"
                  placeholder="검색어를 입력해주세요"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success custom-search-button"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="banner"
      v-if="bannerStore.isBannerVisible && latestNotification"
    >
      <div class="banner-align">
        <strong class="banner-contents"
          >🛠️ 공지사항 : {{ latestNotification.title }} |
          {{
            formatDate(
              latestNotification.noticeCreateAt ||
                latestNotification.noticeUpdateAt
            )
          }}
        </strong>
        <button @click="closeBanner" class="close-btn">X</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  padding-top: 1em !important;
  padding-bottom: 1em !important;
}

.navbar-collapse {
  flex-grow: 0 !important;
}

.mr-20 {
  margin-right: 20px;
}

.bg-body-tertiary {
  background-color: #000 !important;
}

.navbar-brand {
  font-family: "PuradakGentleGothicR";
  color: #febe98;
  font-size: 36px;
  margin-left: 20px;
}

.nav-link {
  color: #fff;
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  margin-left: 5px;
}

.point-link {
  color: #fd8e4c !important;
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
  color: #febe98; /* 밝은 텍스트 색상 */
  border: 1px solid #febe98; /* 경계 색상 */
  border-radius: 0.25rem; /* 약간의 둥근 모서리 */
  max-width: 180px;
}

.custom-search-input::placeholder {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #febe98; /* 플레이스홀더 색상 */
}

.custom-search-button {
  background-color: #febe98; /* 버튼 배경 색상 */
  border-radius: 0.25rem; /* 약간의 둥근 모서리 */
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #fff;
  width: auto;
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

.banner {
  background-color: #febe98;
  color: #000;
  padding: 10px;
  border: 1px solid #f5c6cb;
  font-family: "LINESeedKR-Bd";
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  z-index: 10;
}
.banner-align {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-contents {
  letter-spacing: 1px;
  margin-right: 20px;
}
.close-btn {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 992px) {
  .navbar-nav .nav-item,
  .navbar-nav form {
    display: flex !important; /* Ensure the items are displayed in smaller screens */
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .navbar-nav form {
    margin-top: 10px; /* Adjust margin as needed */
  }
  .mr-20 {
    margin-right: 5px;
  }
  .dropdown-menu {
    right: 0 !important;
    left: auto !important;
  }
  .banner {
    font-size: 10px;
  }
}
</style>
