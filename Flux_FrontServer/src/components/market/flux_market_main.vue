<template>
  <div class="mt-95 pt-md-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-4 mb-4" v-for="market in paginatedMarkets" :key="market.marketId">
          <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
            <div class="position-relative">
              <router-link :to="'/market/detail/' + market.marketId">
                <img
                  :src="market.marketImgs"
                  :alt="market.marketTitle"
                  class="zoom-in img-fluid"
                  style="height: 300px; object-fit: contain; width: 100%;"
                />
              </router-link>
              <div class="wish-icon" @click.stop="toggleWish(market.marketId)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  :class="{'text-danger': isWished(market.marketId)}"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <h5 class="font-weight-bold text-dark">
              <router-link :to="'/market/detail/' + market.marketId">
                {{ market.marketName }}
              </router-link>
            </h5>
            <p class="text-muted">{{ market.marketCategory }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mt-4">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
              </li>
              <li
                class="page-item"
                v-for="page in totalPages"
                :key="page"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useWishStore } from '@/stores/wish';
import { useAuthStore } from '@/stores/auth'; // 추가된 부분

const wishStore = useWishStore();
const authStore = useAuthStore(); // 추가된 부분
const market = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(9);
const router = useRouter();

// Total number of pages based on items per page
const totalPages = computed(() => {
  return Math.max(1, Math.ceil(market.value.length / itemsPerPage.value));
});

// Paginated list of markets
const paginatedMarkets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return market.value.slice(start, end);
});

// Fetch markets from API
const fetchMarkets = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/market');
    if (Array.isArray(response.data)) {
      market.value = response.data.map(marketItem => ({
        ...marketItem,
        marketImgs: marketItem.marketImgs.map(img => `http://localhost:8080${img}`)
      }));
      
      // Log updated URLs
      market.value.forEach(marketItem => {
        console.log('Market ID:', marketItem.marketId);
        console.log('Market Title:', marketItem.marketTitle);
        console.log('Market Images:', marketItem.marketImgs);
      });
      
    } else {
      console.error('Fetched data is not an array:', response.data);
    }
  } catch (error) {
    console.error('Error fetching markets:', error);
  }
};

// Check if a market is wished
const isWished = (marketId) => {
  return wishStore.isWished(marketId);
};

// Toggle wish status and sync with server
const toggleWish = async (marketId) => {
  const token = authStore.token;
  if (!token) {
    console.error('No JWT token found');
    router.push('/login'); // 로그인이 필요하다면 로그인 페이지로 리다이렉트
    return;
  }

  try {
    if (isWished(marketId)) {
      // Remove wish
      await axios.delete('http://localhost:8080/api/v1/wish', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        data: {
          marketId: marketId,
          userId: authStore.userId,
        }
      });
      wishStore.removeWish(marketId);
    } else {
      // Add wish
      await axios.post('http://localhost:8080/api/v1/wish', {
        marketId: marketId,
        userId: authStore.userId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      wishStore.addWish(marketId);
    }
  } catch (error) {
    console.error('Error toggling wish status:', error);
  }
};

// Change current page
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Fetch markets on mount
onMounted(() => {
  fetchMarkets();
});

// Watch for changes in the wished markets and update the list
watch(() => wishStore.wishedMarkets, (newWishedMarkets) => {
  market.value = market.value.map(marketItem => ({
    ...marketItem,
    wished: newWishedMarkets.has(marketItem.marketId)
  }));
}, { deep: true });
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s ease;
}
.hover-card:hover {
  transform: scale(1.05);
}
.wish-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.text-danger {
  color: red; /* 하트가 빨간색으로 변합니다. */
}
</style>
