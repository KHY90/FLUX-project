<template>
  <div>
    <div class="form-floating mb-4">
      <textarea class="form-control" v-model="newComment" placeholder="댓글을 작성해주세요" id="floatingTextarea2" style="height: 100px"></textarea>
      <label for="floatingTextarea2">댓글</label>
      <button @click="SubmitComment">작성</button>
    </div>
    
    <div v-if="comments && comments.length">
      <!-- 댓글을 추천 수에 따라 정렬 -->
      <div v-for="(comment, index) in sortedComments" :key="index" class="comment-item mb-3">
        <p><strong>{{ comment.userId }}</strong></p>
        
        <div v-if="comment.isEditing">
          <textarea v-model="comment.editContent" class="form-control" style="height: 100px"></textarea>
          <button @click="completeEdit(comment.id)">완료</button>
        </div>
        <div v-else>
          <p>{{ comment.commentContents }}</p>
          <p>
            <span v-if="comment.commentUpdateAt">{{ comment.commentUpdateAt }}</span>
            <span v-else>{{ comment.commentCreateAt }}</span>
          </p>
          <!-- 추천 수를 표시하는 부분 -->
          <p>추천 수: {{ comment.likeCount }}</p>
          <button @click="editComment(comment.id)">수정</button>
          <button @click="deleteComment(comment.id)">삭제</button>
          <button @click="likeComment(comment.id)">추천</button>
        </div>
        <hr />
      </div>
    </div>
    <div v-else>
      <p>아직 댓글이 없습니다. 첫번째 댓글을 달아주세요!</p>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const comments = ref([]); // 상태 변수 선언
const route = useRoute(); // 현재 경로 정보 가져오기
const newComment = ref('');
const articleId = route.params.articleId; // 아티클의 아이디를 라우터에서 가져옴

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/comments/article/${articleId}`);
    comments.value = response.data.map(comment => ({
      ...comment,
      isEditing: false,  // 수정 모드를 초기화
      editContent: comment.commentContents // 수정할 내용을 초기화
    }));
    console.log("댓글 데이터를 가져왔습니다:", comments.value);
  } catch (error) {
    console.error('댓글 데이터를 가져오는 도중 오류가 발생했습니다:', error);
  }
});

// 댓글을 추천 수에 따라 정렬하는 계산된 속성
const sortedComments = computed(() => {
  return [...comments.value].sort((a, b) => b.likeCount - a.likeCount);
});

// 댓글을 서버에 전송하는 함수
async function SubmitComment() {
  try {
    const response = await axios.post(`http://localhost:8080/api/v1/comments`, {
      articleId: articleId,
      commentContents: newComment.value, // newComment의 값을 서버에 전달
    });
    // 성공적으로 댓글이 저장된 후, 댓글 리스트 업데이트
    comments.value.push({
      ...response.data,
      isEditing: false,  // 새 댓글도 수정 모드를 초기화
      editContent: response.data.commentContents // 수정할 내용을 초기화
    });
    console.log("댓글을 저장했습니다:", response.data);
    // 댓글이 성공적으로 저장된 후 텍스트 박스를 비웁니다.
    newComment.value = '';
  } catch (error) {
    console.error('댓글을 저장하는 도중 오류가 발생했습니다:', error);
  }
}

// 댓글 추천 기능
async function likeComment(commentId) {
  try {
    const response = await axios.put(`http://localhost:8080/api/v1/comments/${commentId}/like`);
    const updatedComment = response.data;

    // 댓글 리스트에서 해당 댓글을 찾아서 업데이트
    const index = comments.value.findIndex(comment => comment.id === commentId);
    if (index !== -1) {
      comments.value[index].likeCount = updatedComment.likeCount;
    }
    console.log(`댓글 ${commentId}가 추천되었습니다.`, updatedComment);
  } catch (error) {
    console.error('댓글 추천 중 오류가 발생했습니다:', error);
  }
}

// 댓글 수정 모드 활성화 함수
function editComment(commentId) {
  const comment = comments.value.find(comment => comment.id === commentId);
  if (comment) {
    comment.isEditing = true;
  }
}

// 댓글 수정 완료 함수
async function completeEdit(commentId) {
  const comment = comments.value.find(comment => comment.id === commentId);
  if (comment) {
    try {
      await axios.put(`http://localhost:8080/api/v1/comments/${commentId}`, {
        commentContents: comment.editContent
      });
      comment.commentContents = comment.editContent; // 수정된 내용 업데이트
      comment.isEditing = false; // 수정 모드 종료
      console.log(`댓글 ${commentId}가 수정되었습니다.`, comments.value);
    } catch (error) {
      console.error('댓글 수정 중 오류가 발생했습니다:', error);
    }
  }
}

// 댓글 삭제 함수
async function deleteComment(commentId) {
  try {
    await axios.delete(`http://localhost:8080/api/v1/comments/${commentId}`);
    // 댓글 목록에서 삭제된 댓글을 제거
    comments.value = comments.value.filter(comment => comment.id !== commentId);
    console.log(`댓글 ${commentId}가 삭제되었습니다.`);
  } catch (error) {
    console.error('댓글 삭제 중 오류가 발생했습니다:', error);
  }
}

</script>


<style scoped>
.comment-item {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
}
</style>
