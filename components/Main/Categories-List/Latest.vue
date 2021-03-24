<template>
  <div id="latest">
    <h2 class="h4 category-name">Latest Movies</h2>
    <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(movie,index) in latest" :key="movie.id">
         <button class="btn btn-link" aria-label="Lates Movies">
          <one-template :oneContent="latest[index]" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:['swiperOption','latest'],
    data() {
      return {}
    },
  }

</script>
