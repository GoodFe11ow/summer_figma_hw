import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Work from '../Views/Work.vue';
import ContactUs from '../Views/ContactUs.vue';
import WorkSinglePage from '../Views/WorkSinglePage.vue';
import PrivacyPolicy from '../components/PrivacyPolicy.vue';
import Blog from '../Views/Blog.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/work', component: Work},
    { path: '/contact', component: ContactUs},
    { path: '/privacy-policy', component: PrivacyPolicy},
    { path: '/singleWork', component: WorkSinglePage},
    {path: '/blog', component: Blog}
    
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;