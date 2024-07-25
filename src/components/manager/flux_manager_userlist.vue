<template>
    <div class="managerContainer">
        <div class="border-box">
            <table class="table table-striped table-hover custom-table">
                <thead>
                    <tr>
                        <th scope="col" @click="sortTable('code')">회원코드</th>
                        <th scope="col" @click="sortTable('name')">회원 이름</th>
                        <th scope="col" @click="sortTable('purchase')">구매 내역</th>
                        <th scope="col" @click="sortTable('bid')">입찰 내역</th>
                        <th scope="col" @click="sortTable('role')">회원 권한</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in sortedMembers" :key="member.code">
                        <th scope="row">{{ member.code }}</th>
                        <td>{{ member.name }}</td>
                        <td>{{ member.purchase }}</td>
                        <td>{{ member.bid }}</td>
                        <td>{{ member.role }}</td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="pagination-container">
                <ul class="pagination pagination-black">
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
    name: 'ManagerTable',
    data() {
        return {
            members: [
                { code: 1, name: '비슈누', purchase: 3, bid: 3, role: '일반유저' },
                { code: 2, name: '브라흐마', purchase: 5, bid: 5, role: '관리자' },
                { code: 3, name: '시바', purchase: 1, bid: 1, role: '일반유저' },
                { code: 4, name: '인드라', purchase: 10, bid: 10, role: '일반유저' },
            ],
            currentSort: 'code',
            currentSortDir: 'asc'
        };
    },
    computed: {
        sortedMembers() {
            return this.members.sort((a, b) => {
                let modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            });
        }
    },
    methods: {
        sortTable(column) {
            if (this.currentSort === column) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            } else {
                this.currentSort = column;
                this.currentSortDir = 'asc';
            }
        }
    }
};
</script>

<style scoped>
.managerContainer {
    width: 100%;
    overflow-x: auto;
    margin: 20px 10px; /* 위, 오른쪽, 왼쪽에 마진 추가 */
}

.border-box {
    border: 1px solid #ddd; /* 보더 박스 추가 */
    padding: 10px;
    margin: 20px 0; /* 상하 마진 추가 */
}

.custom-table {
    width: 100%;
    min-width: 600px; /* 테이블 최소 너비 설정 */
    table-layout: auto; /* 자동 테이블 레이아웃 */
}

.pagination-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.pagination-black .page-link {
    color: black; /* 페이지 링크 색상을 검정색으로 */
}

.pagination-black .page-link:hover {
    background-color: black; /* 링크 호버시 배경색을 검정색으로 */
    color: white; /* 링크 호버시 글자색을 흰색으로 */
}
</style>