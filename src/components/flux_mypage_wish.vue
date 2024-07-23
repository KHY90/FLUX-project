<template>
    <div class="flux_mypage_wishlist">
        <h2>위시리스트</h2>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="item-info d-flex align-items-center">
                    <img src="/src/assets/image/img1.png" alt="상품 이미지" class="product-image">
                    <div class="item-details">
                        <h3>Fruit Shop 1</h3>
                        <p>출시년도: 2022</p>
                        <p>작품크기: 25 x 25 cm</p>
                        <p>작품재료: 과일과 단색의 수채, 백화점</p>
                    </div>
                </div>
                <span class="heart-icon">❤️</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div class="item-info d-flex align-items-center">
                    <img src="/src/assets/image/img2.png" alt="상품 이미지" class="product-image">
                    <div class="item-details">
                        <h3>Fruit Shop 2</h3>
                        <p>출시년도: 2022</p>
                        <p>작품크기: 25 x 25 cm</p>
                        <p>작품재료: 과일과 단색의 수채, 백화점</p>
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
}
</script>

<style scoped>
.flux_mypage_wishlist {
    padding: 20px;
}

.flux_mypage_wishlist h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.list-group-item {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    padding: 15px;
}

.item-info {
    display: flex;
    align-items: center;
}

.product-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 15px;
}

.item-details h3 {
    margin: 0;
    font-size: 18px;
}

.item-details p {
    margin: 5px 0;
    font-size: 14px;
}

.heart-icon {
    font-size: 24px;
    color: #FD8E4C;
}
</style>
