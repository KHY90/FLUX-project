<template>
    <div class="flux_mypage_withdrawal">
        <h2>회원탈퇴</h2>
        <h3>FLUX 를 탈퇴하시겠어요?</h3>
        <p>탈퇴하려는 이유를 알려주세요.</p>
        <ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="reason" id="duplicateAccount" value="duplicate" v-model="selectedReason">
                <label class="form-check-label" for="duplicateAccount">중복 계정이 있어요.</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="reason" id="tooManyNotifications" value="notifications" v-model="selectedReason">
                <label class="form-check-label" for="tooManyNotifications">알람이 너무 자주 와요.</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="reason" id="notUsingOften" value="notUsingOften" v-model="selectedReason">
                <label class="form-check-label" for="notUsingOften">자주 사용하지 않아요.</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="reason" id="other" value="other" v-model="selectedReason">
                <label class="form-check-label" for="other" v-if="selectedReason !== 'other'">직접입력</label>
                <textarea v-if="selectedReason === 'other'" v-model="otherReason" class="form-control large-input" placeholder="탈퇴 이유를 입력해주세요"></textarea>
            </li>
        </ul>
        <div class="note">
            회원 탈퇴시 회원님의 모든 정보는 삭제되며 탈퇴 후에는 복구할 수 없습니다.
        </div>
        <button class="withdraw-button" @click="showConfirmation">회원 탈퇴</button>

        <!-- Modal -->
        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <p>정말 탈퇴하시겠습니까?</p>
                <button @click="confirmWithdrawal" class="modal-button yes-button">YES</button>
                <button @click="cancelWithdrawal" class="modal-button no-button">NO</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "flux_mypage_withdrawal",
    data() {
        return {
            selectedReason: '',
            otherReason: '',
            showModal: false
        }
    },
    methods: {
        showConfirmation() {
            if (this.selectedReason) {
                if (this.selectedReason === 'other' && !this.otherReason.trim()) {
                    alert("탈퇴 이유를 입력해 주세요.");
                } else {
                    this.showModal = true;
                }
            } else {
                alert("탈퇴하려는 이유를 선택해 주세요.");
            }
        },
        confirmWithdrawal() {
            this.showModal = false;
            // 탈퇴 로직을 여기에 추가
            alert("탈퇴가 완료되었습니다.");
        },
        cancelWithdrawal() {
            this.showModal = false;
        }
    }
}
</script>

<style scoped>
.flux_mypage_withdrawal {
    height: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Arial', sans-serif;
    padding: 20px;
}

h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    color: #666;
    margin-bottom: 20px;
}

.list-group {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
}

.list-group-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
}

.form-check-input {
    margin-right: 10px;
}

.form-control {
    flex: 1;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.large-input {
    width: 100%;
    height: 150px; /* 고정 높이 설정 */
    padding: 15px;
    font-size: 18px;
    box-sizing: border-box;
    resize: none; /* 사용자가 크기 변경 불가능 */
}

.note {
    color: #999;
    font-size: 12px;
    margin-bottom: 20px;
}

.withdraw-button {
    background-color: #ccc;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.withdraw-button:hover {
    background-color: #999;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    max-width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-button {
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.yes-button {
    background-color: #dc3545;
    color: white;
}

.no-button {
    background-color: #6c757d;
    color: white;
}
</style>
