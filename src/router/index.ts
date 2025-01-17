import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Quiz from '../views/Quiz.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz/:title',
      name: 'quiz',
      component: Quiz
    },
  ]
})

export default router
