<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">회원 정보</h5>
            </div>
            <div class="card-body">
              <div class="mb-3">
                <h6>이름</h6>
                <p class="mb-0">{{ member.name }}</p>
              </div>
              <div class="mb-3">
                <h6>회원 유형</h6>
                <select class="form-select" v-model="member.type">
                  <option value="일반유저">일반유저</option>
                  <option value="관리자">관리자</option>
                  <option value="블랙회원">블랙회원</option>
                </select>
              </div>
              <div class="mb-3">
                <h6>판매 내역</h6>
                <p class="mb-0">{{ member.sales }}</p>
              </div>
              <div class="mb-3">
                <h6>입찰 내역</h6>
                <p class="mb-0">{{ member.bids }}</p>
              </div>
    
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary me-2" @click="editMember">수정</button>
                <button class="btn btn-danger" @click="deleteMember">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MemberDetail',
    data() {
      return {
        member: {
          name: '홍길동',
          type: '일반유저',
          sales: '5 건',
          bids: '3 건',
        }
      };
    },
    methods: {

      editMember() {
        // 회원 정보 수정 기능 구현
      },
      deleteMember() {
        // 회원 삭제 기능 구현
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .card {
    border-radius: 10px;
  }
  
  .card-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  h6 {
    font-weight: bold;
  }
  </style>
  