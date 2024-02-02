<template>
<div class="input-group">
  <div class="main-container">
    <label for="notification">홈</label>
    <div id="notification" class="announcement">
      <p>웹 사용방법, 공지사항, 동아리 구성에 들어갈 예정입니다.</p>
      <p>웹 사용방법, 공지사항, 동아리 구성에 들어갈 예정입니다.</p>
    </div>
    <label for="attendance">출석</label>
    <div id="attendance" class="attendance-section">
      <button @click="goToAttendance">출석하기</button>
      <button @click="goToAttendanceHistory">출석 내역</button>
    </div>
    <label for="calender">출석 현황</label>
    <div class="calendar-container">
    <!-- 달력 헤더 -->
      <div class="calendar-header">
      <!-- 제목과 달력 조작 버튼 -->
      </div>
    
    <!-- 달력 -->
      <CalendarComponent @date-select="openModal" />
    
    <!-- 모달 창 -->
      <div v-if="isModalOpen" class="modal">
        <div class="modal-content">
        <!-- 모달 내용 -->
          <p>선택한 날짜: {{ selectedDate.toDateString() }}</p>
          <button @click="closeModal">닫기</button>
        </div>
      </div>
      <NavigationBar/>
      </div>
    </div>  
</div>
</template>

<script>
import CalendarComponent from '@/components/CalendarComponent.vue'; // 달력 컴포넌트
import NavigationBar from '@/components/navigation_bar.vue';

export default {
  methods: {
    goToAttendance() {
      this.$router.push('/member_attendance');
    },
    goToAttendanceHistory() {
      this.$router.push('/member_attendance_history');
    },
    openModal(date) {
      this.selectedDate = new Date(date); // 날짜 객체로 변환
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
   },
  components: {
    NavigationBar : NavigationBar,
    CalendarComponent : CalendarComponent
  },
  data() {
    return {
      isModalOpen: false,
      selectedDate: null // 선택된 날짜를 저장하는 변수
    };
  },
}
</script>

<style>
.main-container {
  max-width: 360px;
  margin: auto;
  overflow-y: auto; /* 추가 */
}

.calendar-container {
  /* 필요한 경우 컨테이너의 최대 높이를 지정 */
  max-height: 500px; /* 예시 값, 실제 상황에 맞게 조절 필요 */
  overflow-y: auto; /* 세로 스크롤바 활성화 */
}

.calendar-container {
  padding-bottom: 100px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
  
.input-group label {
  align-self: flex-start; /* 레이블을 컨테이너의 시작 부분에 정렬 */
  margin-bottom: 5px;
}

.announcement {
  background-color: #f3f3f3;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 14px;
}

.attendance-section button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검은색 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%; /* 화면의 절반 크기 */
}

</style>