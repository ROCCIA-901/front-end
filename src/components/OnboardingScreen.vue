<template>
  <div class="responsive-container">
   <img :src="imageSrc" alt="온보딩 화면" class="responsive-image" />
  </div>
</template>
  
<script>
export default {
  name: 'OnboardingScreen',
  data() {
    return {
      imageSrc: require('@/assets/onboarding_screen.png')
    }
  }
};
</script>
  
<style>
  /* 온보딩 화면의 스타일을 여기에 작성하세요 */
</style>
  