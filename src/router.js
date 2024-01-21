// router.js
import Vue from 'vue';
import Router from 'vue-router';
import OnboardingScreen from './components/OnboardingScreen.vue'; // 가정한 컴포넌트 이름

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: OnboardingScreen
    }
  ]
});
