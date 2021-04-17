<template>
  <div>
    <header :class="{'hd-scroll-effect': isShowffect }">
      <header-nav class="container-fluid" /> 
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
import {mapGetters,mapActions} from 'vuex'; 
export default {
  methods: {
    ...mapActions(['nuxtServerInit','getServerImdb']),
      loadingShow(){
        this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(),500)
       })
      },
    },
    computed:{
      ...mapGetters(['getEffectCheck']),
      isShowffect(){
        let isShow;
        this.$route.path === '/' ? isShow=this.getEffectCheck : isShow=false;
        return isShow;    
      }
    },
    mounted() {
      this.loadingShow();            
    },
   created(){
     this.nuxtServerInit()
    //  .then(result=>{
    //    setTimeout(() => {
    //      this.getServerImdb();
    //   }, 2000);
    //  });
    },
}
</script>