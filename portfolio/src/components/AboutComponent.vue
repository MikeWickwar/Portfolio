<template>
  <div class="about">
    <WelcomeComponenet></WelcomeComponenet>
   
  </div>
</template>

<script>
import WelcomeComponenet from './WelcomeComponent.vue';

export default {
  name: 'AboutComponent',
  props: {
    msg: String
  },
  components: {
    WelcomeComponenet
  }
}
</script>

<style scoped>
.about{
    height: 100%;
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
    max-width: 100%;
    background-repeat: no-repeat;
    background-image: url('../assets/trees.jpg')
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
