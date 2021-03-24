<template>
    <div id="more-item">
        <div v-swiper="true" class="swiper-container w-5/6 ml-auto relative" :loadtheme="false">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(movie,index) in $store.getters.getMoreItem" :key="movie.id">
        <button class="btn btn-link" @click="openModal(movie)" :aria-label="movie.name">
            <one-template :oneContent="$store.getters.getMoreItem[index]"/>
          </button>
        </div>
      </div>
     </div>
    </div>
</template>


<script>
export default {
    data(){
        return{}
    },
    methods:{
        openModal(item){
          if(item.type.toUpperCase() == 'M'){
              this.$store.commit('setSelected',item);
              this.$store.dispatch('setMoreItemA',item.type);
          }
          else{
            this.$router.push('/'+item.name);   //Example Router after change here
          }
           
      }
    }
}
</script>

