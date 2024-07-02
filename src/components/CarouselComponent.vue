<template>
  <div class="carousel-container">
    <b-carousel
      class="carousel"
      v-model="slide"
      :interval="4000"
      img-width="720px"
      img-height="440px"
      controls
      fade
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide
          img-src="fam.jpg">
        </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
            id="pizzaImg"
            img-src="pizza.jpg">
      </b-carousel-slide>

      <b-carousel-slide 
            img-src="griz.JPG">
      </b-carousel-slide>

      <b-carousel-slide 
            img-src="dg.JPG">
      </b-carousel-slide>

      <b-carousel-slide 
            img-src="drums.JPG">
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>
 
<script>
  export default {
    components:{
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
  #pizzaImg{
    position: relative;
    bottom: 85px;
  }
  .carousel-container{
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  .carousel-inner{
    max-height: 450px;
  }
  .carousel{
    text-shadow: 1px 1px 2px #333;
    border-radius: 10px;
    object-fit: cover;
  }
  .carousel *{
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    #pizzaImg{
        position: relative;
        bottom: 0;
      }

    .carousel-inner{
      max-height: 220px;
    }
  }

  
</style>

