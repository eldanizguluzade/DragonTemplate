<template>
    <div id="res-menu" class="d-block d-md-none">  
      <ul class="navbar-nav me-auto text-center" @click="$store.commit('setResMenu',true)">
        <li class="nav-item mx-1 mb-4 row justify-content-between align-items-center">
         <img src="@/assets/img/profile/merlin.png" class="img-fluid col-5" alt="Profile Photo">
        <ul class="list-group list-group-veritical text-left col-7">
         <li class="nav-link"><nuxt-link tag="a" to="/">Account<i class="fas fa-user-cog ms-2"></i></nuxt-link></li>
         <li class="nav-link"><nuxt-link tag="a" to="/">Setting<i class="fas fa-cog ms-3"></i></nuxt-link></li>
       </ul>
          <!-- <nuxt-link tag="a" class="nav-link" exact-active-class="active"  to="/">Account</nuxt-link> -->
        </li>
        <li class="nav-item mx-1">
          <nuxt-link tag="a" class="nav-link" exact-active-class="active"  aria-current="page" to="/">Home</nuxt-link>
        </li>
        <li class="nav-item mx-1">
            <nuxt-link tag="a" class="nav-link" exact-active-class="active" to="/movies">Movies</nuxt-link>
        </li>
        <li class="nav-item mx-1">
          <nuxt-link tag="a" class="nav-link" exact-active-class="active" to="/series">Series</nuxt-link>
        </li>
        <li class="nav-item mx-1">
         <nuxt-link tag="a" class="nav-link" exact-active-class="active" to="/mylist">My List</nuxt-link>
        </li>
        <li class="nav-item mx-1 mt-4">
            <a class="btn d-block button-danger " href="#">Sign out<i class="fas fa-sign-out-alt ms-3"></i></a>
        </li>
      <li class="nav-item dropdown mt-3 mx-1">
          <a data-bs-toggle="dropdown"><i class="fas fa-bell fa-2x mx-2"><span class="badge"></span></i></a>
         <ul class="dropdown-menu text-dark text-start pt-0 my-2" aria-labelledby="dropdownNotif">
        <li>
          <a class="dropdown-item" href="#">
         <div class="card row flex-row">
           <div class="card-body col-7">
             <span class="h6 card-title text-truncate">Bloodshot 2020</span>
             <p class="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           <div class="card-footer d-flex justify-content-between py-1">
              <small class="text-muted ">01:20</small>
              <small class="text-muted">06.05.2021</small>
           </div>
         </div>
          </a>
          </li>
          <li class="text-center text-primary"><nuxt-link tag="a" to="/">More...</nuxt-link></li>
      </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {}
</script>