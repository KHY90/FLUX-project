<template>
    <div class="flux_mypage_activity">
        <h2>활동내역</h2>
        <div class="activity-section">
            <h3>판매내역</h3>
            <ul class="list-group">
                <li v-for="sale in saleItems" :key="sale.marketId" class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="item-info d-flex align-items-center" @click="navigateToDetail(sale.marketId)">
                        <img v-if="sale.marketImgs && sale.marketImgs.length > 0"
                            :src="sale.marketImgs[0]" alt="상품 이미지" class="product-image">
                        <div class="item-details">
                            <h4 v-if="sale.marketName">{{ sale.marketName }}</h4>
                            <p v-else>상품 정보 없음</p>
                        </div>
                    </div>
                    <div class="action-buttons">
                        <button class="edit-button">수정</button>
                        <button class="delete-button" @click.stop="deleteSale(sale.marketId)">삭제</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter(); // Vue Router 인스턴스 가져오기
const authStore = useAuthStore();
const userId = computed(() => authStore.userId);
const saleItems = ref([]);

const isValidUserId = (id) => {
    return id && id.trim() !== '';
};

const fetchSale = async (userId) => {
    if (!isValidUserId(userId)) {
        console.error('유저 ID가 유효하지 않습니다.');
        return;
    }

    try {
        const response = await axios.get(`http://localhost:8080/api/v1/market/user/${userId}/sales`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.token}`
            }
        });
        console.log('API 응답:', response.data);

        if (Array.isArray(response.data)) {
            saleItems.value = response.data.map(saleItem => ({
                ...saleItem,
                marketImgs: saleItem.marketImgs.map(img => `http://localhost:8080${img}`)
            }));
        } else {
            console.error('예상하지 못한 데이터 형식:', response.data);
            saleItems.value = [];
        }
    } catch (error) {
        console.error('판매 내역을 가져오는 데 실패했습니다:', error);
        saleItems.value = [];
    }
};

// 삭제 메서드 추가
const deleteSale = async (marketId) => {
    try {
        await axios.delete(`http://localhost:8080/api/v1/market/${marketId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.token}`
            }
        });

        saleItems.value = saleItems.value.filter(sale => sale.marketId !== marketId);
    } catch (error) {
        if (error.response && error.response.status === 403) {
            alert('이 상품은 현재 삭제할 수 없습니다.');
        } else {
            console.error('항목 삭제에 실패했습니다:', error);
        }
    }
};

// 상세 페이지로 이동하는 메서드
const navigateToDetail = (marketId) => {
    router.push({ name: 'MarketDetail', params: { marketId } });
};

onMounted(() => {
    if (isValidUserId(userId.value)) {
        fetchSale(userId.value);
    } else {
        console.error('User ID is not defined or invalid');
        alert('Unable to retrieve user data. Please try again later.');
    }
});
</script>



<style scoped>
.flux_mypage_activity {
    padding: 20px;
    background-color: #ffffff;
    color: #333;
    border-radius: 10px;
    font-family: 'LINESeedKR-Bd';
}

.flux_mypage_activity h2 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #000000;
    padding: 10px;
    border-radius: 5px;
}

.activity-section {
    margin-bottom: 40px;
    padding-left: 50px;
}

.activity-section h3 {
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
    color: #ffffff;
    background-color: #FEBE98;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
    /* 텍스트 길이에 맞추기 위해 추가 */
}

.list-group {
    max-height: 470px;
    /* 스크롤을 위해 최대 높이 설정 */
    overflow-y: auto;
    padding: 0;
    margin: 0;
    list-style: none;
}

.list-group-item {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 15px;
    transition: background-color 0.3s;
}

.list-group-item:hover {
    background-color: #FFE9DD;
}

.item-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* 반응형으로 변경 */
}

.product-image {
    width: 100px;
    /* 이미지 크기 키움 */
    height: 100px;
    border-radius: 5px;
    margin-right: 15px;
    border: 2px solid #FD8E4C;
}

.item-details h4 {
    margin: 0;
    font-size: 24px;
    /* 텍스트 크기 키움 */
    color: #FD8E4C;
}

.item-details p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
}

.heart-icon {
    font-size: 24px;
    color: #FD8E4C;
}

.action-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    /* 반응형으로 변경 */
}

.edit-button,
.delete-button {
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.3s, color 0.3s;
    flex: 1 1 auto;
    /* 반응형으로 변경 */
    min-width: 50px;
    /* 최소 너비 설정 */
}

.edit-button {
    background-color: #6c757d;
    color: white;
}

.delete-button {
    background-color: #dc3545;
    color: white;
}

.edit-button:hover {
    background-color: #5a6268;
}

.delete-button:hover {
    background-color: #c82333;
}

.edit-button:active,
.delete-button:active {
    transform: scale(0.95);
}

@media (max-width: 600px) {
    .item-info {
        flex-direction: column;
        /* 작은 화면에서 세로로 정렬 */
        align-items: flex-start;
    }

    .action-buttons {
        flex-direction: column;
        /* 작은 화면에서 세로로 정렬 */
        width: 15%;
        /* 버튼들이 전체 너비 차지 */
    }

    .edit-button,
    .delete-button {
        width: 15%;
        /* 버튼들이 전체 너비 차지 */
    }
}
</style>
