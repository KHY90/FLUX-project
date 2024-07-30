<template>
    <div class="flux_mypage_activity">
        <h2>위시리스트</h2>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in wishItems" :key="item.id">
                    <div class="item-info d-flex align-items-center">
                        <img :src="item.imgSrc" alt="상품 이미지" class="product-image">
                        <div class="item-details">
                            <h4>{{ item.title }}</h4>
                            <p>출시년도: {{ item.year }}</p>
                            <p>작품크기: {{ item.size }}</p>
                            <p>작품재료: {{ item.material }}</p>
                        </div>
                    </div>
                    <span class="heart-icon">❤️</span>
                </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'flux_mypage_wish',
    data() {
        return {
            wishItems: [
                // 예시 데이터
                { id: 1, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 1', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' },
                { id: 2, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 2', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' },
                { id: 3, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 3', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' },
                { id: 4, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 4', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' },
                { id: 5, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 5', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' },
                { id: 6, imgSrc: '/src/assets/image/img1.png', title: 'Fruit Shop 6', year: '2022', size: '25 x 25 cm', material: '과일과 단색의 수채, 백화점' }
            ],

    }
}
}
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
    display: inline-block; /* 텍스트 길이에 맞추기 위해 추가 */
}

.list-group {
    max-height: 470px; /* 스크롤을 위해 최대 높이 설정 */
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
    flex-wrap: wrap; /* 반응형으로 변경 */
}

.product-image {
    width: 100px; /* 이미지 크기 키움 */
    height: 100px;
    border-radius: 5px;
    margin-right: 15px;
    border: 2px solid #FD8E4C;
}

.item-details h4 {
    margin: 0;
    font-size: 24px; /* 텍스트 크기 키움 */
    color: #FD8E4C;
}

.item-details p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
}

.heart-icon {
    font-size: 50px;
    color: #FD8E4C;
    padding-right: 30px;
}

.action-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap; /* 반응형으로 변경 */
}

.edit-button, .delete-button {
    padding: 5px 10px;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.3s, color 0.3s;
    flex: 1 1 auto; /* 반응형으로 변경 */
    min-width: 50px; /* 최소 너비 설정 */
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

.edit-button:active, .delete-button:active {
    transform: scale(0.95);
}

@media (max-width: 600px) {
    .item-info {
        flex-direction: column; /* 작은 화면에서 세로로 정렬 */
        align-items: flex-start;
    }

    .action-buttons {
        flex-direction: column; /* 작은 화면에서 세로로 정렬 */
        width: 15%; /* 버튼들이 전체 너비 차지 */
    }

    .edit-button, .delete-button {
        width: 15%; /* 버튼들이 전체 너비 차지 */
    }
}
</style>
