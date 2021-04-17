<template>
<div id="modal-templateS" v-if="getIsModalS" class="modal fade" tabindex="-1" aria-labelledby="modal template" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="movie-trailer">
          <div v-if="checkTrailer">
              <img :src="getSelected.imgUrl" :alt="getSelected.name" class="img-fluid">
            <div class="play-img-content" >
             <nuxt-link :to="getPaths.watch+'/'+getRedirectUrl" custom v-slot="{ navigate }"><a @click="navigate"><i  @click="PlayWatch()" class="fas fa-play fa-4x"/></a></nuxt-link>
           </div>
          </div> 
          <div v-else>
            <div style="padding:56.25% 0 0 0;position:relative;">
              <iframe :src="getSelected.trailerUrl+'?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0'" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            </div>
            <div class="play-vid-content" @click="PlayWatch()">
              <nuxt-link :to="getPaths.watch+'/'+getRedirectUrl" custom v-slot="{ navigate }"><a @click="navigate"><span>Watch<i class="fas fa-play mx-2"/></span></a></nuxt-link>
            </div>
          </div>  
        </div>
        <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
      </div>
      <div class="modal-body row align-items-baseline justify-content-between">
       <div class="movie-content-body col-12">
             <span class="mov-title h3 col-7 d-inline" aria-label="Movie Title">{{getSelected.name}}</span>  
             <span class="time col-4" aria-label="Movie Time">{{getSelected.more.time}}</span>
               <button class="btn-mylist btn text-white me-auto" @click="addMyList()" aria-hidden="true" aria-label="Add to Favorite List"><i :class="[{'fas fa-folder-plus fa-2x':true},{'fas-gold' : getCheckMyList}]"></i></button>
             <div class="description mt-4">
                 <p>{{getSelected.description}}</p>
           </div>      
         </div>
         <div class="movie-content-footer col-12 ">    
           <div class="movie-about col-12">
              <span class="me-4 text-capitalize"> <span class="color-danger fw-bold">Genres:</span> {{getSelected.categories[0]}} | {{getSelected.categories[1]}} | {{getSelected.categories[2]}}</span>
              <span class="me-4 text-capitalize"> <span class="color-danger fw-bold">Director:</span>  {{getSelected.more.director}}</span>
              <span class="me-4 text-capitalize"> <span class="color-danger fw-bold">Writer:</span> {{getSelected.more.writer}}</span>
          </div>
          <div class="feedback col-12 d-flex justify-content-end align-items-center">
            <div class="d-inline start-group text-center me-auto fas-gold">
                <star-rating-5 :imdbRating="getSelected.imdbRating"/>
               </div>
                 <div class="d-inline">
                     <span>{{getTotalLike}}</span>
                    <button class="btn text-success" @click="addLike()"   aria-hidden="true" aria-label="Like"><i :class="[{'far fa-thumbs-up fa-2x':true},{'fas' :getLikeBtn}]"></i></button>   
                </div>
                 <div class="d-inline">
                     <span>{{getTotalDislike}}</span>
                    <button class="btn color-danger"  @click="addDislike()"  aria-hidden="true" aria-label="Dislike"><i :class="[{'far fa-thumbs-down fa-2x':true},{'fas' : getDislikeBtn}]"></i></button>
                 </div>
            </div>
        </div>
      </div>
       <div class="modal-footer row m-0 p-0 pb-2" v-show="getMoreItem.length > 0">
        <span class="h4 col-12 m-2">Episodes</span>
            <more-item class="col-12" :type="getSelected.type"/>
       </div>
    </div>
  </div>
</div>
</template>

<script>
 import {mapGetters,mapActions} from 'vuex'; 
export default {
    methods:{
      ...mapActions(['addLike','addDislike','updateLike','updateMyList','addMyList','setLatestA','setMoreItemA']),
       PlayWatch(){
          this.hideModalS();
          this.setLatestA(this.getSelected);
       }
    },
    computed:{
      ...mapGetters(['getSelected','getLikeBtn','getDislikeBtn','getTotalLike','getTotalDislike','getCheckMyList','getRedirectUrl','getPaths','getMoreItem','getIsModalS']),
        checkTrailer(){
         return this.getSelected.trailerUrl==null || this.getSelected.trailerUrl=='';
       }
    },
    beforeUpdate(){
      this.updateLike();
      //Start Level Start
      this.updateMyList();
      //Start Level End
     },
     updated(){
      this.StopModalS();
       //For Stop Modal
     },
}
</script>