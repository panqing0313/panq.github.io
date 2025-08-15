<script setup>
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <div class="logo">
          <router-link to="/">博客系统</router-link>
        </div>
        <nav class="nav">
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/blogs">博客</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
            <li><router-link to="/create">写博客</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main">
      <router-view />
    </main>

    <footer class="footer">
      <div class="container">
        <p>© 2023 博客系统. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.header {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.logo a {
  text-decoration: none;
  color: #333;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  margin-left: 1.5rem;
}

.nav a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav a:hover {
  color: #42b983;
}

.main {
  padding: 2rem 0;
}

.footer {
  background-color: #f5f5f5;
  padding: 2rem 0;
  margin-top: 2rem;
}
</style>
