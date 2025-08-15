<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const excerpt = ref('')
const content = ref('')
const category = ref('tech')
const imageUrl = ref('')

function handleSubmit() {
  // 这里应该是提交表单的逻辑
  console.log('提交博客:', {
    title: title.value,
    excerpt: excerpt.value,
    content: content.value,
    category: category.value,
    imageUrl: imageUrl.value
  })

  // 模拟提交成功后跳转到博客列表
  router.push({ name: 'blogList' })
}
</script>

<template>
  <div class="create-blog">
    <h1>创建博客</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" id="title" v-model="title" required>
      </div>

      <div class="form-group">
        <label for="excerpt">摘要</label>
        <textarea id="excerpt" v-model="excerpt" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <label for="content">内容</label>
        <textarea id="content" v-model="content" rows="10" required></textarea>
      </div>

      <div class="form-group">
        <label for="category">分类</label>
        <select id="category" v-model="category">
          <option value="tech">技术</option>
          <option value="life">生活</option>
          <option value="travel">旅行</option>
        </select>
      </div>

      <div class="form-group">
        <label for="imageUrl">封面图片URL</label>
        <input type="text" id="imageUrl" v-model="imageUrl">
      </div>

      <button type="submit" class="submit-btn">发布博客</button>
    </form>
  </div>
</template>

<style scoped>
.create-blog {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
</style>