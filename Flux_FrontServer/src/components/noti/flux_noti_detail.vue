<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useNotiStore } from "@/stores/rootstore";

const store = useNotiStore();
const route = useRoute();
const router = useRouter();
const notification = ref(null);
const errorMessage = ref("");

// Fetch notification details
const fetchNotification = async () => {
  try {
    const noticeId = parseInt(route.params.id);
    const notice = store.notifications.find(n => n.noticeId === noticeId);
    
    if (notice) {
      notification.value = notice;
    } else {
      const response = await axios.get(`http://localhost:8080/api/v1/notification/${noticeId}`);
      notification.value = response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      errorMessage.value = "해당 공지사항을 찾을 수 없습니다.";
    } else {
      errorMessage.value = "공지사항을 가져오는 중 오류가 발생했습니다.";
    }
    console.error("Error fetching notification:", error);
  }
};

// Go back to the list page
const goToList = () => {
  router.push("/notice");
};

onMounted(fetchNotification);
</script>

<template>
  <div v-if="notification" class="noti-con">
    <div class="noti-title">공지사항</div>
    <div class="noti-card">
      <div class="noti-header">{{ notification.noticeTitle }}</div>
      <hr />
      <div class="noti-body">{{ notification.noticeContents }}</div>
      <div class="noti-footer">
        <div>
          작성일: {{ new Date(notification.noticeCreateAt).toLocaleString() }}
        </div>
        <div>
          수정일: {{ new Date(notification.noticeUpdateAt).toLocaleString() }}
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary" type="button" @click="goToList">
          목록으로
        </button>
      </div>
    </div>
  </div>
  <div v-else class="error-message">
    {{ errorMessage }}
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary" type="button" @click="goToList">
        목록으로
      </button>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 10px 0;
}

hr {
  margin-bottom: 30px;
}

.noti-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 90%;
}

.noti-title {
  font-family: "LINESeedKR-Bd";
  font-size: 32px;
  margin-bottom: 20px;
}

.noti-card {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-family: "LINESeedKR-Bd";
}

.noti-header {
  font-family: "LINESeedKR-Bd";
  font-size: 26px;
}

.noti-body {
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
  margin-bottom: 20px;
  height: 80%;
}

.noti-footer {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: left;
}
.noti-footer > div {
  margin-right: 20px;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: red;
  font-family: "LINESeedKR-Bd";
}
</style>
