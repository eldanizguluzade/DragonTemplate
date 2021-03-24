<template>
    <div id="series" class="container-fluid">
        <action-s :swiperOption="getSwiperOption" :actionS="getActionS"/>
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
        ...mapGetters(['getSwiperOption','getActionS']),
    }
}
</script>