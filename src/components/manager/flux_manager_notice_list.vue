<template>
    <div class="nocontainer">
        <div class="noticeMain">
            <div class="noticeSubject">
                <h1>공지 목록</h1>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">공지 코드</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="pagination-container">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nocontainer {
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    height: 100vh; /* 화면 높이 100% */
    background-color: #f8f9fa; /* 배경색 설정 (옵션) */
}

.noticeMain {
    max-width: 900px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.noticeSubject {
    text-align: center;
    margin-bottom: 40px; /* 제목과 테이블 사이의 간격을 증가시킴 */
}

.noticeSubject h1 {
    font-size: 2em;
    font-weight: bold;
}

.table {
    width: 100%;
    margin-bottom: 20px;
}

.pagination-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.pagination {
    display: flex;
    gap: 5px; /* 페이지 번호 간격 */
}

.page-link {
    color: black; /* 페이지 링크 색상 */
    border-color: black; /* 페이지 링크 테두리 색상 */
}

.page-link:hover {
    background-color: black; /* 링크 호버시 배경 색상 */
    color: white; /* 링크 호버시 글자 색상 */
}

.page-item.active .page-link {
    background-color: black; /* 현재 페이지 배경 색상 */
    color: white; /* 현재 페이지 글자 색상 */
}
</style>
