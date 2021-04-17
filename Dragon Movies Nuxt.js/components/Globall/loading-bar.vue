<template>
  <div class="splash-screen" v-if="loading">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        setTimeout(() => {
          this.loading = false
        }, 500);
      },
    },
  }
</script>

<style lang="css" scoped>
  .splash-screen {
    background: #03071E;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    z-index: 99;
  }

  .spinner-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner {
    width: 65px;
    height: 65px;
    margin: 100px auto;
    padding: 10px;
    /* background-color: #10173D; */
    background-image: url("~/assets/img/loading.png");
    background-repeat: no-repeat;
    background-size:auto;
    

    -webkit-animation: sk-scaleout .5s infinite ease-in-out;
    animation: sk-scaleout .5s infinite ease-in-out;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
       /* -webkit-transform: rotate(0deg); */
       -webkit-transform: scale(0);
    }

    100% {
       /* -webkit-transform: rotate(360deg); */
       -webkit-transform: scale(1);
        opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      /* -webkit-transform: rotate(0deg); */
      -webkit-transform: scale(0);
      transform: scale(0);
      /* transform: rotate(0deg); */
    }
    100% {
      /* -webkit-transform: rotate(360deg); */
      -webkit-transform: scale(1);

      transform: scale(1);
      /* transform: rotate(360deg); */
      opacity: 0;
    }
  }
</style>