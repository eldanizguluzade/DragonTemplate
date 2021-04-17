<template>
    <div class="one-template">
        <img :src="oneContent.imgUrl" :alt="oneContent.name" class="thumbnail">
        <div class="one-content">
             <h5 class="mb-4">{{oneContent.name}}</h5>
             <h6 class="d-none w-100">{{oneContent.description}}</h6>
             <div class="start-group text-center fas-gold">
             <star-rating-5 :imdbRating="oneContent.imdbRating"/>
            </div>
        </div>
    </div>
</template>

<!-- Redirectiv Not Here Because other List will be in Main Components-->

<script>
export default {
    props:['oneContent'],
}
</script>
