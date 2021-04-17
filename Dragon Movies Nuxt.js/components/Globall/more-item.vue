<template>
  <div id="more-item">
    <div v-swiper="swiperOption" class="swiper-container w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide m-auto" v-for="(movie,index) in getMoreItem" :key="index">
          <button class="btn btn-link" @click="openModal(movie)" :aria-label="movie.name">
            <one-template :oneContent="movie"/>
          </button>
        </div>
      </div>
      <div class="controls" v-show="getMoreItem.length>2">
       <div class="swiper-button-next text-white fw-bold"></div>
       <div class="swiper-button-prev text-white fw-bold"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    props: ['type'],
     data() {
      return {
        swiperOption:{
        slideToClickedSlide: true,
          pagination: {
             el: '.swiper-pagination',
             clickable: true,
           },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
           breakpoints: {
            992: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 0
            },
          }
        }
      }
    },
    computed: {
      ...mapGetters(['getMoreItem', 'getPaths', 'getRedirectUrl']),
    },
    methods: {
      ...mapActions(['setMoreItemA', 'setSelectedA']),
      openModal(item) {
        if (item.type.toUpperCase() == 'M') {
          this.setSelectedA(item);
          this.setMoreItemA(item.type);
        } else {
          this.$router.push(this.getPaths.watch + '/' + this.getRedirectUrl); //Example Router after change here (Optional)
          this.hideModalS();
        }
      },
      //It was created because the first boot time could not be created
      addCreated(){
        setTimeout(() => {
           this.swiperOption= {
             slidesPerView: 2,
             spaceBetween: 0, 
          ...this.swiperOption
          }
           },500 );
       
      }
    },
    created() {
       if(process.client)
         this.setMoreItemA(this.type)        
    },
    mounted(){
       this.addCreated();
    }
  }
</script>

