<template>
  <div class="calendar">
    <header>
      <button @click="previousMonth">&lt;</button> <!-- '이전' 대신 '<' 사용 -->
      <h2>{{ currentYear }}년 {{ currentMonth + 1 }}월</h2> <!-- 월을 올바르게 표시하도록 수정 -->
      <button @click="nextMonth">&gt;</button> <!-- '다음' 대신 '>' 사용 -->
    </header>
    <div class="day-names">
      <div v-for="day in dayNames" :key="day" class="day-name">{{ day }}</div>
    </div>
    <div class="days">
  <div
    v-for="(day, index) in daysInMonth"
    :key="index"
    class="day"
    :class="{ 'is-today': day && isToday(day) }"
    @click="day && selectDate(day)"
  >
    {{ day ? day.getDate() : '' }}
  </div>
  </div>
  </div>

  <!-- 모달 창 -->
  <div v-if="showModalFlag" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h3>기록하기</h3>
      <!-- 닫기 버튼 -->
      <button @click="closeModal" class="close-modal">&times;</button>

      <!-- 모달 내용 -->
      <form @submit.prevent="submitRecord">
        <!-- 지점 선택 드롭다운 -->
        <div class="form-control">
          <label for="category">지점</label>
          <select id="category" v-model="record.category">
            <option>더클라임 마곡점</option>
            <option>더클라임 양재점</option>
            <option>더클라임 연남점</option>
            <option>더클라임 일산점</option>
            <option>더클라임 신림점</option>
          </select>
        </div>

        <!-- 시간 선택 입력란 -->
        <div class="form-control">
          <label for="startTime">시간</label>
          <input type="time" id="startTime" v-model="record.startTime">
          <span>~</span>
          <input type="time" v-model="record.endTime">
        </div>

        <!-- 카운터 -->
        <div class="form-control">
          <label for="count">완등한 문제</label>
          <button type="button" @click="decrement('problem')">-</button>
          <input type="number" id="count" v-model="record.problem">
          <button type="button" @click="increment('problem')">+</button>
        </div>

        <!-- 제출 버튼 -->
        <button type="submit">저장하기</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['dateSelect'], // Declare the event here
  data() {
    const now = new Date();
    return {
      currentMonth: now.getMonth(),
      currentYear: now.getFullYear(),
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      showModalFlag: false,
      selectedDate: null,
      record: {
        category: '',
        startTime: '',
        endTime: '',
        problem: 0
      }
    };
  },
  computed: {
  daysInMonth() {
    const days = [];
    const date = new Date(this.currentYear, this.currentMonth, 1);
    const firstDayOfMonth = date.getDay(); // 현재 월의 첫 번째 요일

    // 현재 월의 첫 날짜가 시작되는 요일에 맞춰 빈 칸을 채움
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // 현재 월의 모든 날짜를 배열에 추가
    while (date.getMonth() === this.currentMonth) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }
},

  methods: {
    isToday(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    selectDate(date) {
    this.selectedDate = date;
    this.showModal(date);
    this.$emit('dateSelect', date);
  },
  showModal(date) {
    this.record.date = date;
    this.showModalFlag = true;
  },
  closeModal() {
    this.showModalFlag = false;
  },
  submitRecord() {
    // 로직 추가하기
    // 예: this.records.push(this.record);
    this.closeModal();
  },
  increment(field) {
    this.record[field]++;
  },
  decrement(field) {
    if (this.record[field] > 0) {
      this.record[field]--;
    }
  },
    previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear -= 1;
    } else {
      this.currentMonth -= 1;
    }
  },
    nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear += 1;
    } else {
      this.currentMonth += 1;
    }
   }
  }
};
</script>

<style>
.calendar {
  width: 100%;
  border-collapse: collapse;
}

.calendar header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f3f3f3;
}

.calendar header button {
  background: none;
  border: none;
  cursor: pointer;
  color: gray; /* 버튼 색상을 회색으로 설정 */
  font-size: 1em; /* 버튼의 크기 조정 */
  padding: 5px; /* 패딩을 줄입니다 */
}

.calendar header h2 {
  font-size: 1em; /* 제목의 폰트 크기 조정 */
  margin: 0; /* 제목의 여백 제거 */
  white-space: nowrap; /* 줄바꿈 없이 한 줄에 표시 */
}

.day-names {
  display: flex;
}

.day-names,
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7개의 열 생성 */
}

.day-name,
.day {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}
.day {
  cursor: pointer;
}

.day.is-today {
  background: #e0ffe0;
}
</style>