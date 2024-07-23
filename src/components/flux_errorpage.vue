<template>
    <div class="flux_errorpages">
        <div class="overlay-text">
            <h1>FLUX ERROR</h1>
            <h2>오류가 발생했습니다</h2>
            <p>죄송합니다, 페이지를 찾을 수 없습니다.</p>
            <button @click="goHome">홈으로 돌아가기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'flux_error',
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.flux_errorpages {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #FFE9DD, #FEBE98);
    color: white;
    text-align: center;
    font-family: 'LINESeedKR-Bd';
}

.overlay-text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.overlay-text h1 {
    font-size: 72px;
    margin: 0 0 40px 0;
    animation: fadeInDown 1s ease-in-out;
    font-family: 'PuradakGentleGothicR';
}

.overlay-text h2 {
    font-size: 36px;
    margin: 20px 0;
    animation: fadeInUp 1s ease-in-out;
}

.overlay-text p {
    font-size: 24px;
    margin: 20px 0;
    animation: fadeInUp 1s ease-in-out;
}

.overlay-text button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #FD8E4C;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    animation: fadeInUp 1s ease-in-out 0.5s;
    margin-top: 20px;
}

.overlay-text button:hover {
    background-color: white;
    color: #FD8E4C;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
