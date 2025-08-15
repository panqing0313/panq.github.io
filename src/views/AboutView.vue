<script setup>
</script>

<template>
  <div class="about">
    <h1>关于我</h1>
    <div class="about-content">
      <img src="../assets/avatar.svg" alt="个人头像" class="avatar">
      <div class="bio">
        <h2>你好，我是一名开发者</h2>
        <p>欢迎来到我的个人博客。这里记录了我的学习心得、技术探索和生活感悟。</p>
        <p>我热爱编程，喜欢探索新技术，尤其是前端开发和人工智能领域。</p>
        <p>希望我的博客能给你带来一些启发和帮助。如果你有任何问题或建议，欢迎随时联系我。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.bio {
  flex: 1;
}

.bio h2 {
  margin-bottom: 1rem;
}

.bio p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>