<template>
  <div id="home">
    <home-carousel />
    <home-categories />
  </div>
</template>

<script>
import {mapActions} from 'vuex'; 
export default {
   data(){
    return{
       scrollPosition: null,
    }
  },
  methods: {
    ...mapActions(['setEffectCheckA']),
     updateScroll() {
        this.scrollPosition = window.scrollY;
        this.headerEffect();
     },
     headerEffect(){
        if(this.scrollPosition < 100)
            this.setEffectCheckA(true);
         else
            this.setEffectCheckA(false);   
     },
   },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
      window.removeEventListener('scroll', this.updateScroll);
    },
}
</script>
