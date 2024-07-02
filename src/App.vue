<template>
  <div id="app" >
    <HeaderComponent msg="Welcome to Vue.js!"/>
    <router-view />
    <FooterComponent />
    <div v-if="!isHomeView" id="overlay" :class="{ 'dim-background': !isHomeView }"></div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    console.log(this.$router)
    return {
      isHomeView: this.$router.history._startLocation === '/' 
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      console.log(to)
      this.isHomeView = to.path === '/'; 
      next();
    });
  }
};
</script>

<style>
html{
  height: 100vh;
  width: 100vw;
  display: block;
  color: #333333;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    image-rendering: -webkit-optimize-contrast;
    max-width: 100%;
    background-repeat: ;
    background-image: url('./assets/trees.jpg');
}
#overlay{
   position: absolute;
   background-color: black;
   height: 100%;
   width: 100%;
}
.dim-background {
    animation: fadeToBlack 2s forwards;
}
/* Keep the animation keyframes as defined previously */
@keyframes fadeToBlack {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.6;
  }
}
</style>
