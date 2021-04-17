<template>
<div class="d-inline">
    <i class="fas fa-star" v-if="ratingConvert >= 1"></i>
    <i class="far fa-star" v-if="ratingConvert <= 0"></i>

    <i class="fas fa-star" v-if="ratingConvert >= 2 || ratingConvert > 1.5"></i>
    <i class="fas fa-star-half-alt"  v-if="ratingConvert <= 0.5 && ratingConvert > 0"></i>
    <i class="far fa-star" v-if="ratingConvert <= 1"></i>

    <i class="fas fa-star" v-if="ratingConvert >= 3 || ratingConvert > 2.5"></i>
    <i class="fas fa-star-half-alt"  v-if="ratingConvert <= 1.5 && ratingConvert > 1"></i>
    <i class="fas fa-star-half-alt"  v-if="ratingConvert <= 2.5 && ratingConvert > 2"></i>
    <i class="far fa-star" v-if="ratingConvert <= 2"></i>

    <i class="fas fa-star" v-if="ratingConvert >= 4 || ratingConvert > 3.5"></i>
    <i class="fas fa-star-half-alt"  v-if="ratingConvert <= 3.5 && ratingConvert > 3"></i>
    <i class="far fa-star" v-if="ratingConvert <= 3"></i>

    <i class="fas fa-star" v-if="ratingConvert == 5 || ratingConvert > 4.5"></i>
    <i class="fas fa-star-half-alt"  v-if="ratingConvert <= 4.5 && ratingConvert > 4"></i>
    <i class="far fa-star" v-if="ratingConvert <= 4"></i>

    <p class="fw-bold m-0">{{ratingConvert}}</p>
</div>                    
</template>

<script>
export default {
    props:['imdbRating'],
     computed:{
        ratingConvert(){
            let calc=(this.imdbRating * 5) / 10;
            return calc.toFixed(1);
        }
    }
}
</script>