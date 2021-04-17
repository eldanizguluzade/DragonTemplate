<template>
  <div id="headerProfile">
    <div class="dropdown">
      <button class="btn text-white" type="button" id="dropdownProfile" data-bs-toggle="dropdown"
        aria-expanded="false">
        <img :src="getUserPhoto" alt="Profile Photo">
      </button>
      <div :class="['dropdown-menu', {'disabled-o':!getUser.userActive}]" aria-labelledby="dropdownProfile" >
      <ul class="nav px-1 py-2 justify-content-center">
        <li><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate" class="dropdown-item">Account<i class="fas fa-user-cog ms-3"></i></a></nuxt-link></li>
        <li><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate" class="dropdown-item">Setting<i class="fas fa-cog ms-4"></i></a></nuxt-link></li>
        <li><nuxt-link to="/" custom v-slot="{ navigate }"><a @click="navigate" class="dropdown-item color-red">Sign out<i class="fas fa-sign-out-alt ms-3"></i></a></nuxt-link></li>
      </ul>
     <!--For Block Disabled  Start-->
       <div class="block-disabled-o" aria-disabled="true" v-if="!getUser.userActive"></div>
      <!--For Block Disabled  End-->     
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(['getUser','getUserPhoto'])
}
</script>