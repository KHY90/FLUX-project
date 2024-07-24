<template>
    <div class="ranking-page">
      <div class="container mt-5">
        <!-- Title and Sort Option -->
        <div class="title-and-sort mb-4">
          <h1 class="title">Top Bids Ranking</h1>
          <div class="sort-option">
            <label for="sortOrder">Sort by:</label>
            <select id="sortOrder" v-model="sortOrder" @change="sortRanks">
              <option value="highToLow">Highest Bids First</option>
              <option value="lowToHigh">Lowest Bids First</option>
            </select>
          </div>
        </div>
        
        <!-- Rankings -->
        <div class="row">
          <div class="col-12 mb-4" v-for="(rank, index) in sortedRanks" :key="rank.id">
            <div :class="['ranking-box', index === 0 ? 'peach-box' : '']">
              <div class="ranking-content">
                <div class="ranking-number">{{ getRankSuffix(index + 1) }}</div>
                <img :src="rank.coverImg" class="img-fluid ranking-img" alt="Ranking Item"/>
                <div class="ranking-details">
                  <h5>{{ rank.title }}</h5>
                  <p class="author">작가: {{ rank.author }}</p>
                  <p class="description">{{ rank.description }}</p>
                </div>
                <div class="bid-info">
                  <div class="bid-icon" @click="toggleIcon(index)">
                    <svg v-if="rank.isBell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bell-slash" viewBox="0 0 16 16">
                      <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6q0-.396-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164zm5.581-9.91a4 4 0 0 0-1.948-1.01L8 2.917l-.797.161A4 4 0 0 0 4 7c0 .628-.134 2.197-.459 3.742q-.075.358-.166.718l-1.653 1.653q.03-.055.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284zM10 15a2 2 0 1 1-4 0zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75z"/>
                    </svg>
                  </div>
                  <p class="bid-label">현재 입찰수:</p>
                  <p class="bid-count">{{ rank.bidCount }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const ranks = ref([
      {
        id: 1,
        title: '작품 A',
        coverImg: 'https://via.placeholder.com/300',
        author: '작가 A',
        description: '이 작품은 현재 1위입니다.',
        price: '₩1,000,000',
        bidCount: 23,
        isBell: true // 아이콘 상태
      },
      {
        id: 2,
        title: '작품 B',
        coverImg: 'https://via.placeholder.com/300',
        author: '작가 B',
        description: '이 작품은 현재 2위입니다.',
        price: '₩900,000',
        bidCount: 18,
        isBell: true // 아이콘 상태
      },
      {
        id: 3,
        title: '작품 C',
        coverImg: 'https://via.placeholder.com/300',
        author: '작가 C',
        description: '이 작품은 현재 3위입니다.',
        price: '₩800,000',
        bidCount: 15,
        isBell: true // 아이콘 상태
      },
      {
        id: 4,
        title: '작품 D',
        coverImg: 'https://via.placeholder.com/300',
        author: '작가 D',
        description: '이 작품은 현재 4위입니다.',
        price: '₩700,000',
        bidCount: 12,
        isBell: true // 아이콘 상태
      }
    ]);

    const sortOrder = ref('highToLow'); // 기본 정렬 기준

    const sortRanks = () => {
      if (sortOrder.value === 'highToLow') {
        ranks.value.sort((a, b) => b.bidCount - a.bidCount);
      } else {
        ranks.value.sort((a, b) => a.bidCount - b.bidCount);
      }
    };

    const sortedRanks = computed(() => {
      return [...ranks.value].sort((a, b) => {
        if (sortOrder.value === 'highToLow') {
          return b.bidCount - a.bidCount;
        } else {
          return a.bidCount - b.bidCount;
        }
      });
    });

    const toggleIcon = (index) => {
      ranks.value[index].isBell = !ranks.value[index].isBell;
    };

    const getRankSuffix = (rank) => {
      if (rank === 1) return '1st';
      if (rank === 2) return '2nd';
      if (rank === 3) return '3rd';
      if (rank === 4) return '4th';
      return `${rank}th`;
    };

    return {
      ranks,
      sortOrder,
      sortedRanks,
      toggleIcon,
      getRankSuffix,
      sortRanks
    };
  }
};
</script>

<style scoped>
.ranking-page {
  padding: 2rem;
}

.title-and-sort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
  margin: 0;
}

.sort-option {
  display: flex;
  align-items: center;
}

.sort-option label {
  margin-right: 10px;
}

.sort-option select {
  padding: 5px;
  font-size: 1rem;
}

.ranking-box {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
}

.peach-box {
  background-color: peachpuff;
  color: #000;
}

.ranking-content {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.ranking-number {
  font-size: 4rem;
  font-weight: bold;
  margin-right: 30px;
  text-align: center;
  color: #000;
}

.ranking-img {
  border-radius: 10px;
  margin-right: 20px;
  width: 150px;
  align-self: flex-start;
}

.ranking-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.ranking-details h5 {
  margin: 0;
  font-size: 1.25rem;
  margin-bottom: 5px;
}

.ranking-details .author {
  margin: 0;
  font-size: 1rem;
  color: #6c757d;
}

.ranking-details .description {
  margin: 0;
  font-size: 1rem;
  color: #6c757d;
}

.bid-info {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.bid-info .bid-icon {
  font-size: 2.5rem;
  cursor: pointer;
  margin-bottom: 10px;
}

.bid-info .bid-label {
  font-size: 1rem;
  color: #6c757d;
}

.bid-info .bid-count {
  font-size: 2rem;
  font-weight: bold;
  color: #d9534f;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
}

.row {
  margin-right: 0;
  margin-left: 0;
}
</style>
