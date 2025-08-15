<script setup>
import { ref } from 'vue'

// 模拟博客数据
const blogs = ref([
  {
    id: 1,
    title: 'Vue3 入门教程',
    excerpt: '探索Vue3的新特性和使用方法',
    imageUrl: 'https://picsum.photos/seed/blog1/300/200',
    date: '2023-05-15',
    author: '博主'
  },
  {
    id: 2,
    title: '前端性能优化技巧',
    excerpt: '提升网页加载速度和用户体验的实用方法',
    imageUrl: 'https://picsum.photos/seed/blog2/300/200',
    date: '2023-05-10',
    author: '博主'
  },
  {
    id: 3,
    title: '响应式设计原理',
    excerpt: '如何构建适配不同设备的网页',
    imageUrl: 'https://picsum.photos/seed/blog3/300/200',
    date: '2023-05-05',
    author: '博主'
  }
])
</script>

<template>
  <div class="blog-list">
    <h1>博客列表</h1>
    <div class="filter-container">
      <input type="text" placeholder="搜索博客..." class="search-input">
      <select class="category-select">
        <option value="all">所有分类</option>
        <option value="tech">技术</option>
        <option value="life">生活</option>
        <option value="travel">旅行</option>
      </select>
    </div>

    <div class="blogs-grid">
      <div class="blog-card" v-for="blog in blogs" :key="blog.id">
        <img :src="blog.imageUrl" alt="博客封面">
        <div class="blog-meta">
          <span class="date">{{ blog.date }}</span>
          <span class="author">{{ blog.author }}</span>
        </div>
        <h3>{{ blog.title }}</h3>
        <p>{{ blog.excerpt }}</p>
        <router-link :to="{ name: 'blogDetail', params: { id: blog.id } }" class="read-more">阅读更多</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.filter-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.category-select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #666;
  font-size: 0.875rem;
}

.blog-card h3 {
  padding: 0 1rem;
  margin: 0;
}

.blog-card p {
  padding: 0.5rem 1rem 1rem;
  color: #666;
  margin: 0;
}

.read-more {
  display: inline-block;
  margin: 0 1rem 1rem;
  color: #42b983;
  text-decoration: none;
}
</style>