<template>
  <div class="carousel-container">
    <b-carousel
      class="carousel"
      v-model="slide"
      :interval="4000"
      controls
      fade
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide
          caption="First slide"
          img-src="">
        <SmartTimeComponent></SmartTimeComponent>
        </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
  import SmartTimeComponent from './SmartTimeComponent'
  export default {
    components:{
      SmartTimeComponent
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style>
  .carousel-container{
    width: 80vw;
    border-radius: 10px;

  }
  .carousel{
    text-shadow: 1px 1px 2px #333;
    border-radius: 10px;
  }
  .carousel *{
    border-radius: 10px;
  }
</style>

