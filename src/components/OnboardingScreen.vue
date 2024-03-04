<template>
  <div class="app-container">
    <div class="responsive-container">
    <img :src="imageSrc" alt="온보딩 화면" class="responsive-image" />
    </div>
  </div>
    <!--
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
  </div> -->
</template>

<script>

export default {
  name: 'OnboardingScreen',
  data() {
    return {
      imageSrc: require('@/assets/onboarding_screen.png')
  }
}
}
</script>

<style>

.app-container {
  display: flex;
  flex-direction: column;
  height: 97.5vh;
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