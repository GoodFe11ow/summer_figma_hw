import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Work from '../Views/Work.vue';
import ContactUs from '../Views/ContactUs.vue';
import WorkSinglePage from '../Views/WorkSinglePage.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/work', component: Work},
    { path: '/contact', component: ContactUs},
    { path: '/singleWork', component: WorkSinglePage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;