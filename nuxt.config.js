export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dragon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.The passage is attributed to an unknown  type.' },
      { name:'msapplication-TileColor', content:'#ffffff' },
      { name:'msapplication-TileImage', content:'/favicons/ms-icon-144x144.png' },
      { name:'theme-color', content:'#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'apple-touch-icon', sizes:'57x57', href:'/favicons/apple-icon-57x57.png' },
      { rel:'apple-touch-icon', sizes:'76x76', href:'/favicons/apple-icon-76x76.png' },
      { rel:'apple-touch-icon', sizes:'72x72', href:'/favicons/apple-icon-72x72.png'},
      { rel:'apple-touch-icon', sizes:'152x152', href:'/favicons/apple-icon-152x152.png' },
      { rel:'apple-touch-icon', sizes:'144x144', href:'/favicons/apple-icon-144x144.png' },
      { rel:'apple-touch-icon', sizes:'114x114', href:'/favicons/apple-icon-114x114.png' },
      { rel:'apple-touch-icon', sizes:'120x120', href:'/favicons/apple-icon-120x120.png' },
      { rel:'apple-touch-icon', sizes:'180x180', href:'/favicons/apple-icon-180x180.png' },
      { rel:'icon', type:'image/png', sizes:'192x192',  href:'/favicons/android-icon-192x192.png' },
      { rel:'icon', type:'image/png', sizes:'32x32', href:'/favicons/favicon-32x32.png' },
      { rel:'icon', type:'image/png', sizes:'96x96', href:'/favicons/favicon-96x96.png' },
      { rel:'icon', type:'image/png', sizes:'16x16', href:'/favicons/favicon-16x16.png' },
      { rel:'manifest', href:'/favicons/manifest.json'},

      { rel:'stylesheet', href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'},
      { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'},
    ],
    script:[
      {src:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src:"~/assets/css/main.css"},
    {src:"~/assets/css/responsive.css"}
  ],

  //Loading Bar
  loading: '~/components/Globall/loading-bar.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/components'},
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
 
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
