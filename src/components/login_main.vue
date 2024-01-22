<template>
    <div class="login-container">
      <div class="logo">ROCCIA 901</div>
      <input type="email" v-model="email" placeholder="이메일" />
      <input type="password" v-model="password" placeholder="비밀번호" />
      <button @click="login">로그인</button>
      <div class="message" v-if="loginError">{{ errorMessage }}</div>
      <div class="links">
        <router-link to="/signup">회원가입</router-link> |
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

.logo {
  margin-bottom: 30px;
  font-size: 32px;
  color: #4CAF50;
}

input[type=email], input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
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
</style>
  