<template>
 <nav class="navbar navbar-expand-md navbar-dark row">
  <div class="container-fluid d-flex">
   <h1 class="d-none">Dragon</h1>
    <nuxt-link :to="getPaths.home" custom v-slot="{ navigate }"><a tag="a" class="navbar-brand" @click="navigate"><img src="@/assets/img/logo.png" class="mx-4 img-fluid" alt="Dragon Logo" @click="inputClear()"/></a></nuxt-link>
    <form id="search-form" class="d-flex me-auto" onsubmit="return false;">
        <div class="input-group">
           <input class="form-control" v-model="searchWords" @keypress="isLetterOrNumber($event)" type="search" placeholder="Search Movies" aria-label="Search">
           <span class="input-group-text"><i class="fas fa-search text-secondary"></i></span>
       </div>
    </form>
    <button class="navbar-toggler p-0" @click="setResToogleBtn()" :class="toggleClass()" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-ellipsis-h"></i>
    </button>
    <div id="web-menu" class="navbar-collapse d-none d-md-flex mx-4" @click="inputClear()">
      <ul class="navbar-nav">
        <li class="nav-item mx-1">
          <nuxt-link aria-current="page" :to="getPaths.home" custom v-slot="{ navigate }"><a tag="a" class="nav-link" @click="navigate">Home</a></nuxt-link>
        </li>
        <li class="nav-item mx-1">
            <nuxt-link :to="getPaths.movies" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">Movies</a></nuxt-link>
        </li>
        <li class="nav-item mx-1">
           <nuxt-link :to="getPaths.series" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">Series</a></nuxt-link>
        </li>
        <li class="nav-item mx-1">
          <nuxt-link :to="getPaths.mylist" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">My List</a></nuxt-link>
        </li>
      </ul>
    </div> 
    <div class="d-none d-md-flex">
      <notification />
      <header-profile  />
     </div>
  </div> 
  <div id="res-menu-group">
    <transition enter-active-class="animate__animated animate__slideInRight"  leave-active-class="animate__animated  animate__slideOutRight">
       <res-menu v-if="isResMenu"/>
    </transition>
      <div class="overflow-screen" v-if="isResMenu" @click="setResToogleBtn(false);"></div>
   </div>
</nav>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
  data(){
    return{
      searchWords:null
    }
  },
  methods:{
    ...mapMutations(['setResToogleBtn','setResMenu']),
    toggleClass(){
      return this.getResToogleBtn === true ? "toggleActive":"toggleDeactive";
    },
    inputClear(){
       this.searchWords='';
    },
    isLetterOrNumber(e) {
       let char = String.fromCharCode(e.keyCode);
       if (/^[A-Za-z0-9 _]+$/.test(char) && !(e.target.value.length === 0 && e.which === 32)) return true;
       else e.preventDefault();
    }
  },
  computed:{
      ...mapGetters(['getResToogleBtn','getPaths','getResMenu']),
      isResMenu(){
        let isActive;
        this.getResToogleBtn != this.getResMenu ? isActive=true:isActive=false;
        if(this.getResMenu){
            this.setResMenu(false);
            this.setResToogleBtn(false);
        }    
        this.toggleClass();
        this.inputClear();
        return isActive;
      }
  },
  watch:{
   searchWords(){
      if(this.searchWords.length != 0){
      this.$router.push(this.getPaths.search+'/'+this.searchWords);
      }
      else{
          this.$router.push(this.getPaths.home);
      }
    },
  },
}
</script>
