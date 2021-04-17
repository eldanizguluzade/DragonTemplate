<template>
  <div id="watch">
     <h3>Test Working Player</h3> 

     <!--It must be activated when it is used.-->
     <!-- <div>
        <iframe :src="getSelected.fullUrl+'?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0'" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
    </div>
     -->

     <!--Just For Demo Example Godzilla Vimeo Video-->
     <div>
        <iframe src="https://player.vimeo.com/video/504462813?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
    </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'; 
  export default {
      computed:mapGetters(['getSelected'])
      
  }
</script>


<style lang="css">
  #watch {
    background-color: black;
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>