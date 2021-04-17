<template>
    <div id="series-page" class="container-fluid">
        <series :swiperOption="getSwiperOption" v-for="(seriesCat,keyName) in getSeries" :key="keyName" :series="seriesCat" :name="keyName"/>
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
        ...mapGetters(['getSwiperOption','getSeries']),
    }
}
</script>