<template>
  <div class="comment-align">
    <div>
      <div class="flex form-floating mb-2 text-a">
        <textarea
          class="form-control"
          v-model="newComment"
          placeholder="댓글을 작성해주세요"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
        <label for="floatingTextarea2">댓글</label>
      </div>
      <button class="mb-2 button1" @click="SubmitComment">작성</button>
    </div>

    <div v-if="comments && comments.length" class="comments-list">
      <!-- 댓글을 추천 수에 따라 정렬 -->
      <div
        v-for="(comment, index) in sortedComments"
        :key="index"
        class="comment-item mb-3"
      >
        <div class="comment-id mb-3">
          {{ comment.userName }}
        </div>

        <div v-if="comment.isEditing">
          <textarea
            v-model="comment.editContent"
            class="form-control"
            style="height: 100px"
          ></textarea>
          <button class="button2" @click="completeEdit(comment.id)">
            완료
          </button>
        </div>
        <div v-else>
          <div class="comment-3rd mb-3">
            <div class="comment-contents">{{ comment.commentContents }}</div>
            <div class="date-like-align">
              <div class="mr-10">
                <div class="comment-date" v-if="comment.commentUpdateAt">
                  {{ formatDate(comment.commentUpdateAt) }}
                </div>
                <div class="comment-date" v-else>
                  {{ formatDate(comment.commentCreateAt) }}
                </div>
              </div>
              <!-- 추천 수를 표시하는 부분 -->
              <div class="mr-10 comment-date">
                추천 수: {{ comment.likeCount }}
              </div>
            </div>
          </div>
          <div class="comment-buttons mr-10">
            <button class="button2" @click="editComment(comment.id)">
              수정
            </button>
            <button class="button2" @click="deleteComment(comment.id)">
              삭제
            </button>
            <button class="button2" @click="likeComment(comment.id)">
              추천
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="comment-title">
        아직 댓글이 없습니다. 첫번째 댓글을 달아주세요!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import axios from "axios";
import Swal from "sweetalert2";

const comments = ref([]); // 상태 변수 선언
const newComment = ref("");

const authStore = useAuthStore();
const userId = authStore.userId;
const userName = authStore.username;

const route = useRoute(); // 현재 경로 정보 가져오기
const articleId = route.params.id; // 아티클의 아이디를 라우터에서 가져옴

// LocalDateTime 을 포맷팅 하는 함수
function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  return date.toLocaleString();
}

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/comments/article/${articleId}`
    );
    comments.value = response.data.map((comment) => ({
      ...comment,
      id: comment.commentId, // commentId를 id로 매핑
      isEditing: false, // 수정 모드를 초기화
      editContent: comment.commentContents, // 수정할 내용을 초기화
    }));
  } catch (error) {
    comments.value = []; // 오류가 발생해도 comments를 빈 배열로 초기화
  }
});

// 댓글을 추천 수에 따라 정렬하는 계산된 속성
const sortedComments = computed(() => {
  return [...comments.value].sort((a, b) => b.likeCount - a.likeCount);
});

// 댓글을 서버에 전송하는 함수
async function SubmitComment() {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/v1/comments/${articleId}`,
      {
        articleId: articleId,
        userId: userId,
        userName: userName,
        commentContents: newComment.value,
      }
    );
    // 성공적으로 댓글이 저장된 후, 댓글 리스트 업데이트
    comments.value.push({
      ...response.data,
      id: response.data.commentId, // 서버에서 받은 commentId를 id로 설정
      isEditing: false,
      editContent: response.data.commentContents,
    });
    newComment.value = "";
  } catch (error) {
    console.error("댓글을 저장하는 도중 오류가 발생했습니다:", error);
  }
}

// 댓글 추천 기능
async function likeComment(commentId) {
  try {
    const result = await Swal.fire({
      text: "이 댓글을 추천하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "추천",
      cancelButtonText: "취소",
    });

    if (result.isConfirmed) {
      const response = await axios.put(
        `http://localhost:8080/api/v1/comments/${commentId}/like`
      );
      const updatedComment = response.data;

      // 댓글 리스트에서 해당 댓글을 찾아서 업데이트
      const index = comments.value.findIndex(
        (comment) => comment.id === commentId
      );
      if (index !== -1) {
        comments.value[index].likeCount = updatedComment.likeCount;
      }

      Swal.fire("추천 완료!", "댓글을 추천하였습니다.", "success");
    }
  } catch (error) {
    console.error("댓글 추천 중 오류가 발생했습니다:", error);
    Swal.fire("오류", "댓글 추천 중 오류가 발생했습니다.", "error");
  }
}

// 댓글 수정 모드 활성화 함수
function editComment(commentId) {
  const comment = comments.value.find((comment) => comment.id === commentId);
  if (comment) {
    comment.isEditing = true;
  }
}

// 댓글 수정 완료 함수
async function completeEdit(commentId) {
  const comment = comments.value.find((comment) => comment.id === commentId);
  if (comment) {
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/comments/${commentId}`,
        {
          articleId: comment.articleId,
          commentId: commentId,
          userId: userId, // 유저 ID 포함
          commentContents: comment.editContent,
        }
      );

      // 댓글 리스트에서 해당 댓글을 찾아서 업데이트
      const index = comments.value.findIndex((c) => c.id === commentId);

      if (index !== -1) {
        comments.value[index].commentContents = response.data.commentContents;
        comments.value[index].isEditing = false; // 수정 모드 종료
      }
    } catch (error) {
      console.error("댓글 수정 중 오류가 발생했습니다:", error);
    }
  } else {
    console.error("댓글을 찾을 수 없습니다. commentId:", commentId);
  }
}

// 댓글 삭제 함수
async function deleteComment(commentId) {
  try {
    const result = await Swal.fire({
      title: "댓글을 삭제하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    });

    if (result.isConfirmed) {
      await axios.delete(`http://localhost:8080/api/v1/comments/${commentId}`);
      // 댓글 목록에서 삭제된 댓글을 제거
      comments.value = comments.value.filter(
        (comment) => comment.id !== commentId
      );
      Swal.fire("삭제 완료!", "댓글이 삭제되었습니다.", "success");
    }
  } catch (error) {
    console.error("댓글 삭제 중 오류가 발생했습니다:", error);
    Swal.fire("오류", "댓글 삭제 중 오류가 발생했습니다.", "error");
  }
}
</script>

<style scoped>
textarea {
  height: 100px; /* 고정 높이 설정 */
  resize: none; /* 사용자가 높이를 조절할 수 없도록 함 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}

label {
  font-family: "LINESeedKR-Bd";
  font-size: 14px;
}

.ml-10 {
  margin-left: 10px;
}

.mr-10 {
  margin-right: 10px;
}

.mb-3 {
  margin-bottom: 3px;
}

.comment-item {
  padding: 15px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
}

.text-a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
}

.comment-align {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.comments-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
}

.comment-3rd {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.comment-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.comment-id {
  font-family: "LINESeedKR-Bd";
  font-size: 18px;
}

.comment-contents {
  font-family: "LINESeedKR-Bd";
  font-size: 14px;
}

.comment-date {
  font-family: "LINESeedKR-Bd";
  font-size: 12px;
  color: #999;
}

.date-like-align {
  display: flex;
  flex-direction: row;
}

.button1 {
  width: 5%;
  border-radius: 8px;
  border: none;
  border: 1px solid #999;
  background-color: #febe98;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
}

.button2 {
  border-radius: 8px;
  border: 1px solid #999;
  background-color: #febe98;
  margin-left: 3px;
  margin-right: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
  font-family: "LINESeedKR-Bd";
  font-size: 16px;
}
</style>
