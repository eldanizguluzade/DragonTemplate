<template>
 <nav class="navbar navbar-expand-md navbar-dark row">
  <div class="container-fluid d-flex">
   <h1 class="d-none">Dragon</h1>
    <nuxt-link tag="a" class="navbar-brand" to="/"><img src="@/assets/img/logo.png" class="mx-4 img-fluid" alt="Dragon Logo" @click="inputClear()"/></nuxt-link>
    <form id="search-form" class="d-flex me-auto" onsubmit="return false;">
        <div class="input-group">
           <input class="form-control" v-model="searchWords" type="search" placeholder="Search Movies" aria-label="Search">
           <span class="input-group-text"><i class="fas fa-search text-secondary"></i></span>
       </div>
    </form>
    <button class="navbar-toggler p-0" @click="$store.commit('setResToogleBtn')" :class="toggleClass()" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-ellipsis-h"></i>
    </button>
    <div id="web-menu" class="navbar-collapse d-none d-md-flex mx-4" @click="inputClear()">
      <ul class="navbar-nav">
        <li class="nav-item mx-1">
          <nuxt-link tag="a" class="nav-link" exact-active-class="active" aria-current="page" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item mx-1">
            <nuxt-link tag="a" class="nav-link" active-class="active" to="/movies">Movies</nuxt-link>
        </li>
        <li class="nav-item mx-1">
          <nuxt-link tag="a" class="nav-link" active-class="active" to="/series">Series</nuxt-link>
        </li>
        <li class="nav-item mx-1">
         <nuxt-link tag="a" class="nav-link" active-class="active" to="/mylist">My List</nuxt-link>
        </li>
      </ul>
    </div> 
    <div class="d-none d-md-flex">
      <notification />
      <header-profile  />
     </div>
  </div> 
  <div id="res-menu-group">
   <res-menu v-if="isResMenu" />
   <div class="overflow-screen" v-if="isResMenu" @click="$store.commit('setResToogleBtn',false);"></div>
   </div>
</nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      searchWords:null
    }
  },
  methods:{
    toggleClass(){
      return this.getResToogleBtn === true ? "toggleActive":"toggleDeactive";
    },
    inputClear(){
       this.searchWords='';
    },
  },
  computed:{
      ...mapGetters(['getResToogleBtn','getSearchPath','getResMenu']),
      isResMenu(){
        let isActive;
        this.getResToogleBtn != this.getResMenu ? isActive=true:isActive=false;
        if(this.getResMenu){
            this.$store.commit('setResMenu',false);
            this.$store.commit('setResToogleBtn',false);
        }    
        this.toggleClass();
        this.inputClear();
        return isActive;
      }
  },
  watch:{
   searchWords(){
      if(this.searchWords.length != 0){
         this.$router.push(this.getSearchPath+'/'+this.searchWords);
      }
      else{
          this.$router.push('/');
      }
    },
  },
}
</script>
