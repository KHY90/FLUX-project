<template>
    <div class="noticeEditContainer">
        <div class="editsubject">
            <h1>공지 수정</h1>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">공지 제목</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="제목을 작성해 주세요.">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">공지 사항</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="공지사항을 작성해 주세요."></textarea>
        </div>
        <div class="buttongroup">
            <button type="button" class="btn btn-outline-success">수정</button>
            <button type="button" class="btn btn-outline-danger">취소</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.noticeEditContainer {
    width: 100%;
    max-width: 800px;
    margin: 0 auto; /* 중앙 정렬 */
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: #fff;
    margin-top: 40px;
}

.editsubject {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 2em;
    font-weight: bold;
}

.mb-3 .form-control {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 40px;
    font-size: 1em;
    padding: 10px;
    box-sizing: border-box;
}

.buttongroup {
    display: flex;
    justify-content: flex-end;
    gap: 10px; /* 버튼 간격 추가 */
    margin-top: 20px;
}

.buttongroup .btn {
    min-width: 100px;
    padding: 10px 20px;
    font-size: 1em;
}

.buttongroup .btn + .btn {
    margin-left: 10px;
}
</style>
