<template>
  <div id="app" >
    <HeaderComponent class="header" />
    <div class="routerContainer">
      <router-view />
      <div v-if="!isHomeView" id="overlay" :class="{ 'dim-background': !isHomeView }"></div>
    </div>
    <FooterComponent />
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
    return {
      isHomeView: this.$router.history.current.fullPath === '/' 
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
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
  overflow: hidden;
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
  height: 100%;
  overflow: auto;
  background-image: url('./assets/sunset.jpg');
  background-color: black;
  background-position-x: center;
  background-repeat: no-repeat;
}
#overlay{
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  top: 75px;
  transition: top 0.5s ease-in-out;

}
#overlay.open{
  top: 195px;
  transition: top 0.5s ease-in-out;
  
}
.dim-background {
    animation: fadeToBlack 2s forwards;
}
h2.projectDetails{
  display: flex;
  align-self: center;
}
.keyFeatures{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.routerContainer{
  margin-top: 80px;
  overflow: auto;
  height: 100%;
   transition: margin-top 0.5s ease-in-out;
}
.routerContainer.open{
  margin-top: 195px;
   transition: margin-top 0.5s ease-in-out;
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
  @media (max-width: 768px) {
    html{
      height: calc(100vh-100px);      

    }
  }
</style>
