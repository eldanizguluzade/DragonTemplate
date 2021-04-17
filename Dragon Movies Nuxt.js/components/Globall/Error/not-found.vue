<template>
    <div id="not-found">
           <i class="far fa-frown d-block text-muted fa-4x my-4"></i>
           
          <span class="h5 text-muted" v-if="type=='my-item'">Not Found My Items</span>
          <span class="h5 text-muted" v-if="type=='search'">Searched content not found</span>
    </div>
</template>

<script>
export default {
    props:['type']
}
</script>


<style lang="css">
    #not-found{
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        height: auto;
        transform: translate(-50%,-50%);

    }
</style>