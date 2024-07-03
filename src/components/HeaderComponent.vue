<template>
  <div>
    <header class="sticky-header">
      <nav>
        <div class="logo">
          <i class="fa-sharp fa-solid fa-cat fa-3x"></i>
          <span class="headerTitle">Mike Wickwar</span>
        </div>
      
        <ul :class="{ 'nav-menu': true, open: isMenuOpen, closed: !isMenuOpen && wasMenuOpen }">
          <li @click="closeMenu"><router-link to="/">Home</router-link></li>
          <li @click="closeMenu"><router-link to="/resume">Resume</router-link></li>
          <li @click="closeMenu"><router-link to="/projects">Projects</router-link></li>
          <li @click="closeMenu"><router-link to="/testimonials">Testimonials</router-link></li>
          <li @click="closeMenu"><router-link to="/about">About</router-link></li>
          <li @click="closeMenu"><router-link to="/contact">Contact</router-link></li>
          <li @click="closeMenu"><a href="mailto:mike.wickwar@gmail.com">Email Now</a></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i>
        </button>
      </nav>
    </header>
    <div class="overlay" @click="closeMenu" v-if="isMenuOpen"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      wasMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.wasMenuOpen = this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  watch: {
    isMenuOpen(newVal) {
      if (!newVal) {
        this.wasMenuOpen = true;
      }
    }
  }
};
</script>

<style scoped>
.sticky-header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.6);
  overflow: hidden;
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

.headerTitle {
  font-size: 1.2em;
  font-weight: bold;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
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

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 999; /* Ensure it's above other content */
  display: none; /* Initially hidden */
}

@media (max-width: 768px) {
  ul {
    flex-direction: column;
    width: 100%;
  }

  .menu-toggle {
    display: block;
    align-self: self-start;  
    margin-top: 5px;
  }

  ul.closed {
    max-height: 0;
    opacity: 0;
  }
  ul.open {
    max-height: 300px; /* Adjust based on the content height */
    opacity: 1;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    text-align: right;
  }
  .overlay {
    display: block; /* Show overlay on smaller screens */
  }
}
</style>
