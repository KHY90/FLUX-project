<template>
  <!-- Main content -->
  <div class="mt-95 pt-md-5 border-top">
    <div class="title text-center">
      <h1 class="mb-2">{{ market.title }}</h1>
    </div>
    <div class="container mt-4">
      <!-- Countdown Timer -->
      <div class="row">
        <div class="col-12 text-end mb-4">
          <div class="countdown-box">
            <div class="countdown">
              <div class="time-box">{{ hours }}</div>
              <div class="colon">:</div>
              <div class="time-box">{{ minutes }}</div>
              <div class="colon">:</div>
              <div class="time-box">{{ seconds }}</div>
              <div class="ampm-box">{{ ampm }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Posts -->
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="market in market" :key="market.market_id">
          <div class="hover-card">
            <a :href="market_link" class="text-decoration-none">
              <img :src="market.imgs" class="img-fluid" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bid and Like buttons -->
      <div class="row mb-4">
        <div class="col-12 text-end">
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card me-2" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg>
              입찰
            </button>
            <button class="btn btn-outline-light like-button ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Information Boxes -->

      <div class="row">
       
        <div class="col-12 col-md-6 mb-4">
          <div class="info-box">
            <h4>작가 정보</h4>
            <p>{{ user_name }}</p>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4">
          <div class="info-box">
            <h4>작품 정보</h4>
            <p>{{ market_contents }}</p>
          </div>
        </div>
 
       
              <div class="col-12 mb-4">
      
            <h4>가격 정보</h4>
            <h6>최초가격</h6>
            <div class="info-box full-width"></div>
            <p>{{market_price}}</p>
            <h6>바로구매가격</h6>
            <div class="info-box full-width"></div>
            <p>{{market_maxprice}}</p>
          </div>
        </div>

        <!-- Other Works by Artist -->
        <div class="col-12 mb-4 other-works-section">
          <h4>작가의 판매중인 다른 작품</h4>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="user in user" :key="user.user_id">
              <div class="hover-card">
                <a :href="user.link" class="text-decoration-none">
                  <img :src="user_imgs" class="img-fluid" />
                  <div class="work-info">
                    <h5>{{ market_title }}</h5>
                    <p>{{ market_price }}</p>
                    <p>{{ user_name }}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      market: [
        {
          market_id: 1,
          market_title: 'Post Title 1',
          market_imgs: 'https://via.placeholder.com/300',
          market_category: 'Category 1',
          market_link: '#'
        },
        {
          market_id: 2,
          market_title: 'Post Title 2',
          market_imgs: 'https://via.placeholder.com/300',
          market_category: 'Category 2',
          market_link: '#'
        },
        {
          market_id: 3,
          market_title: 'Post Title 3',
          market_imgs: 'https://via.placeholder.com/300',
          market_category: 'Category 3',
          market_link: '#'
        }
      ],
      otherWorks: [
        {
          market_id: 4,
          market_title: '작품 1',
          market_imgs: 'https://via.placeholder.com/300',
          market_price: '₩1,000,000',
          user_name: '홍길동',
          market_link: '#'
        },
        {
          market_id: 5,
          market_title: '작품 2',
          market_coverImg: 'https://via.placeholder.com/300',
          market_price: '₩2,000,000',
          user_name: '홍길동',
          market_link: '#'
        },
        {
          market_id: 6,
          market_title: '작품 3',
          market_coverImg: 'https://via.placeholder.com/300',
          market_price: '₩3,000,000',
          market_author: '홍길동',
          market_link: '#'
        },
        {
          market_id: 7,
          market_title: '작품 4',
          market_coverImg: 'https://via.placeholder.com/300',
          market_price: '₩4,000,000',
          user_name: '홍길동',
          market_link: '#'
        }
      ],
      endTime: new Date(new Date().getTime() + 10 * 60000), // 현재 시간으로부터 10분 후
      hours: '',
      minutes: '',
      seconds: '',
      ampm: '',
      post: {} // 현재 포스트를 저장할 객체
    };
  },
  computed: {
    formattedTime() {
      const now = new Date();
      const timeLeft = this.endTime - now;
      const hours = Math.floor(timeLeft / 3600000) % 12 || 12;
      const minutes = Math.floor((timeLeft % 3600000) / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
        ampm
      };
    }
  },
  mounted() {
    this.startCountdown();
    // Fetch post data based on ID from route
    const postId = this.$route.query.id;
    this.fetchPostData(postId);
  },
  methods: {
    startCountdown() {
      this.timer = setInterval(() => {
        if (new Date() < this.endTime) {
          const time = this.formattedTime;
          this.hours = time.hours;
          this.minutes = time.minutes;
          this.seconds = time.seconds;
          this.ampm = time.ampm;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    fetchPostData(id) {
      // Sample data fetching logic; replace with actual data fetching
      this.post = this.posts.find(post => post.id === parseInt(id, 10)) || {};
    }
  },
  beforeUnmount() {
    if (this.timer) {   
      clearInterval(this.timer);
    }
  }
};
</script>

<style scoped>
/* 기존 스타일들 유지 */
</style>
