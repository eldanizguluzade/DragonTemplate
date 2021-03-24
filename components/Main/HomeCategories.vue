<template>
    <div id="homeCategories" class="container-fluid">
        <latest :swiperOption="getSwiperOption" :latest="getLatest"/>
        <action-m :swiperOption="getSwiperOption" :actionM="getActionM"/>
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
        ...mapGetters(['getSwiperOption','getActionM','getLatest','getActionS']),
    }
}
</script>