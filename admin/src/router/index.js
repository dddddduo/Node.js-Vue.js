import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import CategoryCreate from '../views/categories/categoryCreate.vue'
import CategoryList from '../views/categories/categoryList.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryCreate },
      { path: '/categories/list', component: CategoryList }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
