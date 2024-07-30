<template>
    <div>
        <!-- 카드 시작 -->
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 col-md-3 mb-3">
                    <div class="card text-white bg-primary">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <div class="card-icon ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                                  <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                                  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                                </svg>
                            </div>
                            <div class="text-end">
                                <p class="card-category">방문자수</p>
                                <h4 class="card-title">1,294</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 mb-3">
                    <div class="card text-white bg-info">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <div class="card-icon ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                            </div>
                            <div class="text-end">
                                <p class="card-category">회원수</p>
                                <h4 class="card-title">1,303</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 mb-3">
                    <div class="card text-white bg-success">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <div class="card-icon ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                                </svg>
                            </div>
                            <div class="text-end">
                                <p class="card-category">입찰진행</p>
                                <h4 class="card-title">$1,345</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 mb-3">
                    <div class="card text-white bg-purple">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <div class="card-icon ms-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
                                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z"/>
                                </svg>
                            </div>
                            <div class="text-end">
                                <p class="card-category">판매</p>
                                <h4 class="card-title">576</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 카드 끝 -->

            <!-- 차트와 목록을 포함하는 컨테이너 -->
            <div class="row mt-4">
                <div class="col-12 col-lg-8 mb-3">
                    <!-- 차트 컨테이너 -->
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title fixed-title">방문자수 차트</h5>
                            <canvas id="visitorsChart"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 mb-3">
                    <!-- 목록 컨테이너 -->
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title fixed-title">신규 회원 목록</h5>
                            <ul class="list-group list-group-flush members-list">
                              <li v-for="(member, index) in members" :key="index" class="list-group-item d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person me-2" viewBox="0 0 16 16">
                                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                                  <path d="M8 9a5 5 0 0 0-4.546 2.914C3.582 12.83 4.768 14 8 14s4.418-1.17 4.546-2.086A5 5 0 0 0 8 9zM2.869 13.145C3.98 14.596 5.606 16 8 16s4.02-1.404 5.131-2.855C12.454 11.667 10.979 11 8 11c-2.979 0-4.454.667-5.131 2.145z"/>
                                </svg>
                                {{ member }}
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 차트와 목록을 포함하는 컨테이너 끝 -->
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
    name: 'DashboardCards',
    data() {
        return {
            members: [
                    'An item', 
                    'A second item', 
                    'A third item', 
                    'A fourth item', 
                    'And a fifth one',
                    'An item', 
                    'A second item', 
                    'A third item', 
                    'A fourth item', 
                    'And a fifth one',
                    'An item', 
                    'A second item', 
                    'A third item', 
                    'A fourth item', 
                    'And a fifth one'
                    ]
        }
    },
    setup() {
        onMounted(() => {
            const ctx = document.getElementById('visitorsChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: '방문자수',
                        data: [3, 9, 6, 4, 5, 6, 7, 8, 20, 7, 6, 4],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top'
                        }
                    }
                }
            });
        });
    }
}
</script>

<style scoped>
.card-icon {
    font-size: 3rem;
}
.bg-purple {
    background-color: #6f42c1;
}
.card-body {
    overflow: auto;
}
.card-body canvas {
    height: 400px !important; /* 차트의 고정 높이 줄이기 */
}
.fixed-title {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.members-list {
    max-height: 400px; /* 필요에 따라 높이를 조정 */
    overflow-y: auto;
}
@media (max-width: 992px) {
    .card-body canvas {
        height: 200px !important; /* 작은 화면에서는 차트 높이 더 줄이기 */
    }
}
</style>
