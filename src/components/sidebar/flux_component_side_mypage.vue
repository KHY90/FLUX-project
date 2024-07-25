<template>
  <div class="wrapper sticky-sm-top">
    <div
      class="bg-dark border-right sidebar-con d-flex flex-column"
      id="sidebar-wrapper"
    >
      <div class="sidebar-heading sidebar-title">Mypage</div>
      <div class="list-group list-group-flush">
        <div class="sidebar-heading">
          <router-link
            to="/mypage/wishlist"
            class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text"
            @click="setRoot('wishlist')"
          >
            위시리스트
          </router-link>
          <router-link
            to="/mypage/activity"
            class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text"
            @click="setRoot('activity')"
          >
            활동내역
          </router-link>
          <router-link
            to="/mypage/withdrawal"
            class="list-group-item list-group-item-action bg-dark pl-4 sidebar-text"
            @click="setRoot('withdrawal')"
          >
            회원탈퇴
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMypageStore } from "@/stores/rootstore"; // Pinia 스토어 경로에 맞게 수정

const store = useMypageStore();
const setRoot = (option) => {
  store.setRoot(option);
};
</script>

<style scoped>
.wrapper {
  height: 100%;
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
  border-top-right-radius: 10px; /* 좌상단 곡률 */
  border-bottom-right-radius: 10px; /* 좌하단 곡률 */
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
  color: #fd8e4c;
}

.sidebar-subtitle {
  font-family: "LINESeedKR-Bd";
  font-size: 21px;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sidebar-text {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}
.title-link {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #ffffff;
}
.title-link2 {
  font-family: "LINESeedKR-Bd";
  font-size: 10px;
  color: #ffffff;
}

.list-group-item {
  border: none !important;
}

@media (max-width: 992px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
  .wrapper {
    display: none !important;
  }
}
</style>
