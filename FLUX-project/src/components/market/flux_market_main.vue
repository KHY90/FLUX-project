<template>
  <!-- Main content -->
  <div class="mt-95 pt-md-4 border-top">
    <div class="container">
      <div class="row">
        <!-- Adjust the number of columns to fit 3 images per row -->
        <div class="col-12 col-sm-4 mb-4" v-for="market in market" :key="market.market_id">
          <div class="hover-card overflow-hidden lh-10 rounded-md position-relative">
            <a :href="`/market/detail/${market.market_id}`" class="text-decoration-none" @click.prevent="goToDetail(market.market_id)">
              <img
                :src="market.market_imgs"
                :alt="market.market_title"
                class="zoom-in img-fluid"
                style="height: 300px; object-fit: cover; width: 100%;"
              />
            </a>
          </div>
          <div class="mt-3">
            <h5 class="font-weight-bold text-dark">
              <a :href="`/market/detail/${market.market_id}`" class="text-decoration-none text-dark" @click.prevent="goToDetail(market.market_id)">
                {{ market.market_title }}
              </a>
            </h5>
            <p class="text-muted">{{ market.market_category }}</p>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="row">
        <div class="col-12 mt-4">
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      market: [],
    };
  },
  methods: {
    async fetchMarkets() {
      try {
        const response = await axios.get('http://localhost:3000/market');
        this.market = response.data;
      } catch (error) {
        console.error('Error fetching markets:', error);
      }
    },
    goToDetail(id) {
      this.$router.push({ path: `/market/detail`, query: { market_id: id } });
    },
  },
  mounted() {
    this.fetchMarkets();
  },
};
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
