<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const blog = ref(null)
const relatedBlogs = ref([])

// 模拟获取博客详情数据
function fetchBlogDetail(id) {
  // 这里应该是异步请求，我们使用模拟数据
  blog.value = {
    id: id,
    title: 'Vue3 入门教程',
    content: `<p>Vue3 是 Vue.js 的最新版本，带来了许多新特性和性能优化。</p>
    <h2>主要新特性</h2>
    <ul>
      <li>组合式 API (Composition API)</li>
      <li>响应式系统重构</li>
      <li>性能优化</li>
      <li>TypeScript 支持</li>
      <li>新的生命周期钩子</li>
    </ul>
    <p>在本教程中，我们将学习如何使用 Vue3 创建一个简单的应用程序。</p>`,
    imageUrl: 'https://picsum.photos/seed/blog1/800/400',
    date: '2023-05-15',
    author: '博主',
    category: '技术'
  }

  // 模拟相关博客数据
  relatedBlogs.value = [
    {
      id: 2,
      title: '前端性能优化技巧',
      excerpt: '提升网页加载速度和用户体验的实用方法',
      imageUrl: 'https://picsum.photos/seed/blog2/300/200'
    },
    {
      id: 3,
      title: '响应式设计原理',
      excerpt: '如何构建适配不同设备的网页',
      imageUrl: 'https://picsum.photos/seed/blog3/300/200'
    }
  ]
}

onMounted(() => {
  const id = route.params.id
  fetchBlogDetail(id)
})
</script>

<template>
  <div class="blog-detail">
    <div v-if="blog" class="container">
      <div class="blog-header">
        <span class="category">{{ blog.category }}</span>
        <h1>{{ blog.title }}</h1>
        <div class="meta">
          <span class="author">{{ blog.author }}</span>
          <span class="date">{{ blog.date }}</span>
        </div>
      </div>

      <img :src="blog.imageUrl" alt="博客封面" class="blog-image">

      <div class="blog-content" v-html="blog.content"></div>

      <div class="comments-section">
        <h2>评论</h2>
        <div class="comment-form">
          <textarea placeholder="写下你的评论..."></textarea>
          <button class="submit-comment">提交评论</button>
        </div>
      </div>
    </div>

    <div class="related-blogs">
      <h2>相关博客</h2>
      <div class="related-blogs-grid">
        <div class="related-blog-card" v-for="relatedBlog in relatedBlogs" :key="relatedBlog.id">
          <img :src="relatedBlog.imageUrl" alt="相关博客封面">
          <h3>{{ relatedBlog.title }}</h3>
          <p>{{ relatedBlog.excerpt }}</p>
          <router-link :to="{ name: 'blogDetail', params: { id: relatedBlog.id } }" class="read-more">阅读更多</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.blog-header {
  margin-bottom: 2rem;
}

.category {
  display: inline-block;
  background-color: #f1f1f1;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.meta {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.875rem;
  margin-top: 1rem;
}

.blog-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.blog-content {
  line-height: 1.8;
  margin-bottom: 2rem;
}

.blog-content h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.comments-section {
  margin-top: 3rem;
}

.comment-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 150px;
  margin-bottom: 1rem;
}

.submit-comment {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.related-blogs {
  margin-top: 4rem;
}

.related-blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.related-blog-card {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.related-blog-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.related-blog-card h3 {
  padding: 1rem;
  margin: 0;
  font-size: 1.25rem;
}

.related-blog-card p {
  padding: 0 1rem 1rem;
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