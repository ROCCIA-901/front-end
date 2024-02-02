<template>
  <div class="app-container">
    <div class="responsive-container">
    <img :src="imageSrc" alt="온보딩 화면" class="responsive-image" />
    </div>
    <div class="footer">
      <div class="footer-item">
        <h3>내 기록</h3>
        <p>{{ myRecord }}</p>
      </div>
      <div class="footer-item">
        <h3>랭킹</h3>
        <p>{{ ranking }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'OnboardingScreen',
  data() {
    return {
      myRecord: '여기에 서버에서 받아온 내 기록 데이터',
      ranking: '여기에 서버에서 받아온 랭킹 데이터',
      imageSrc: require('@/assets/onboarding_screen.png') // 이미지 소스
    }
  },
  async created() {
    try {
      const response = await axios.get('https://docs.google.com/spreadsheets/d/1hEXyZkO1NOB-Zx6YP0WCMHOJoZZMEREpxqWn3dEUO-U/');
      this.myRecord = response.username; // 필요한 데이터에 따라 조정
      this.ranking = response.generation; // 필요한 데이터에 따라 조정
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
    }
  },
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  height: 97.5vh; /* 전체 화면 높이에 맞춥니다 */
}

.responsive-container {
  flex-grow: 1; /* 남은 공간을 채우도록 설정 */
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  max-width: 100%;
  height: 80%;
  overflow: hidden;
  margin: auto;
}

.responsive-image {
    max-width: 100%;
    height: auto;
}

.footer {
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3; /* 배경색 추가 */
}

.footer-item {
  text-align: center;
}

@media (min-width: 600px) {
  .responsive-container {
    max-width: 500px;
  }
}

@media (max-width: 599px) {
  .responsive-container {
    max-width: 100%;
  }
}
</style>