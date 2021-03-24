<template>
    <div id="mylist" class="container">
      <h2 class="h4 text-center d-none">My List</h2> 
    <div v-if="getTotalMyList.length > 0">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-3  mt-4" v-for="(item,index) in getTotalMyList" :key="index">       
        <a href="#" @click="setSelected(item)" data-bs-toggle="modal" data-bs-target="#modal-templateM">
            <one-template :oneContent="getTotalMyList[index]"/>
          </a>
        </div>
      </div>
    </div>
     <div class="text-center mt-4" v-else>
         <span class="h5 text-muted">Not Found My Item</span>
     </div>
    </div>
</template>



<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
export default {
    methods:{
        ...mapActions(['MyList']),
        ...mapMutations(['setSelected'])
    },
    computed:{
        ...mapGetters(['getTotalMyList','getSwiperOption']),
    },
    created() {
      this.MyList();  
    }
}
</script>

<style lang="css">
    
</style>