<template>
  <div class="attendance-container">
    <div class="header">
      <button @click="goBack"> &lt; 출석하기</button>
      <p>오늘은 양재 지정에서 운동하는 날입니다!</p> //서버 연동 필요
    </div>
    <div class="progress-section">
      <label for="progress">내 출석률</label>
      <progress id="progress" value="80" max="100"></progress>
      <span>80%</span>
    </div>
    <button class="attend-button" @click="attend">출석하기</button>
    <NavigationBar/>
  </div>
</template>

<script>

import NavigationBar from '@/components/navigation_bar.vue';

export default {
  methods: {
    goBack() {
      this.$router.push('/member_main');
    },
    attend() {
      // 출석 로직을 여기에 구현합니다.
    }
  },
  components: {
    NavigationBar : NavigationBar,
  }
}
</script>

<style>
.attendance-container {
  max-width: 360px;
  margin: auto;
  padding: 20px;
}

.header button {
  background: none;
  border: none;
  color: #4CAF50;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 레이블을 왼쪽 상단으로 정렬 */
}

.header p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.progress-section {
  margin-bottom: 20px;
}

.progress-section label {
  display: block;
  margin-bottom: 5px;
}

progress {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
}

progress::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 5px;
}

progress::-webkit-progress-value {
  background-color: #4CAF50;
  border-radius: 5px;
}

.attend-button {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.attend-button:hover {
  background-color: #45a049;
}

/* 네비게이션 바 스타일은 이전 질문에서 제공된 것을 사용합니다. */

</style>
