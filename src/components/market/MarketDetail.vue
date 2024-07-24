<template>
  <!-- Main content -->
  <div class="mt-95 pt-md-5 border-top">
    <div class="title text-center">
      <h1 class="mb-2">상품제목</h1>
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
        <div class="col-12 col-md-6 col-lg-4 mb-4" v-for="post in posts" :key="post.id">
          <div class="hover-card">
            <a :href="post.link" class="text-decoration-none">
              <img :src="post.coverImg" class="img-fluid" />
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
        <!-- Artwork Information Box -->
        <div class="col-12 col-md-6 mb-4">
          <div class="info-box">
            <h4>작품 정보</h4>
            <p>작품에 대한 자세한 설명이 여기에 들어갑니다. 작품의 역사, 특성, 기법 등 다양한 정보를 포함할 수 있습니다.</p>
          </div>
        </div>
        <!-- Artist Information Box -->
        <div class="col-12 col-md-6 mb-4">
          <div class="info-box">
            <h4>작가 정보</h4>
            <p>작가에 대한 자세한 설명이 여기에 들어갑니다. 작가의 배경, 다른 작품, 이력 등 다양한 정보를 포함할 수 있습니다.</p>
          </div>
        </div>
        <!-- Price Information Box -->
        <div class="col-12 mb-4">
          <div class="info-box full-width">
            <h4>가격 정보</h4>
            <p>가격에 대한 자세한 설명이 여기에 들어갑니다. 작품의 가격, 경매 시작가, 예상가 등의 정보를 포함할 수 있습니다.</p>
          </div>
        </div>

        <!-- Other Works by Artist -->
        <div class="col-12 mb-4 other-works-section">
          <h4>작가의 판매중인 다른 작품</h4>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-4" v-for="work in otherWorks" :key="work.id">
              <div class="hover-card">
                <a :href="work.link" class="text-decoration-none">
                  <img :src="work.coverImg" class="img-fluid" />
                  <div class="work-info">
                    <h5>{{ work.title }}</h5>
                    <p>{{ work.price }}</p>
                    <p>{{ work.author }}</p>
                  </div>
                </a>
              </div>
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
      posts: [
        {
          id: 1,
          title: 'Post Title 1',
          coverImg: 'https://via.placeholder.com/300',
          category: 'Category 1',
          link: '#'
        },
        {
          id: 2,
          title: 'Post Title 2',
          coverImg: 'https://via.placeholder.com/300',
          category: 'Category 2',
          link: '#'
        },
        {
          id: 3,
          title: 'Post Title 3',
          coverImg: 'https://via.placeholder.com/300',
          category: 'Category 3',
          link: '#'
        }
      ],
      otherWorks: [
        {
          id: 4,
          title: '작품 1',
          coverImg: 'https://via.placeholder.com/300',
          price: '₩1,000,000',
          author: '홍길동',
          link: '#'
        },
        {
          id: 5,
          title: '작품 2',
          coverImg: 'https://via.placeholder.com/300',
          price: '₩2,000,000',
          author: '홍길동',
          link: '#'
        },
        {
          id: 6,
          title: '작품 3',
          coverImg: 'https://via.placeholder.com/300',
          price: '₩3,000,000',
          author: '홍길동',
          link: '#'
        },
        {
          id: 7,
          title: '작품 4',
          coverImg: 'https://via.placeholder.com/300',
          price: '₩4,000,000',
          author: '홍길동',
          link: '#'
        }
      ],
      endTime: new Date(new Date().getTime() + 10 * 60000), // 현재 시간으로부터 10분 후
      hours: '',
      minutes: '',
      seconds: '',
      ampm: ''
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
.mt-95 {
  margin-top: 95px;
}
.pt-md-5 {
  padding-top: 5rem;
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
  margin-bottom: 20px;
  width: 100%;
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
.text-end {
  text-align: end;
}
.title h1 {
  margin-bottom: 0.5rem;
}
.countdown-box {
  background-color: peachpuff;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.time-box, .ampm-box {
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
}
.colon {
  font-size: 1.5rem;
  font-weight: bold;
}
.info-box {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.info-box h4 {
  margin-bottom: 1rem;
}
.info-box p {
  margin: 0;
}
.btn-primary {
  background-color: FEBE98; /* Peach color for the button */
  border: none; /* Remove default border */
  color: #000; /* Text color for better contrast */
  margin-right: 10px;
  /* Optional: Add hover effect for button */
  transition: background-color 0.2s;
}
.btn-primary:hover {
  background-color: #FEBE98; /* Slightly darker peach on hover */
}
.btn-outline-light {
  border-color: #e9ecef;
  background-color: #fff; /* Button background color */
}
.like-button {
  border: none; /* Remove default border */
  background: none; /* Remove default background */
  padding: 0; /* Remove default padding */
  display: inline-flex; /* Display icon inline */
  align-items: center; /* Center align icon */
  cursor: pointer; /* Change cursor to pointer */
}
.bi-heart {
  fill: #FEBE98; /* Heart icon color */
}
.like-button svg {
  width: 24px;
  height: 24px;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.col-12.col-md-6 {
  display: flex;
  justify-content: center; /* Center-align cards horizontally */
}
.col-12.col-md-6.col-lg-4 {
  padding: 0 60px; /* Adjust padding to increase space between cards */
}
.col-12.col-md-6.col-lg-4 .hover-card {
  max-width: 100%; /* Ensure card fits within column */
}
.full-width {
  width: 100%; /* Make the price info box full width */
}
.hover-card img {
  border-radius: 10px; /* Add border-radius to images */
}
.hover-card .work-info {
  margin-top: 10px;
  text-align: center;
}
.hover-card .work-info h5 {
  margin: 0;
  font-size: 1rem;
}
.hover-card .work-info p {
  margin: 0;
  font-size: 0.875rem;
  color: #6c757d;
}
.other-works-section {
  margin-top: 50px; /* Add more margin to separate from above sections */
  margin-bottom: 50px; /* Add margin to separate from below sections */
}
</style>
