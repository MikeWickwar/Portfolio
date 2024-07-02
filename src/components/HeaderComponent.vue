<template>
  <header class="sticky-header">
    <nav>
      <div class="logo">
        <i class="fa-sharp fa-solid fa-cat fa-3x"></i>
        <span class="headerTitle">Mike Wickwar</span>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/testimonials">Testimonials</router-link></li>
        <!-- Add more navigation links as needed -->
        <li><router-link to="/about">About</router-link></li>
        <li><a href="https://example.com" target="_blank">Blog</a></li>
        <li><a href="mailto:contact@example.com">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
header.sticky-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.6);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo i {
  margin-right: 10px;
}

.logo span {
  font-size: 1.2em;
  font-weight: bold;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

li {
  margin-right: 15px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
