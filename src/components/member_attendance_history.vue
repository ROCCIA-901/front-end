<template>
  <div class="attendance-history-container">
    <div class="header">
      <button @click="goToMemberMain"> &lt; 출석 내역</button>
    </div>
    <div class="chart-container">
      <!-- 차트 컴포넌트를 여기에 삽입 -->
    </div>
    <div class="attendance-list">
      <table>
        <!-- 데이터 테이블 로우를 여기에 삽입 -->
      </table>
    </div>
    <NavigationBar/>
  </div>

<!--차트 구성:
Chart.js를 사용하여 파이 차트를 구현할 수 있습니다. 이를 위해 vue-chartjs 래퍼 컴포넌트를 사용하거나 직접 Chart.js를 구현할 수 있습니다. Vue 프로젝트에 Chart.js를 설치하고 구성하는 방법에 대한 자세한 정보는 해당 라이브러리의 문서를 참조하세요.

데이터 테이블 구성:
각 출석 내역은 <tr> 태그로 테이블 내부에 나열됩니다. 실제 데이터가 들어갈 위치에 v-for 지시어를 사용하여 배열 내의 각 항목을 반복하여 표시할 수 있습니다.

이 예시는 기본 레이아웃과 구조를 제공하며, 실제 데이터와 동적 기능을 추가하기 위해 필요한 로직은 별도로 구현해야 합니다. -->

</template>

<script>
import NavigationBar from '@/components/navigation_bar.vue';
// 여기에 차트 라이브러리 import 구문 추가

export default {
  
  methods: {
    goToMemberMain() {
      this.$router.push('/member_main');
    }
  },
  components: {
    NavigationBar : NavigationBar,
  }
  // 여기에 차트 데이터와 옵션을 정의
}
</script>

<style>

</style>

