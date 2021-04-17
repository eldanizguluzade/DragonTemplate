<template>
    <div id="movies-page" class="container-fluid">
        <movies :swiperOption="getSwiperOption" v-for="(moviesCat,keyName) in getMovies" :key="keyName" :movies="moviesCat" :name="keyName"/>
    </div>
</template>


<script>
 import {directive} from "vue-awesome-swiper";
 import {mapGetters} from 'vuex'; 
export default {
    directives: {
      swiper: directive,
    },
    computed:{
        ...mapGetters(['getSwiperOption','getMovies']),
    }
}
</script>