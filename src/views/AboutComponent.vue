<template>
  <div class="about-container col-md-12">
    <div class="about-bg col-md-12"></div>
    <div class="about-content">
      <CarouselComponent></CarouselComponent>
    </div>
  </div>
</template>

<script>
import CarouselComponent from './../components/CarouselComponent'

export default {
  name: 'AboutComponent',
  props: {
    msg: String
  },
  components: {
    CarouselComponent
  }
}
</script>

<style scoped>
.about-container {
  position: relative;
}

.about-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.6;
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin: 0 auto;
  max-width: 800px;
}
@media (max-width: 768px) {
  .about-content {
    width: 100%;
    height: 650px;
  }
}

</style>
