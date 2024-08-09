<template>
  <div class="mt-95 pt-md-4 border-top">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-4 mb-4" v-for="market in paginatedMarkets" :key="market.marketId">
          <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
            <router-link :to="'/market/detail/' + market.marketId">
              <img
                :src="market.marketImgs[0]"
                :alt="market.marketTitle"
                class="zoom-in img-fluid"
                style="height: 300px; object-fit: cover; width: 100%;"
              />
            </router-link>  
          </div>
          <div class="mt-3">
            <h5 class="font-weight-bold text-dark">
              <a href="#" @click.prevent="goToDetails(market.marketId)">
                {{ market.marketTitle }}
              </a>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const market = ref([]);
const currentPage = ref(1);
const itemsPerPage = ref(9);
const router = useRouter();

const totalPages = computed(() => {
  return Math.ceil(market.value.length / itemsPerPage.value);
});

const paginatedMarkets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return market.value.slice(start, end);
});

const fetchMarkets = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/market');
    if (Array.isArray(response.data)) {
      market.value = response.data;
    } else {
      console.error('Data fetched is not an array:', response.data);
    }
  } catch (error) {
    console.error('Error fetching markets:', error);
  }
};

const goToDetails = (marketId) => {
  router.push({ name: 'MarketDetail', params: { marketId } });
};

const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

onMounted(fetchMarkets);
</script>

<style scoped>
.pt-md-4 {
  padding-top: 4rem;
}
.border-top {
  border-top: 1px solid #dee2e6;
}
.text-dark {
  color: #343a40;
}
.text-muted {
  color: #6c757d;
}
.hover-card {
  transition: transform 0.2s;
}
.hover-card:hover {
  transform: scale(1.05);
}
.zoom-in {
  transition: transform 0.2s;
}
.zoom-in:hover {
  transform: scale(1.1);
}
</style>
