<!--기록하기 버튼 누르면 튀어나오게 - 인강에 있는 내용. v-if로 날짜마다 입력 가능. 누른 버튼에 따라 다른 정보 입력돼도록
달력 클릭 - 탭 생성 - 누른 버튼에 따라 list.js의 다른 열에 저장 - 저장한 내용 서버에 전송 - 저장된 달력 색 변화(list 값에 따라 다른 색)
- 이미 저장된 날짜 누르면 달력 하단에 수정칸 생성, 기록하기 눌렀을 때 날짜까지 띄우기 or 날짜 누르고 기록하기 누르면 모달?
-> 이 경우 이미 데이터가 있는 칸을 누르면 정보 뜨고 없는 칸 누르면 정보 안 뜸
 -->
<template>
  <div class="my-records-container">
    <!-- 상단 제목 -->
    <div class="header">
      <h1>기록</h1>
    </div>

    <!-- 탭 메뉴 -->
    <div class="tabs">
      <button class="tab" :class="{ active: currentTab === 'records' }" @click="currentTab = 'records'">내 기록</button>
      <button class="tab" :class="{ active: currentTab === 'ranking' }" @click="goToRanking">랭킹</button>
    </div>

    <!-- 달력 컴포넌트 -->
    <CalendarComponent />
    
    <!-- 기록하기 버튼 -->
    <button class="record-button">기록하기</button>

    <!-- 네비게이션 바 -->
    <NavigationBar />
  </div>
</template>

<script>
import CalendarComponent from '@/components/CalendarComponent.vue';
import NavigationBar from '@/components/navigation_bar.vue';

export default {
  components: {
    NavigationBar : NavigationBar,
    CalendarComponent : CalendarComponent
  },
  data() {
    return {
      currentTab: 'records' // 현재 선택된 탭을 추적합니다.
    };
  },
  methods: {
    goToRanking() {
      // 랭킹 페이지로 이동하는 로직
      this.$router.push('/ranking');
    }
  }
};
</script>

<style>
.my-records-container {
  max-width: 360px;
  margin: auto;
}

.header h1 {
  text-align: center;
  margin: 20px 0;
}

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab {
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
}

.tabs .tab {
  color: black; /* 탭의 글자색을 검정색으로 설정 */
}

.tab.active {
  border-bottom: 2px solid #4CAF50; /* 현재 선택된 탭에 하이라이트 효과 */
}

.record-button {
  width: 100%;
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}

/* 여기에 NavigationBar 컴포넌트에 대한 스타일을 추가하세요. */
</style>
