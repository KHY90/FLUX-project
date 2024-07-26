<template>
    <div class="registration_edit">
        <h2><p>아티스트 정보를 입력해 주세요.</p></h2>
        <h7><p>작가 등록을 하지 않으면, 작품 접수가 불가능합니다. 먼저 작가정보를 등록해주세요.</p></h7>
        
        <div class="regist_info">
            <div class="input-container">
                <label for="postTitle">제목</label>
                <input type="text" id="postTitle" v-model="artistName" />
            </div>

            <div class="input-container">
               <label for="category">분류</label>
               <select id="category" v-model="selectedCategory">
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
                <label for="artistName">작가명</label>
                <input type="text" id="artistName" v-model="artistName" />
            </div>

            <div class="input-container">
                <label for="instagramId">인스타 아이디 (선택)</label>
                <input type="text" id="instagramId" v-model="instagramId" />
            </div>

            <div class="input-container">
                <label for="email">이메일</label>
                <input type="email" id="email" v-model="email" />
            </div>

            <div class="input-container">
                <label for="bio">약력</label>
                <textarea id="bio" v-model="bio" rows="5"></textarea>
            </div>

            <div class="input-container">
                <label for="description">소개</label>
                <textarea id="description" v-model="description" rows="5"></textarea>
            </div>

            <div class="input-container">
                <label for="images">작품 이미지/사진</label>
                <div class="image-upload">
                    <label for="fileUpload" class="image-label">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                        이미지 첨부
                    </label>
                    <input type="file" id="fileUpload" multiple @change="handleFileUpload" />
                </div>
            </div>

            <div class="input-container">
                <label for="auctionTime">경매시간을 정해주세요.(최대12시간)</label>
                <div class="countdown-box">
                    <div class="time-box">{{ hours }}</div>
                    <div class="colon">:</div>
                    <div class="time-box">{{ minutes }}</div>
                    <div class="colon">:</div>
                    <div class="time-box">{{ seconds }}</div>
                    <div class="ampm-box">{{ ampm }}</div>
                </div>
            </div>

            <div class="submit-button-container">
                <button @click="submitForm">등록</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMypageStore, useSalesStore } from '@/stores/rootstore.js';

// 라우터 인스턴스 사용
const router = useRouter();
const store = useMypageStore();
const store2 = useSalesStore();
const root = computed(() => store.root); // 상태 값 가져오기
const root2 = computed(() => store2.root);
const setRoot = store.setRoot; // 상태 값 변경 함수
const setRoot2 = store2.setRoot;

const artistName = ref('');
const instagramId = ref('');
const email = ref('');
const bio = ref('');
const description = ref('');
const auctionTime = ref('');
const images = ref([]);

function handleFileUpload(event) {
    images.value = Array.from(event.target.files);
}

function submitForm() {
    const formData = {
        artistName: artistName.value,
        instagramId: instagramId.value,
        email: email.value,
        bio: bio.value,
        description: description.value,
        auctionTime: auctionTime.value,
        images: images.value
    };
    console.log('Submitted Data:', formData);
    // 폼 제출 로직을 처리하고 성공적으로 완료되면
    // '/mypage/activity'로 리디렉션
    setRoot2('registry');
    setRoot('activity');
    router.push('/mypage/activity');
}
</script>


<style scoped>
.registration_edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h5 {
    text-align: center;
    margin: 0;
    color: #333;
}

h1 p, h5 p {
    margin: 0;
}

.regist_info {
    width: 100%;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.input-container label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

.input-container input,
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
    /* Ensure email input has consistent styling */
}

.image-upload {
    display: flex;
    align-items: center;
}

.image-label {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FEBE98;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.image-label svg {
    margin-right: 8px;
    width: 24px; /* Adjusted for better fit */
    height: 24px; /* Adjusted for better fit */
}

.image-upload input[type="file"] {
    display: none;
}

.countdown-box {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
}

.countdown-box .time-box {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-right: 5px;
    font-size: 18px;
}

.countdown-box .colon {
    font-size: 24px;
    font-weight: bold;
    color: #555;
}

.countdown-box .ampm-box {
    margin-left: 10px;
    font-size: 18px;
    color: #555;
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
