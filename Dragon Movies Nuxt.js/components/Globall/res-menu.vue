<template>
    <div id="res-menu" class="d-block d-md-none">  
      <ul class="navbar-nav me-auto text-center" @click="setResMenu(true)">
        <li :class="['nav-item mx-1 mb-4 row justify-content-between align-items-center',{'disabled':!getUser.userActive}]">
         <img :src="getUserPhoto" class="img-fluid col-5" alt="Profile Photo">
        <ul class="list-group list-group-veritical text-left col-7">
         <li class="nav-link"><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate">Account<i class="fas fa-user-cog ms-2"></i></a></nuxt-link></li>
         <li class="nav-link"><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate">Setting<i class="fas fa-cog ms-3"></i></a></nuxt-link></li>
       </ul>
        <div class="mx-1 mt-3">
            <a class="btn d-block button-danger" href="#">Sign out<i class="fas fa-sign-out-alt ms-3"></i></a>
        </div>
       <!--For Block Disabled  Start-->
           <div class="block-disabled" aria-disabled="true" v-if="!getUser.userActive"></div>
        <!--For Block Disabled  End-->   
        </li>

        <li class="nav-item mx-1">
          <nuxt-link aria-current="page" :to="getPaths.home" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">Home</a></nuxt-link>
        </li>
        <li class="nav-item mx-1">
            <nuxt-link :to="getPaths.movies" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">Movies</a></nuxt-link>
        </li>
        <li class="nav-item mx-1">
          <nuxt-link :to="getPaths.series" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">Series</a></nuxt-link>
        </li>
        <li class="nav-item mx-1 mb-3">
         <nuxt-link :to="getPaths.mylist" custom v-slot="{ navigate }"><a class="nav-link" @click="navigate">My List</a></nuxt-link>
        </li>
 
      <li class="nav-item dropdown mt-3 mx-1">
          <a data-bs-toggle="dropdown"><i class="fas fa-bell fa-2x mx-2"><span class="badge" v-if="getCheckBadge"></span></i></a>
         <ul class="dropdown-menu text-dark text-start pt-0 my-2" aria-labelledby="dropdownNotif">
        <li v-for="(item,index) in  getResNotification" :key="item.id" @click="updateNotifNewA({choose:'res',index:index,isNew:false})">
       <nuxt-link :to="getPaths.watch+'/'+item.fullPath" custom v-slot="{ navigate }">
         <a class="dropdown-item" @click="navigate">
         <div class="card row flex-row">
            <span class="new-badge" v-show="item.isNew">New</span>
           <div class="card-body col-7">
             <span class="h6 card-title text-truncate">{{item.title}}</span>
             <p class="card-text text-truncate">{{item.desc}}</p>
           </div>
           <div class="card-footer d-flex justify-content-between py-1">
              <small class="text-muted ">{{item.date.time}}</small>
              <small class="text-muted">{{item.date.dmy}}</small>
           </div>
         </div>
         </a>
         </nuxt-link>
          </li>
          <li class="text-center text-primary"><nuxt-link to="/" custom v-slot="{ navigate }"> <a @click="navigate">More...</a></nuxt-link></li>
      </ul>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  computed:mapGetters(['getPaths','getUser','getUserPhoto','getResNotification','getCheckBadge']),
  methods:{
   ...mapMutations(['setResMenu']),
   ...mapActions(['updateNotifNewA'])
  }
}
</script>