<template>
  <div id="series">
    <h2 class="h4 category-name">{{name | capitalize | letterFilter}} Series</h2>
    <div v-swiper="swiperOption" class="swiper-container w-5/6 relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(serie,index) in series" :key="index">       
         <button class="btn btn-link" @click="openModal(serie)" aria-label="Series">
          <one-template :oneContent="serie"/>
          </button>
        </div>
      </div>
     <div class="controls" v-show="series.length>2">
       <div class="swiper-button-next text-white"></div>
       <div class="swiper-button-prev text-white"></div>
     </div>
    </div>
  </div>
</template>


<script>
import {mapActions} from 'vuex'; 
  export default {
    props:['swiperOption','series','name'],
     methods:{
        ...mapActions(['setSelectedA']),
       openModal(item){
          this.setSelectedA(item);
          this.showModalS();  
       }
    }
  }
</script>
