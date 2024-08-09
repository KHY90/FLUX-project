<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useNotiStore } from "@/stores/rootstore";

const store = useNotiStore();
const notifications = ref([]);
const router = useRouter();

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const fetchNotifications = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/notification");
    notifications.value = response.data.reverse().map((notification) => ({
      ...notification,
    }));
    store.setNotifications(notifications.value);
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
};

const goToDetail = (noticeId) => {
  router.push(`/notice/${noticeId}`); // Correct path for detail view
};


onMounted(fetchNotifications);
</script>

<template>
  <div class="noti-con">
    <div class="noti-title">공지사항</div>
    <ul>
      <li
        v-for="notification in notifications"
        :key="notification.noticeId"
        @click="goToDetail(notification.noticeId)"
      >
        <div class="noti-content">
          <div class="noti-id">{{ notification.noticeId }}</div>
          <div class="noti-text">{{ notification.noticeTitle }}</div>
          <div class="noti-date">
            {{ formatDate(notification.noticeCreateAt) }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

li {
  cursor: pointer;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  font-family: "LINESeedKR-Bd";
  font-size: 14px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
}

li:hover {
  background-color: #f0f0f0;
}

.noti-con {
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 80%;
}

.noti-title {
  font-family: "LINESeedKR-Bd";
  font-size: 32px;
  margin-left: 30px;
}

.noti-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.noti-id,
.noti-text,
.noti-date {
  flex: 1;
}

.noti-id {
  flex: 0 1 auto;
  margin-right: 10px;
}

.noti-text {
  flex: 2;
  margin-right: 10px;
}

.noti-date {
  flex: 1;
  text-align: right;
}

@media (max-width: 992px) {
  li {
    font-size: 12px;
  }
}
</style>
