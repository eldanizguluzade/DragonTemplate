<template>
    <div id="searchlist-page" class="container">
    <div v-if="getSearchList.length > 0">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-3  mt-4" v-for="(item,index) in getSearchList" :key="index">       
        <a @click="openModal(item)" :aria-label="item.name">
            <one-template :oneContent="item"/>
          </a>
        </div>
      </div>
    </div>
       <not-found type="search" v-else/>
    </div>
</template>


<script>
import {mapActions,mapGetters} from 'vuex'
  export default {
    methods: {
        ...mapActions(['SearchList','setSelectedA']),
        openModal(item){
          this.setSelectedA(item);
          item.type.toUpperCase()=='M' ? this.showModalM(): this.showModalS();
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
