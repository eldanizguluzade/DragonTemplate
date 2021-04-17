<template>
  <div id="notitication">
    <div class="dropdown">
      <button id="dropdownNotif" class="btn text-white dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false" aria-label="notitication">
        <i class="fas fa-bell"><span class="badge" v-if="getCheckBadge"></span></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownNotif">
       <li class="text-center"><span class="h6">Notifications</span></li>
        <li v-for="(item,index) in getWebNotification" :key="item.id" @click="updateNotifNewA({choose:'web',index:index,isNew:false})">
       <nuxt-link :to="getPaths.watch+'/'+item.fullPath" custom v-slot="{ navigate }">
        <a class="dropdown-item" @click="navigate">
         <div class="card row flex-row">
           <img class="col-3" :src="item.imgUrl" :alt="item.title"> 
           <span class="new-badge" v-show="item.isNew">New</span>
           <div class="card-body col-7">
             <span class="h6 card-title text-truncate">{{item.title}}</span>
             <p class="card-text text-truncate">{{item.desc}}</p>
           </div>
           <div class="card-footer d-flex justify-content-between py-1">
              <small class="text-muted">{{item.date.time}}</small>
              <small class="text-muted">{{item.date.dmy}}</small>
           </div>
         </div>
         </a>
          </nuxt-link>
          </li>
          <li class="text-center text-primary"><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate">More</a></nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:mapGetters(['getWebNotification','getCheckBadge','getPaths']),
  methods:mapActions(['updateNotifNewA'])
}
</script>
