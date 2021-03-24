<template>
  <div id="actionS">
    <h2 class="h4 category-name">Action Series</h2>
    <div v-swiper="swiperOption" class="w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(series,index) in actionS" :key="series.id">       
         <button class="btn btn-link" @click="openModal(series)" data-bs-toggle="modal" data-bs-target="#modal-templateS" aria-label="Series Movies">
            <one-template :oneContent="actionS[index]"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    props:['swiperOption','actionS'],
    data() {
      return {}
    },
     methods:{
       openModal(item){
          this.$store.commit('setSelected',item);
          this.$store.dispatch('setMoreItemA','S');
      }
    },
  }

</script>
