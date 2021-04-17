<template>
    <div id="mylist-page" class="container">
      <h2 class="h4 text-center d-none">My List</h2> 
    <div v-if="getTotalMyList.length > 0">
      <div class="row justify-content-center">
        <div class="col-6 col-md-4 col-lg-3  mt-4" v-for="(item,index) in getTotalMyList" :key="index">       
        <a @click="openModal(item)" aria-label="My Item">
            <one-template :oneContent="item"/>
          </a>
        </div>
      </div>
    </div>
      <not-found type="my-item" v-else/>
    </div>
</template>



<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    methods:{
        ...mapActions(['MyList','setSelectedA']),
         openModal(item) {
           this.setSelectedA(item);
           item.type.toUpperCase()=='M' ? this.showModalM(): this.showModalS();  
      }
    },
    computed:{
        ...mapGetters(['getTotalMyList']),
    },
    created() {
      this.MyList();  
    }
}
</script>