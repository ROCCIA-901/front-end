<template>
    <div class="login-container">
      <img src="@/assets/ROCCIA_LOGO.png" alt="ROCCIA Logo" class="login-logo" />
      <div class="email-group">
        <label for="email">비밀번호 찾기</label>
        <input id="email" type="email" v-model="email" placeholder="이메일을 입력해주세요" />
        <button class="btn" @click="checkEmail">인증번호 받기</button>
      </div>
      <div class="certification-group">
        <input type="password" v-model="password" placeholder="인증번호를 입력해주세요" />
        <button class="btn" @click="confirmEmail">인증번호 확인</button>
       </div> 
      <button class="btn" @click="login">이메일 인증으로 비밀번호 변경하기</button>
      <div class="message" v-if="loginError">{{ errorMessage }}</div>
      <div class="links">
        <router-link to="/sign_up">회원가입</router-link> |
        <router-link to="/forgot-password">비밀번호 찾기</router-link>
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

</style>