<template>
  <div class="container mt-5">
    <div class="header-container mb-4">
      <h1 class="title">회원 목록</h1>
      <div class="filter-container">
        <div class="btn-group">
          <button @click="filterRole(null)" :class="{'active': selectedRole === null}" class="btn">전체</button>
          <button @click="filterRole('USER')" :class="{'active': selectedRole === 'USER'}" class="btn">회원</button>
          <button @click="filterRole('ADMIN')" :class="{'active': selectedRole === 'ADMIN'}" class="btn">관리자</button>
        </div>
      </div>
    </div>
    <div class="table-container">
      <table class="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">순번</th>
            <th scope="col">회원 종류</th>
            <th scope="col">아이디</th>
            <th scope="col">이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="user.user_id">
            <td>{{ user.user_id }}</td>
            <td>{{ user.user_role }}</td>
            <td>{{ user.user_name }}</td>
            <td>{{ user.user_mail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MemberList',
  data() {
    return {
      users: [],
      selectedRole: null // 필터링할 역할을 저장
    }
  },
  computed: {
    filteredUsers() {
      if (this.selectedRole === null) {
        return this.users;
      }
      return this.users.filter(user => user.user_role === this.selectedRole);
    }
  },
  methods: {
    filterRole(role) {
      this.selectedRole = role;
    },
    fetchUsers() {
      axios.get('http://localhost:8001/user')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error('회원 목록을 가져오는 중 오류가 발생했습니다!', error);
        });
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F0F2F5; /* 부드러운 배경색 */
}

.container {
    width: 80%;
    margin: 20px auto;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: 1px solid #ddd; /* 컨테이너 테두리 추가 */
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between; /* 제목과 필터 버튼을 양쪽으로 배치 */
    margin-bottom: 20px;
}

.title {
    font-size: 24px; /* 제목 폰트 크기 조정 */
    margin: 0; /* 제목 상하 여백 제거 */
}

.filter-container {
    display: flex;
    align-items: center; /* 버튼을 세로로 중앙 정렬 */
}

.btn-group {
    display: flex;
    gap: 10px; /* 버튼 사이의 간격 */
}

.btn {
    background-color: #1244AF; /* 버튼 배경색 */
    color: white;
    border: none;
    padding: 8px 20px; /* 버튼의 padding 조정 */
    border-radius: 20px; /* 버튼 모서리를 둥글게 */
    cursor: pointer;
    font-size: 14px; /* 버튼 폰트 크기 조정 */
    line-height: 1.2; /* 버튼 텍스트 높이 조정 */
    min-width: 100px; /* 버튼의 최소 너비 설정 */
    text-align: center; /* 텍스트 중앙 정렬 */
}

.btn.active {
    background-color: #1244AF; /* 활성화된 버튼 배경색 */
}

.table-container {
    max-height: 300px; /* 테이블 높이 제한 */
    overflow-y: auto; /* 수직 스크롤 추가 */
    position: relative; /* 헤더 고정을 위해 상대 위치 설정 */
}

.table {
    width: 100%;
    border-collapse: collapse;
}

.table th, .table td {
    padding: 12px;
    text-align: center;
    border: 1px solid #ddd;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;
}

.table-bordered {
    border: 1px solid #ddd;
}

.thead-dark {
    position: sticky; /* 헤더 고정을 위한 sticky 속성 */
    top: 0; /* 테이블 상단에 고정 */
}

.thead-dark th {
    background-color: #1244AF; /* 헤더 배경색 */
    color: white;
    font-weight: bold;
}

.form-select {
    display: none; /* 선택박스 숨김 */
}

.btn-primary {
    display: none; /* 버튼 숨김 */
}
</style>
