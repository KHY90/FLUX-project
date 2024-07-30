<template>
    <div class="noticeEditContainer">
        <div class="editsubject">
            <h1>공지 작성</h1>
        </div>
        <div class="mb-3">
            <label for="noticeTitle" class="form-label">공지 제목</label>
            <input 
                type="text" 
                class="form-control" 
                id="noticeTitle" 
                v-model="title" 
                placeholder="제목을 작성해 주세요."
            />
        </div>
        <div class="mb-3">
            <label for="noticeContent" class="form-label">공지 사항</label>
            <textarea 
                class="form-control" 
                id="noticeContent" 
                rows="3" 
                v-model="content" 
                placeholder="공지사항을 작성해 주세요."
            ></textarea>
        </div>
        <div class="buttongroup">
            <button 
                type="button" 
                class="btn btn-outline-success" 
                @click="submitNotice"
            >
                등록
            </button>
            <button 
                type="button" 
                class="btn btn-outline-danger" 
                @click="cancel"
            >
                취소
            </button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            title: '',  
            content: '',
            notices: [] // 공지 목록을 저장할 배열
        };
    },
    methods: {
        fetchNotices() {
            return axios.get('http://localhost:8001/notification')
                .then(response => {
                    this.notices = response.data;
                })
                .catch(error => {
                    console.error('공지 목록을 가져오는데 실패했습니다:', error);
                });
        },
        getNextNotiId() {
            if (this.notices.length === 0) return 1;
            const maxId = Math.max(...this.notices.map(notice => parseInt(notice.noti_id)));
            return maxId + 1;
        },
        async submitNotice() {
            await this.fetchNotices(); // 공지 목록을 먼저 가져옵니다.
            const currentDate = new Date().toISOString(); // 현재 날짜와 시간을 ISO 형식으로 가져오기
            const notice = {
                noti_id: String(this.getNextNotiId()), // noti_id를 문자열로 변환하여 저장
                user_id: 1, // user_id를 1로 고정
                noti_title: this.title,
                noti_contents: this.content,
                noti_createat: currentDate, // 작성 날짜
                noti_updateat: currentDate  // 수정 날짜
            };

            axios.post('http://localhost:8001/notification', notice)
                .then(response => {
                    console.log('공지 등록 성공:', response.data);
                    this.title = ''; // 제목 필드를 초기화합니다.
                    this.content = ''; // 내용 필드를 초기화합니다.
                    // 공지 등록 성공 후 공지 목록 페이지로 리다이렉트
                    this.$router.push('/manager/notice/noticelist');
                })
                .catch(error => {
                    console.error('공지 등록 실패:', error);
                });
        },
        cancel() {
            // 이전 페이지로 이동
            this.$router.go(-1);
        }
    }
};
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
