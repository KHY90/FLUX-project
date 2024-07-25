<template>
    <!-- 아티클 등록 페이지 시작 -->
    <div class="container">
        <div class="top">
            <h3>아티클 정보를 입력해 주세요.</h3>
        </div>
        <!-- 카테고리 입력창 시작 -->
        <p>분류</p>
        <select class="form-select" aria-label="Default select example">
            <option selected>카테고리</option>
            <option value="1">인터뷰</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <!-- 카테고리 입력창 종료 -->

        <!-- 작가 이름 입력창 시작 -->
         <div class="name">
        <p>작가 이름</p>
        <div class="input-group">
            <input type="text" aria-label="name" class="form-control" placeholder="작가 이름을 입력해주세요.">
        </div>
    </div>
        <!-- 작가 이름 입력창 종료 -->

        <!-- 이미지 등록창 시작 -->
        <div class="imgInsert">
        <p>이미지 등록</p>
        <div class="form-group">
            <div class="image-upload-container">
                <input type="file" id="image-upload" class="form-control" aria-label="Upload" accept="image/*">
                <img id="upload-image-preview" src="https://via.placeholder.com/150" alt="이미지 업로드" class="upload-image">
            </div>
        </div>
    </div>
        <!-- 이미지 등록창 종료 -->

        <!-- 인터뷰 내용 등록창 시작 -->
        <p>내용</p>
        <div class="input-group">
            <textarea class="form-control" aria-label="With textarea" placeholder="인터뷰 내용을 작성해 주세요."></textarea>
        </div>
        <!-- 인터뷰 내용 등록창 종료 -->
        <!-- 등록버튼 시작 -->
        <button type="button" class="btn btn-primary btn-lg">수정 버튼</button>
    </div>
    <!-- 등록버튼 종료 -->
    <!-- 아티클 등록 페이지 종료 -->
</template>

<script>
export default {
    name: 'ManagerArticleModify',
    methods: {
        handleImageUpload(event) {
            const input = event.target;
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    document.getElementById('upload-image-preview').src = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        triggerFileUpload() {
            document.getElementById('image-upload').click();
        }
    },
    mounted() {
        document.getElementById('image-upload').addEventListener('change', this.handleImageUpload);
        document.getElementById('upload-image-preview').addEventListener('click', this.triggerFileUpload);
    }

}
</script>

<style>
/* 전체 폼 컨테이너 */
.container {
    border: 1px solid black;
    margin-top: 30px;
    width: 60%;
}

.top {
    margin-top: 20px;
}

.article-form-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 폼 상단 제목 */
.top {
    margin-bottom: 20px;
    text-align: center;
}

/* 폼 그룹 */
.form-group {
    width: 100%;
    margin-bottom: 20px;
}

/* 레이블 스타일 */
.form-group label {
    display: block;
    margin-bottom: 5px;
}

.name {
    margin-top: 20px;
}

/* 입력 필드 스타일 */
.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

/* 텍스트 영역 스타일 */
.form-control[aria-label="With textarea"] {
    height: 200px;
    resize: none;
}

/* 이미지 업로드 컨테이너 */
.imgInsert{
    margin-top: 10px;
}

.imgInsert p {
    margin-top: 10px;
}

.image-upload-container {
    position: relative;
    width: 150px;
    height: 150px;
}

#image-upload {
    display: none; /* 파일 입력 필드를 숨김 */
}

.upload-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border: 2px dashed #ccc;
    border-radius: 4px;
}

/* 버튼 컨테이너 */
.button-container {
    text-align: right;
}

/* 버튼 스타일 */
.btn {
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #FD8E4C;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
}

.btn:hover {
    background-color: #e67e22;
}
</style>
