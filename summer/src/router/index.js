import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Work from '../Views/Work.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/work', component: Work}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;