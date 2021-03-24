<template>
<div id="modal-templateS" class="modal fade" tabindex="-1" aria-labelledby="modal template" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="movie-trailer">
           <img :src="getSelected.imgUrl" :alt="getSelected.name" class="img-fluid">
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
              <span class="me-4 text-capitalize"> <span class="text-danger fw-bold">Genres:</span> {{getSelected.categories[0]}} | {{getSelected.categories[1]}} | {{getSelected.categories[2]}}</span>
              <span class="me-4 text-capitalize"> <span class="text-danger fw-bold">Director:</span>  {{getSelected.more.director}}</span>
              <span class="me-4 text-capitalize"> <span class="text-danger fw-bold">Writer:</span> {{getSelected.more.writer}}</span>
          </div>
          <div class="feedback col-12 d-flex justify-content-end align-items-center">
             <div class="d-inline start-group text-center me-auto fas-gold">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star-half-alt"></i>
                 <i class="far fa-star"></i>
                 <span class="my-4 fw-bold">3.5</span>
               </div>
                 <div class="d-inline">
                     <span>{{getTotalLike}}</span>
                    <button class="btn text-success" @click="addLike()"   aria-hidden="true" aria-label="Like"><i :class="[{'far fa-thumbs-up fa-2x':true},{'fas' :getLikeBtn}]"></i></button>   
                </div>
                 <div class="d-inline">
                     <span>{{getTotalDislike}}</span>
                    <button class="btn text-danger"  @click="addDislike()"  aria-hidden="true" aria-label="Dislike"><i :class="[{'far fa-thumbs-down fa-2x':true},{'fas' : getDislikeBtn}]"></i></button>
                 </div>
            </div>
        </div>
      </div>
       <div class="modal-footer row m-0 p-0 pb-2">
        <span class="h4 col-12 m-2">Episodes</span>
            <more-item class="col-12"/>
       </div>
    </div>
  </div>
</div>
</template>

<script>
 import {mapGetters,mapActions} from 'vuex'; 
export default {
  data(){
    return{}
    },
      methods:{
      ...mapActions(['addLike','addDislike','updateLike','updateMyList','addMyList']),
    },
    computed:{
      ...mapGetters(['getSelected','getLikeBtn','getDislikeBtn','getTotalLike','getTotalDislike','getCheckMyList']),
    },
    beforeUpdate(){
      this.updateLike();
      //Start Level Start
      this.updateMyList();
      //Start Level End
     }
}
</script>