<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <div class="app-container">
    <div class="responsive-container">
    </div>
  </div>
</template>

<script>

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

<!-- <template>
  <div class="app-container" @click="goToNextPage">
    
  </div>
</template>

<script>

import login_main from '@/components/login_main.vue';

export default {
  // 데이터 및 컴포넌트 정의

  methods: {
    goToNextPage() {
      this.$router.push('/login-main');
    }
  },

  // 나머지 코드
}
</script>

 -->
