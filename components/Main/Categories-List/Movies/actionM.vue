<template>
  <div id="actionM">
    <h2 class="h4 category-name">Action Movies</h2>
    <div v-swiper="swiperOption" class="swiper-container w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(movie,index) in actionM" :key="movie.id">
        <button class="btn btn-link" @click="openModal(movie)" data-bs-toggle="modal" data-bs-target="#modal-templateM" aria-label="Action Movies">
            <one-template :oneContent="actionM[index]"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:['swiperOption','actionM'],
    data() {
      return {}
    },
    methods:{
       openModal(item){
           this.$store.commit('setSelected',item);
           this.$store.dispatch('setMoreItemA','M');
        //   this.$store.commit('setShowModalM',true);
      }
    },
  }

</script>
