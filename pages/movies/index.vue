<template>
    <div id="movies" class="container-fluid">
        <action-m :swiperOption="getSwiperOption" :actionM="getActionM"/>
    </div>
</template>


<script>
 import {directive} from "vue-awesome-swiper";
 import {mapGetters} from 'vuex'; 
export default {
    directives: {
      swiper: directive,
    },
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters(['getSwiperOption','getActionM']),
    }
}
</script>