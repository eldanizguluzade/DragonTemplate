<template>
  <div id="movies">
    <h2 class="h4 category-name">{{name | capitalize | letterFilter}} Movies</h2>
    <div v-swiper="swiperOption" class="swiper-container w-5/6 relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(movie,index) in movies" :key="index">
         <button class="btn btn-link" @click="openModal(movie)" aria-label="Movies">
          <one-template :oneContent="movie" />
          </button>
        </div>
      </div>
     <div class="controls" v-show="movies.length>2">
       <div class="swiper-button-next text-white"></div>
       <div class="swiper-button-prev text-white"></div>
     </div>
    </div>
  </div>
</template>


<script>
import {mapActions} from 'vuex'; 
  export default {
    props: ['swiperOption', 'movies','name'],
    methods: {
      ...mapActions(['setSelectedA']),
      openModal(item) {
        this.setSelectedA(item);
        this.showModalM();  
       },
    }
  }
</script>