<template>
  <div class="contact-me">
    <h2>Contact Me</h2>
    <ul>
      <li>
        <i class="fa fa-envelope"></i>
        <a href="mailto:mike.wickwar@gmail.com">mike.wickwar@gmail.com</a>
      </li>
      <li>
        <i class="fa fa-phone"></i>
        <a href="tel:+17208378019">+1 (720) 837-8019</a>
      </li>
      <li>
        <i class="fab fa-linkedin"></i>
        <a href="https://www.linkedin.com/in/mikewickwar/" target="_blank">LinkedIn</a>
      </li>
      <li>
        <i class="fab fa-github"></i>
        <a href="https://github.com/mikewickwar" target="_blank">GitHub</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactMe'
};
</script>

<style scoped>
.contact-me {
  position: relative;
  z-index: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  top: 30%;
}

.contact-me h2 {
  margin-bottom: 20px;
}

.contact-me ul {
  list-style: none;
  padding: 0;
}

.contact-me li {
  margin: 10px 0;
  font-size: 1.1em;
}

.contact-me i {
  margin-right: 10px;
  color: #333;
}

.contact-me a {
  color: #0073b1; /* LinkedIn blue */
  text-decoration: none;
}

.contact-me a:hover {
  text-decoration: underline;
}
</style>
