<template>
    <div class="noticeEditContainer">
        <div class="editsubject">
            <h1>공지 수정</h1>
        </div>
        <div class="mb-3">
            <label for="noticeTitle" class="form-label">공지 제목</label>
            <input
                type="text"
                class="form-control"
                id="noticeTitle"
                v-model="noticeTitle"
                placeholder="공지 제목을 입력하세요" />
        </div>
        <div class="mb-3">
            <label for="noticeContent" class="form-label">공지 사항</label>
            <textarea
                class="form-control"
                id="noticeContent"
                rows="3"
                v-model="noticeContent"
                placeholder="공지 내용을 입력하세요"></textarea>
        </div>
        <div class="buttongroup">
            <button type="button" class="btn btn-outline-success" @click="updateNotice">
                수정
            </button>
            <button type="button" class="btn btn-outline-danger" @click="cancel">
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
            noti_id: null,
            noticeTitle: '',
            noticeContent: ''
        };
    },
    watch: {
        '$route.query.id': {
            handler(newVal) {
                this.noti_id = newVal;
                this.fetchNotice();
            },
            immediate: true
        }
    },
    methods: {
        fetchNotice() {
            const noti_id = this.noti_id;
            if (noti_id) {
                axios.get(`http://localhost:8001/notification?noti_id=${noti_id}`)
                    .then(response => {
                        const notice = response.data[0];
                        if (notice) {
                            this.noticeTitle = notice.noti_title;
                            this.noticeContent = notice.noti_contents;
                        } else {
                            console.error('공지사항을 찾을 수 없습니다.');
                        }
                    })
                    .catch(error => {
                        console.error('공지사항을 가져오는 중 오류가 발생했습니다!', error);
                    });
            } else {
                console.error('공지 ID가 없습니다.');
            }
        },
        updateNotice() {
            const noti_id = this.noti_id;
            if (noti_id) {
                const updatedNotice = {
                    noti_title: this.noticeTitle,
                    noti_contents: this.noticeContent,
                    noti_updateat: new Date().toISOString()
                };

                axios.put(`http://localhost:8001/notification?noti_id=${noti_id}`, updatedNotice)
                    .then(response => {
                        console.log('공지 수정 성공:', response.data);
                        this.$router.push('/notification-list');
                    })
                    .catch(error => {
                        console.error('공지 수정 실패:', error);
                    });
            } else {
                console.error('공지 ID가 없습니다.');
            }
        },
        cancel() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.noticeEditContainer {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
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
    gap: 10px;
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
