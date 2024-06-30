<template>
  <div id="app">
    <HeaderComponent msg="Welcome to Vue.js!"/>
    <router-view />
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
  }
};
</script>

<style>
html{
  height: 100vh;
  width: 100vw;
  display: block;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
}
</style>
