<template>
    <div class="login-container">
      <img src="@/assets/ROCCIA_LOGO.png" alt="ROCCIA Logo" class="login-logo" />
      <input type="email" v-model="email" placeholder="이메일" />
      <input type="password" v-model="password" placeholder="비밀번호" />
      <button @click="login">로그인</button>
      <div class="message" v-if="loginError">{{ errorMessage }}</div>
      <div class="links">
        <router-link to="/sign_up">회원가입</router-link> |
        <router-link to="/forgot_password">비밀번호 찾기</router-link>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios';

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
        axios.post('https://9ab57ef8-eb16-4da3-b8bf-cee290768a6b.mock.pstmn.io/api/user/login', {
    "email": "kdw8055@naver.com",
    "password": "1234"
    })
      .then(response => {
        console.log('success:', response.data);
        this.$router.push('/main'); //member,officer;
          })
      .catch(error => {
        console.error('failed:', error);
          })
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
  