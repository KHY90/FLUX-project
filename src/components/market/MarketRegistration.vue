<template>
  <div class="registration">
    <div class="selling_options">
      <h1><p>어떤 작품을</p> <p>판매하고 싶으신가요?</p></h1>
      <div class="options">
        <div 
          class="register" 
          :class="{ selected: selectedOption === 'register' }" 
          @click="selectOption('register')"
        >
          <div class="option-header">
            <h3>내 작품 등록</h3>
            <span v-if="selectedOption === 'register'" class="check-icon">✔</span>
          </div>
          <p></p>
          <h6>아티스트라면 FLUX에서 직접 작품을 판매해보세요.</h6>
        </div>
        <div 
          class="resell" 
          :class="{ selected: selectedOption === 'resell' }" 
          @click="selectOption('resell')"
        >
          <div class="option-header">
            <h3>리셀 판매</h3>
            <span v-if="selectedOption === 'resell'" class="check-icon">✔</span>
          </div>
          <p></p>
          <h6>FLUX에서 구매한 작품을 다시 경매에 올려보세요.</h6>
        </div>
      </div>
      <div class="next-step">
        <button @click="goToNextStep">다음</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    goToNextStep() {
      if (!this.selectedOption) {
        alert('옵션을 선택하세요.');
        return;
      }
      alert(`선택된 옵션: ${this.selectedOption}`);
      // 다음 단계로 이동하는 로직 추가
    }
  }
};
</script>

<style scoped>
.registration {
  display: flex;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  flex-direction: column; /* 세로 방향 정렬 */
  gap: 20px;
  max-width: 1200px;
  margin: 160px auto 300px; /* 위쪽 마진을 160px, 아래쪽 마진을 300px로 설정 */
  padding: 20px;
  position: relative;
}

.selling_options {
  text-align: center; /* 텍스트 가운데 정렬 */
  width: 100%;
}

.options {
  display: flex;
  flex-direction: column; /* 세로 방향 정렬 */
  align-items: center; /* 가로 가운데 정렬 */
  gap: 20px;
}

.register, .resell {
  width: 100%; /* 전체 너비로 설정 */
  max-width: 400px; /* 최대 너비 설정 */
  border: 1px solid #ccc;
  padding: 20px;
  text-align: left; /* 박스 안의 내용 왼쪽 정렬 */
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
}

.register:hover, .resell:hover {
  background-color: #f0f0f0;
}

.register.selected, .resell.selected {
  border-color: #FEBE98;
  background-color: #e0eaff;
}

.option-header {
  display: flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: center;
}

.check-icon {
  color: #FEBE98;
  font-size: 1.5em; /* 크기 조정 */
}

.next-step {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #FEBE98;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #FEBE98;
}
</style>
