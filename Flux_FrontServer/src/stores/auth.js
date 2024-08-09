import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => {
    const authUser = localStorage.getItem('authUser');
    let user = null;
    try {
      user = authUser ? JSON.parse(authUser) : null;
    } catch (e) {
      user = null;
    }

    return {
      token: localStorage.getItem('authToken') || '',
      user: user,
      username: user ? user.name : '',
      userId: user ? user.userId : '' // Ensure this aligns with user object
    };
  },
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('authToken', token);
    },
    setUser(user) {
      if (!user.userId) {
        console.error('User object does not contain an ID');
      }
      this.user = user;
      this.username = user.name;
      this.userId = user.userId; // Make sure the property name is userId
      localStorage.setItem('authUser', JSON.stringify(user));
    },
    clearAuth() {
      this.token = '';
      this.user = null;
      this.username = '';
      this.userId = ''; // id 초기화
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
    },
    async logout() {
      try {
        console.log("Attempting to logout...");
        await axios.post('http://localhost:8080/api/logout', {}, {
          headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log("Logout successful");
        this.clearAuth();
        window.location.href = '/'; // 로그아웃 후 리디렉션
      } catch (error) {
        console.error('Failed to logout:', error);
        if (error.response) {
          console.error('Logout error response:', error.response.data);
        } else if (error.request) {
          console.error('Logout error request:', error.request);
        } else {
          console.error('Logout error message:', error.message);
        }
      }
    },
    async requestGoogleToken(googleCode) {
      try {
        const response = await axios.post('http://localhost:8080/auth/google', { code: googleCode });
        if (response.data.idToken) {
          this.setToken(response.data.idToken);
          this.setUser({
            email: response.data.email,
            provider: 'google',
            userId: response.data.id // Ensure this is set
          });
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUserId: (state) => state.userId,
  },
  persist: true,
});
