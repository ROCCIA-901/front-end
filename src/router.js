import { createRouter, createWebHistory } from 'vue-router';
import OnboardingScreen from '@/components/OnboardingScreen.vue';
import login_main from '@/components/login_main.vue';
import sign_up from '@/components/sign_up.vue';
import forgot_password from '@/components/forgot_password.vue';
import new_password from '@/components/new_password.vue';
import member_main from '@/components/member_main.vue';
import member_attendance from '@/components/member_attendance.vue';
import member_attendance_history from '@/components/member_attendance_history.vue';
import member_record_main from '@/components/member_record_main.vue';
import member_ranking from '@/components/member_ranking.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'OnboardingScreen',
      component: OnboardingScreen
    },
    {
      path: '/login_main',
      name: 'login_main',
      component: login_main
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: sign_up
    },
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: forgot_password
    },
    {
      path: '/new_password',
      name: 'new_password',
      component: new_password
    },
    {
      path: '/member_main',
      name: 'member_main',
      component: member_main
    },
    {
      path: '/member_attendance',
      name: 'memeber_attendance',
      component: member_attendance
    },
    {
      path: '/member_attendance_history',
      name: 'memeber_attendance_history',
      component: member_attendance_history
    },
    {
      path: '/member_record_main',
      name: 'member_record_main',
      component: member_record_main
    },
    {
      path: '/member_ranking',
      name: 'member_ranking',
      component: member_ranking
    }
  ]
});

export default router;