import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogListView from '../views/BlogListView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'
import CreateBlogView from '../views/CreateBlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blogs',
    name: 'blogList',
    component: BlogListView
  },
  {
    path: '/blogs/:id',
    name: 'blogDetail',
    component: BlogDetailView
  },
  {
    path: '/create',
    name: 'createBlog',
    component: CreateBlogView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router