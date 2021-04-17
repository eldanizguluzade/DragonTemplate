<template>
  <div id="latest">
    <h2 class="h4 category-name">Latest Movies</h2>
    <div v-swiper="swiperOption" class="swiper-container w-5/6 relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-sliden" v-for="(movie,index) in latest" :key="index">
         <button class="btn btn-link" aria-label="Lates Movies" @click="PlayWatch(movie)">
          <one-template :oneContent="movie" />
          </button>
        </div>
      </div>
     <!-- <div class="controls" v-show="latest.length>2">
       <div class="swiper-button-next text-white"></div>
       <div class="swiper-button-prev text-white"></div>
      </div> -->
    </div>
  </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
  export default {
    props:['swiperOption','latest'],
    methods:{
      ...mapActions(['setSelectedA']),
      PlayWatch(item){
          this.setSelectedA(item);
          this.$router.push(this.getPaths.watch+'/'+this.getRedirectUrl);
      }
    },
    computed:mapGetters(['getPaths','getRedirectUrl']),
  }
</script>
