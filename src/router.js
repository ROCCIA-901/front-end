import { createRouter, createWebHistory } from 'vue-router';
import OnboardingScreen from '@/components/OnboardingScreen.vue';
import login_main from '@/components/login_main.vue';
//import signup from '@/components/signup.vue';
//import ForgotPassword from '@/components/ForgotPassword.vue';
//import NewPassword from '@/components/NewPassword.vue';
//import Main_crew from '@/components/Main_crew.vue';
//import Main_cap from '@/components/Main_cap.vue';

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
    /*{
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword.vue'
    }
    {
      path: '/NewPassword',
      name: 'NewPassword',
      component: NewPassword.vue'
    }
    {
      path: '/main',
      name: 'main',
      component: main.vue'
    }
    {
      path: '/admin',
      name: 'admin',
      component: admin.vue'
    }*/
  ]
});

export default router;