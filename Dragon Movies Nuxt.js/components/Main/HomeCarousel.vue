<template>
  <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="embed-responsive embed-responsive-21by9 position-relative d-flex" >
      <div id="player-group" class="col" aria-label="Player Group"> 
        <!--Video Player local Path-->
      <video class="bcg-video-local" autoplay muted loop v-if="getCarouselTrailer.isLocal">
        <source :src="getCarouselTrailer.TrailerUrl" type="video/mp4">   
      </video>

      <!--Iframe Not local Url-->
      <iframe class="bcg-video-iframe" v-if="!getCarouselTrailer.isLocal"
      :src="getCarouselTrailer.TrailerUrl" title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>

      <div id="black-screen"></div>
       </div>
      <div class="content-video col col-md-8 col-lg-6 col-xxl-4">
          <div class="conten-header my-2">
              <span class="h3 fw-bold">{{getHomeCarousel.name}}</span>
          </div>
           <div class="content-body my-2 d-none d-sm-block">
           <p class="h4 fw-normal">{{getHomeCarousel.description}}</p>
           </div>
           <div class="content-footer my-4" @click="setSelectedA(getHomeCarousel)">
             <nuxt-link :to="getPaths.watch+'/'+getHomeCarousel.fullPath" custom v-slot="{ navigate }"><a class="btn button-lg button-danger" @click="navigate">Watch Now</a></nuxt-link>
           </div>
        </div>
    </div>
  </div>
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:mapGetters(['getHomeCarousel','getCarouselTrailer','getPaths']),
  methods:{
    ...mapActions(['setSelectedA']),
  }
}
</script>