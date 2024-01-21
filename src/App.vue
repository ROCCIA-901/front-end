<template>
  <div class="responsive-container">
    <img :src="imageSrc" alt="온보딩 화면" class="responsive-image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 이미지 파일의 경로를 정확하게 설정해야 합니다.
      imageSrc: require('@/assets/온보딩 화면.png')
    }
  }
}
</script>

<style>
/* 모든 화면 크기에 대해 이미지가 컨테이너에 맞게 조정되도록 설정합니다. */
.responsive-image {
  max-width: 100%;
  height: auto;
}

/* 뷰포트의 크기에 따라 컨테이너의 최대 너비를 조정합니다. */
@media (min-width: 600px) {
  .responsive-container {
    max-width: 500px; /* 데스크톱 화면에서 이미지의 최대 크기를 설정합니다. */
    margin: auto; /* 가운데 정렬 */
  }
}

@media (max-width: 599px) {
  .responsive-container {
    max-width: 100%; /* 모바일 화면에서 이미지가 전체 폭을 차지하도록 설정합니다. */
  }
}
</style>
