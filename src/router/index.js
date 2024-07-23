import { createRouter, createWebHistory } from 'vue-router';
import Main from './components/market/Main.vue'; // 컴포넌트 경로 수정 (대문자)

const routes = [
  {
    path: '/market/main',
    name: 'main', // 라우트 이름은 일반적으로 대문자로 시작
    component: Main // 컴포넌트 참조 수정 (대문자)
  },
  // 추가 라우트는 여기에 정의할 수 있습니다
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
