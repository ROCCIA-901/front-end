import { createRouter, createWebHistory } from 'vue-router';
import OnboardingScreen from '@/components/OnboardingScreen.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Onboarding',
      component: OnboardingScreen
    }
  ]
});

export default router;