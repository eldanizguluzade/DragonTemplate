<template>
  <div id="notitication">
    <div class="dropdown">
      <button type="button" class="btn text-white dropdown-toggle" id="dropdownNotif" data-bs-toggle="dropdown"
        aria-expanded="false" aria-label="notitication">
        <i class="fas fa-bell"><span class="badge"></span></i>
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownNotif">
        <li class="text-center"><span class="h6 mx-auto">Notification</span></li>
        <li>
          <a class="dropdown-item" href="#">
         <div class="card row flex-row">
           <img class="img-fluid col-3" src="https://s1.dmcdn.net/v/PfwlW1SY-SGvZSkZ4/x240" alt="Movie Photo"> 
           <div class="card-body col-7">
             <span class="h6 card-title text-truncate">Card title</span>
             <p class="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           <div class="card-footer d-flex justify-content-between py-1">
              <small class="text-muted ">01:20</small>
              <small class="text-muted">06.05.2021</small>
           </div>
         </div>
          </a>
          </li>
        <li>
          <a class="dropdown-item" href="#">
         <div class="card row flex-row">
           <img class="img-fluid col-3" src="https://cdn.cinematerial.com/p/297x/qwctuwuv/bloodshot-indian-movie-poster-md.jpg" alt="Movie Photo"> 
           <div class="card-body col-7">
             <span class="h6 card-title text-truncate">Bloodshot 2020</span>
             <p class="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           </div>
           <div class="card-footer d-flex justify-content-between py-1">
              <small class="text-muted">01:20</small>
              <small class="text-muted">06.05.2021</small>
           </div>
         </div>
          </a>
          </li>
          <li class="text-center text-primary"><a href="#">More</a></li>
      </ul>
    </div>
  </div>
</template>
