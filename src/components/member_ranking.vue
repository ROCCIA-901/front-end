<template>
  <div class="ranking-container">
    <div class="header">
      <h1>기록</h1>
    </div>
    <div class="tabs">
      <button class="tab" :class="{ active: currentTab === 'records' }" @click="currentTab = 'records'">내 기록</button>
      <button class="tab" :class="{ active: currentTab === 'ranking' }" @click="goToRanking">랭킹</button>
    </div>
    <div class="week-selector">
      <button @click="previousWeek">&lt;</button>
      <h2>1주차</h2>
      <button @click="nextWeek">&gt;</button>
    </div>
    <ul class="ranking-list">
      <!-- 랭킹 리스트 아이템 -->
      <li class="ranking-item" v-for="(record, index) in rankings" :key="index">
        <div class="profile-pic">
          <!-- 프로필 이미지 -->
        </div>
        <div class="user-info">
          <h3>{{ record.name }}</h3>
          <p>{{ record.details }}</p>
        </div>
        <div class="user-stats">
          <p>{{ record.score }}</p>
          <span class="rank-badge">{{ record.rank }}</span>
        </div>
      </li>
    </ul>
    <div>
    <NavigationBar />
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation_bar.vue';

export default {
  components: {
    NavigationBar : NavigationBar
  },
  data() {
    return {
      rankings: [
        // 랭킹 데이터 배열
      ],
      selectedTab: 'ranking'
    };
  },
  methods: {
    selectTab(tabName) {
      this.selectedTab = tabName;
      // 탭에 따른 화면 전환 로직 추가
    }
  }
};
</script>

<style>

.tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.tab {
  background: none;
  border: none;
  font-size: 1em;
  color: black; /* 비활성 탭 글자색 */
  padding: 10px;
}

.tab.active {
  color: #4CAF50; /* 활성 탭 글자색 */
}

.week-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0; /* 여백 조정 */
}

.week-selector button {
  background: none;
  border: none;
  cursor: pointer;
  color: gray;
  font-size: 1em;
  padding: 5px;
}

.week-selector h2 {
  white-space: nowrap; /* 줄바꿈 없이 한 줄에 표시 */
}

.header {
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
}

.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ranking-period button {
  background: none;
  border: none;
  color: gray;
}

.ranking-list {
  list-style-type: none;
  padding: 0;
}

.ranking-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* 추가적인 스타일 */
}

/*.profile-pic {
  프로필 이미지 스타일
}

.user-info {
   사용자 정보 스타일 
}

.user-stats {
   사용자 통계 스타일 
}

.rank-badge {
   랭킹 뱃지 스타일
} */
</style>
