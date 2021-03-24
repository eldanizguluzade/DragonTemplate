<template>
  <div id="headerProfile">
    <div class="dropdown">
      <button class="btn text-white" type="button" id="dropdownProfile" data-bs-toggle="dropdown"
        aria-expanded="false">
        <img src="@/assets/img/profile/merlin.png" alt="Profile Photo">
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownProfile">
        <li><a class="dropdown-item" href="#">Account<i class="fas fa-user-cog ms-3"></i></a></li>
        <li><a class="dropdown-item" href="#">Setting<i class="fas fa-cog ms-4"></i></a></li>
        <li><a class="dropdown-item text-danger" href="#">Sign out<i class="fas fa-sign-out-alt ms-3"></i></a></li>
      </ul>
    </div>
  </div>
</template>