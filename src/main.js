// main.js
import Vue from 'vue';
import App from './App.vue'; // 루트 컴포넌트
import router from './router'; // 위에서 생성한 라우터 인스턴스

Vue.config.productionTip = false;

new Vue({
  router, // 라우터 인스턴스 사용
  render: h => h(App)
}).$mount('#app');
