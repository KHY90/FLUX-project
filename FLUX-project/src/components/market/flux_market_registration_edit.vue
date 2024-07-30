<template>
    <form @submit.prevent="submitForm">
      <div class="registration_edit">
        <h2>아티스트 정보를 입력해 주세요.</h2>
        <p class="sub-text">작가 등록을 하지 않으면, 작품 접수가 불가능합니다. 먼저 작가정보를 등록해주세요.</p>
  
        <div class="regist_info">
          <div class="input-container">
            <label for="market_title">제목</label>
            <input type="text" id="market_title" v-model="marketTitle" />
          </div>
  
          <div class="input-container">
            <label for="market_category">분류</label>
            <select id="market_category" v-model="selectedCategory">
              <option value="" disabled selected>선택하세요</option>
              <option value="가죽공예">가죽공예</option>
              <option value="목공예">목공예</option>
              <option value="도자기공예">도자기공예</option>
              <option value="금속공예">금속공예</option>
              <option value="종이공예">종이공예</option>
              <option value="기타">기타</option>
            </select>
          </div>
  
          <div class="input-container">
            <label for="user_name">작가명</label>
            <input type="text" id="user_name" v-model="userName" />
          </div>
  
          <div class="input-container">
            <label for="market_contents">작품정보</label>
            <textarea id="market_contents" v-model="marketContents" rows="5"></textarea>
          </div>
  
          <div class="input-container">
            <label for="market_price">최초가격</label>
            <div class="price-container">
              <input type="number" id="market_price" v-model.number="marketPrice" />
              <span class="price-note">바로구매가격</span>
              <input type="number" id="market_maxprice" v-model.number="marketMaxPrice" class="market-maxprice" />
            </div>
          </div>
  
          <div class="input-container">
            <label for="user_mail">이메일</label>
            <input type="email" id="user_mail" v-model="userMail" />
          </div>
  
          <div class="input-container">
            <label for="fileUpload" class="image-label" @click="triggerFileUpload">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
              </svg>
              이미지 첨부
            </label>
            <input type="file" id="fileUpload" multiple @change="handleFileUpload" ref="fileInput" />
          </div>
          <div class="image-preview" v-if="images.length > 0">
            <div v-for="(image, index) in images" :key="index" class="image-thumbnail">
              <img v-if="isFile(image)" :src="createObjectURL(image)" alt="Image preview" />
            </div>
          </div>
  
          <div class="input-container">
            <label for="auction_start_time">경매 시작 시간</label>
            <div class="datetime-container">
              <input type="datetime-local" id="market_selldate" v-model="auctionStartTime" />
            </div>
          </div>
  
          <div class="input-container">
            <label for="auction_duration">경매 기간</label>
            <select id="auction_duration" v-model="auctionDuration">
              <option value="" disabled selected>기간을 선택하세요</option>
              <option value="1">1시간</option>
              <option value="2">2시간</option>
              <option value="3">3시간</option>
              <option value="6">6시간</option>
              <option value="12">12시간</option>
              <option value="24">24시간</option>
            </select>
          </div>
  
          <div class="submit-button-container">
            <button type="submit">등록</button>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const marketTitle = ref('');
  const selectedCategory = ref('');
  const userName = ref('');
  const marketContents = ref('');
  const marketPrice = ref('');
  const marketMaxPrice = ref('');
  const userMail = ref('');
  const images = ref([]);
  const auctionStartTime = ref('');
  const auctionDuration = ref('');
  
  function handleFileUpload(event) {
    images.value = Array.from(event.target.files);
  }
  
  function isFile(image) {
    return image instanceof File;
  }
  
  function createObjectURL(file) {
    return URL.createObjectURL(file);
  }
  
  async function getNextId() {
    try {
      const response = await axios.get('http://localhost:3000/market');
      const marketItems = response.data;
      if (marketItems.length === 0) {
        return 1; // 첫 데이터의 ID는 1
      }
      const maxId = Math.max(...marketItems.map(item => item.market_id));
      return maxId + 1;
    } catch (error) {
      console.error('Error fetching data:', error);
      return 1; // 오류 발생 시 ID를 1로 설정
    }
  }
  async function submitForm() {
  if (!marketTitle.value || !selectedCategory.value || !userName.value || !marketContents.value ||
      !marketPrice.value || !marketMaxPrice.value || !userMail.value || !auctionStartTime.value || !auctionDuration.value || images.value.length === 0) {
    console.error('All fields are required');
    alert('모든 필드를 채워주세요.');
    return;
  }

  const startTime = new Date(auctionStartTime.value);
  const durationHours = parseInt(auctionDuration.value);
  const endTime = new Date(startTime.getTime() + durationHours * 60 * 60 * 1000);

  const nextId = await getNextId();

  const data = {
    market_id: nextId,
    user_id: 1, // Assuming a fixed user_id for simplicity. Adjust as needed.
    market_name: marketTitle.value,
    market_category: selectedCategory.value,
    user_name: userName.value,
    market_contents: marketContents.value,
    market_price: marketPrice.value,
    market_maxprice: marketMaxPrice.value,
    user_mail: userMail.value,
    market_createat: new Date().toISOString(),
    market_updateat: new Date().toISOString(),
    market_selldate: startTime.toISOString(),
    market_period: `${startTime.toISOString()}-${endTime.toISOString()}`,
    market_view: 0,
    market_imgs: images.value.map(file => createObjectURL(file)),
    market_orderablestatus: "true",
  };

  try {
    const response = await axios.post('http://localhost:3000/market', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response:', response.data);
    // Redirect to the detail page with the newly created market_id
    router.push({ path: '/market/detail', query: { market_id: response.data.market_id } });
  } catch (error) {
    console.error('Error submitting form:', error);
    if (error.response) {
      console.error('Server responded with:', error.response.data);
    } else if (error.request) {
      console.error('Request was made but no response was received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
    console.error('Full error object:', error);
  }
}
</script>
      
      
    <style scoped>
    .registration_edit {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
    
    h2 {
      margin-bottom: 10px;
      font-size: 24px;
    }
    
    .sub-text {
      margin-bottom: 20px;
      color: #777;
      text-align: center;
    }
    
    .regist_info {
      width: 100%;
      max-width: 600px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
    }
    
    .input-container {
      width: 100%;
      margin-bottom: 20px;
    }
    
    .input-container label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    
    .input-container .image-label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #FEBE98;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    
    .image-label svg {
      margin-right: 8px;
      width: 24px;
      height: 24px;
    }
    
    .input-container input[type="file"] {
      display: none;
    }
    
    .input-container input,
    .input-container select,
    .input-container textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      box-sizing: border-box;
    }
    
    .input-container textarea {
      resize: vertical;
    }
    
    .input-container input[type="email"] {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
    }
    
    .input-container input:focus,
    .input-container select:focus,
    .input-container textarea:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
    
    .price-container {
      display: flex;
      flex-direction: column;
    }
    
    .price-container input {
      margin-bottom: 5px;
    }
    
    .price-note {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }
    
    .market-maxprice {
      font-size: 14px;
    }
    
    .image-preview {
      display: flex;
      flex-wrap: wrap;
    }
    
    .image-thumbnail {
      margin: 5px;
      width: 100px;
      height: 100px;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
    
    .image-thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .datetime-container {
      display: flex;
      align-items: center;
    }
    
    .datetime-container input[type="datetime-local"] {
      margin-right: 10px;
    }
    
    .submit-button-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    
    .submit-button-container button {
      padding: 10px 20px;
      background-color: #FEBE98;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    
    .submit-button-container button:hover {
      background-color: #FFA07A;
    }
    </style>
    