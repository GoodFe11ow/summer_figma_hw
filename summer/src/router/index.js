import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Work from '../Views/Work.vue';
import ContactUs from '../Views/ContactUs.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/work', component: Work},
    { path: '/contact', component: ContactUs}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;