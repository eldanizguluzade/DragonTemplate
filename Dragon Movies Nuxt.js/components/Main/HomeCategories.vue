<template>
    <div id="homeCategories" class="container-fluid">
        <latest :swiperOption="getSwiperOption" :latest="getLatest" v-if="getLatest.length != 0"/>
        <movies :swiperOption="getSwiperOption" v-for="(moviesCat,keyName) in getMovies" :key="keyName" :movies="moviesCat" :name="keyName"/>
        <series :swiperOption="getSwiperOption" v-for="(seriesCat,keyName) in getSeries" :key="keyName" :series="seriesCat" :name="keyName"/>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'; 
export default {
    computed:{
         ...mapGetters(['getSwiperOption','getLatest','getMovies','getSeries']), 
    },
}
</script>