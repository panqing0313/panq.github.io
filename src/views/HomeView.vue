<script setup>
</script>

<template>
  <div class="home">
    <header class="hero">
      <h1>欢迎来到我的博客</h1>
      <p>分享我的知识、经验和见解</p>
      <router-link to="/create" class="btn">写博客</router-link>
    </header>

    <section class="featured-blogs">
      <h2>精选博客</h2>
      <div class="blog-card" v-for="blog in featuredBlogs" :key="blog.id">
        <img :src="blog.imageUrl" alt="博客封面">
        <div class="blog-content">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.excerpt }}</p>
          <router-link :to="{ name: 'blogDetail', params: { id: blog.id } }" class="read-more">阅读更多</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
}

.featured-blogs {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.blog-card {
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.blog-card img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
  flex: 1;
}

.read-more {
  display: inline-block;
  color: #42b983;
  text-decoration: none;
  margin-top: 1rem;
}
</style>