<template>
  <div class="about">
    <WelcomeComponenet></WelcomeComponenet>
  </div>
</template>

<script>
import WelcomeComponenet from '../components/WelcomeComponent.vue';

export default {
  name: 'AboutComponent',
  props: {
    msg: String
  },
  components: {
    WelcomeComponenet
  },
  created() {
        if (document.getElementsByClassName("sticky-header").length > 0) {
          document.getElementsByClassName("sticky-header")[0].classList.remove("open"); 
        }
  }
}
</script>

<style scoped>
.about{
    height: 100%;
    width: 100%;
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
