<template>
    <div class="one-template">
        <img :src="oneContent.imgUrl" :alt="oneContent.imgAlt" class="img-fluid img-365">
        <div class="one-content">
             <h5 class="mb-4">{{oneContent.name}}</h5>
             <h6 class="d-none w-100">{{oneContent.description}}</h6>
             <div class="start-group text-center fas-gold">
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star"></i>
                 <i class="fas fa-star-half-alt"></i>
                 <i class="far fa-star"></i>
                 <p class="fw-bold">3.5</p>
             </div>                    
        </div>
    </div>
</template>

<!-- Redirectiv Not Here Because other List will be in Main Components-->

<script>
export default {
    props:['oneContent']
}
</script>
