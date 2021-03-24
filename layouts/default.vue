<template>
  <div>
    <header :class="headerEffect">
      <header-nav class="container-fluid"/> 
    </header>
    <main>
      <Nuxt />
    </main>
    <footer>

      <!--Global One Modal Start-->
       <modal-template-m/>   
        <modal-template-s/>
        <!--Global One Modal End-->
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
       scrollPosition: null
    }
  },
  methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY;
      },
    },
  computed:{
      headerEffect(){
        if(this.$route.path === '/' && this.scrollPosition < 100){
           return 'hd-scroll-effect';
        }
     }
  },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
    },
    destroy() {
      window.removeEventListener('scroll', this.updateScroll)
    }
}
</script>