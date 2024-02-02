<template>
    <div class="login-container">
      <img src="@/assets/ROCCIA_LOGO.png" alt="ROCCIA Logo" class="login-logo" />
      <div class="email-group">
        <label for="email">새 비밀번호</label>
        <input id="email" type="email" v-model="email" placeholder="영문, 숫자, 특수문자를 포함하여 7자 이상 입력해주세요." />
      </div>
      <div class="certification-group">
        <label for="password">새 비밀번호 확인</label>
        <input id="password" type="password" v-model="password" placeholder="비밀번호를 다시 한 번 입력해주세요." />
        <button @click="login">비밀번호 변경하기</button>
      </div>
      <div class="message" v-if="loginError">{{ errorMessage }}</div>
      <div class="links">
        <router-link to="/sign_up">회원가입</router-link> |
        <router-link to="/forgot_password">비밀번호 찾기</router-link>
      </div>
    </div>
  </template>
  
<script>

export default {
    data() {
      return {
        email: '',
        password: '',
        loginError: false,
        errorMessage: '아이디나 비밀번호가 정확하지 않습니다.'
      };
    },
    methods: {
      login() {
        this.axios.post('/api/login', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push('/main');
        })
        .catch(this.handleLoginError);
      },
      handleLoginError(error) {
        this.loginError = true;
        // 서버에서 반환한 오류 메시지를 사용하거나, 없다면 기본 메시지를 사용합니다.
        this.errorMessage = error.response && error.response.data.message
          ? error.response.data.message
          : '아이디나 비밀번호가 정확하지 않습니다.';
        console.error('Login error:', error.response.data);
      }
    }
  }
</script>
  
<style>
.login-container {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

.login-logo {
  width: 50%; /* 컨테이너 너비의 50%로 설정 */
  height: auto; /* 높이는 자동으로 조정 */
  margin: 0 auto 20px; /* 중앙 정렬과 아래쪽 마진 */
}

.input[type=email], input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #45a049;
}

.certification-group button {
    margin-bottom: 10px; /* 버튼 간의 간격을 조정 */
  }

.certification-group button:last-child {
    margin-bottom: 0; /* 마지막 버튼의 아래쪽 마진을 제거 */
  }

.message {
  color: red;
  margin: 10px 0;
}

.links {
  margin-top: 20px;
}

.links a {
  color: #4CAF50;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.email-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 레이블을 왼쪽 상단으로 정렬 */
}

.email-group label {
  margin-bottom: 5px;
}

.email-group input,
.email-group button {
  width: 100%; /* 폭을 100%로 설정 */
  margin-top: 5px; /* 레이블과의 간격 */
}

.certification-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 레이블을 왼쪽 상단으로 정렬 */
}

.certification-group label {
  margin-bottom: 5px;
}

.certification-group input,
.certification-group button {
  width: 100%; /* 폭을 100%로 설정 */
  margin-top: 5px; /* 레이블과의 간격 */
}

</style>