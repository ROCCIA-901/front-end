<template>
  <nav class="navigation_bar">
    <button @click="goToHome">홈</button>
    <button @click="goToMyRecords">기록</button>
    <button @click="goToCompetitions">대회</button>
    <button @click="goToMyPage">마이페이지</button>
  </nav>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/member_main');
    },
    goToMyRecords() {
      this.$router.push('/member_record_main');
    },
    goToCompetitions() {
      this.$router.push('/competitions');
    },
    goToMyPage() {
      this.$router.push('/my-page');
    }
  }
}
</script>

<style>

.navigation_bar {
  position: fixed;
  bottom: 0;
  left: 0; /* 왼쪽에서 시작 */
  right: 0; /* 오른쪽 끝까지 */
  width: 100vw; /* 뷰포트의 전체 너비를 사용 */
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  padding: 10px 0;
  box-sizing: border-box; /* padding을 너비 계산에 포함 */
  border-top: 1px solid #ccc; /* 구분선 추가 */
}

.navigation_bar button {
  flex: 1;
  padding: 10px;
  border: none;
  background-color: transparent;
  color: black; /* 글자 색상을 검정으로 변경 */
  text-align: center; /* 텍스트 중앙 정렬 */
}
</style>