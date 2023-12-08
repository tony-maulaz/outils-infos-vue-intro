import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './NewPage1.vue'
import Page2 from './NewPage2.vue'
import Page3 from './Page3.vue'
import PageAxios from './PageRequest.vue'
import PageType from './PageType.vue'

const routes = [
  {
    path: '/',
    component: Page1
  },
  {
    path: '/test',
    component: Page2
  },
  {
    path: '/test2',
    component: Page3
  },
  {
    path: '/axios',
    component: PageAxios
  },
  {
    path: '/type',
    component: PageType
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;