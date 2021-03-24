<template>
    <div id="searchlist" class="container">
    <div v-if="getSearchList.length > 0">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-3  mt-4" v-for="(movie,index) in getSearchList" :key="index">       
        <a href="#" @click="openModal(movie)" data-bs-toggle="modal" data-bs-target="#modal-templateM">
            <one-template :oneContent="getSearchList[index]"/>
          </a>
        </div>
      </div>
    </div>
     <div class="text-center mt-4" v-else>
         <span class="h5 text-muted">Not Found Search Word</span>
     </div>
    </div>
</template>


<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
  export default {
    methods: {
        ...mapActions(['SearchList']),
        ...mapMutations(['setSelected']),
        
        openModal(item){
          this.$store.commit('setSelected',item);
      }
    },
    computed:{
        ...mapGetters(['getSearchList'])
    },
    created() {
      this.SearchList(this.$route.params.name);
    },
  }
</script>
