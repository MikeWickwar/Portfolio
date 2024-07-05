<template>
  <footer class="sticky-footer">
    <div class="footer-content">
      <div class="footer-left">
        <p>&copy; 2024 Mike Wickwar. All rights reserved.</p>
      </div>
      <div class="footer-right">
        <ul class="social-links">
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
          <!-- Add more social media icons as needed -->
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer.sticky-footer {
  position: sticky;
  bottom: 0;
  z-index: 1000;
  color: #fff;
  padding: 10px 20px;
  text-align: center;

}


.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.social-links li {
  margin-right: 10px;
}

.social-links a {
  color: #fff;
  font-size: 1.5em;
}

.social-links a:hover {
  color: #ccc;
}
</style>
